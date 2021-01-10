import React from 'react';
import { useParams } from 'react-router';

interface Props {
    prop: object;
}

export const MedicPage: React.FC<Props> = ({prop}) => {

    console.log({prop});
    return (
        <div>
           <div>{prop}</div>
           <div>Пока нет отзывов</div>
           <div>{prop}</div>
        </div>
    );
};