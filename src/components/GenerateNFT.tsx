import { ReactElement, useState, useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography, Checkbox } from '@material-ui/core'
import UnitStep from './UnitStep'
import { Context as SettingsContext } from '../providers/Settings'
import { Context as BeeContext } from '../providers/Bee'
import { useHistory } from 'react-router-dom'
import Modal from './Modal'
import { NODE_FACTORY, NFT, TRADE } from '../utils/web3/abi'
import MyWeb3 from '../utils/web3'

const useStyles = makeStyles({
  generateNft: {
    width: '450px',
  },
  generateForm: {
    marginTop: '20px',
    '& > div': {
      marginBottom: '10px',
    },
  },
  formDoubleItem: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #d7d7d7',
    borderRadius: '4px',
  },
  formItem: {
    display: 'flex',
    alignItems: 'center',
    height: '40px',
    paddingLeft: '20px',
  },
  label: {
    flexShrink: 0,
    width: '100px',
  },
  operate: {
    flex: 1,
  },
  value: {
    flexShrink: 0,
    width: '100px',
  },
  checkBox: {
    flexShrink: 0,
    width: '60px',
  },
  confirm: {
    marginTop: '30px',
    textAlign: 'center',
  },
})

interface NFTSetpSizeInterface {
  cpu: number
  ram: number
  storage: number
  gpu: number
}

// interface NFTTokenIds {
//   bandwidthTokenIds: string[]
//   cpuTokenIds: string[]
//   gpuTokenIds: string[]
//   ipTokenIds: string[]
//   memTokenIds: string[]
//   storageTokenIds: string[]
// }

const NFTSetpSize: NFTSetpSizeInterface = {
  cpu: 2,
  ram: 4,
  storage: 10,
  gpu: 2,
}

