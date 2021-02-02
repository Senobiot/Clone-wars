import React, { useState, useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './MedicsListCtrlPanel.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { chooseCategoriesTile } from '../../../store/actions/actionCategories';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

interface Props {
  handler: Function;
}

const MedicListCtrlPanel: React.FC<Props> = ({ handler }) => {
  const dispatch = useDispatch();
  const allServices = useSelector((state)=> state.data.services_category);
  const currentCat = useSelector((state)=> state.categoryTile.categoryTile);
  const catBtnsArray = [];

  allServices.map((e) => {
    if (e.medic !== null && catBtnsArray.indexOf(e.id) === -1) {
      catBtnsArray.push(e.id);
    }
  });

  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    dispatch(chooseCategoriesTile(newValue));
  };

  useEffect(() => {
    setValue(currentCat);
  }, [currentCat]);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          className={styles.tabsWrapper}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Все врачи"
           className={styles.tabsTile}
            key={0} onClick={(e) => handler(e)}
            icon={<img src={'assets/services_logo/all.svg'} />}
             />
          {catBtnsArray.sort().map((e, index) => {
            const medicSpesc = allServices.find((elem) => elem.id === e).medic;
            const medicLogo = allServices.find((elem) => elem.id === e).logo;
            return <Tab label={medicSpesc} 
            className={styles.tabsTile}
             key={index + 1} onClick={(e) => handler(e)}
             icon={<img src={medicLogo} />}
             >
            </Tab>;
          })}
        </Tabs>
      </AppBar>
    </div>
  );
};

export default MedicListCtrlPanel;
