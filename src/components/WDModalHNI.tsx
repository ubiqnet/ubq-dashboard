import { ReactElement, useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useSnackbar } from 'notistack'
import { Res } from '../types'

interface Props {
  successMessage: string
  errorMessage: string
  dialogMessage: string
  label: string
  action: () => Promise<Res>
}

export default function WithdrawModal({
  successMessage,
  errorMessage,
  dialogMessage,
  label,
  action,
}: Props): ReactElement {
  const [open, setOpen] = useState(false)
  const { enqueueSnackbar } = useSnackbar()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleAction = async () => {
    try {
      const res: Res = await action()
      const { result, error } = res.data

      if (result) {
        enqueueSnackbar(`${successMessage} Transaction ${result}`, { variant: 'success' })
      } else {
        enqueueSnackbar(`${errorMessage} Error: ${error}`, { variant: 'error' })
      }
      setOpen(false)
    } catch (e) {
      enqueueSnackbar(`${errorMessage} Error: ${e.message}`, { variant: 'error' })
    }
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {label}
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{label}</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAction} color="primary">
            {label}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
