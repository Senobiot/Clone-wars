import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { PersonalPage } from '../PersonalPage';
import { ServicesPage } from '../ServicePage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import MedicsList from '../MedicsList/MedicsList';
import MedicPage from '../MedicPage/MedicPage';
import MedcentersList from '../MedcentersList/MedcentersList';
import '../../global/variables.scss';
import '../../global/reset.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact  path={'/'} component={null}></Route>
          <Route exact path={'/MedcentersList/'} component={MedcentersList}></Route>
          <Route exact path={'/MedicsList/'} component={MedicsList}></Route>
          <Route exact path={'/MedicPage/:id'} component={MedicPage}></Route>
          <Route exact path={'/ServicesPage/'} component={ServicesPage}></Route>
          <Route path={'/PersonalPage/'} component={PersonalPage}></Route>
          <Route path={'*'} component={NotFoundPage}/>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}
