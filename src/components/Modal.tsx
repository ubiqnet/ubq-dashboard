import { Dialog, DialogContent, Typography, Button } from '@material-ui/core'
import { CheckCircle, ReportProblem, Cancel } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import ReactDom from 'react-dom'
import { useEffect, useState } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { lightTheme } from '../theme'

const useStyles = makeStyles({
  dialogContent: {
    position: 'relative',
    padding: '30px 20px !important',
    width: '400px',
    textAlign: 'center',
  },
})

interface ModalProps {
  text: string
  type?: string
  okText?: string
  onOk?: () => void
  onClose?: () => void
}

let show: (options: ModalProps) => void
let success: (text: string) => void
let warning: (text: string) => void
let error: (text: string) => void

function GlobalModal() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState<ModalProps | null>(null)
  const [text, setText] = useState('')
  const [type, setType] = useState('')
  const [okText, setOkText] = useState('ok')

  const onClose = () => {
    setOpen(false)
    options?.onOk && options.onOk() // eslint-disable-line
  }

  const onOk = () => {
    setOpen(false)
    options?.onClose && options.onClose() // eslint-disable-line
  }

  useEffect(() => {
    success = text => {
      setType('success')
      setText(text)
      setOpen(true)
    }
    warning = text => {
      setType('warning')
      setText(text)
      setOpen(true)
    }
    error = text => {
      setType('error')
      setText(text)
      setOpen(true)
    }
    show = options => {
      setOptions(options)
      setText(options.text)
      /* eslint-disable */
      options.okText && setOkText(options.okText)
      options.type && setType(options.type)
      setOpen(true)
    }
  }, [])

  return (
    <ThemeProvider theme={lightTheme}>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogContent className={classes.dialogContent}>
          <div>
            {type === 'success' && <CheckCircle style={{ fontSize: 80, color: '#63d645' }} />}
            {type === 'warning' && <ReportProblem color="primary" style={{ fontSize: 80 }} />}
            {type === 'error' && <Cancel style={{ fontSize: 80, color: '#ca2b51' }} />}
            <Typography component="h3" variant="h6">
              {text}
            </Typography>
            <Button variant="contained" color="primary" style={{ marginTop: 20 }} onClick={onOk}>
              {okText}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  )
}

const divEl = document.createElement('div')
document.getElementById('root')?.appendChild(divEl)

ReactDom.render(<GlobalModal />, divEl)

const Modal = {
  success: (text: string) => success(text),
  warning: (text: string) => warning(text),
  error: (text: string) => error(text),
  show: (options: ModalProps) => show(options),
}

export default Modal
