import React, { useState } from 'react';
import styles from './ArrowUP.module.scss';

export const ArrowUp = () => {
  const [isActive, setActive] = useState(null);
  const handler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const scrollFunc = () => {
    const y = window.scrollY;
    if (y > 1000) {
      setActive('true');
    } else {
      setActive(null);
    }
  };
  window.addEventListener('scroll', scrollFunc);
  return (
    <div className={isActive ? styles.show : styles.hide} onClick={handler}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
