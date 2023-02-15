import { ReactElement, useContext, useState } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography, Theme, Button } from '@material-ui/core'
import axios from 'axios'
import { BigNumber } from 'bignumber.js'
import { Token } from '../../../models/Token'
import WDModalHNI from '../../../components/WDModalHNI'
import WDModalRechargeHNI from '../../../components/WDModalRechargeHNI'
import { Context as SettingsContext } from '../../../providers/Settings'
import { Context as BeeContext } from '../../../providers/Bee'
import Pledge from '../../../components/Pledge'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    buttons: {
      display: 'flex',
      columnGap: theme.spacing(1),
    },
    gridContainer: {
      display: 'flex',
      width: '100%',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      columnGap: theme.spacing(1),
      rowGap: theme.spacing(1),
      flex: '0 1 auto',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    chequebookActions: {
      justifyContent: 'space-between',
      display: 'flex',
      marginBottom: theme.spacing(1),
    },
  }),
)

interface Props {
  totalBalance?: Token
  pledgeBalance?: Token
  rewardBalance?: Token
}

function AccountCard({ totalBalance, pledgeBalance, rewardBalance }: Props): ReactElement {
  const classes = useStyles()
  const { apiHniDebugUrl } = useContext(SettingsContext)
  const { hniInfo } = useContext(BeeContext)
  const [openPledge, setOpenPledge] = useState(false)
  const eth = new BigNumber(1e18)

  return (
    <div>
      <div className={classes.chequebookActions}>
        <Typography component="h2" variant="h6">
          Chequebook
        </Typography>
        <div className={classes.buttons}>
          <Button variant="outlined" color="primary" onClick={() => setOpenPledge(true)}>
            Additional pledge
          </Button>
          {/* {String(hniInfo?.pledgeBalance) === '0' && (
            <WDModalRechargeHNI
              successMessage="Successful recharge."
              errorMessage="Error with recharge."
              dialogMessage="Specify the amount of UBQ you would like to withdraw from your node."
              label="Recharge"
              min={new BigNumber(0)}
              action={(amount: bigint) => {
                if (!apiHniDebugUrl) throw new Error('UBQ Debug URL is not valid')

                return axios.get(`${apiHniDebugUrl}/harvest/deposit`, {
                  params: { amount: new BigNumber(String(amount)).multipliedBy(eth).toString() },
                })
              }}
            />
          )} */}
          <WDModalHNI
            successMessage="Successful cashout."
            errorMessage="Error with cashout."
            dialogMessage="Are you sure to cashout?"
            label="Cashout"
            action={() => {
              if (!apiHniDebugUrl) throw new Error('UBQ Debug URL is not valid')

              return axios.get(`${apiHniDebugUrl}/harvest/cashout`)
            }}
          />
          <WDModalHNI
            successMessage="Successful withdrawl."
            errorMessage="Error with withdrawing."
            dialogMessage="Are you sure to withdraw?"
            label="Withdraw"
            action={() => {
              if (!apiHniDebugUrl) throw new Error('UBQ Debug URL is not valid')

              return axios.get(`${apiHniDebugUrl}/harvest/withdraw`)
            }}
          />
          <WDModalHNI
            successMessage="Successful unstake."
            errorMessage="Error with unstake."
            dialogMessage="Are you sure to unstake?"
            label="Unstake"
            action={() => {
              if (!apiHniDebugUrl) throw new Error('UBQ Debug URL is not valid')

              return axios.get(`${apiHniDebugUrl}/harvest/redeem`)
            }}
          />
        </div>
      </div>

      <Card className={classes.root}>
        <CardContent className={classes.gridContainer}>
          <div>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Total Balance
            </Typography>
            <Typography variant="h5">{new BigNumber(String(totalBalance)).dividedBy(eth).toString()} UBQ</Typography>
          </div>
          <div>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Pledge Balance
            </Typography>
            <Typography variant="h5">{new BigNumber(String(pledgeBalance)).dividedBy(eth).toString()} UBQ</Typography>
          </div>
          <div>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Reward Balance
            </Typography>
            <Typography variant="h5">{new BigNumber(String(rewardBalance)).dividedBy(eth).toString()} UBQ</Typography>
          </div>
        </CardContent>
      </Card>

      <Pledge open={openPledge} setOpen={setOpenPledge}></Pledge>
    </div>
  )
}

export default AccountCard
