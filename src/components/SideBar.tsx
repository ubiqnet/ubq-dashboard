import { ReactElement } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { ListItemText, ListItemIcon, ListItem, List, Drawer, Typography } from '@material-ui/core'
// import { OpenInNewSharp } from '@material-ui/icons'
// import HomeIcon from '@material-ui/icons/Home'
import { Activity, Database, DollarSign, HardDrive, LifeBuoy } from 'react-feather'

import { Health } from '@ethersphere/bee-js'

import LastUpdate from './LastUpdate'

const drawerWidth = 240

const navBarItems = [
  {
    label: 'Status',
    id: 'status',
    path: '/status/',
    icon: Activity,
  },
  {
    label: 'NFT',
    id: 'NFT',
    path: '/nft/',
    icon: Database,
  },
  {
    label: 'Mint NFT',
    id: 'MintNFT',
    path: '/mint-nft/',
    icon: HardDrive,
  },
  {
    label: 'Node',
    id: 'Node',
    path: '/node/',
    icon: LifeBuoy,
  },
  {
    label: 'Account',
    id: 'accounting',
    path: '/accounting/',
    icon: DollarSign,
  },
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    logo: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60px',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    activeSideBar: {
      color: '#dd7700',
    },
    activeSideBarItem: {
      borderLeft: '4px solid #dd7700',
      backgroundColor: 'inherit !important',
    },
    toolbar: theme.mixins.toolbar,
  }),
)

interface Props extends RouteComponentProps {
  themeMode: string
  health: boolean
  nodeHealth: Health | null
  lastUpdate: number | null
  hniDebugApiHealth: boolean
}

export default function SideBar(props: Props): ReactElement {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.logo}>
          <Typography color="primary" variant="h5">
            UBQ dashboard
          </Typography>
        </div>
        {/* <div className={classes.toolbar} style={{ textAlign: 'left', marginLeft: 20 }}>
          <Link to="/">
            <img
              alt="swarm"
              className={classes.logo}
              src={props.themeMode === 'light' ? SwarmLogoOrange : SwarmLogoOrange}
              style={{ maxHeight: '30px', alignItems: 'center' }}
            />
          </Link>
        </div> */}
        <List>
          {navBarItems.map(item => (
            <Link to={item.path} key={item.id} style={{ color: 'inherit', textDecoration: 'none' }}>
              <ListItem
                button
                selected={props.location.pathname === item.path}
                className={props.location.pathname === item.path ? classes.activeSideBarItem : ''}
              >
                <ListItemIcon className={props.location.pathname === item.path ? classes.activeSideBar : ''}>
                  <item.icon style={{ height: '20px' }} />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  className={props.location.pathname === item.path ? classes.activeSideBar : ''}
                />
              </ListItem>
            </Link>
          ))}
        </List>
        <div style={{ position: 'fixed', bottom: 0, width: 'inherit', padding: '10px' }}>
          <ListItem style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div>
              <div
                style={{
                  backgroundColor: props.hniDebugApiHealth ? '#32c48d' : '#c9201f',
                  marginRight: '7px',
                  height: '10px',
                  width: '10px',
                  borderRadius: '50%',
                  display: 'inline-block',
                }}
              />
              <span>{props.hniDebugApiHealth ? 'node is connected' : 'node connection is abnormal'}</span>
            </div>
          </ListItem>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <LastUpdate date={props.lastUpdate} />
          </div>
        </div>
      </Drawer>
    </div>
  )
}
