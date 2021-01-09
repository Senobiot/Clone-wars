import firebase from 'firebase';
import { db, provider } from '../../firebase';

export const getCollection = async (collection: string): Promise<any[]> => {
  let data = [];
  await db
    .collection(collection)
    .get()
    .then((snap) => {
      data = snap.docs.map((doc) => doc.data());
    });
  return data;
};

export const getDocument = async (collection: string, doc: string): Promise<any> => {
  let object: any = {};
  await db
    .collection(collection)
    .doc(doc)
    .get()
    .then((doc) => {
      if (doc.exists) {
        object = { ...object, ...doc.data() };
      } else {
        console.log('No such document!');
      }
    });
  return object;
};

export const setDocument = (collection: string, doc: string, object: any): void => {
  db.collection(collection)
    .doc(doc)
    .set(object)
    .then(function () {
      console.log('Document successfully written!');
    })
    .catch(function (error) {
      console.error('Error writing document: ', error);
    });
};

export const updateObjectField = (collection: string, doc: string, objectField: any): void => {
  db.collection(collection)
    .doc(doc)
    .update(objectField)
    .then(function () {
      console.log('Document successfully written!');
    })
    .catch(function (error) {
      console.error('Error writing document: ', error);
    });
};

export const deleteDocument = (collection: string, doc: string): void => {
  db.collection(collection)
    .doc(doc)
    .delete()
    .then(function () {
      console.log('Document successfully written!');
    })
    .catch(function (error) {
      console.error('Error removing document: ', error);
    });
};

export const signUp = (email: string, password: string, toggleDialog: () => void, setstateAlert: any): void => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      toggleDialog();
    })
    .catch((error) => {
      const errorMessage = error.message;
      setstateAlert({ open: true, message: errorMessage });
    });
};
export const signIn = (email: string, password: string, toggleDialog: () => void, setstateAlert: any): void => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      toggleDialog();
    })
    .catch((error) => {
      const errorMessage = error.message;
      setstateAlert({ open: true, message: errorMessage });
    });
};

export const singUpGoogle = (toggleDialog: () => void): void => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user: firebase.User = result.user;
      console.log(user.providerData);
      toggleDialog();
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
};
