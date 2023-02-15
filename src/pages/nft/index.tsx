import { ReactElement, useEffect, useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
  Chip,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
} from '@material-ui/core'
import EthereumAddress from '../../components/EthereumAddress'
import { Context as SettingsContext } from '../../providers/Settings'
import { Context as BeeContext } from '../../providers/Bee'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import GenerateNFT from '../../components/GenerateNFT'
import NftRecord from './NftRecord'
import { NODE_FACTORY, NFT, TRADE } from '../../utils/web3/abi'
import MyWeb3 from '../../utils/web3'
import TroubleshootConnectionCardHNI from '../../components/TroubleshootConnectionCardHNI'

const useStyles = makeStyles({
  tools: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  yellow: {
    color: '#dd7700',
  },
  green: {
    color: '#02D77D',
  },
  loadingWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
  },
  rowItem: {
    marginBottom: '10px',
    '&:last-of-type': {
      marginBottom: 0,
    },
  },
})

interface StateItem {
  rentState: string
  unloadingState: boolean // true -added
  tokenId: string
  nftType: number
  configure: string
}

interface NFTListItem {
  nftName: string
  // rentState: string
  // unloadingState: boolean // true -added
  contractAddress: string
  list: StateItem[]
}

interface stateProps {
  info: StateItem
}

enum TOKEN_INDEX {
  IP,
  BANDWITH,
  GPU,
  STORAGE,
  CPU,
  RAM,
}

enum NFF_ACTION {
  CPU = 1,
  RAM,
  STORAGE,
  GPU,
  IP,
  BANDWITH,
}

