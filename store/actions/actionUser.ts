import { BaseExtendedFirebaseInstance, ExtendedFirestoreInstance } from 'react-redux-firebase';
import { IUser } from '../../src/model/data.model';

export const UPDATE_USER_STATE = 'UPDATE_USER_STATE';
export const UPDATE_USER_AUTHORIZATION = 'UPDATE_USER_AUTHORIZATION';
export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const LOGOUT_USER = 'LOGOUT_USER';
export const UPDATE_USER_NEW = 'UPDATE_USER_NEW';
export const GET_APPOINTMENT = 'GET_APPOINTMENT';
export const GET_APPOINTMENT_DOCTOR = 'GET_APPOINTMENT_DOCTOR';
export const ADD_APPOINTMENT = 'ADD_APPOINTMENT';
export const UPDATE_APPOINTMENT_USER = 'UPDATE_APPOINTMENT_USER';
export const UPDATE_APPOINTMENT_DOCTOR = 'UPDATE_APPOINTMENT_DOCTOR';
export const REMOVE_APPOINTMENT = 'REMOVE_APPOINTMENT';
export const CHANGE_AVAILABLE = 'CHANGE_AVAILABLE';

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

export const getAppointmentUser = ({ firestore }: { firestore: ExtendedFirestoreInstance }, uid: string) => {
  return (dispatch, getState): void => {
    firestore
      .collection('appointment')
      .doc(uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = Object.values(doc.data());
          dispatch({ type: GET_APPOINTMENT, data });
        } else {
          console.log('No such document!');
        }
      });
  };
};

export const addAppointment = ({ firestore }: { firestore: ExtendedFirestoreInstance }, uid: string) => {
  return (dispatch, getState): void => {
    firestore.collection('appointment').doc(uid).set({});
  };
};

export const addAppointmentItemUser = (
  { firestore }: { firestore: ExtendedFirestoreInstance },
  uid: string,
  obj: any,
) => {
  return (dispatch, getState): void => {
    firestore
      .collection('appointment')
      .doc(uid)
      .update(obj)
      .then(function () {
        console.log('Document successfully written!');
        const data = Object.values(obj);
        dispatch({ type: UPDATE_APPOINTMENT_USER, data });
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
  };
};

export const getAppointmentItemDoctor = ({ firestore }: { firestore: ExtendedFirestoreInstance }, uid: string) => {
  return (dispatch, getState): void => {
    firestore
      .collection('appointment')
      .doc(uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = Object.values(doc.data());
          console.log('Document successfully written!');
          dispatch({ type: GET_APPOINTMENT_DOCTOR, data });
        } else {
          console.log('No such document!');
        }
      });
  };
};

export const removeAppointment = ({ firestore }: { firestore: ExtendedFirestoreInstance }, uid: string, id: any) => {
  return (dispatch, getState): void => {
    firestore
      .collection('appointment')
      .doc(uid)
      .update({ [id]: firestore.FieldValue.delete() })
      .then(function () {
        console.log('Document successfully written!');
        const value = id;
        dispatch({
          type: REMOVE_APPOINTMENT,
          value,
        });
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
  };
};

export const changeAvailableDoctor = (
  { firestore }: { firestore: ExtendedFirestoreInstance },
  uid: string,
  obj: any,
) => {
  return (dispatch, getState): void => {
    firestore
      .collection('appointment')
      .doc(uid)
      .update({ [obj.id]: obj })
      .then(function () {
        console.log('Document successfully written!');
        dispatch({
          type: CHANGE_AVAILABLE,
          obj,
        });
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
  };
};
