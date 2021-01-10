import React,  { useState, useEffect } from 'react';
import styles from './MedicslList.modlule.scss';
import MedicsCard from './MedicsCard'
import MedicListCtrlPanel from './MedicListCtrlPanel'
import { medicsList } from '../../data/medicsList'

let data = medicsList;

const MedicsList: React.FC = () => {
    const [medics, setCategories] = useState(data)
    const [category, setCategory] = useState('Все врачи')

    const handleCategoryChange = (e) => {
           setCategory(e.target.textContent);
    }

    useEffect(() => {
        let allMedics = medicsList;
        if (category !== 'Все врачи') {
            allMedics = allMedics.filter(medic => medic.speciality === category)
        } 
        else {
            allMedics = medicsList;
        }
        setCategories(allMedics)
    }, [category])

    return (
        <div className={styles.medicsListPage}>
            <MedicListCtrlPanel 
            handler={handleCategoryChange}
            />
            <div className={styles.medicsListWrapper}>
                {medics.map( (e, index) =>{
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
