import React, { useRef } from 'react';
import Link from '@material-ui/core/Link';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateService } from '../../../store/actions/actionService';
import styles from './MedicPage.modlule.scss';
import IconButton from '@material-ui/core/IconButton';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import TelegramIcon from '@material-ui/icons/Telegram';
import EmailSharpIcon from '@material-ui/icons/EmailSharp';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { IState } from '../../model/data.model';
import { getAppointmentItemDoctor } from '../../../store/actions/actionUser';
import { useFirestore } from 'react-redux-firebase';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

interface IFunc {
  centerFunc: any;
  backFunc: any;
}

const ContainedButtons = ({ centerFunc, backFunc }: IFunc) => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const firestore = useFirestore();
  const doctor = useSelector((state: IState) => state.data.users.find((e) => e.id === +id));

  const handleClick = () => {
    dispatch(getAppointmentItemDoctor({ firestore }, doctor.uid));
    history.push('/AppointmentDoctor/');
  };
  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={centerFunc}>
        О МЕДЦЕНТРЕ
      </Button>
      <Button variant="contained" color="primary" onClick={handleClick}>
        ЗАПИСАТЬСЯ
      </Button>
      <Button variant="contained" color="secondary" onClick={backFunc}>
        НАЗАД
      </Button>
    </div>
  );
};

interface IContacts {
  tel: string;
  email: string;
  tg: string;
}

const IconButtons = ({ tel, email, tg }: IContacts) => {
  return (
    <div className={styles.icons}>
      <Link href={tel}>
        <IconButton aria-label="phone">
          <PhoneCallbackIcon />
        </IconButton>
      </Link>
      <Link href={tg}>
        <IconButton aria-label="telegram">
          <TelegramIcon />
        </IconButton>
      </Link>
      <Link href={email}>
        <IconButton aria-label="mail">
          <EmailSharpIcon />
        </IconButton>
      </Link>
    </div>
  );
};

export const MedicPage = () => {
  const { id } = useParams();
  const medcenterName = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const allMedics = useSelector((state) => state.data.users);
  const allCenters = useSelector((state) => state.data.med_centers);
  const allServices = useSelector((state) => state.data.services_category);
  const medicData = allMedics.find((e) => e.id == id);
  const centerData = allCenters.find((e) => e.name === medicData.medcenter);
  const serviceData = allServices.find((e) => e.medic === medicData.speciality);
  const serviceId = centerData.services[serviceData.id];
  const keys = serviceId.map((e) => Object.keys(e)).flat(1);
  const prices = serviceId.map((e) => Object.values(e)).flat(1);
  const tel = 'tel:' + medicData.phone;
  const tg = `tg://resolve?domain=${medicData.name}`;
  const email = 'mailto:' + medicData.email;
  const namedKeys = [];
  keys.map((e) => namedKeys.push(serviceData.services[e]));
  const categoryLogo = '../' + serviceData.logo;
  const photo = '../' + medicData.img;
  const logo = '../' + centerData.logo;

  const centerFunc = () => {
    dispatch(updateService({ centers: [medcenterName.current.textContent], query: medcenterName.current.textContent }));
    history.push({
      pathname: `/MedcentersList`,
    });
  };

  const backFunc = history.goBack;

  return (
    <div className={styles.medicPageWrapper}>
      <img src={photo} className={styles.medicPagePhoto} alt="Logo" />
      <div className={styles.medicPageName}>{medicData.name}</div>
      <div className={styles.medicPageIcons}>{IconButtons({ tel, email, tg })}</div>
      <div className={styles.medicPageSpec}>
        <img src={categoryLogo} className={styles.medicPageCategoryLogo} />
        {medicData.speciality}
      </div>
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
        <div ref={medcenterName} className={styles.medicPageCenterFullName}>
          {centerData.fullname}
        </div>
        <div className={styles.medicPageCenterAdress}>{centerData.adress}</div>
        <div className={styles.medicPageSubWrapper}>
          <div className={styles.medicPageCenterTime}>
            <span>Время работы: </span>
            {centerData.schedule.replace(/\—/, ' - ')}
          </div>
          <div className={styles.medicPageCenterPhones}>
            <span>Регистратура: </span>
            <br></br>
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
          <iframe className={styles.iframeMap} src={centerData.iframe}></iframe>
        </div>
        <div className={styles.medicPageCenterScheduleBtn}>{ContainedButtons({ centerFunc, backFunc })}</div>
      </div>
    </div>
  );
};
