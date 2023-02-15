import { ReactElement, useState, useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
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
import { Context as SettingsContext } from '../../providers/Settings'
import { dateFormat } from '../../utils/tools'

interface recordItem {
  time: string
  type: string
  source: string
  hash: string
}

enum sourceEnum {
  mint = 1,
  added,
  down,
}

const useStyles = makeStyles({
  loadingWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
  },
})

export default function NftRecord(): ReactElement {
  const classes = useStyles()
  const { api } = useContext(SettingsContext)
  const [recordLoading, setRecordLoading] = useState(false)
  const [recordList, setRecordList] = useState<recordItem[]>([])

  const getNftRecord = async () => {
    setRecordLoading(true)
    try {
      const res = await api.nftRecord()
      setRecordLoading(false)
      const list = res.result.map((item: any) => {
        return {
          time: dateFormat(new Date(item.time), 'YYYY-MM-DD hh:mm:ss'),
          type: item.type,
          source: sourceEnum[item.source],
          hash: item.hash,
        }
      })
      setRecordList(list)
    } catch {
      setRecordLoading(false)
    }
  }

  const toEtherscan = (row: recordItem) => {
    window.open(`https://goerli.etherscan.io/tx/${row.hash}`)
  }

  useEffect(() => {
    getNftRecord()
  }, [])

  return (
    <TableContainer component={Paper} style={{ marginTop: 20, maxHeight: 500, overflow: 'auto' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>time</TableCell>
            <TableCell>type</TableCell>
            <TableCell>source</TableCell>
            <TableCell>Operate</TableCell>
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
              <TableRow key={row.hash}>
                <TableCell scope="row">{row.time}</TableCell>
                <TableCell scope="row">{row.type}</TableCell>
                <TableCell scope="row">{row.source}</TableCell>
                <TableCell scope="row">
                  <Button variant="contained" color="primary" onClick={() => toEtherscan(row)}>
                    hash
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
