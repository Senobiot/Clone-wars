import React from 'react';
import styles from './PersonalPage.module.scss';
import { emphasize, makeStyles, createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

const appointments = [
  {
    title: 'First record',
    startDate: new Date(2018, 6, 2, 14, 30),
    endDate: new Date(2018, 6, 2, 15, 30),
  },
  {
    title: 'Second Record',
    startDate: new Date(2018, 6, 24, 10, 0),
    endDate: new Date(2018, 6, 24, 11, 0),
  },
];
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '60%',
      margin: '30px 0',
      borderBottom: '1px solid rgba(var(--b38,219,219,219),1)',
      '& > *': {
        margin: theme.spacing(4),
      },
    },
    avatar: {
      margin: '0',

      width: '80px',
      height: '80px',
    },
  }),
);

export function PersonalPage() {
  const classes = useStyles();

  return (
    <div className={styles.container}>
      <div className={classes.root}>
        <p>
          <span className={styles.text}>Name </span>
          <span className={styles.text}>Surname</span>
        </p>
        <Avatar className={classes.avatar} alt="Remy Sharp" src="" />
      </div>
      <p className={styles.text}>Календарь записей</p>
      <Paper className={styles.calendar}>
        <Scheduler data={appointments}>
          <ViewState defaultCurrentDate="2018-07-27" />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments />
        </Scheduler>
      </Paper>
    </div>
  );
}
