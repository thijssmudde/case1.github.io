import React from 'react'
import { useLocation } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import InfoIcon from '@material-ui/icons/Info'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import BarChartIcon from '@material-ui/icons/BarChart'
import CastForEducationIcon from '@material-ui/icons/CastForEducation'
import SwapHorizontalCircleIcon from '@material-ui/icons/SwapHorizontalCircle'
import AssignmentIcon from '@material-ui/icons/Assignment'
import MenuIcon from '@material-ui/icons/Menu'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import * as Styled from '../StyledComponents/Navbar'

const drawerWidth = 280

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const Navbar = ({children}) => {
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const location = useLocation()

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  const primaryLinks = [
    {
      id: 0,
      text: 'Think Tank Windmills',
      path: '/',
      icon: <InfoIcon />
    },
    {
      id: 1,
      text: 'Compensatory Schemes',
      path: '/schemes',
      icon: <SwapHorizontalCircleIcon />
    },
    {
      id: 2,
      text: 'Results',
      path: '/results',
      icon: <BarChartIcon />
    },
    {
      id: 3,
      text:  'Conclusion',
      path: '/conclusion',
      icon: <AssignmentIcon />
    }
  ]

  const secondaryLinks = [
    {
      id: 0,
      text: 'Webinar',
      path: '/webinar',
      icon: <CastForEducationIcon />
    },
    {
      id: 1,
      text: 'Downloads',
      path: '/downloads',
      icon: <CloudDownloadIcon />
    }
  ]

  const title = 'Think Tank: How to increase public support for the transition to clean energy'

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {primaryLinks.map((link, index) => <Styled._NavLink key={link.id} to={link.path}>
          <ListItem button selected={location.pathname === link.path}>
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText primary={link.text} />
          </ListItem>
        </Styled._NavLink>)}
      </List>
      <Divider />
      <List>
        {secondaryLinks.map((link, index) => <Styled._NavLink key={link.id} to={link.path}>
          <ListItem button selected={location.pathname === link.path}>
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText primary={link.text} />
          </ListItem>
        </Styled._NavLink>)}
      </List>
    </div>
  )

  return <div className={classes.root}>
    <CssBaseline />
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
    <nav className={classes.drawer} aria-label='mailbox folders'>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation='css'>
        <Drawer
          variant='temporary'
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}>
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation='css'>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant='permanent'
          open>
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {children}
    </main>
  </div>
}

export default Navbar