import React from 'react';
import './Footer.scss';
import GitList from './GitList';
import '../../global/reset.scss';

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <GitList></GitList>
            <span>2021</span>
        </div>
    );
};
export default Footer;
