import React from 'react';
import styles from './MainPage.modules.scss';

export function ServiseSearch() {
  return (
    <>
      <a href="/ServicesPage">
        <div className={styles.searchContainer}>
          <img src="https://img.icons8.com/clouds/120/000000/microscope.png" />
          <span>Service search</span>
        </div>
      </a>
    </>
  );
}
