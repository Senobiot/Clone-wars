import Paper from '@material-ui/core/Paper';
import { AppointmentTooltipProps, ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
  AppointmentTooltip,
  Resources,
  DayView,
  WeekView,
  ViewSwitcher,
} from '@devexpress/dx-react-scheduler-material-ui';
import React from 'react';
import { WithStyles } from '@material-ui/styles';
import { blue, indigo, teal } from '@material-ui/core/colors';
import { Avatar, createStyles, fade, Grid, Theme, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import s from './ScheduleVisit.module.scss';
import { Typography } from '@material-ui/core';

const appointments = [
  {
    title: 'Аллерголог',
    startDate: new Date(2021, 0, 21, 15, 15),
    endDate: new Date(2021, 0, 21, 16, 30),
    doctor: {
      id: 0,
      name: 'Городецкий Прохор Борисович',
      speciality: 'Аллерголог',
      category: 'Врач высшей квалификационной категории',
      experience: 'Стаж 21 лет',
      graduation: 'Витебский государственный медицинский университет в 1999 году',
      medcenter: 'Альфамед',
      img: '../../assets/medics_img/males/m1.jpg',
      phone: '+375-17-714-08-34',
      email: 'jcholewa@me.com',
    },
  },
];

const styles = ({ palette }: Theme) =>
  createStyles({
    appointment: {
      borderRadius: 0,
      borderBottom: 0,
    },
    highPriorityAppointment: {
      borderLeft: `4px solid ${teal[500]}`,
    },
    mediumPriorityAppointment: {
      borderLeft: `4px solid ${blue[500]}`,
    },
    lowPriorityAppointment: {
      borderLeft: `4px solid ${indigo[500]}`,
    },
    weekEndCell: {
      backgroundColor: fade(palette.action.disabledBackground, 0.04),
      '&:hover': {
        backgroundColor: fade(palette.action.disabledBackground, 0.04),
      },
      '&:focus': {
        backgroundColor: fade(palette.action.disabledBackground, 0.04),
      },
    },
    weekEndDayScaleCell: {
      backgroundColor: fade(palette.action.disabledBackground, 0.06),
    },
    text: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    content: {
      opacity: 0.7,
    },
    container: {
      width: '100%',
      lineHeight: 1.2,
      height: '100%',
    },
  });

type AppointmentProps = Appointments.AppointmentProps & WithStyles<typeof styles>;
type AppointmentContentProps = Appointments.AppointmentContentProps & WithStyles<typeof styles>;
type AppointmentTooltipContentProps = AppointmentTooltip.ContentProps & WithStyles<typeof styles>;

const Appointment = withStyles(styles)(({ classes, data, ...restProps }: AppointmentProps) => (
  <Appointments.Appointment {...restProps} data={data} />
));
const AppointmentContent = withStyles(styles, { name: 'AppointmentContent' })(
  ({ classes, data, ...restProps }: AppointmentContentProps) => {
    return (
      <Appointments.AppointmentContent {...restProps} data={data}>
        <div className={classes.container}>
          <div className={classes.text}>{data.title}</div>
          <div>{`Врач: ${data.doctor.name}`}</div>
          <div>{`Медцентр: ${data.doctor.medcenter}`}</div>
        </div>
      </Appointments.AppointmentContent>
    );
  },
);
const Content = withStyles(styles, { name: 'Content' })(
  ({ children, appointmentData, classes, ...restProps }: AppointmentTooltipContentProps) => (
    <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
      <Grid className={s.wrapper}>
        <Grid className={s.item} item direction="row" container justify="flex-start" alignItems="center">
          <Grid item xs={3}>
            <Typography variant="body2">{`Медцентр:`}</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body2">{appointmentData.doctor.medcenter}</Typography>
          </Grid>
        </Grid>
        <Grid className={s.item} item direction="row" container justify="flex-start" alignItems="center">
          <Grid item xs={3}>
            <Typography variant="body2">Врач:</Typography>
          </Grid>
          <Grid item xs>
            <Link className={s.link} to={`/MedicPage/${appointmentData.doctor.id}`}>
              <Avatar className={s.avatar} src={appointmentData.doctor.img}></Avatar>
              <Typography variant="body2">{appointmentData.doctor.name}</Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </AppointmentTooltip.Content>
  ),
);

export function SchedulerVisit(): JSX.Element {
  return (
    <Paper elevation={3}>
      <Scheduler data={appointments}>
        <ViewState />
        <MonthView />
        <WeekView />
        <DayView />
        <Toolbar />
        <ViewSwitcher />
        <DateNavigator />
        <TodayButton />
        <Appointments appointmentComponent={Appointment} appointmentContentComponent={AppointmentContent} />
        <AppointmentTooltip contentComponent={Content} showCloseButton />
      </Scheduler>
    </Paper>
  );
}
