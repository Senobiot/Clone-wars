import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { PersonalPage } from '../PersonalPage';
import { ServicesPage } from '../ServicePage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import MedicsList from '../MedicsList/MedicsList';
import MedicPage from '../MedicPage/MedicPage';
import MedcentersList from '../MedcentersList/MedcentersList';
import { MainContainer } from '../MainPage/MainContainer';
import { MainPage } from '../MainPage2/MainPage';
import '../../global/variables.scss';
import '../../global/reset.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ArrowUp from '../ArrowUP/ArrowUp';

export default function App() {
  return (
    <BrowserRouter>
      <ArrowUp />
      <Header></Header>
      <Switch>
        <Route path={'/'} exact component={MainPage}></Route>
        <Route exact path={'/MedcentersList/'} component={MedcentersList}></Route>
        <Route exact path={'/MedicsList/'} component={MedicsList}></Route>
        <Route exact path={'/MedicPage/:id'} component={MedicPage}></Route>
        <Route exact path={'/ServicesPage/'} component={ServicesPage}></Route>
        <Route path={'/PersonalPage/'} component={PersonalPage}></Route>
        <Route path={'*'} component={NotFoundPage} />
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}
