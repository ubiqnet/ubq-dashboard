import { ReactElement, useContext, useEffect, useState } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core/'
import { Context as BeeContext } from '../../../providers/Bee'
import { Context as SettingsContext } from '../../../providers/Settings'
import { BigNumber } from 'bignumber.js'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    balance: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 15px',
      borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    },
  }),
)

function WalletCard(): ReactElement {
  const classes = useStyles()
  const { hniInfo } = useContext(BeeContext)
  const { api } = useContext(SettingsContext)

  const [balance, setBalance] = useState(0)
  const eth = new BigNumber(1e18)

  const getWalletBalance = async () => {
    const _result = await api.walletBalance()
    setBalance(_result.ubq)
  }

  useEffect(() => {
    getWalletBalance()
  }, [])

  return (
    <Card>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography>Node wallet address</Typography>
          <div style={{ marginTop: '10px' }}>{hniInfo?.walletAddress}</div>
        </CardContent>
      </div>
      <div className={classes.balance}>
        <Typography>UBQ balance</Typography>
        <Typography>{new BigNumber(String(balance)).dividedBy(eth).toString()} UBQ</Typography>
      </div>
    </Card>
  )
}

export default WalletCard
