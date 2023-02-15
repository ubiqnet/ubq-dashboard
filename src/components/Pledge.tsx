import { Dialog, DialogContent, DialogTitle, DialogActions, TextField, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Close } from '@material-ui/icons'
import { useState, useContext } from 'react'
import { Context as SettingsContext } from '../providers/Settings'
import { Context as BeeContext } from '../providers/Bee'
import Modal from '../components/Modal'

interface Props {
  open: boolean
  setOpen: any
}

const useStyles = makeStyles({
  dialogContent: {
    position: 'relative',
    padding: '10px 20px 10px 20px !important',
    width: '400px',
  },
  close: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    padding: '5px',
    cursor: 'pointer',
    fontSize: 0,
  },
  form: {
    display: 'flex',
    alignItems: 'center',
  },
})

const eth = Math.pow(10, 18)

export default function Pledge({ open, setOpen }: Props) {
  const classes = useStyles()
  const { api } = useContext(SettingsContext)
  const { refresh } = useContext(BeeContext)
  const [UBQCount, setUBQCount] = useState(0)
  const [loading, setLoading] = useState(false)

  const onPledge = () => {
    if (!UBQCount) return
    setLoading(true)
    api
      .deposit(UBQCount * eth)
      .then(() => {
        setLoading(false)
        setOpen(false)
        refresh()
        Modal.success('Pledge Success!')
      })
      .catch((err: string) => {
        Modal.error(err)
      })
  }

  return (
    <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
      <DialogTitle>
        Pledge
        <div className={classes.close} onClick={() => setOpen(false)}>
          <Close />
        </div>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <div className={classes.form}>
          <TextField
            label="Pledge Count"
            variant="outlined"
            style={{ flex: 1 }}
            type="number"
            onChange={e => {
              const val = Number(e.target.value)
              setUBQCount(val)
            }}
          />
          <Typography component="h2" variant="h6">
            &nbsp;UBQ
          </Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)} color="primary">
          cancel
        </Button>
        <Button onClick={onPledge} color="primary" autoFocus disabled={loading}>
          {loading ? 'processing...' : 'subscribe'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
