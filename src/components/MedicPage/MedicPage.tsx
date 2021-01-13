import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { medicsList } from '../../data/medicsList';
import { med_centers } from '../../data/medcentersList';
import { services_category } from '../../data/servicesList';
import styles from './MedicPage.modlule.scss';
import IconButton from '@material-ui/core/IconButton';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import ScheduleIcon from '@material-ui/icons/Schedule';
import EmailSharpIcon from '@material-ui/icons/EmailSharp';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

function ContainedButtons({ func }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary">
        ЗАПИСАТЬСЯ
      </Button>
      <Button variant="contained" color="secondary" onClick={func}>
        НАЗАД
      </Button>
    </div>
  );
}

function IconButtons() {
  return (
    <div className={styles.icons}>
      <IconButton aria-label="phone">
        <PhoneCallbackIcon />
      </IconButton>
      <IconButton aria-label="schedule">
        <ScheduleIcon />
      </IconButton>
      <IconButton aria-label="mail">
        <EmailSharpIcon />
      </IconButton>
    </div>
  );
}

const MedicPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const func = history.goBack;
  const medicData = medicsList.find((e) => e.name === id);
  const centerData = med_centers.find((e) => e.name === medicData.medcenter);
  const serviceData = services_category.find((e) => e.medic === medicData.speciality);
  const serviceId = centerData.services[serviceData.id];
  const keys = serviceId.map((e) => Object.keys(e)).flat(1);
  const prices = serviceId.map((e) => Object.values(e)).flat(1);
  const namedKeys = [];
  keys.map((e) => namedKeys.push(serviceData.services[e]));
  const photo = '../' + medicData.img;
  const logo = '../' + centerData.logo;

  return (
    <div className={styles.medicPageWrapper}>
      <img src={photo} className={styles.medicPagePhoto} alt="Logo" />
      <div className={styles.medicPageName}>{medicData.name}</div>
      <div className={styles.medicPageIcons}>{IconButtons()}</div>
      <div className={styles.medicPageSpec}>{medicData.speciality}</div>
      <div className={styles.medicPageCat}>{medicData.category}</div>
      <div className={styles.medicPageExp}>{medicData.experience}</div>
      <div className={styles.medicPageGraduation}>{medicData.graduation}</div>
      <div className={styles.medicPagePhone}>
        <span>Телефон: </span>
        {medicData.phone}
      </div>
      <hr></hr>
      <div className={styles.medicPageCenter}>
        <img className={styles.medicPageLogo} src={logo} />
        <div className={styles.medicPageCenterFullName}>{centerData.fullname}</div>
        <div className={styles.medicPageCenterAdress}>{centerData.adress}</div>
        <div className={styles.medicPageCenterTime}>
          <span>Время работы: </span>
          {centerData.schedule.replace(/\—/, ' - ')}
        </div>
        <div className={styles.medicPageCenterPhones}>
          <span>Регистратура: </span>
          {centerData.phones[0]} , {centerData.phones[1]}
        </div>
        <div className={styles.medicPageCenterPrices}>
          {namedKeys.map((e, idx) => {
            return (
              <div className={styles.medicPageCenterServices} key={idx}>
                {e} : <span>{prices[idx]}</span> руб.
              </div>
            );
          })}
        </div>
        <div className={styles.medicPageCenterScheduleBtn}>{ContainedButtons({ func })}</div>
      </div>
    </div>
  );
};

export default MedicPage;
