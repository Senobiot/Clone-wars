import React from 'react';
import { BrowserRouter, Route, useParams} from "react-router-dom";


interface Props {
    name: string;
  }

export const MedicPage: React.FC<Props> = ({name}) => {
    const newTo = { 
        pathname: "/medicPage", 
        prop1: {name},
      };
      
    return (
        <div>
           <div>{name}</div>
           <div>Пока нет отзывов</div>
        </div>
    );
};

export default MedicPage;