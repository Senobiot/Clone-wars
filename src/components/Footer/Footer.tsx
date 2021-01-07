import React from 'react';
import './Footer.scss';
import GitList from './GitList'
import "../../global/reset.scss";

export default function Footer() {
  return (
    <div className = 'footer'>
      <GitList></GitList>
      <span>2021</span>
    </div>
  );
}
