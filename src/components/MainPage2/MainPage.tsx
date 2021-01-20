import React from 'react';
import styles from './MainPage.module.scss';
import { Link } from 'react-router-dom';

export function MainPage() {
    return (
      <>
        <div className={styles.mainPage}>
            <div className={styles.mainPageBtnWrapper}>
            {['Найти свой медцентр', ' Найти своего врача', ' Посмотреть услуги', 'Зайти в свой кабинет'].map((text, i) => {
                return (
                    <Link key={i} to={
                        i === 0 ? '/MedcentersList/' :
                        i === 1 ? '/MedicsList/' :
                        i === 2 ? '/ServicesPage/' :
                        '/PersonalPage/'
                       }>
                       <div className={styles.mainPageButton}>
                        {text}
                        </div>  
                       </Link>
                )
            
            })}
        </div>
        </div>
      </>
    );
  }