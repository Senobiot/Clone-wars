import React from 'react';
import './Footer.less';
import GitList from './GitList'

export default function Footer() {
  return (
    <div className = 'footer'>
      <GitList></GitList>
      <span>2021</span>
    </div>
  );
}
