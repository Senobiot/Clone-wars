import { BaseExtendedFirebaseInstance, ExtendedFirestoreInstance } from 'react-redux-firebase';
import { IUser } from '../../src/model/data.model';

export const UPDATE_USER_STATE = 'UPDATE_USER_STATE';
export const UPDATE_USER_AUTHORIZATION = 'UPDATE_USER_AUTHORIZATION';
export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const LOGOUT_USER = 'LOGOUT_USER';
export const UPDATE_USER_NEW = 'UPDATE_USER_NEW';

export const getUser = ({ firestore }: { firestore: ExtendedFirestoreInstance }, uid: string) => {
  return (dispatch, getState): void => {
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

export const updateUser = ({ firestore }: { firestore: ExtendedFirestoreInstance }, doc: string, data: IUser) => {
  return (dispatch, getState): void => {
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
export const updateUserField = (
  { firestore }: { firestore: ExtendedFirestoreInstance },
  doc: string,
  name: string,
  value: string,
) => {
  return (dispatch, getState): void => {
    firestore
      .collection('users')
      .doc(doc)
      .update({ [name]: value })
      .then(function () {
        console.log('Document successfully written!');
        dispatch({ type: UPDATE_USER_FIELD, value, field: name });
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
  };
};

export const updateUserAuthorization = (value: boolean): { type: typeof UPDATE_USER_AUTHORIZATION; value: boolean } => {
  return {
    type: UPDATE_USER_AUTHORIZATION,
    value,
  };
};

export const updateUserGoodleAuthorization = (data: IUser): { type: typeof UPDATE_USER_STATE; data: IUser } => {
  return {
    type: UPDATE_USER_STATE,
    data,
  };
};

export const updateNewUser = (value: boolean): { type: typeof UPDATE_USER_NEW; value: boolean } => {
  return {
    type: UPDATE_USER_NEW,
    value,
  };
};

export const logoutUser = ({ firebase }: { firebase: BaseExtendedFirebaseInstance }) => {
  return (dispatch, getState): void => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: LOGOUT_USER });
      })
      .catch((error) => {
        // An error happened.
      });
  };
};
