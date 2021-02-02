import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
  AppointmentTooltip,
  DayView,
  WeekView,
  ViewSwitcher,
} from '@devexpress/dx-react-scheduler-material-ui';
import React from 'react';
import { WithStyles } from '@material-ui/styles';
import { blue, indigo, teal } from '@material-ui/core/colors';
import { Button, createStyles, fade, Grid, IconButton, Popover, Theme, withStyles } from '@material-ui/core';
import s from './ScheduleVisit.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { IActiveUser, IState, IUser } from '../../model/data.model';
import { Close } from '@material-ui/icons';
import { TooltipContent } from '../TooltipContent';
import { changeAvailableDoctor, removeAppointment } from '../../../store/actions/actionUser';
import { useFirestore } from 'react-redux-firebase';

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
type AppointmentTooltipLayoutProps = AppointmentTooltip.LayoutProps & WithStyles<typeof styles>;

const Appointment = withStyles(styles)(({ classes, data, ...restProps }: AppointmentProps) => (
  <Appointments.Appointment {...restProps} data={data} />
));
const AppointmentContent = withStyles(styles, { name: 'AppointmentContent' })(
  ({ classes, data, ...restProps }: AppointmentContentProps) => {
    const doctor: IUser = useSelector((state: IState) => state.data.users.filter((e) => e.uid === data.doctorId)[0]);
    return (
      <Appointments.AppointmentContent {...restProps} data={data}>
        <div className={classes.container}>
          <div className={classes.text}>{data.title}</div>
          <div>{`Врач: ${doctor.name}`}</div>
          <div>{`Медцентр: ${doctor.medcenter}`}</div>
        </div>
      </Appointments.AppointmentContent>
    );
  },
);

const Layout = ({ appointmentMeta, visible, onHide }: AppointmentTooltipLayoutProps) => {
  const doctor: IUser[] = useSelector((state: IState) => state.data.users);
  const target: any = appointmentMeta && appointmentMeta.target;
  const firestore = useFirestore();
  const dispatch = useDispatch();
  const add = () => {
    dispatch(removeAppointment({ firestore }, appointmentMeta.data.patientId, appointmentMeta.data.id));
    dispatch(
      changeAvailableDoctor({ firestore }, appointmentMeta.data.doctorId, {
        ...appointmentMeta.data,
        available: true,
        patientId: '',
      }),
    );
    onHide();
  };
  return (
    <Popover
      open={visible === undefined ? false : visible}
      onClose={onHide}
      anchorEl={target}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      PaperProps={{
        className: s.popover,
      }}
    >
      <IconButton className={s.closeButton} aria-label="close" onClick={onHide}>
        <Close />
      </IconButton>
      <TooltipContent appointmentData={appointmentMeta} />
      <Grid container justify="center">
        <Button className={s.sing} onClick={add} variant="contained" color="primary">
          отменить запись
        </Button>
      </Grid>
    </Popover>
  );
};

export function SchedulerVisit(): JSX.Element {
  const user: IActiveUser = useSelector((state: IState) => state.user);
  return (
    <Paper elevation={3}>
      <Scheduler data={user.appointment}>
        <ViewState />
        <MonthView />
        <WeekView />
        <DayView />
        <Toolbar />
        <ViewSwitcher />
        <DateNavigator />
        <TodayButton />
        <Appointments appointmentComponent={Appointment} appointmentContentComponent={AppointmentContent} />
        <AppointmentTooltip layoutComponent={Layout} />
      </Scheduler>
    </Paper>
  );
}
