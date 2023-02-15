import { ReactElement, useContext } from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

import AccountCard from './AccountCard'
import EthereumAddressCardHNI from '../../../components/EthereumAddressCardHNI'
import TroubleshootConnectionCardHNI from '../../../components/TroubleshootConnectionCardHNI'
import { Context as BeeContext } from '../../../providers/Bee'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'grid',
      rowGap: theme.spacing(3),
    },
  }),
)

export default function Accounting(): ReactElement {
  const classes = useStyles()

  const { hniInfo } = useContext(BeeContext)

  if (hniInfo?.status !== 1) return <TroubleshootConnectionCardHNI />

  return (
    <div className={classes.root}>
      <AccountCard
        totalBalance={hniInfo?.totalBalance}
        pledgeBalance={hniInfo?.pledgeBalance}
        rewardBalance={hniInfo?.rewardBalance}
      />
      <EthereumAddressCardHNI nodeAddresses={hniInfo?.walletAddress} chequebookAddress={hniInfo?.contractAddress} />
    </div>
  )
}
