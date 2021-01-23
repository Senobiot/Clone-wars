import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import userReducer from './reducers/userReducer';
import dataReducer from './reducers/dataReducer';

const rootReducer = combineReducers({
  user: userReducer,
  data: dataReducer,
  firebase,
  firestore: firestoreReducer,
});

export default rootReducer;
