import React from 'react';
import styles from './MainPage.modules.scss';
import {ServiseSearch} from './ServiseSearch';
import {DoctorSearch} from './DoctorSearch';

export function MainContainer() {

  return (
    <>
      <div className={styles.mainContainer}>
        <DoctorSearch></DoctorSearch>
         <ServiseSearch></ServiseSearch>
     </div>
    </>
  )
}

