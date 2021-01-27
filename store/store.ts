import firebase from '../firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const composeEnhancers = (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export const rrfProps = {
  firebase,
  config: {
    userProfile: 'users',
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
};
