import React from 'react';
import './Footer.scss';

export function Footer() {
  const links = [
    'https://github.com/AlinaSuhorebraya',
    'https://github.com/KLIM-nk01',
    'https://github.com/Senobiot',
    'https://github.com/cup0ra',
  ];
  return (
    <div className="footer">
        <div className="githubLinksContainer">
      {links.map((link, index) => {
        return (
          <a href={link} key={index}>
            {link}
          </a>
        );
      })}
    </div>
      <span>2021</span>
    </div>
  );
}
