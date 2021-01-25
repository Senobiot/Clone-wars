import React, { useState, useEffect } from 'react';
import styles from './MedicslList.modlule.scss';
import MedicsCard from './MedicsCard';
import MedicListCtrlPanel from './MedicListCtrlPanel';
import { medicsList } from '../../data/medicsList';
import { useLocation } from "react-router-dom";



export const MedicsList = () => {
  const data = medicsList;
  const location = useLocation();
  const [medics, setCategories] = useState(location.category ? data.filter((medic) => medic.speciality === location.category) : data);
  const [category, setCategory] = useState(location.category ? location.category : 'Все врачи');

   const handleCategoryChange = (e) => {
    setCategory(e.target.textContent);
  };
  const searchCat = location.category ?  location.categoryIndex : null;

  useEffect(() => {
    let currentData;
    if (category !== 'Все врачи') {
      currentData = data.filter((medic) => medic.speciality === category);
    } else {
      currentData = data;
    }
    setCategories(currentData);
  }, [category]);

  return (
    <div className={styles.medicsListPage}>
      <MedicListCtrlPanel handler={handleCategoryChange} searchCat={searchCat} />
      <div className={styles.medicsListWrapper}>
        {medics.map((e, index) => {
          return (
            <MedicsCard
              key={index}         
              id={e.id}
              name={e.name}
              category={e.category}
              speciality={e.speciality}
              experience={e.experience}
              imgSource={e.img}
            />
          );
        })}
      </div>
    </div>
  );
};

