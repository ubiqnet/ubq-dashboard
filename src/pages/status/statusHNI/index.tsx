import { ReactElement, useContext } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import NodeSetupWorkflow from './NodeSetupWorkflow'
import StatusCard from './StatusCard'
import EthereumAddressCardHNI from '../../../components/EthereumAddressCardHNI'
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

export default function Status(): ReactElement {
  const classes = useStyles()

  const { hniInfo } = useContext(BeeContext)

  return (
    <div className={classes.root}>
      <StatusCard
        userBeeVersion={hniInfo?.version}
        isLatestBeeVersion={true}
        isOk={hniInfo?.status === 1}
        latestUrl={'xx'}
        publicKey={hniInfo?.publicKey}
        pssPublicKey={hniInfo?.pssPublicKey}
        overlayAddress={hniInfo?.overlayAddress}
      />
      {hniInfo?.walletAddress && hniInfo?.contractAddress && (
        <EthereumAddressCardHNI nodeAddresses={hniInfo?.walletAddress} chequebookAddress={hniInfo?.contractAddress} />
      )}
      <NodeSetupWorkflow />
    </div>
  )
}
