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
import { useSelector } from 'react-redux';
import { IData } from '../../model/data.model';
import { Spinner } from '../Spinner/Spinner';

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
            <ListItem button key={index}>
              <Link>{value}</Link>
            </ListItem>
          );
        }
      })}
      <ListItem button onClick={handleClick} key={index}>
        <Link key={index}>more</Link>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {Object.values(element.services).map((value, key) => {
            while (count >= 3 && value != null) {
              return (
                <ListItem button className={classes.nested} key={key}>
                  {' '}
                  <Link>{value}</Link>{' '}
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
