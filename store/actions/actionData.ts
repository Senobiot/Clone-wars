import { UPDATE_USER_STATE } from './actionUser';

export const ADD_USER = 'ADD_USER';
export const GET_DATA = 'GET_DATA';

export const getData = (data) => {
  console.log('DATA', data);
  return {
    type: GET_DATA,
    data,
  };
};

export const addUser = ({ firestore }, uid: string, data: any) => {
  return (dispatch, getState) => {
    firestore
      .collection('users')
      .doc(uid)
      .set(data)
      .then(function () {
        console.log('Document successfully written!', uid);
        dispatch({ type: ADD_USER, data });
        /*  dispatch({ type: UPDATE_USER_STATE, data }); */
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
  };
};
