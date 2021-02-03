import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IData } from '../../model/data.model';
import { useHistory } from 'react-router-dom';
import { Spinner } from '../Spinner/Spinner';
import { updateService } from '../../../store/actions/actionService';
import { detailedServ } from '../../data/searchKeys';

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import styles from './ServicePage.module.scss';

interface Props {
  element: { services: any; category_name: string; medic: string; id: string };
  index: number;
  imgSrc: string;
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.default,
  },
  nested: {
    paddingLeft: theme.spacing(3),
  },
  category: {
    fontSize: '25px',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
    },
  },
}));

function BlockList({ element, index, imgSrc }: Props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  let count = 0;

  const handleCategoryChange = (e) => {
    dispatch(updateService({ centers: detailedServ[e.target.textContent], query: e.target.textContent }));
    history.push({
      pathname: '/MedcentersList',
    });
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      key={index}
      component="nav"
      subheader={
        <ListItem component="div" className={classes.category} key={index}>
          <ListItemIcon key={index}>
            <img src={imgSrc} className={styles.servicePageLogo} />
          </ListItemIcon>
          {element.category_name}
        </ListItem>
      }
      classes={{ root: classes.root }}
    >
      {Object.values(element.services).map((value: string | null, index) => {
        while (count < 3 && value != null && !value.match(/Повторный/)) {
          count++;
          return (
            <ListItem button key={index}>
              <span onClick={handleCategoryChange}>
                {value.match(/Первичный/) ? value.replace(/Первичный прием/, 'Приём') : value}
              </span>{' '}
            </ListItem>
          );
        }
      })}
      <ListItem button onClick={handleClick} key={index}>
        <Link key={index}>
          <b>Показать все</b>
        </Link>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {Object.values(element.services).map((value: string | null, key) => {
            while (count >= 3 && value != null && !value.match(/Повторный/) && !value.match(/Первичный/)) {
              return (
                <ListItem button className={classes.nested} key={key}>
                  {' '}
                  <Link onClick={handleCategoryChange}>{value}</Link>{' '}
                </ListItem>
              );
            }
          })}
        </List>
      </Collapse>
    </List>
  );
}

export function ServicesPage(): JSX.Element {
  const dataState: IData = useSelector((state) => state.data);
  return (
    <div className={styles.container}>
      {!dataState.services_category ? (
        <Spinner />
      ) : (
        dataState.services_category.map((element, index) => {
          return <BlockList element={element} imgSrc={element.logo} index={index} key={index}></BlockList>;
        })
      )}
    </div>
  );
}
