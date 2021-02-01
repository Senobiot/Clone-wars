import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase, firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import userReducer from './reducers/userReducer';
import dataReducer from './reducers/dataReducer';
import servicesReducer from './reducers/servicesReducer';


const rootReducer = combineReducers({
  user: userReducer,
  data: dataReducer,
  service: servicesReducer,   
  firebase,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
