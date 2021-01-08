import React from 'react';
import './MedicalList.scss';
import MedicsCard from './MedicsCard'
import { medicsArray } from './medicsArray'





const MedicsList: React.FC = () => {
    return (
        <div className="medicsListWrapper">
            {medicsArray.map(e =>{
                return (
                   <MedicsCard name={e.name} category={e.category} speciality={e.speciality} /> 
                )
            })}
        </div>
    );
};

export default MedicsList;
