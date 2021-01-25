import { IUser } from '../../src/model/data.model';

export const UPDATE_USER_STATE = 'UPDATE_USER_STATE';
export const UPDATE_USER_AUTHORIZATION = 'UPDATE_USER_AUTHORIZATION';
export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const LOGOUT_USER = 'LOGOUT_USER';
export const UPDATE_USER_NEW = 'UPDATE_USER_NEW';

export const getUser = ({ firestore }, uid: string) => {
  return (dispatch, getState) => {
    firestore
      .collection('users')
      .doc(uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          dispatch({ type: UPDATE_USER_STATE, data });
        } else {
          console.log('No such document!');
        }
      });
  };
};

export const updateUser = ({ firestore }: any, doc: string, data: IUser) => {
  return (dispatch, getState) => {
    firestore
      .collection('users')
      .doc(doc)
      .set(data)
      .then(function () {
        console.log('Document successfully written!');
        dispatch({ type: UPDATE_USER_STATE, data });
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
  };
};
export const updateUserField = ({ firestore }, doc: string, name: string, value: string) => {
  return (dispatch, getState) => {
    firestore
      .collection('users')
      .doc(doc)
      .update({ name: value })
      .then(function () {
        console.log('Document successfully written!');
        dispatch({ type: UPDATE_USER_FIELD, value, field: name });
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
  };
};

export const updateUserAuthorization = (value: boolean) => {
  return {
    type: UPDATE_USER_AUTHORIZATION,
    value,
  };
};
export const updateNewUser = (value: boolean) => {
  return {
    type: UPDATE_USER_NEW,
    value,
  };
};

export const logoutUser = ({ firebase }) => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log(getState());
        dispatch({ type: LOGOUT_USER });
      })
      .catch((error) => {
        // An error happened.
      });
  };
};
