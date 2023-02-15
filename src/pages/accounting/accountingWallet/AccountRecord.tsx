import { useState, useEffect, useContext } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
  Button,
  CircularProgress,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MyWeb3 from '../../../utils/web3'
import { POOL_OF_CAPITAL } from '../../../utils/web3/abi'
import { Context as BeeContext } from '../../../providers/Bee'
import { BigNumber } from 'bignumber.js'
import { dateFormat } from '../../../utils/tools'

const useStyles = makeStyles({
  loadingWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
  },
})

export default function AccountRecord() {
  const classes = useStyles()
  const { hniInfo } = useContext(BeeContext)
  const [recordList, setRecordList] = useState([
    {
      time: '20220807 17:34:26',
      Amount: '3 UBQ',
      source: 'add nfg',
      hash: 'hash',
    },
  ])
  const [recordLoading, setRecordLoading] = useState(false)

  const eth = new BigNumber(1e18)
  const getLog = async () => {
    if (hniInfo) {
      setRecordLoading(true)
      const contract = await MyWeb3.getContract(POOL_OF_CAPITAL.ABI, POOL_OF_CAPITAL.ADDRESS)
      const logs = await contract.methods.getRewardLog(hniInfo.contractAddress).call()
      const list: any = []
      console.log('logs', logs)
      logs.forEach((item: any) => {
        list.push({
          time: dateFormat(new Date(Number(item[1] * 1000)), 'YYYY-MM-DD hh:mm:ss'),
          Amount: new BigNumber(item[2]).dividedBy(eth).toString(),
          source: item[0] === 2 ? 'Scheduling Rewards' : 'Normal Rewards',
        })
      })
      setRecordLoading(false)
      setRecordList(list)
    }
  }

  useEffect(() => {
    getLog()
  }, [])

  return (
    <TableContainer component={Paper} style={{ marginTop: 20, maxHeight: 500, overflow: 'auto' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>time</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>source</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recordLoading && (
            <TableRow>
              <TableCell colSpan={5}>
                <div className={classes.loadingWrapper}>
                  <CircularProgress />
                </div>
              </TableCell>
            </TableRow>
          )}
          {!recordLoading &&
            recordList?.map((row, index) => (
              <TableRow key={index}>
                <TableCell scope="row">{row.time}</TableCell>
                <TableCell scope="row">{row.Amount}</TableCell>
                <TableCell scope="row">{row.source}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
