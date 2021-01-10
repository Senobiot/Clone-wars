import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {Footer} from '../Footer';
import {Header} from '../Header';
import MedicsList from '../MedicsList/MedicsList'
import {MedicPage} from '../MedicPage/MedicPage'
import '../../global/variables.scss';
import '../../global/reset.scss';
import { Switch } from '@material-ui/core';

export default function App() {
  return (
    <>
      <Header></Header>
      <BrowserRouter>
          <Route path={'/'} exact component={MedicsList}/>
          <Route path={'/medicPage'} component={MedicPage}/>   
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}
