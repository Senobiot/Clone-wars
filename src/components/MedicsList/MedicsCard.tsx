import React from 'react';

import '../../global/variables.scss';
import './MedicsCard.scss';

interface Props {
    name: string;
    category: string;
    speciality: string;
    experience: string;
    imgSource: string;
  }

const MedicsCard: React.FC<Props> = ({name, category, speciality, experience, imgSource}) => {
    return (
        <div className='medicsCard'>
           <img src={imgSource} />
           <div className='medicFullname'>{name}</div>
           <div className='medicCallbacks'>Пока нет отзывов</div>
           <div className='medicExperience'>{experience}</div>
           <div className='medicCategory'>{category}</div>
           <div className='medicSpecs'>{speciality}</div>
           <button value='Записаться' className='medicAppointmentBtn'>Записаться</button>        
        </div>
    );
};

export default MedicsCard;