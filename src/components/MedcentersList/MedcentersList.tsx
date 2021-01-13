import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Medcenters.module.scss';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent, useMapEvents } from 'react-leaflet';
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
import { map } from 'leaflet';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "100%",
      marginBottom: 5,
      borderRadius: 0,
      cursor: 'pointer'
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
      display: 'flex'
    },
  }),
);
interface Props {
  centerImg: string;
  logo: string;
  fullname: string;
  adress: string;
  history: string;
}
// 
function RecipeReviewCard({centerImg, logo, fullname, adress, history} : Props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar} variant='square'>
            {<img src={logo} className={styles.avatar}></img>}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={fullname}
        subheader={adress}
      />
      <CardMedia
          className={classes.media}
          image={centerImg}
          title="Paella dish"
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
interface IButton {
  handler: Function;
}

function ContainedButtons({handler} : IButton) {
  return (
    <div className={styles.button}>
      <Button variant="contained" onClick={(e) => handler(e)}>Подробнее</Button>
    </div>
  );
}

const MedcentersList = () => {
  // const [med_centers, setCenters] = useState([])
  const [leafMap, setMap] = useState(null)
  const [centers, setCenters] = useState([])
  const [flu, setFlying] = useState(false);
  let coordObject = {};


    const center = [51.505, -0.09];
    const zoom = 13;

    const mapMove = useCallback(() => {
      leafMap.flyTo([51.505, -0.09], zoom)
    }, [leafMap])
  

  const refs = med_centers.reduce((acc, value) => {
    acc[value.fullname] =  useRef(null);
    return acc;
  }, {});
 
  const handleClick = id =>
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

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

        return (
          <div  key={e.name}
          ref={refs[e.fullname]}>
            {RecipeReviewCard({centerImg, logo, fullname, adress, history})}
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
            <Marker position={[parseFloat(coords[0]), parseFloat(coords[1])]}>
              <Popup className={styles.leafletPopup}>
                <img src={e.logo}></img>
                <div onClick={mapMove}>{e.adress}</div>
                <div>{e.fullname}
                </div>
                <ContainedButtons handler={handleFly}/>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MedcentersList;
