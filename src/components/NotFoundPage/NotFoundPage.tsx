import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Notfound.module.scss';

export const NotFoundPage = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.article}>
        <span>404</span>
        <span>Нет такой страницы</span>
      </p>
      <Link to="/" className={styles.button}>
        На главную
      </Link>
    </div>
  );
};
