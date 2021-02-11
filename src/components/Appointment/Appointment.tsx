import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Appointments,
  AppointmentTooltip,
  WeekView,
  Toolbar,
  DateNavigator,
} from '@devexpress/dx-react-scheduler-material-ui';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Theme,
  createStyles,
  fade,
  WithStyles,
  withStyles,
  Grid,
  Button,
  Popover,
  IconButton,
} from '@material-ui/core';
import { teal, blue, indigo } from '@material-ui/core/colors';
import s from './Appointment.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  addAppointment,
  addAppointmentItemUser,
  changeAvailableDoctor,
  getAppointmentItemDoctor,
} from '../../../store/actions/actionUser';
import { IActiveUser, IAppointment, IState, IUser } from '../../model/data.model';
import { Close } from '@material-ui/icons';
import { TooltipContent } from '../TooltipContent';
import { Spinner } from '../Spinner/Spinner';
import { isLoaded, useFirestore } from 'react-redux-firebase';

const styles = ({ palette }: Theme) =>
  createStyles({
    appointment: {
      borderRadius: 0,
      borderBottom: 0,
      display: 'flex !impontmant',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#78909C!important',
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
      textAlign: 'center',
      fontSize: '4vmin',
    },
    content: {
      opacity: 0.7,
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    commandButton: {
      backgroundColor: 'rgba(255,255,255,0.65)',
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
    const date = new Date(data.startDate);
    const time = `${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
    return (
      <Appointments.AppointmentContent {...restProps} data={data}>
        <div className={classes.container}>
          <div className={classes.text}>{time}</div>
        </div>
      </Appointments.AppointmentContent>
    );
  },
);

const Layout = ({ appointmentMeta, visible, onHide, ...restProps }: AppointmentTooltipLayoutProps) => {
  const user = useSelector((state: IState) => state.user);
  const firestore = useFirestore();
  const target: any = appointmentMeta && appointmentMeta.target;
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(
      addAppointmentItemUser({ firestore }, user.data.uid, {
        [appointmentMeta.data.id]: { ...appointmentMeta.data, patientId: user.data.uid, available: false },
      }),
    );
    dispatch(
      changeAvailableDoctor({ firestore }, appointmentMeta.data.doctorId, {
        ...appointmentMeta.data,
        available: false,
        patientId: user.data.uid,
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
        <Button className={s.sing} onClick={remove} variant="contained" color="primary">
          записаться
        </Button>
      </Grid>
    </Popover>
  );
};

export function AppointmentDoctor(): JSX.Element {
  const appointment: any = useSelector((state: IState) => state.user.appointmentDoctor);
  if (!isLoaded(appointment)) return <Spinner />;
  return (
    <div className={s.wrapper}>
      <Paper className={s.paper}>
        <Scheduler data={appointment.filter((e) => e.available)}>
          <ViewState />
          <Toolbar />
          <DateNavigator />
          <WeekView startDayHour={8} endDayHour={20} />
          <Appointments appointmentComponent={Appointment} appointmentContentComponent={AppointmentContent} />
          <AppointmentTooltip layoutComponent={Layout} />
        </Scheduler>
      </Paper>
    </div>
  );
}
