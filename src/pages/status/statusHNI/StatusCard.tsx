import { ReactElement } from 'react'

import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography, Chip, Button } from '@material-ui/core'
import { CheckCircle, Error } from '@material-ui/icons/'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flex: '1 1 auto',
      flexDirection: 'column',
    },
    status: {
      color: '#2145a0',
      backgroundColor: '#e1effe',
    },
  }),
)

interface Props {
  userBeeVersion?: string
  isLatestBeeVersion: boolean
  isOk: boolean
  latestUrl: string
  publicKey: string | undefined
  pssPublicKey: string | undefined
  overlayAddress: string | undefined
}

function StatusCard({
  userBeeVersion,
  isOk,
  isLatestBeeVersion,
  latestUrl,
  publicKey,
  pssPublicKey,
  overlayAddress,
}: Props): ReactElement | null {
  const classes = useStyles()

  return (
    <Card>
      <CardContent className={classes.root}>
        <Typography component="h5" variant="h5" style={{ display: 'flex', justifyContent: 'space-between' }}>
          {isOk && (
            <div>
              <CheckCircle style={{ color: '#32c48d', marginRight: '7px' }} />
              <span>Your UBQ node is running as expected</span>
            </div>
          )}
          {!isOk && (
            <div>
              <Error style={{ color: '#c9201f', marginRight: '7px' }} />
              <span>Could not connect to UBQ Node</span>
            </div>
          )}
        </Typography>
        {isOk && (
          <>
            <div>
              <Typography component="div" variant="subtitle2" gutterBottom>
                <span>AGENT: </span>
                <a rel="noreferrer" target="_blank">
                  UBQ
                </a>{' '}
                <span>{userBeeVersion || '-'}</span>
                {isLatestBeeVersion ? (
                  <Chip
                    style={{ marginLeft: '7px', color: '#2145a0' }}
                    size="small"
                    label="latest"
                    className={classes.status}
                  />
                ) : (
                  <Button size="small" variant="outlined" href={latestUrl}>
                    update
                  </Button>
                )}
              </Typography>
              <Typography component="div" variant="subtitle2" gutterBottom>
                <span>PUBLIC KEY: </span>
                <span>{publicKey ? publicKey : '-'}</span>
              </Typography>
              {/* <Typography component="div" variant="subtitle2" gutterBottom>
                <span>PSS PUBLIC KEY: </span>
                <span>{pssPublicKey ? pssPublicKey : '-'}</span>
              </Typography>
              <Typography component="div" variant="subtitle2" gutterBottom>
                <span>OVERLAY ADDRESS (PEER ID): </span>
                <span>{overlayAddress ? overlayAddress : '-'}</span>
              </Typography> */}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}

export default StatusCard
