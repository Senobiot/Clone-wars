import { Grid, Avatar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import PhoneIcon from '@material-ui/icons/Phone';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ScheduleIcon from '@material-ui/icons/Schedule';
import s from './TooltipContentDoctor.module.scss';
import { IState, IUser } from '../../model/data.model';
import { useSelector } from 'react-redux';
import moment from 'moment';
moment.locale('ru');

export function TooltipContentDoctor({ appointmentData }: { appointmentData: any }): JSX.Element {
  const doctor: IUser = useSelector((state: IState) =>
    state.data.users.find((e) => e.uid === appointmentData.data.patientId),
  );
  console.log(doctor)
  const day = moment(appointmentData.data.startDate).format('LL');
  const time = moment(appointmentData.data.startDate).format('HH:mm');
  return (
    <>
      {appointmentData.data.patientId ? (
        <Grid className={s.wrapper}>
          <Grid className={s.item} item direction="row" container justify="flex-start" alignItems="center">
            <Grid item xs>
              <Grid container direction="column" justify="center" alignItems="center" spacing={1}>
                <Grid item>
                  <Avatar className={s.avatar} src={doctor.img}></Avatar>
                </Grid>
                <Grid item>
                  <Typography variant="body1">{doctor.name}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={s.item} item direction="row" container justify="flex-start" alignItems="center">
            <Grid className={s.logo} item xs={2}>
              <PhoneIcon color="action" />
            </Grid>
            <Grid item xs>
              <Typography variant="body2">{doctor.phone}</Typography>
            </Grid>
          </Grid>
          <Grid className={s.item} item direction="row" container justify="flex-start" alignItems="center">
            <Grid className={s.logo} item xs={2}>
              <CalendarTodayIcon color="action" />
            </Grid>
            <Grid item xs>
              <Typography variant="body2">{day}</Typography>
            </Grid>
          </Grid>
          <Grid className={s.item} item direction="row" container justify="flex-start" alignItems="center">
            <Grid className={s.logo} item xs={2}>
              <ScheduleIcon color="action" />
            </Grid>
            <Grid item xs>
              <Typography variant="body2">{time}</Typography>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid container className={s.not}>
          <Typography variant="body2">НЕТ ЗАПИСИ</Typography>
        </Grid>
      )}
    </>
  );
}
