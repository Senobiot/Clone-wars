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
import '../../global/variables.scss';
import '../../global/reset.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ArrowUp from '../ArrowUP/ArrowUp';
import { User } from '../User';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ArrowUp />
      <Header></Header>
      <Switch>
        <Route path={'/MainContainer'} exact component={MainContainer}></Route>
        <Route exact path={'/'} component={MedcentersList}></Route>
        {/* <Route exact path={'/MedcentersList/'} component={MedcentersList}></Route> */}
        <Route exact path={'/MedicsList/'} component={MedicsList}></Route>
        <Route exact path={'/MedicPage/:id'} component={MedicPage}></Route>
        <Route exact path={'/ServicesPage/'} component={ServicesPage}></Route>
        <Route path={'/PersonalPage/'} component={PersonalPage}></Route>
        <Route path={'*'} component={NotFoundPage} />
        <Route path={'/User'} component={User}></Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}
