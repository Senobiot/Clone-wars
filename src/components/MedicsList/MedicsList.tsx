import React from 'react';
import './MedicalList.scss';
import MedicsCard from './MedicsCard'


const MedicsList: React.FC = () => {
    // const classes = useStyles();

    return (
        <div className="medicsListWrapper">
            <MedicsCard />
            <MedicsCard />
            <MedicsCard />
            <MedicsCard />
        </div>
    );
};

export default MedicsList;
