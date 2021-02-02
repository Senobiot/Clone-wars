import React, { useCallback, useEffect, useState } from 'react';
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
import { User } from '../User';
import '../../global/variables.scss';
import '../../global/reset.scss';
import { isEmpty, useFirestore, useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../../../store/actions/actionData';
import { Spinner } from '../Spinner/Spinner';
import { getAppointmentUser, getUser, updateUserAuthorization } from '../../../store/actions/actionUser';
import { IState } from '../../model/data.model';
import { AppointmentDoctor } from '../Appointment';

const useConnectFirestore = () => {
  const dispatch = useDispatch();
  useFirestoreConnect(['users', 'med_centers', 'services_category', 'appointment']);
  const users = useSelector((state: IState) => state.firestore.ordered.users);
  const med_centers = useSelector((state: IState) => state.firestore.ordered.med_centers);
  const services_category = useSelector((state: IState) => state.firestore.ordered.services_category);
  const isLouadedData = isLoaded(users, med_centers, services_category);
  useEffect(() => {
    if (isLouadedData) {
      dispatch(getData({ users, med_centers, services_category }));
    }
  }, [isLouadedData]);

  return isLouadedData;
};

export default function App(): JSX.Element {
  const auth = useSelector((state: IState) => state.firebase.auth);
  const firestore = useFirestore();
  const dispatch = useDispatch();
  /* const isLoad = useConnectFirestore(); */
  useEffect(() => {
    if (isLoaded(auth) && !isEmpty(auth)) {
      dispatch(getUser({ firestore }, auth.uid));
      dispatch(getAppointmentUser({ firestore }, auth.uid));
      dispatch(updateUserAuthorization(true));
    }
  }, [auth]);
  /* if (!isLoad) return <Spinner />; */
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
        <Route path={'/AppointmentDoctor/'} component={AppointmentDoctor}></Route>
        <Route exact path={'/User/'} component={User}></Route>
        <Route path={'*'} component={NotFoundPage} />
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}
