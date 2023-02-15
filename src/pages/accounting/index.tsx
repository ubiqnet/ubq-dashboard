import { ReactElement } from 'react'
import Tabs from '../../components/Tabs'
import AccountingHNI from './accountingHNI'
import AccountingWallet from './accountingWallet'

export default function Accounting(): ReactElement {
  return (
    <Tabs
      values={[
        {
          label: 'Wallet',
          component: <AccountingWallet />,
        },
        {
          label: 'Chequebook',
          component: <AccountingHNI />,
        },
      ]}
    />
  )
}
