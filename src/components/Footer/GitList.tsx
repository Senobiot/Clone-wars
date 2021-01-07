import React from 'react';
import './Footer.scss';

const GitList: React.FC = () => {
    const links = [
        'https://github.com/AlinaSuhorebraya',
        'https://github.com/KLIM-nk01',
        'https://github.com/Senobiot',
        'https://github.com/cup0ra',
    ];
    return (
        <div className="gitContainer">
            {links.map((link, ind) => {
                return (
                    <a href={link} key={ind}>
                        {link}
                    </a>
                );
            })}
        </div>
    );
};

export default GitList;
