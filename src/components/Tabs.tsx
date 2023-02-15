import { ReactElement, useState, ReactNode } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'

interface TabPanelProps {
  children: ReactNode
  value: number
  index: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

interface TabsValues {
  component: ReactNode
  label: string
}

interface Props {
  values: TabsValues[]
}

export default function SimpleTabs({ values }: Props): ReactElement {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event: React.ChangeEvent<Record<string, never>>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange}>
        {values.map(({ label }, idx) => (
          <Tab key={idx} label={label} />
        ))}
      </Tabs>
      {values.map(({ component }, idx) => (
        <TabPanel key={idx} value={value} index={idx}>
          {component}
        </TabPanel>
      ))}
    </div>
  )
}
