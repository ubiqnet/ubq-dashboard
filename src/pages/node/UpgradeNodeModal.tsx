import { Dialog, DialogContent, DialogTitle, CircularProgress, Typography, Button, Grid } from '@material-ui/core'
import { useState, useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CheckCircle, ArrowForwardIos, ReportProblem, Cancel, Close } from '@material-ui/icons'
import { Context as BeeContext } from '../../providers/Bee'
import { Context as SettingsContext } from '../../providers/Settings'
import { useHistory } from 'react-router-dom'
import Pledge from '../../components/Pledge'

interface Props {
  open: any
  setOpen: any
}

interface ConfigurationItem {
  name: string
  checked: boolean
  value: string | number
}

interface UpgradeStatus {
  state: string // success fail
  text: string
}

const useStyles = makeStyles({
  dialogContent: {
    position: 'relative',
    padding: '40px 20px 30px 20px !important',
    width: '450px',
    textAlign: 'center',
  },
  close: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    padding: '5px',
    cursor: 'pointer',
    fontSize: 0,
  },
  loadingWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
  },
  nodeSelection: {
    textAlign: 'left',
  },
  nodeSelectionItem: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    padding: '15px 20px',
    border: '1px solid #333',
    borderRadius: '5px',
  },
  nodeDesc: {
    flex: 1,
  },
  configList: {
    padding: '20px 40px',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  configItem: {
    display: 'flex',
    alignItems: 'center',
    height: '36px',
  },
})

enum NodeEnum {
  'verify' = 1,
  'stable' = 2,
  'normal' = 3,
}

const eth = Math.pow(10, 18)

