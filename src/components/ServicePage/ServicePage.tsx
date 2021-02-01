import React from 'react';
import styles from './ServicePage.module.scss';

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { useSelector, useDispatch } from 'react-redux';
import { IData, IState } from '../../model/data.model';
import { useHistory } from 'react-router-dom';
import { Spinner } from '../Spinner/Spinner';
import { updateService } from '../../../store/actions/actionService';

interface Props {
  element: { services: any; category_name: string; medic: string; id: string };
  index: number;
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
    alignItems: 'flex-start',
  },
}));

function BlockList({ element, index }: Props) {
  const dataState: any = useSelector((state: IState) => state.service);
  const dispatch = useDispatch();

  let history = useHistory();

  const handleCategoryChange = (e) => {
    let arr = [];
    Object.values(Object.entries(element.services)).forEach((serv) => {
      if (serv[1] == e.target.textContent) {
        let id = element.id;
        let name_service = serv[0];
        arr.push(id);
        arr.push(name_service);

      }

    });
console.log(arr);
    dispatch(updateService(arr));
    history.push({
      pathname: '/MedcentersList',
      state: { service: arr },
    });
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const classes = useStyles();
  let count = 0;

  const [open, setOpen] = React.useState(false);

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
            <SendIcon />
          </ListItemIcon>
          {element.category_name}
        </ListItem>
      }
      classes={{ root: classes.root }}
    >
      {Object.values(element.services).map((value, index) => {
        while (count < 3 && value != null) {
          count++;
          return (
            // to = {{ pathname: "/MedcentersList", state: { category: category } }}
            <ListItem button key={index}>
              <span onClick={handleCategoryChange}>{value}</span>{' '}
            </ListItem>
          );
        }
      })}
      <ListItem button key={index}>
        <Link key={index}>...</Link>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {Object.values(element.services).map((value, key) => {
            while (count >= 3 && value != null) {
              return (
                <ListItem button className={classes.nested} key={key}>
                  {' '}
                  <Link
                    // to={{ pathname: '/MedcentersList', state: { category: category } }}
                    onClick={handleCategoryChange}
                  >
                    {value}
                  </Link>{' '}
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
          return <BlockList element={element} index={index} key={index}></BlockList>;
        })
      )}
    </div>
  );
}
