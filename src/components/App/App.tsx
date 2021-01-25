import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ArrowUp } from '../ArrowUp';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { PersonalPage } from '../PersonalPage';
import { ServicesPage } from '../ServicePage';
import { NotFoundPage } from '../NotFoundPage';
import { MedicsList } from '../MedicsList';
import { MedicPage } from '../MedicPage';
import { MedcentersList } from '../MedcentersList';
import { MainPage } from '../MainPage/MainPage';
import '../../global/variables.scss';
import '../../global/reset.scss';

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
