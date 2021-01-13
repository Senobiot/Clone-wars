import React, { useState, useEffect } from 'react';
import styles from './Medcenters.module.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Button from '@material-ui/core/Button';
import { getCollection } from '../../services/updateFirebase';

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
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
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
      backgroundColor: red[500],
    },
  }),
);
interface Props {
  img: string;
}

function RecipeReviewCard( {img} : Props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
          className={classes.media}
          image={img}
          title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
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
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}


function ContainedButtons() {
  return (
    <div className={styles.button}>
      <Button variant="contained">Подробнее</Button>
    </div>
  );
}

const MedcentersList = () => {
  const [med_centers, setCenters] = useState([])
  const fetchCenters = getCollection('med_centers').then((data) => {
    setCenters(data);
    });

  useEffect(() => {
    fetchCenters;
  }, [])
  

  return (
    <div className={styles.MedcentersListWrapper}>
      <div className={styles.MedcentersListBlock}>
      {med_centers.map((e) => {
        const img = e.logo;
        return (
          <div>
            {/* {RecipeReviewCard({img})} */}
          </div>     
        )
      })}

      </div>
      <MapContainer center={[53.9, 27.56667]} zoom={12} scrollWheelZoom={true} className={styles.leafletContainer}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {med_centers.map((e) => {
          const coords = e.coord.split(',');
          return (
            <Marker position={[parseFloat(coords[0]), parseFloat(coords[1])]}>
              <Popup className={styles.leafletPopup}>
                <img src={e.logo}></img>
                <div>{e.adress}</div>
                <div>{e.fullname}</div>
                {ContainedButtons()}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MedcentersList;
