import { ReactElement } from 'react'
import Tabs from '../../components/Tabs'
import StatusHNI from './statusHNI'

export default function Accounting(): ReactElement {
  return (
    <Tabs
      values={[
        {
          label: 'UBQ',
          component: <StatusHNI />,
        },
      ]}
    />
  )
}