export default function UpgradeNodeModal({ open, setOpen }: Props) {
  const { hniInfo, setHniInfo, sourceHardInfo } = useContext(BeeContext)
  const { api } = useContext(SettingsContext)
  const classes = useStyles()
  const [checkLoading, setCheckLoading] = useState(false)
  const [nodeType, setNodeType] = useState('normal')
  const [upgradeStep, setUpgradeStep] = useState(1)
  const [upgradeStatus, setUpgradeStatus] = useState<UpgradeStatus | null>(null)
  const [checkStatus, setCheckStatus] = useState('')
  const [requiredUBQ, setRequiredUBQ] = useState(0)
  const [configuration, setConfiguration] = useState<ConfigurationItem[]>([])
  const [openPledge, setOpenPledge] = useState(false)
  const history = useHistory()

  const onUpgradeNode = (_nodeType: number) => {
    if (!sourceHardInfo || !hniInfo) return
    setUpgradeStep(2)
    // stability node upgrade validate
    if (_nodeType === 3 && !hniInfo.pledgeBalance) {
      setCheckStatus('notPledged')
      return
    }
    // verify node upgrade validate
    if (_nodeType === 1) {
      const holdUBQ = Number(hniInfo.pledgeBalance) / eth
      if (holdUBQ < 50) {
        setCheckStatus('notEnough')
        const ubq = Math.ceil((50 - holdUBQ) * 1000) / 1000
        setRequiredUBQ(ubq)
        return
      }
      const HighHW = sourceHardInfo.HighHW
      const configList = [
        {
          name: 'cpu',
          checked: sourceHardInfo.LogicCores >= HighHW.LogicCores,
          value: HighHW.LogicCores + ' core',
        },
        {
          name: 'bandWidth',
          checked: sourceHardInfo.DownloadSpeed >= HighHW.DownloadSpeed,
          value: Math.ceil(HighHW.DownloadSpeed) + ' M',
        },
        {
          name: 'ram',
          checked: sourceHardInfo.TotalMemory >= HighHW.TotalMemory,
          value: Math.ceil(HighHW.TotalMemory / 1024 / 1024 / 1024) + ' G',
        },
        {
          name: 'storage',
          checked: sourceHardInfo.FreeDisk >= HighHW.FreeDisk,
          value: Math.ceil(HighHW.FreeDisk / 1024 / 1024 / 1024) + ' G',
        },
      ]

      if (configList.filter(e => e.checked).length !== configList.length) {
        setConfiguration(configList)

        return
      }
    }
    setCheckLoading(true)
    api
      .upgradeNode(_nodeType)
      .then((res: any) => {
        setUpgradeStatus({
          state: 'success',
          text: res.result,
        })
        setHniInfo({ ...hniInfo, nodeType: _nodeType })
      })
      .catch((err: string) => {
        setUpgradeStatus({
          state: 'fail',
          text: err,
        })
      })
      .finally(() => {
        setCheckLoading(false)
      })
  }

  const toAddNft = () => {
    history.push('/mint-nft')
  }

  const toPledge = () => {
    setOpen(false)
    setOpenPledge(true)
  }

  useEffect(() => {
    if (hniInfo) {
      setNodeType(NodeEnum[hniInfo?.nodeType])
    }
  }, [hniInfo])

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setConfiguration([])
        setUpgradeStep(1)
        setCheckStatus('')
        setUpgradeStatus(null)
      }, 100)
    }
    if (open && nodeType === 'stable') {
      onUpgradeNode(NodeEnum['verify'])
    }
  }, [open])

  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
        <DialogContent className={classes.dialogContent}>
          <div className={classes.close} onClick={() => setOpen(false)}>
            <Close />
          </div>
          {/* normal node upgrade selection */}
          {upgradeStep === 1 && nodeType === 'normal' && (
            <div className={classes.nodeSelection}>
              <div
                className={classes.nodeSelectionItem}
                style={{ marginBottom: 20 }}
                onClick={() => onUpgradeNode(NodeEnum['stable'])}
              >
                <div className={classes.nodeDesc}>
                  <Typography component="h2" variant="h6">
                    Stable node
                  </Typography>
                  <div>Upgrade stable node configuration user The number of staked tokens must be at least 10</div>
                </div>
                <ArrowForwardIos />
              </div>
              <div className={classes.nodeSelectionItem} onClick={() => onUpgradeNode(NodeEnum['verify'])}>
                <div className={classes.nodeDesc}>
                  <Typography component="h2" variant="h6">
                    Verify node
                  </Typography>
                  <div>Do you want to become a validator directly?</div>
                </div>
                <ArrowForwardIos />
              </div>
            </div>
          )}
          {/* check loading */}
          {checkLoading && (
            <div className={classes.loadingWrapper}>
              <CircularProgress style={{ marginBottom: 20 }} />
              <Typography component="h3" variant="h6">
                Check computing power……
              </Typography>
            </div>
          )}
          {/* upgrade success */}
          {upgradeStatus?.state === 'success' && (
            <div>
              <CheckCircle color="primary" style={{ fontSize: 80 }} />
              <Typography component="h3" variant="h6">
                Upgrade Success
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: 20 }} onClick={() => setOpen(false)}>
                OK
              </Button>
            </div>
          )}
          {/* upgrade fail */}
          {upgradeStatus?.state === 'fail' && (
            <div>
              <ReportProblem color="primary" style={{ fontSize: 80 }} />
              <Typography component="h3" variant="h6">
                {upgradeStatus.text}
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: 20 }} onClick={() => setOpen(false)}>
                OK
              </Button>
            </div>
          )}
          {/* not pledged */}
          {checkStatus === 'notPledged' && (
            <div>
              <ReportProblem color="primary" style={{ fontSize: 80 }} />
              <Typography component="h3" variant="h6">
                You have not pledged
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: 20 }} onClick={toPledge}>
                Go to pledge
              </Button>
            </div>
          )}
          {/* Configuration Satisfied but not enough in your wallet */}
          {checkStatus === 'notEnough' && (
            <div>
              <ReportProblem color="primary" style={{ fontSize: 80 }} />
              <Typography component="h3" variant="h6">
                Your current configuration can be upgraded to a validator
              </Typography>
              <Typography component="h3" variant="h6" style={{ marginTop: 20, color: '#63d645' }}>
                Stake 50 tokens Pledge is still required {requiredUBQ} UBQ
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: 20 }} onClick={toPledge}>
                Go to pledge
              </Button>
            </div>
          )}
          {/* configuration is not satisfied */}
          {configuration.length > 0 && (
            <div>
              <ReportProblem color="primary" style={{ fontSize: 80 }} />
              <Typography color="primary" component="h3" variant="h6" style={{ lineHeight: '24px' }}>
                The current device hardware configuration does not meet the conditions for upgrading
              </Typography>
              <div className={classes.configList}>
                {configuration &&
                  configuration.map((item, index) => (
                    <div key={index} className={classes.configItem}>
                      <div style={{ flex: '0 0 120px' }}>{item.name}</div>
                      <div style={{ flex: 1 }}>{item.value}</div>
                      <div>
                        {item.checked ? <CheckCircle color="primary" /> : <Cancel style={{ color: '#c62a29' }} />}
                      </div>
                    </div>
                  ))}
              </div>
              <div>
                <Button variant="outlined" color="primary" style={{ marginRight: 20 }} onClick={() => setOpen(false)}>
                  quit
                </Button>
                <Button variant="outlined" color="primary" onClick={toAddNft}>
                  Add NFT
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Pledge open={openPledge} setOpen={setOpenPledge}></Pledge>
    </div>
  )
}
