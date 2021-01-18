import React from 'react';
import styles from './MainPage.modules.scss';
import { ServiseSearch } from './ServiseSearch';
import { DoctorSearch } from './DoctorSearch';

export function MainContainer() {
  return (
    <>
      <div className={styles.mainContainer}>
        <span className={styles.tagline}>Сreated for your health!</span>
        <DoctorSearch></DoctorSearch>
        <ServiseSearch></ServiseSearch>
      </div>
    </>
  );
}
