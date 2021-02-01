import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './MedicslList.modlule.scss';
import MedicsCard from './MedicsCard';
import MedicListCtrlPanel from './MedicListCtrlPanel';
import { chooseCategories } from '../../../store/actions/actionCategories';

// import { medicsList } from '../../data/medicsList';

export const MedicsList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state)=> state.data.users);

  const currentCat = useSelector((state)=> state.category.category);

  const [medics, setCategories] = useState(data);
  const [category, setCategory] = useState('Все врачи');

  const handleCategoryChange = (e) => {
    chooseCategories(e.target.textContent);
    dispatch(chooseCategories(e.target.textContent));
};
  useEffect(() => {
    let currentData;
    if (category !== 'Все врачи') {
      currentData = data.filter((medic) => medic.speciality === category);
    } else {
      currentData = data;
    }
    setCategories(currentData);
  }, [category]);

  useEffect(() => {
    let currentData;
    if (currentCat !== 'Все врачи') {
      currentData = data.filter((medic) => medic.speciality === currentCat);
    } else {
      currentData = data;
    }
    setCategories(currentData);
  }, [currentCat]);

  return (
    <div className={styles.medicsListPage}>
      <MedicListCtrlPanel handler={handleCategoryChange} />
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

