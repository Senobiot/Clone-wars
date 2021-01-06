import React from 'react';
import './Footer.less';

export default function GitList() {
    const links = ['https://github.com/AlinaSuhorebraya', 'https://github.com/KLIM-nk01', 'https://github.com/Senobiot','https://github.com/cup0ra']
  return (
    <div className = 'gitContainer'>
    {links.map(link=>{
        return <a href = {link}>{link}</a>
    })}
    </div>
  );
}