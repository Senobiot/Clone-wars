import React, { useCallback, useEffect } from 'react';
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
import { isEmpty, useFirestore, useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, getData } from '../../../store/actions/actionData';
import { Spinner } from '../Spinner/Spinner';
import { IData } from '../../model/data.model';

export default function App(): JSX.Element {
  const firestore = useFirestore();
  useFirestoreConnect(['users', 'med_centers', 'services_category']);
  const users = useSelector((state) => state.firestore.ordered.users);
  const med_centers = useSelector((state) => state.firestore.ordered.med_centers);
  const services_category = useSelector((state) => state.firestore.ordered.services_category);
  const dispatch = useDispatch();
  useEffect(() => {
    if (users && med_centers && services_category) {
      dispatch(getData({ users, med_centers, services_category }));
    }
  }, [users, med_centers, services_category]);

  const createTodo = useCallback((todo) => dispatch(addUser({ firestore }, todo)), [firestore]);
  const handle = () => {
    console.log(users);
  };
  if (!isLoaded(users, med_centers, services_category)) return <Spinner />;
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
        <Route path={'/User/'} component={User}></Route>
        <Route path={'*'} component={NotFoundPage} />
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}
