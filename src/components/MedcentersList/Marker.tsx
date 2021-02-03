import L from 'leaflet';
import styles from './Medcenters.module.scss';

const iconPerson = new L.Icon({
  iconUrl: 'https://www.clipartmax.com/png/full/28-280780_pharmacy-medical-clipart-blue-medical-cross-symbol.png',
  // iconRetinaUrl: require('./assets/cross.png'),
  iconAnchor: null,
  popupAnchor: [0, -20],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(38, 38),
  className: styles.marker,
});

export { iconPerson };
