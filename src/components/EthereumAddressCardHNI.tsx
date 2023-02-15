import { ReactElement } from 'react'

import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core/'

import EthereumAddress from '../components/EthereumAddress'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
  }),
)

interface Props {
  nodeAddresses: string | undefined
  chequebookAddress: string | undefined
}

function EthereumAddressCard(props: Props): ReactElement {
  const { nodeAddresses, chequebookAddress } = props
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="subtitle1" gutterBottom>
            Ethereum Address
          </Typography>
          <EthereumAddress address={nodeAddresses} />
        </CardContent>
      </div>

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="subtitle1" gutterBottom>
            Chequebook Contract Address
          </Typography>
          <EthereumAddress address={chequebookAddress} />
        </CardContent>
      </div>
    </Card>
  )
}

export default EthereumAddressCard
