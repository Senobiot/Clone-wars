import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase, firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import userReducer from './reducers/userReducer';
import dataReducer from './reducers/dataReducer';
import {categoriesReducer, categoriesTileReducer} from './reducers/categoriesReducer';
import servicesReducer from './reducers/servicesReducer';

const rootReducer = combineReducers({
  category: categoriesReducer,
  categoryTile: categoriesTileReducer,
  service: servicesReducer,  
  user: userReducer,
  data: dataReducer,
  firebase,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
