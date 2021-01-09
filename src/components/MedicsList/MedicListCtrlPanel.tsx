import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './MedicListCtrlPanel.scss';
import services_category from '../../data/servicesList'

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: any) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
function MedicListCtrlPanel() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
             <Tab label='Все врачи' />
               {catBtnsArray.sort().map((e, index) => {
                return (
                    <Tab label={services_category.find(elem => elem.id === e).medic}
                    // style={{background:  `url('../../assets/categories_logo/${e}.png')`}}
                 />
               )})}        
          </Tabs>
        </AppBar>
      </div>
    );
  }

const catBtnsArray = [];

services_category.map(e => {
    if (e.services.serv_0 !== null && catBtnsArray.indexOf(e.id) === -1) {
        catBtnsArray.push(e.id);
    }
});

// function MedicListCtrlPanel() {
//     return (
//         <select className='MedicListCtrlPanel'>
//             <option key={0}>Выбрать врача по специальности</option>
//             {catBtnsArray.sort().map((e, index) => {
//                 return (
//                     <option key={index + 1}
//                     className='MedicListCtrlPanelBtn' data-tip ={e}
//                     style={{background:  `url('../../assets/categories_logo/${e}.png')`}}>

//                     {/* <span className="tooltiptext">
//                         {services_category.find(elem => elem.id === e).medic}
//                     </span> */}
                    
//                         {services_category.find(elem => elem.id === e).medic}
                    
//                     </option>
//                 );
//             })}
//         </select>
//     );
// }
export default MedicListCtrlPanel;