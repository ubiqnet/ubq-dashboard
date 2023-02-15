import type { ReactElement } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AppRoute from './AppRoute'

// layouts
import Dashboard from '../layout/Dashboard'

// pages
import Status from '../pages/status'
import Accounting from '../pages/accounting'
import Nft from '../pages/nft'
import MintNFT from '../pages/nft/MintNFT'
import Node from '../pages/node'

const BaseRouter = (): ReactElement => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/status/" push />} />
    <AppRoute exact path="/status/" layout={Dashboard} component={Status} />
    <AppRoute exact path="/nft/" layout={Dashboard} component={Nft} />
    <AppRoute exact path="/mint-nft/" layout={Dashboard} component={MintNFT} />
    <AppRoute exact path="/node/" layout={Dashboard} component={Node} />
    <AppRoute exact path="/accounting/" layout={Dashboard} component={Accounting} />
  </Switch>
)

export default BaseRouter
