import React from 'react';
import {Footer} from '../Footer';
import {Header} from '../Header';
import MedicsList from '../MedicsList/MedicsList';
import MedicPage from '../MedicPage/MedicPage';
import '../../global/variables.scss';
import '../../global/reset.scss';
import { Switch } from '@material-ui/core';
import ReactDOM from "react-dom";
import { BrowserRouter, Route} from "react-router-dom";

export default function App() {
  return (
    <>
      <Header></Header>
        <BrowserRouter>
          <Route path={'/'} exact component={MedicsList}>
          </Route>
          {/* <Route path={'/MedicPage'} exact component={MedicPage}>
            <MedicPage></MedicPage> */}
          <Route exact path='/MedicPage/:id' component={MedicPage}>
          </Route>
        </BrowserRouter>
      <Footer></Footer>
    </>
  );
}
