import type { ReactElement } from 'react'
import { AddCircle, RemoveCircle } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  stepWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    cursor: 'not-allowed',
    outline: 'none',
    width: '80px',
    margin: '0 10px',
    lineHeight: '20px',
  },
})

interface Props {
  value: string | number
  onStep?: (type: 'up' | 'down') => void
}

export default function UnitStep({ value, onStep }: Props): ReactElement {
  const classes = useStyles()

  return (
    <div className={classes.stepWrapper}>
      <RemoveCircle color="primary" onClick={() => onStep && onStep('down')} style={{ cursor: 'pointer' }} />
      <input type="text" value={value} readOnly className={classes.input} />
      <AddCircle color="primary" onClick={() => onStep && onStep('up')} style={{ cursor: 'pointer' }} />
    </div>
  )
}
