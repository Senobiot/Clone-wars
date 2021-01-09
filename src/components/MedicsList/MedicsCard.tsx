import React from 'react';

import '../../global/variables.scss';
import './MedicsCard.scss';

const MedicsCard: React.FC = () => {
    // const classes = useStyles();

    return (
        <div className='medicsCard'>
           <img src={'../../assets/pic2.jpg'} />
           <div className='medicFullname'>Козыро Инна Александровна</div>
           <div className='medicCallbacks'>Пока нет отзывов</div>
           <div className='medicExperience'>Стаж работы: 15 лет</div>
           <div className='medicCategory'>Высшая квалификационная категория</div>
           <div className='medicSpecs'>Врач-аллерголог</div>
           <button value='Записаться' className='medicAppointmentBtn'>Записаться</button>        
        </div>
    );
};

export default MedicsCard;