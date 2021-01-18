import React from 'react';
import styles from './MainPage.modules.scss';

export function DoctorSearch() {
  return (
    <>
      <a href="/MedicsList">
        <div className={styles.searchContainer}>
          <img src="https://img.icons8.com/doodle/120/000000/doctor-male.png" />
          <span>Search for a doctor</span>
        </div>
      </a>
    </>
  );
}
