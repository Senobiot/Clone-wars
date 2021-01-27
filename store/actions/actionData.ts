import { ExtendedFirestoreInstance } from 'react-redux-firebase';
import { IData, IUser } from '../../src/model/data.model';

export const ADD_USER = 'ADD_USER';
export const GET_DATA = 'GET_DATA';

export const getData = (data: IData): { type: typeof GET_DATA; data: IData } => {
  return {
    type: GET_DATA,
    data,
  };
};

export const addUser = ({ firestore }: { firestore: ExtendedFirestoreInstance }, uid: string, data: IUser) => {
  return (dispatch, getState): void => {
    firestore
      .collection('users')
      .doc(uid)
      .set(data)
      .then(function () {
        console.log('Document successfully written!');
        dispatch({ type: ADD_USER, data });
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
  };
};
