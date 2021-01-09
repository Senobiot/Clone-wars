import React from 'react';
import styles from './Footer.module.scss'

export function Footer() {
  const links = [
    'https://github.com/AlinaSuhorebraya',
    'https://github.com/KLIM-nk01',
    'https://github.com/Senobiot',
    'https://github.com/cup0ra',
  ];
  return (
    <div className={styles.footer}>
        <div className={styles.githubLinksContainer}>
      {links.map((link, index) => {
        return (
          <a href={link} key={index}>
            @{link.replace('https://github.com/', '')}
          </a>
        );
      })}
    </div>
      <span>2021</span>
    </div>
  );
}
