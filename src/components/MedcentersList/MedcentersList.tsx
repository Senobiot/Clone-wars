import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Medcenters.module.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { iconPerson } from './Marker';
import Button from '@material-ui/core/Button';
import { getCollection } from '../../services/updateFirebase';
import { med_centers } from '../../data/medcentersList';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { useSelector, useDispatch } from 'react-redux';

import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import MedcentersInfo from './MedcentersInfo';
import { arrayOf } from 'prop-types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100%',
      marginBottom: 5,
      borderRadius: 0,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: '#fff',
      width: 100,
    },
  }),
);

interface IButton {
  handler: Function;
  text: string;
}

function ContainedButtons({ handler, text }: IButton) {
  return (
    <div className={styles.button}>
      <Button variant="contained" onClick={(e) => handler(e)}>
        {text}
      </Button>
    </div>
  );
}

interface ICard {
  centerImg: string;
  logo: string;
  fullname: string;
  adress: string;
  history: string;
  handler: Function;
  text: string;
  centerName: string;
  category: {};
}

function centerCard({ centerImg, logo, fullname, adress, history, handler, text, category, centerName }: ICard) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        className={styles.header}
        avatar={
          <Avatar className={classes.avatar} variant="square">
            {<img src={logo} className={styles.avatar}></img>}
          </Avatar>
        }
        action={<ContainedButtons handler={handler} text={text} />}
        title={fullname}
        subheader={adress}
      />
      <CardMedia className={classes.media} image={centerImg} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {history}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={styles.infoAboutCenter}>
        <div onClick={handleExpandClick} className={styles.expandInfo}>
          <span>Информация об услугах центра: </span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <MedcentersInfo category={category} centerName={centerName} />
        </CardContent>
      </Collapse>
    </Card>
  );
}

export const MedcentersList = () => {
  let medCenters = med_centers;

  const dataState: any = useSelector((state: any) => state.service);

  const [leafMap, setMap] = useState(null);
  const [centers, setCenters] = useState([]);
  useEffect(() => {
    console.log(medCenters);
    if (medCenters) {
      setCenters(medCenters);
    }
  }, []);
  let coordObject = {};

  interface ILats {
    latings: number[];
    fullname: string;
  }

  type NewType = ILats;
  const zoom = 16;

  const mapMove = useCallback(
    ({ latings, fullname }: NewType) => {
      leafMap.flyTo(latings, zoom);
      markerRefs[fullname].current.openPopup();
    },
    [leafMap],
  );

  const refs = medCenters.reduce((acc, value) => {
    acc[value.fullname] = useRef(null);
    return acc;
  }, {});

  const markerRefs = medCenters.reduce((acc, value) => {
    acc[value.fullname] = useRef(null);
    return acc;
  }, {});

  const handleClick = (id) => {
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleFly = (e) => {
    handleClick(e.target.parentNode.parentNode.parentNode.childNodes[2].textContent);
  };
  let newArr = [];

  medCenters.forEach((center) => {
    Object.keys(center.services).forEach((service) => {
      Object.values(center.services).forEach((type: any) => {
        type.forEach((e) => {
          if (service == dataState.service[0] && Object.keys(e) == dataState.service[1]) {
            newArr.push(center);
          }
        });
      });
    });
  });
  let newSet = new Set(Array.from(newArr));

  if (Array.from(newSet).length != 0) {
    medCenters = Array.from(newSet);
  }

  return (
    <div className={styles.MedcentersListWrapper}>
      <div className={styles.MedcentersListBlock}>
        {medCenters.map((e) => {
          console.log(medCenters);
          const centerImg = e.img;
          const logo = e.logo;
          const fullname = e.fullname;
          const centerName = e.name;
          const adress = e.adress;
          const history = e.history;
          const category = e.services;
          const latings = e.coord.split(',').map((e) => parseFloat(e));
          const handler = () => {
            if (window.innerWidth < 768) {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            mapMove({ latings, fullname });
          };
          const text = 'на карте';
          return (
            <div key={e.name} ref={refs[e.fullname]}>
              {centerCard({ centerImg, logo, fullname, adress, history, handler, text, category, centerName })}
            </div>
          );
        })}
      </div>
      <MapContainer
        center={[53.9, 27.56667]}
        zoom={12}
        scrollWheelZoom={true}
        className={styles.leafletContainer}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {medCenters.map((e, i) => {
          const coords = e.coord.split(',');
          coordObject[e.fullname] = coords;

          return (
            <Marker
              key={i}
              position={[parseFloat(coords[0]), parseFloat(coords[1])]}
              ref={markerRefs[e.fullname]}
              icon={iconPerson}
            >
              <Popup className={styles.leafletPopup}>
                <img src={e.logo}></img>
                <div>{e.adress}</div>
                <div>{e.fullname}</div>
                <ContainedButtons handler={handleFly} text="Подробнее" />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};
