import React from 'react';
import './MedicalList.scss';
import MedicsCard from './MedicsCard'
import MedicListCtrlPanel from './MedicListCtrlPanel'
import { medicsList } from '../../data/medicsList'

const MedicsList: React.FC = () => {
    return (
        <div className='medicsListPage'>
            <MedicListCtrlPanel />
            <div className="medicsListWrapper">
                {medicsList.map( (e, index) =>{
                    return (
                    <MedicsCard 
                    key={index}
                    name={e.name} 
                    category={e.category} 
                    speciality={e.speciality}
                    experience={e.experience}
                    imgSource={e.img}
                    /> 
                    )
                })}
            </div>
        </div>
    );
};

export default MedicsList;