export default function GenerateNFT(): ReactElement {
  const classes = useStyles()
  const { api } = useContext(SettingsContext)
  const { hardInfo, hniInfo } = useContext(BeeContext)
  const history = useHistory()

  const [cpu, setCpu] = useState(0)
  const [ram, setRam] = useState(0)
  const [storage, setStorage] = useState(0)
  const [gpu, setGpu] = useState(0)
  const [ip, setIp] = useState('')
  const [NftNum, setNftNum] = useState({
    ip: -1,
    bandWidth: -1,
    cpu: 0,
    ram: 0,
    storage: 0,
    gpu: 0,
  })
  const [nftMin, setNftMin] = useState({
    cpu: 0,
    ram: 0,
    storage: 0,
    gpu: 0,
  })
  const [bandWidth, setBandWidth] = useState(0)
  const [checkList, setCheckList] = useState<string[]>([])
  const [processing, setProcessing] = useState(false)

  const onChangeConfig = (type: string, name: string, value: any, setFunc: any) => {
    if (name === 'cpu' || name === 'ram') {
      // @ts-ignore
      const maxCpu = hardInfo['cpu']
      // @ts-ignore
      const maxRam = hardInfo['ram']
      const minCpu = nftMin['cpu']
      const minRam = nftMin['ram']
      const stepSizeCpu = NFTSetpSize['cpu']
      const stepSizeRam = NFTSetpSize['ram']
      const newNumCpu = type === 'up' ? cpu + stepSizeCpu : cpu - stepSizeCpu
      const newNumRam = type === 'up' ? ram + stepSizeRam : ram - stepSizeRam
      if (newNumCpu > maxCpu || newNumRam > maxRam) return
      if (newNumCpu < minCpu || newNumRam < minRam) {
        setCpu(minCpu)
        setRam(minRam)
        return
      }
      setCpu(newNumCpu)
      setRam(newNumRam)
    } else {
      // @ts-ignore
      const max = hardInfo[name]
      // @ts-ignore
      const min = nftMin[name]
      // @ts-ignore
      const stepSize = NFTSetpSize[name]
      let newNum = type === 'up' ? value + stepSize : value - stepSize
      if (newNum < 0) newNum = 0
      if (newNum > max) return
      if (newNum < min) return setFunc(min)
      setFunc(newNum)
    }
  }

  const onChangeConfigCheck = (value: string) => {
    const isCheck = checkList.includes(value)

    if (isCheck) {
      setCheckList(checkList.filter(e => e !== value))
    } else {
      setCheckList([...checkList, value])
    }
  }

  const onCheckAll = () => {
    /* eslint-disable */
    if (checkList.length) {
      setCheckList([])
    } else {
      bandWidth ? setCheckList(['i+b', 'c+r', 'storage', 'gpu']) : setCheckList(['c+r', 'storage', 'gpu'])
    }
  }

  const generate = async () => {
    if (!checkList.length) return
    setProcessing(true)
    try {
      let flag = 0
      if (checkList.includes('i+b')) {
        if (!NftNum.ip) {
          flag++
          await api.mintNft({ nftType: 5, info: `ip ${ip}` })
        }
        if (!NftNum.bandWidth) {
          flag++
          await api.mintNft({ nftType: 6, info: `bandWidth ${bandWidth} M` })
        }
      }
      if (checkList.includes('c+r')) {
        const cpuNum = Math.ceil((cpu - nftMin['cpu']) / NFTSetpSize['cpu'])
        for (let i = 0; i < cpuNum; i++) {
          flag++
          await api.mintNft({ nftType: 1, info: `cpu ${NFTSetpSize['cpu']} core` })
        }

        const ramNum = Math.ceil((ram - nftMin['ram']) / NFTSetpSize['ram'])
        for (let i = 0; i < ramNum; i++) {
          flag++
          await api.mintNft({ nftType: 2, info: `ram ${NFTSetpSize['ram']} g` })
        }
      }
      if (checkList.includes('storage')) {
        const storageNum = Math.ceil((storage - nftMin['storage']) / NFTSetpSize['storage'])
        for (let i = 0; i < storageNum; i++) {
          flag++
          await api.mintNft({ nftType: 3, info: `storage ${NFTSetpSize['storage']} g` })
        }
      }
      if (checkList.includes('gpu')) {
        const gpuNum = Math.ceil((gpu - nftMin['gpu']) / NFTSetpSize['gpu'])
        for (let i = 0; i < gpuNum; i++) {
          flag++
          await api.mintNft({ nftType: 4, info: `gpu ${NFTSetpSize['gpu']} g` })
        }
      }
      setProcessing(false)
      if (flag > 0) {
        Modal.show({
          text: 'Generate NFT Success',
          type: 'success',
          onOk: () => history.push('/nft'),
          onClose: () => history.push('/nft'),
        })
      }
    } catch (err: any) {
      console.log('mint error', err)
      setProcessing(false)
      Modal.error(err.message || err.msg || 'request error')
    }
  }

  const getNFTNum = async () => {
    if (hniInfo) {
      const nodeContract = await MyWeb3.getContract(NODE_FACTORY.ABI, NODE_FACTORY.ADDRESS)
      const tokenIds = await nodeContract.methods.getIdsByMiner(hniInfo.contractAddress).call()
      const _nftNum = {
        ip: tokenIds['ipTokenIds'].length,
        bandWidth: tokenIds['bandwidthTokenIds'].length,
        cpu: tokenIds['cpuTokenIds'].length,
        ram: tokenIds['memTokenIds'].length,
        storage: tokenIds['storageTokenIds'].length,
        gpu: tokenIds['gpuTokenIds'].length,
      }
      setNftNum(_nftNum)
      const _min = {
        cpu: tokenIds['cpuTokenIds'].length * NFTSetpSize['cpu'],
        ram: tokenIds['memTokenIds'].length * NFTSetpSize['ram'],
        storage: tokenIds['storageTokenIds'].length * NFTSetpSize['storage'],
        gpu: tokenIds['gpuTokenIds'].length * NFTSetpSize['gpu'],
      }
      setCpu(_min['cpu'])
      setRam(_min['ram'])
      setStorage(_min['storage'])
      setGpu(_min['gpu'])
      setNftMin(_min)
    }
  }

  useEffect(() => {
    getNFTNum()
    if (hardInfo) {
      setIp(hardInfo.ip)
    }
  }, [])

  useEffect(() => {
    if (hardInfo) {
      setBandWidth(hardInfo.bandWidth)
    }
  }, [hardInfo])

  return (
    <div className={classes.generateNft}>
      <Typography component="h2" variant="h6" style={{ textAlign: 'center' }}>
        Select the NFT you want to generate
      </Typography>
      <div className={classes.generateForm}>
        <div className={classes.formItem}>
          <div className={classes.label}>NFT</div>
          <div className={classes.operate}></div>
          <div className={classes.value}>Configure</div>
          <div className={classes.checkBox}>
            <Checkbox
              color="primary"
              checked={checkList.length === 4}
              indeterminate={checkList.length > 0 && checkList.length < 4}
              onChange={onCheckAll}
            />
          </div>
        </div>
        <div className={classes.formDoubleItem}>
          <div style={{ flex: 1 }}>
            <div className={classes.formItem}>
              <div className={classes.label}>ip</div>
              <div className={classes.operate} style={{ color: 'red', paddingLeft: '45px' }}>
                {NftNum['ip'] ? '' : 'unmint'}
              </div>
              <div className={classes.value}>{ip}</div>
            </div>
            <div className={classes.formItem}>
              <div className={classes.label}>band width</div>
              <div className={classes.operate} style={{ color: 'red', paddingLeft: '45px' }}>
                {NftNum['bandWidth'] ? '' : 'unmint'}
              </div>
              <div className={classes.value}>{bandWidth ? `${bandWidth}M` : 'loading...'}</div>
            </div>
          </div>
          <div className={classes.checkBox}>
            <Checkbox
              color="primary"
              checked={checkList.includes('i+b')}
              disabled={!ip || !bandWidth}
              onChange={() => onChangeConfigCheck('i+b')}
            />
          </div>
        </div>
        <div className={classes.formDoubleItem}>
          <div style={{ flex: 1 }}>
            <div className={classes.formItem}>
              <div className={classes.label}>CPU</div>
              <div className={classes.operate}>
                <UnitStep value={cpu + 'core'} onStep={type => onChangeConfig(type, 'cpu', cpu, setCpu)} />
              </div>
              <div className={classes.value}>{hardInfo?.cpu}core</div>
            </div>
            <div className={classes.formItem}>
              <div className={classes.label}>RAM</div>
              <div className={classes.operate}>
                <UnitStep value={ram + 'G'} onStep={type => onChangeConfig(type, 'ram', ram, setRam)} />
              </div>
              <div className={classes.value}>{hardInfo?.ram}G</div>
            </div>
          </div>
          <div className={classes.checkBox}>
            <Checkbox color="primary" checked={checkList.includes('c+r')} onChange={() => onChangeConfigCheck('c+r')} />
          </div>
        </div>
        <div className={classes.formItem}>
          <div className={classes.label}>storage</div>
          <div className={classes.operate}>
            <UnitStep value={storage + 'G'} onStep={type => onChangeConfig(type, 'storage', storage, setStorage)} />
          </div>
          <div className={classes.value}>{hardInfo?.storage}G</div>
          <div className={classes.checkBox}>
            <Checkbox
              color="primary"
              checked={checkList.includes('storage')}
              onChange={() => onChangeConfigCheck('storage')}
            />
          </div>
        </div>
        <div className={classes.formItem}>
          <div className={classes.label}>GPU</div>
          <div className={classes.operate}>
            <UnitStep value={gpu + 'G'} onStep={type => onChangeConfig(type, 'gpu', gpu, setGpu)} />
          </div>
          <div className={classes.value}>{hardInfo?.gpu}G</div>
          <div className={classes.checkBox}>
            <Checkbox color="primary" checked={checkList.includes('gpu')} onChange={() => onChangeConfigCheck('gpu')} />
          </div>
        </div>
        <div className={classes.confirm}>
          <Button variant="contained" color="primary" style={{ width: 120 }} onClick={generate} disabled={processing}>
            {processing ? 'processing...' : 'Mint'}
          </Button>
        </div>
      </div>
    </div>
  )
}
