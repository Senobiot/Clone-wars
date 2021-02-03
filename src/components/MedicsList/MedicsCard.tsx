import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';

import '../../global/variables.scss';
import styles from './MedicsCard.module.scss';

interface IProps {
  id: number;
  name: string;
  category: string;
  speciality: string;
  experience: string;
  imgSource: string;
}

const MedicsCard = ({ id, name, category, speciality, experience, imgSource }: IProps) => {
  return (
    <div className={styles.medicsCard}>
      <Avatar src={imgSource} className={styles.avatar}></Avatar>
      <div className={styles.medicFullname}>{name}</div>
      <div className={styles.medicCallbacks}>Пока нет отзывов</div>
      <div className={styles.medicExperience}>{experience}</div>
      <div className={styles.medicCategory}>{category}</div>
      <div className={styles.medicSpecs}>{speciality}</div>
      <Link to={`/MedicPage/${id}`}>
        <button value="Записаться" className={styles.medicAppointmentBtn}>
          Записаться
        </button>
      </Link>
    </div>
  );
};

export default MedicsCard;
