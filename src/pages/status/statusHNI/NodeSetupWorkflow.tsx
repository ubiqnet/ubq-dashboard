import { ReactElement, useEffect, useState, useContext } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Typography, Paper, Button, Step, StepLabel, StepContent, Stepper, StepButton } from '@material-ui/core'
import { CheckCircle, Error, Sync, ExpandLessSharp, ExpandMoreSharp, Autorenew } from '@material-ui/icons/'

import DebugConnectionCheck from './SetupSteps/DebugConnectionCheck'
import { Context } from '../../../providers/Bee'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      margin: theme.spacing(2),
    },
  }),
)

interface Step {
  label: string
  isOk: boolean
  component: ReactElement
}

export default function NodeSetupWorkflow(): ReactElement {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(-1)

  const { isLoading, hniInfo } = useContext(Context)

  const steps: Step[] = [
    {
      label: 'Connected to Node UBQ Debug API',
      isOk: hniInfo?.status === 1,
      component: <DebugConnectionCheck isOk={hniInfo?.status === 1} />,
    },
  ]

  useEffect(() => {
    // If the user already changed the active step we don't want to overwrite it
    if (activeStep >= 0 && activeStep < steps.length) return

    // If any step is not fully loaded yet return
    if (!isLoading) return

    // Select first step that is not OK
    // This is deliberately a for loop (and not forEach) so that we can terminate the useEffect from within the cycle
    for (let i = 0; i < steps.length; ++i) {
      if (!steps[i].isOk) {
        setActiveStep(i)

        return
      }
    }
  }, [steps])

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Node Setup
        <span style={{ marginLeft: '25px' }}>
          <Button variant="outlined" size="small" onClick={() => window.location.reload()}>
            <Sync />
            <span style={{ marginLeft: '7px' }}>Refresh Checks</span>
          </Button>
        </span>
      </Typography>
      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
        {steps.map(({ label, isOk, component }, index) => (
          <Step key={label}>
            <StepLabel
              onClick={() => setActiveStep(index === activeStep ? steps.length : index)}
              StepIconComponent={() => {
                if (isLoading) return <Autorenew style={{ height: '25px', cursor: 'pointer' }} />

                if (isOk) return <CheckCircle style={{ color: '#32c48d', height: '25px', cursor: 'pointer' }} />

                return <Error style={{ color: '#c9201f', height: '25px', cursor: 'pointer' }} />
              }}
            >
              <StepButton
                disabled={isLoading}
                onClick={() => setActiveStep(index === activeStep ? steps.length : index)}
                style={{ justifyContent: 'space-between' }}
              >
                <div style={{ display: 'flex' }}>
                  <div style={{ marginTop: '5px' }}>{label}</div>
                  <div style={{ marginLeft: '12px' }}>
                    {index === activeStep ? <ExpandLessSharp /> : <ExpandMoreSharp />}
                  </div>
                </div>
              </StepButton>
            </StepLabel>
            <StepContent>
              <Typography component="div">{component}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
                    {index < steps.length - 1 ? 'Next' : 'Finish'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Paper>
  )
}
