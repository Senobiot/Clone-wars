import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import BusinessIcon from '@material-ui/icons/Business';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import styles from '../Header/Header.module.scss';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: 0,
      paddingLeft: 0,
      paddingRight: 0,
    },
    nav: {
      width: '120vw',
    },
    link: {
      display: 'flex',
      color: 'white',
      padding: 0,
    },
    icon: {
      padding: '0',
      width: 20,
      height: 20,
      color: 'white',
      minWidth: '40px',
    },

    text: {
      padding: 0,
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
  }),
);

export default function MenuSide() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.nav}>
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

      {['Главная', 'Медцентры', 'Врачи', 'Список услуг', 'Личный кабинет'].map((text, i) => (
        <Link
          key={i}
          to={
            i === 0
              ? '/MainContainer'
              : i === 1
              ? '/'
              : i === 2
              ? '/MedicsList/'
              : i === 3
              ? '/ServicesPage/'
              : '/PersonalPage/'
          }
          className={classes.link}
          color="white"
        >
          <ListItem button key={text} color="white" className={classes.container}>
            <ListItemIcon>
              {i === 0 ? (
                <HomeIcon className={classes.icon} />
              ) : i === 1 ? (
                <BusinessIcon className={classes.icon} />
              ) : i === 2 ? (
                <AssignmentIndIcon className={classes.icon} />
              ) : i === 3 ? (
                <LocalHospitalIcon className={classes.icon} />
              ) : (
                <AccountCircleIcon className={classes.icon} />
              )}
            </ListItemIcon>
            <ListItemText primary={text} className={classes.text} />
          </ListItem>
        </Link>
      ))}
    </Breadcrumbs>
  );
}
