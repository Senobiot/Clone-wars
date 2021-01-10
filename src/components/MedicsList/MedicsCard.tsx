import React from 'react';
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

    return (
        <div className={styles.medicsCard}>
           <img src={imgSource} />
           <div className={styles.medicFullname}>{name}</div>
           <div className={styles.medicCallbacks}>Пока нет отзывов</div>
           <div className={styles.medicExperience}>{experience}</div>
           <div className={styles.medicCategory}>{category}</div>
           <div className={styles.medicSpecs}>{speciality}</div>
           <button value='Записаться' className={styles.medicAppointmentBtn}>Записаться</button>        
        </div>
    );
};

export default MedicsCard;