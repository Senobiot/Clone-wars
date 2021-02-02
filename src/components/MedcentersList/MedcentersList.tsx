import React, { useState, useRef, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useSelector, useDispatch } from 'react-redux';
import { updateService } from '../../../store/actions/actionService';
import MedcentersInfo from './MedcentersInfo';
import { centers } from '../../data/searchKeys';

import styles from './Medcenters.module.scss';
import { iconPerson } from './Marker';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

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
  const dispatch = useDispatch();
  const medCenters = useSelector((state)=> state.data.med_centers);
  const filteredCenters = useSelector((state) => state.service.service.centers);
  const filterQuery = useSelector((state) => state.service.service.query);

  const [leafMap, setMap] = useState(null);

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

  const filterText = useRef(null);

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

  const handleReset = () => {
    centers.forEach(center => {
      refs[center].current.style.display = 'block';
      if (markerRefs[center].current._popup._container) {
        markerRefs[center].current._popup._container.style.transform = 'scale(1)';
      }
      markerRefs[center].current._icon.style.display = 'block';
    })
    dispatch(updateService( {centers: null, query: null } ));
    leafMap.flyTo([53.9, 27.56667], 12);
  };

  const filter = () => {
    if (filteredCenters) {
      centers.forEach(center => {
        if (filteredCenters.indexOf(center) !== - 1) {
          refs[center].current.style.display = 'block';
          if (markerRefs[center].current._popup._container) {
            markerRefs[center].current._popup._container.style.transform = 'scale(1)';
          }
          markerRefs[center].current._icon.style.display = 'block';
        } else {
            refs[center].current.style.display = 'none';
              if (markerRefs[center].current._popup._container) {
              markerRefs[center].current._popup._container.style.transform = 'scale(0)';
              }
            markerRefs[center].current._icon.style.display = 'none';
        }
      })
        filterText.current.textContent = filterQuery;
        // leafMap.flyTo([53.9, 27.56667], 12);
    }
  };

  return (
    <div className={styles.MedcentersListWrapper}>
      <div className={styles.MedcentersListBlock}>
        <div className={filteredCenters ? styles.filter : styles.filterHidden }>
          <ContainedButtons handler={handleReset} text="ПОКАЗАТЬ ВСЕ" />
          <span>Выбрано:</span>
          <span ref={filterText}></span>
        </div>
        {medCenters.map((e) => {
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
        {setTimeout(filter, 0)}
      </MapContainer>
    </div>
  );
};
