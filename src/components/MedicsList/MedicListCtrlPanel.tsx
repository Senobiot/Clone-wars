import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './MedicsListCtrlPanel.module.scss';
import services_category from '../../data/servicesList';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const catBtnsArray = [];
services_category.map((e) => {
  if (e.medic !== null && catBtnsArray.indexOf(e.id) === -1) {
    catBtnsArray.push(e.id);
  }
});

interface Props {
  handler: Function;
  searchCat: number | null;
}

const MedicListCtrlPanel: React.FC<Props> = ({ handler, searchCat }) => {
  const classes = useStyles();
  const [value, setValue] = useState(searchCat ? searchCat : 0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };


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
            const medicSpesc = services_category.find((elem) => elem.id === e).medic;
            const medicLogo = services_category.find((elem) => elem.id === e).logo;
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
