import React from 'react';
import {Footer} from '../Footer';
import {Header} from '../Header';
import MedicsList from '../MedicsList/MedicsList';
import MedicPage from '../MedicPage/MedicPage';
import MedcentersList from '../MedcentersList/MedcentersList';
import '../../global/variables.scss';
import '../../global/reset.scss';
import { BrowserRouter, Route} from "react-router-dom";

export default function App() {
  return (
    <>
     <BrowserRouter>
      <Header></Header>
          <Route path={'/'} exact component={null}></Route>
          <Route path={'/MedcentersList/'} component={MedcentersList}></Route>
          <Route path={'/MedicsList/'} component={MedicsList}></Route>
          <Route path={'/MedicPage/:id'} component={MedicPage}></Route>
        <Footer></Footer> 
     </BrowserRouter>
    </>
  );
}
