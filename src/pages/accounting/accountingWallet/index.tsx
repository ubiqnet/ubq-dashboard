import { ReactElement, useContext } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import WalletCard from './WalletCard'
import InsertLinkIcon from '@material-ui/icons/InsertLink'
import { Context as BeeContext } from '../../../providers/Bee'
import TroubleshootConnectionCardHNI from '../../../components/TroubleshootConnectionCardHNI'
import AccountRecord from './AccountRecord'

const useStyles = makeStyles(() =>
  createStyles({
    checkButtonWrapper: {
      display: 'inline-block',
      marginTop: '30px',
      padding: '10px 15px',
      cursor: 'pointer',
      boxShadow:
        '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
      '&:active': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
      },
    },
    checkButton: {
      display: 'flex',
      alignItems: 'center',
    },
  }),
)

export default function AccountingWallet(): ReactElement {
  const classes = useStyles()
  const { hniInfo } = useContext(BeeContext)

  if (hniInfo?.status !== 1) return <TroubleshootConnectionCardHNI />

  return (
    <div>
      <div>
        <Typography component="h2" variant="h6" style={{ marginBottom: '20px' }}>
          Wallet balance
        </Typography>
        <WalletCard />
        <div
          className={classes.checkButtonWrapper}
          onClick={() => window.open(`https://goerli.etherscan.io/address/${hniInfo?.walletAddress}`)}
        >
          <div className={classes.checkButton}>
            <InsertLinkIcon style={{ marginRight: '10px', color: '#dd7700' }}></InsertLinkIcon>
            <Typography>Check transactions on Blockscout</Typography>
          </div>
        </div>
        <AccountRecord />
      </div>
    </div>
  )
}
