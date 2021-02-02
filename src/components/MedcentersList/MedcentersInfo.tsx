import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './MedcentersInfo.module.scss';
import services_category from '../../data/servicesList';
import { medicsList } from '../../data/medicsList';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }),
);

interface ICat {
    category: {};
    centerName: string;
}

export default function MedcentersInfo({category, centerName} : ICat) {
    const classes = useStyles();
    const categoryEntries = Object.entries(category);

  return (
    <div className={classes.root}>
        {
        categoryEntries.map( (cats, idx) => {
        return (
        <Accordion key={idx}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
              <Typography>
                <img src={services_category.find((elem) => elem.id === cats[0]).logo} className={styles.avatar}></img>
                <span>{services_category.find((elem) => elem.id === cats[0]).category_name}</span>
               </Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.detailsWrapped}>
                <Accordion className={styles.details}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={styles.pService}>Наши врачи: </Typography>
                    </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={styles.pService}>
                            {
                             medicsList.map( (e,idx) => {
                                 if (e.medcenter === centerName &&
                                    e.speciality === services_category.find((elem) => elem.id === cats[0]).medic
                                    ) {
                                     return (
                                         <span key={idx} className={styles.doctorTile}>
                                             <img src={e.img} className={styles.doctorTileImg}/>
                                             <span>{e.name}</span>
                                             <Link to={`/MedicPage/${e.id}`}>
                                                <button value="Записаться" className={styles.medicAppointmentBtn}>
                                                Записаться
                                                </button>
                                            </Link>
                                         </span>
                                     )
                                 }
                             })
                            }
                            </Typography>
                        </AccordionDetails> 
                </Accordion>
                <Accordion className={styles.details}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={styles.pService}>Наши услуги: </Typography>
                    </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={styles.pService}>
                                {
                                Object.values(services_category.find((elem) => elem.id === cats[0]).services).sort().map( (e, idx)=>{
                                    if (e) {
                                        return (
                                            <span key={idx + 20} className={styles.spanService}>&#9745; {e}</span>
                                        )
                                    }
                                })}
                            </Typography>
                    </AccordionDetails> 
                </Accordion>
                <Accordion className={styles.details}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={styles.pService}>Наши цены: </Typography>
                    </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={styles.pService}>{                      
                                Object.values(cats[1]).map((e, idx)=> {
                                    const a = Object.keys(e);
                                    const b = Object.values(e);
                                    const c = (services_category.find((elem) => elem.id === cats[0]).services)[a];
                                    return (
                                        <span key={idx + 40} className={styles.spanService}>{c}: <b>{b} руб.</b></span>
                                    )
                                })
                                }
                            </Typography>
                    </AccordionDetails> 
                </Accordion>
            </AccordionDetails> 
       </Accordion>
        )
        })}

    </div>
  );
}