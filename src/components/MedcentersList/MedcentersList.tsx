import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Medcenters.module.scss';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent, useMapEvents } from 'react-leaflet';
import {  iconPerson  } from './Marker';

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
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "100%",
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

function ContainedButtons({handler, text} : IButton) {
  return (
    <div className={styles.button}>
      <Button variant="contained" onClick={(e) => handler(e)}>{text}</Button>
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
}

function centerCard({centerImg, logo, fullname, adress, history, handler, text} : ICard) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader className={styles.header}
        avatar={
          <Avatar className={classes.avatar} variant='square'>
            {<img src={logo} className={styles.avatar}></img>}
          </Avatar>
        }
        action={
          <ContainedButtons handler={handler} text={text} />
        }
        title={fullname}
        subheader={adress}
      />
      <CardMedia
          className={classes.media}
          image={centerImg}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {history}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  );
}

const MedcentersList = () => {
  // const [med_centers, setCenters] = useState([])
  const [leafMap, setMap] = useState(null)
  const [centers, setCenters] = useState([])

  let coordObject = {};

  interface ILats {
    latings: number[];
    fullname: string;
  }
    
  type NewType = ILats;
  const zoom = 16;

  const mapMove = useCallback(({latings, fullname}: NewType) => {
    leafMap.flyTo(latings, zoom);
    markerRefs[fullname].current.openPopup();
  }, [leafMap])
  
  const refs = med_centers.reduce((acc, value) => {
    acc[value.fullname] =  useRef(null);
    return acc;
  }, {});

  const markerRefs = med_centers.reduce((acc, value) => {
    acc[value.fullname] =  useRef(null);
    return acc;
  }, {});
 
  const handleClick = (id) => {
      refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });  
}

  const handleFly = (e) => {
    handleClick(e.target.parentNode.parentNode.parentNode.childNodes[2].textContent);
  };

  // const fetchCenters = getCollection('med_centers').then((data) => {
  //   setCenters(data);
  //   });

  // useEffect(() => {
  //   fetchCenters;
  // }, [])
  
  useEffect(() => {
    setCenters(med_centers);
  }, [])

  return (
    <div className={styles.MedcentersListWrapper}>
      <div className={styles.MedcentersListBlock}>
      {med_centers.map((e) => {
        
        const centerImg = e.img;
        const logo = e.logo;
        const fullname = e.fullname;
        const adress = e.adress;
        const history = e.history;
        const latings = e.coord.split(',').map( e => parseFloat(e) );
        const handler = () => mapMove({latings, fullname});
        const text = 'на карте';
        return (
          <div  key={e.name}
          ref={refs[e.fullname]}
          >
            {centerCard({centerImg, logo, fullname, adress, history, handler, text})}
          </div>     
        )
      })}

      </div>
      <MapContainer center={[53.9, 27.56667]} zoom={12} scrollWheelZoom={true} className={styles.leafletContainer} whenCreated={setMap}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {med_centers.map((e) => {      
          const coords = e.coord.split(',');
          coordObject[e.fullname] = coords;

          return (
            <Marker position={[parseFloat(coords[0]), parseFloat(coords[1])]} ref={markerRefs[e.fullname]} icon={ iconPerson }>
              <Popup className={styles.leafletPopup}>
                <img src={e.logo}></img>
                <div>{e.adress}</div>
                <div>{e.fullname}
                </div>
                <ContainedButtons handler={handleFly} text='Подробнее'/>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MedcentersList;
