import { Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Computer } from '@material-ui/icons'
import UpgradeNodeModal from './UpgradeNodeModal'
import { useState, useContext, useEffect } from 'react'
import { Context as BeeContext } from '../../providers/Bee'
import TroubleshootConnectionCardHNI from '../../components/TroubleshootConnectionCardHNI'

const useStyles = makeStyles({
  nodePage: {
    width: '700px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: '20px 0',
  },
  version: {
    borderRadius: '5px',
    backgroundColor: '#fff',
    padding: '10px 20px',
    marginTop: '20px',
  },
  configWrapper: {
    borderRadius: '5px',
    backgroundColor: '#fff',
    padding: '20px',
    marginTop: '20px',
    textAlign: 'center',
  },
  configMain: {
    width: '380px',
    margin: '0 auto',
  },
  tips: {
    fontSize: '18px',
    color: '#aaa',
    fontWeight: 'bold',
    borderBottom: '1px solid #aaa',
    paddingBottom: '12px',
    marginTop: '8px',
  },
  configForm: {
    marginTop: '15px',
  },
  configItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '18px',
    padding: '5px 0',
  },
})

enum NodeEnum {
  'verify' = 1,
  'stable' = 2,
  'normal' = 3,
}

export default function Node() {
  const classes = useStyles()
  const { hniInfo, hardInfo } = useContext(BeeContext)
  const [upgradeOpen, setUpgradeOpen] = useState(false)

  if (hniInfo?.status !== 1) return <TroubleshootConnectionCardHNI />

  return (
    <div className={classes.nodePage}>
      <div className={classes.header}>
        <Typography component="h3" variant="h6">
          The current node identity is a&nbsp;
        </Typography>
        <Typography component="h2" variant="h6" color="primary">
          {hniInfo && NodeEnum[hniInfo.nodeType]} node
        </Typography>
        {hniInfo?.nodeType !== 1 && (
          <Button
            variant="contained"
            color="primary"
            style={{ borderRadius: 20, marginLeft: 20 }}
            onClick={() => setUpgradeOpen(true)}
          >
            go to upgrade
          </Button>
        )}
      </div>
      <div className={classes.configWrapper}>
        <div className={classes.configMain}>
          <Computer fontSize="large" />
          <div className={classes.tips}>Current device node configuration</div>
          <div className={classes.configForm}>
            <div className={classes.configItem}>
              <div>CPU</div>
              <div>{hardInfo?.cpu}core</div>
            </div>
            <div className={classes.configItem}>
              <div>bandwith</div>
              <div>{hardInfo?.bandWidth}M</div>
            </div>
            <div className={classes.configItem}>
              <div>ram</div>
              <div>{hardInfo?.ram}G</div>
            </div>
            <div className={classes.configItem}>
              <div>storage</div>
              <div>{hardInfo?.storage}G</div>
            </div>
            <div className={classes.configItem}>
              <div>ip</div>
              <div>{hardInfo?.ip}</div>
            </div>
            <div className={classes.configItem}>
              <div>GPU</div>
              <div>{hardInfo?.gpu}G</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.version}>version number {hniInfo?.version}</div>

      <UpgradeNodeModal open={upgradeOpen} setOpen={setUpgradeOpen} />
    </div>
  )
}
