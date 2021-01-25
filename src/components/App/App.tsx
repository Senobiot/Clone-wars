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
import { isEmpty, useFirestore, useFirestoreConnect, isLoaded, useFirebase } from 'react-redux-firebase';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../../../store/actions/actionData';
import { Spinner } from '../Spinner/Spinner';
import { IData, IMedicsList, IMmedCenters } from '../../model/data.model';
import { getImageUrl } from '../../services/updateFirebase';
import { med_centers } from '../../data/medcentersList.js';
import { medicsList } from '../../data/medicsList.js';
import { db } from '../../../firebase';
import { getUser, updateNewUser, updateUserAuthorization } from '../../../store/actions/actionUser';
import { Data } from '@react-google-maps/api';

const useConnectFirestore = () => {
  const dispatch = useDispatch();
  useFirestoreConnect(['users', 'med_centers', 'services_category']);
  const data = useSelector((state) => state.firestore.ordered.med_centers);

  useEffect(() => {
    if (data) {
      dispatch(getData(data));
    }
  }, [data]);
  const isLouadedData = isLoaded(data);
  return isLouadedData;
};

export default function App(): JSX.Element {
  /*   medicsList.forEach(async (item: IMmedCenters) => {
    const img = await getImageUrl(item.img.slice(6));
    const newCityRef = db.collection('users').doc();
    const id = newCityRef.id;
    // later...
    newCityRef.set({ ...item, uid: id, img: img });
  }); */
  /* console.log(medicsList); */
  const auth = useSelector((state) => state.firebase.auth);
  const firestore = useFirestore();
  const firebase = useFirebase();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  /* const isLoad = useConnectFirestore(); */
  /* const createTodo = useCallback((todo) => dispatch(addUser({ firestore }, todo)), [firestore]); */
  console.log('app');
  useEffect(() => {
    if (isLoaded(auth) && !isEmpty(auth)) {
      console.log(auth.uid);
      dispatch(getUser({ firestore }, auth.uid));
      dispatch(updateUserAuthorization(true));
    }
  }, [auth]);

  /*  if (!isLoad) return <Spinner />; */
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
        <Route exact path={'/User/'} component={User}></Route>
        <Route path={'*'} component={NotFoundPage} />
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}
