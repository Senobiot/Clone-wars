import React from 'react';
import { Link, useParams  } from 'react-router-dom';
import '../../global/variables.scss';
import styles from './MedicsCard.module.scss';

interface Props {
    name: string;
    category: string;
    speciality: string;
    experience: string;
    imgSource: string;
  }

const MedicsCard: React.FC<Props> = ({name, category, speciality, experience, imgSource}) => {
    const newTo = { 
        pathname: "/medicPage", 
        prop1: {name},
        prop2: {category}
      };
      
    return (
        <div className={styles.medicsCard}>
           <img src={imgSource} />
           <div className={styles.medicFullname}>{name}</div>
           <div className={styles.medicCallbacks}>Пока нет отзывов</div>
           <div className={styles.medicExperience}>{experience}</div>
           <div className={styles.medicCategory}>{category}</div>
           <div className={styles.medicSpecs}>{speciality}</div>
           <Link to={newTo}>
               <button value='Записаться' className={styles.medicAppointmentBtn}>Записаться</button>        
           </Link>
        </div>
    );
};

export default MedicsCard;