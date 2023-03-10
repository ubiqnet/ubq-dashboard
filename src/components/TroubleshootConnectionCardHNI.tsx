import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core/'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: '20px',
  },
  title: {
    textAlign: 'center',
    fontSize: 26,
  },
})

export default function TroubleshootConnectionCard(): ReactElement {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          Looks like your node is not connected
        </Typography>
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <strong>
            <Link to="/status">Click to run status checks</Link> on your nodes connection
          </strong>
        </div>
      </CardContent>
    </Card>
  )
}