function Nft(): ReactElement {
  const classes = useStyles()
  const { api } = useContext(SettingsContext)
  const { hniInfo } = useContext(BeeContext)

  const [tableList, setTableList] = useState<NFTListItem[]>([])
  const [actionDialogShow, setActionDialogShow] = useState(false)
  const [tipsDialogShow, setTipsDialogShow] = useState(false)
  const [NFTDialogShow, setNFTDialogShow] = useState(false)
  const [currentRow, setCurrentRow] = useState<StateItem | null>(null)
  const [agreeLoading, setAgreeLoading] = useState(false)
  const [tableLoading, setTableLoading] = useState(false)

  const onCloseActionDialog = () => {
    setActionDialogShow(false)
    setTimeout(() => {
      setAgreeLoading(false)
    }, 1000)
  }

  async function getNFTList() {
    if (tableLoading) return false
    setTableList([])

    if (hniInfo) {
      setTableLoading(true)
      const nodeContract = await MyWeb3.getContract(NODE_FACTORY.ABI, NODE_FACTORY.ADDRESS)
      const tokenIds = await nodeContract.methods.getIdsByMiner(hniInfo.contractAddress).call()
      console.log('tokenIds', tokenIds)
      const list: any = []
      const rowNum = tokenIds.filter((e: any) => e.length > 0).length

      if (!rowNum) return setTableLoading(false)
      tokenIds.forEach(async (item: any, index: number) => {
        const listItem = {
          nftName: TOKEN_INDEX[index],
          // @ts-ignore
          contractAddress: NFT[TOKEN_INDEX[index]],
          list: [],
        }
        const _NFT: any = NFT
        const contract = await MyWeb3.getContract(NFT.ABI, _NFT[TOKEN_INDEX[index]])
        item.forEach(async (tokenId: string, i: number) => {
          const stateItem: StateItem = {
            rentState: '',
            unloadingState: false,
            tokenId,
            // @ts-ignore
            nftType: NFF_ACTION[TOKEN_INDEX[index]],
            configure: '',
          }
          const hardwareInfo = await contract.methods.getHardwareInfo(tokenId).call()
          stateItem.configure = hardwareInfo
          const expires = await contract.methods.userExpires(tokenId).call()
          const address = await contract.methods.getApproved(tokenId).call()
          const now = new Date().getTime() / 1000
          // is rent
          stateItem.rentState = expires > now ? 'renting' : 'idle'
          // is putaway
          stateItem.unloadingState = address === TRADE.ADDRESS ? true : false
          listItem.list.push(stateItem as never)

          // if (i === item.length - 1) {
          if (listItem.list.length === item.length) {
            list.push(listItem)

            if (rowNum === list.length) {
              console.log('list', list)
              setTableList(list)
              setTableLoading(false)
            }
          }
        })
      })
    }
  }

  function changeUnloadingState() {
    if (agreeLoading) return false
    setAgreeLoading(true)

    if (!currentRow) return

    const param = {
      nftType: currentRow.nftType,
      tokenId: Number(currentRow.tokenId),
    }
    if (currentRow.unloadingState) {
      api.downNft(param)
    } else {
      api.uploadNft(param)
    }
    setTipsDialogShow(true)
    onCloseActionDialog()
  }

  function SwtichUnloadingState({ info }: stateProps) {
    function confirmAction() {
      setCurrentRow(info)
      setActionDialogShow(true)
    }

    if (info.rentState === 'renting') {
      return <Chip label="added" color="primary" />
    }

    if (info.rentState === 'idle') {
      if (info.unloadingState) {
        return (
          <div>
            <Chip label="added" color="primary" style={{ marginRight: '15px' }} />
            <Chip label="down" variant="outlined" style={{ cursor: 'pointer' }} onClick={confirmAction} />
          </div>
        )
      }

      return <Chip label="add" variant="outlined" style={{ cursor: 'pointer' }} onClick={confirmAction} />
    }

    return null
  }

  useEffect(() => {
    getNFTList()
  }, [])

  if (hniInfo?.status !== 1) return <TroubleshootConnectionCardHNI />

  return (
    <div>
      <div className={classes.tools}>
        <Button variant="outlined" color="primary" onClick={getNFTList}>
          Refresh Operating state
        </Button>
        <Button variant="contained" color="primary" onClick={() => setNFTDialogShow(true)}>
          Check computing power
        </Button>
      </div>
      {/* NFT list */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>NFT</TableCell>
              <TableCell>configure</TableCell>
              <TableCell>State</TableCell>
              <TableCell style={{ minWidth: '222px' }}>Operating state</TableCell>
              <TableCell>NFT Contract Address</TableCell>
              <TableCell>Token ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ maxHeight: 500, overflow: 'auto' }}>
            {tableLoading && (
              <TableRow>
                <TableCell colSpan={5}>
                  <div className={classes.loadingWrapper}>
                    <CircularProgress />
                  </div>
                </TableCell>
              </TableRow>
            )}
            {tableList?.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.nftName || '-'}
                </TableCell>
                <TableCell>
                  {row.list.map((stateItem, i) => (
                    <div key={i} className={classes.rowItem}>
                      {stateItem.configure}
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  {row.list.map((stateItem, i) => (
                    <div
                      className={`${stateItem.rentState === 'renting' ? classes.yellow : classes.green} ${
                        classes.rowItem
                      }`}
                      key={i}
                    >
                      {stateItem.rentState}
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  {row.list.map((stateItem, i) => (
                    <div key={i} className={classes.rowItem}>
                      <SwtichUnloadingState info={stateItem}></SwtichUnloadingState>
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  <EthereumAddress address={row.contractAddress} />
                </TableCell>
                <TableCell>
                  {row.list.map((stateItem, i) => (
                    <div key={i} className={classes.rowItem}>
                      {stateItem.tokenId}
                    </div>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* operation record */}
      <NftRecord></NftRecord>

      {/* operate double check */}
      <Dialog open={actionDialogShow} onClose={onCloseActionDialog}>
        <DialogContent>
          {currentRow?.unloadingState ? 'Are you sure to delist this nft?' : 'Are you sure to list this nft?'}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setActionDialogShow(false)} color="primary" style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
            cancel
          </Button>
          <Button onClick={changeUnloadingState} color="primary" autoFocus>
            AGREE
          </Button>
        </DialogActions>
      </Dialog>
      {/* operate success tips */}
      <Dialog open={tipsDialogShow} onClose={() => setTipsDialogShow(false)}>
        <DialogContent style={{ width: '330px', textAlign: 'center' }}>
          <CheckCircleIcon color="primary" style={{ fontSize: '70px' }}></CheckCircleIcon>
          <div>operation is successful,</div>
          <div>please refresh the Operating state later</div>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => setTipsDialogShow(false)}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      {/* nft config */}
      <Dialog open={NFTDialogShow} onClose={() => setNFTDialogShow(false)}>
        <DialogContent style={{ width: 500 }}>
          <GenerateNFT></GenerateNFT>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Nft
