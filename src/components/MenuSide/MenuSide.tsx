import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import BusinessIcon from '@material-ui/icons/Business';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import styles from '../Header/Header.module.scss';
import { Link } from 'react-router-dom';


const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      position: 'absolute',
      top: 10,
      left: 10,
      zIndex: 1100,
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: 60,
      height: 64,
      left: 5,
      background: 'none',
      boxShadow: 'none'
    },
    appBarShift: {
      width: 100,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      color: 'transparent',
      marginRight: theme.spacing(2),
      height: '100%',
      '&:hover': {
        boxShadow: 'none',
        textShadow: 'none',
        background: 'none'
      }
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: 0,
      flexShrink: 0,
    },
    drawerPaper: {
      background: 'linear-gradient(180deg, rgba(33,148,224,1) 0%, rgba(33,148,224,1) 30%, rgba(33,148,224,0) 100%)',
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
);

export default function MenuSide() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
        {
          <div className={styles.heartbeatloader}>
          <svg width="100%" height="100%" viewBox="0 0 150 400" xmlns="http://www.w3.org/2000/svg">
            <path
              className={styles.path}
              d="M 0 200 l 40 0 l 5 -40 l 5 40 l 10 0 l 5 15 l 10 -140 l 10 220 l 5 -95 l 10 0 l 5 20 l 5 -20 l 30 0"
              fill="transparent"
              strokeWidth="4"
              stroke="black"
            />
          </svg>
          <div className={styles.outercircle}></div>
        </div>
        }
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Главная', 'Медцентры', 'Врачи', 'Список услуг', 'Личный кабинет'].map((text, i) => (
             <Link key={i} onClick={handleDrawerClose} className={styles.link} to={
               i === 0 ? '/' :
               i === 1 ? '/MedcentersList/' :
               i === 2 ? '/MedicsList/' :
               i === 3 ? '/ServicesPage/' :
               '/PersonalPage/'
              }>
            <ListItem button key={text}>
              <ListItemIcon  className={styles.icon}>{
              i  === 0 ?  <HomeIcon /> :
              i === 1 ?   <BusinessIcon /> :
              i === 2 ?   <AssignmentIndIcon /> :
              i === 3 ?   <LocalHospitalIcon /> :
              < AccountCircleIcon/>}
            </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
