import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { PersonalPage } from '../PersonalPage';
import { ServicesPage } from '../ServicePage';
import MedicsList from '../MedicsList/MedicsList';
import MedicPage from '../MedicPage/MedicPage';
import '../../global/variables.scss';
import '../../global/reset.scss';
import { BrowserRouter, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Route path={'/'} exact component={null}></Route>
        <Route path={'/MedicsList/'} component={MedicsList}></Route>
        <Route path={'/MedicPage/:id'} component={MedicPage}></Route>
        <Route path={'/ServicesPage/'} component={ServicesPage}></Route>
        <Route path={'/PersonalPage/'} component={PersonalPage}></Route>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}
