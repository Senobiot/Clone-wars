import React, { useState, useEffect } from 'react';
import styles from './Medcenters.module.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { med_centers } from '../../data/medcentersList';
import Button from '@material-ui/core/Button';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//   }),
// );

function ContainedButtons() {
  //   const classes = useStyles();

  return (
    <div className={styles.button}>
      <Button variant="contained">Подробнее</Button>
    </div>
  );
}

const MedcentersList = ({}) => {
  return (
    <div className={styles.MedcentersListWrapper}>
      <div className={styles.MedcentersListBlock}></div>
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
                <img src={'../' + e.logo}></img>
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
