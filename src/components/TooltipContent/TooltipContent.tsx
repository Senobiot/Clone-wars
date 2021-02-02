import { Grid, Avatar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import s from './TooltipContent.module.scss';
import { IState, IUser } from '../../model/data.model';
import { useSelector } from 'react-redux';
import moment from 'moment';
moment.locale('ru');

export function TooltipContent({ appointmentData }: { appointmentData: any }): JSX.Element {
  const doctor: IUser = useSelector(
    (state: IState) => state.data.users.filter((e) => e.uid === appointmentData.data.doctorId)[0],
  );
  const day = moment(appointmentData.data.startDate).format('LL');
  const time = moment(appointmentData.data.startDate).format('HH:mm');
  return (
    <Grid className={s.wrapper}>
      <Grid className={s.item} item direction="row" container justify="flex-start" alignItems="center">
        <Grid item xs>
          <Link className={s.link} to={`/MedicPage/${doctor.id}`}>
            <Grid container direction="column" justify="center" alignItems="center" spacing={1}>
              <Grid item>
                <Avatar className={s.avatar} src={doctor.img}></Avatar>
              </Grid>
              <Grid item>
                <Typography variant="body1">{doctor.name}</Typography>
              </Grid>
            </Grid>
          </Link>
        </Grid>
      </Grid>
      <Grid className={s.item} item direction="row" container justify="flex-start" alignItems="center">
        <Grid className={s.logo} item xs={2}>
          <LocalHospitalIcon color="action" />
        </Grid>
        <Grid item xs>
          <Typography variant="body2">{doctor.speciality}</Typography>
        </Grid>
      </Grid>
      <Grid className={s.item} item direction="row" container justify="flex-start" alignItems="center">
        <Grid className={s.logo} item xs={2}>
          <LocationOnIcon color="action" />
        </Grid>
        <Grid item xs>
          <Typography variant="body2">{doctor.medcenter}</Typography>
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
  );
}
