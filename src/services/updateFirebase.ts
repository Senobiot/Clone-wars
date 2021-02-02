import { db, storageRef, provider, auth } from '../../firebase';
import firebase from 'firebase';
import { IUser } from '../model/data.model';

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

export const addUser = async (object: any) => {
  const uid = auth.currentUser.uid;
  await setDocument('users', uid, { ...object, uid: uid });
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

export const signUp = (state: IUser, setstateAlert: any): void => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(state.email, state.password)
    .then(async (user) => {
      console.log(user.user.providerData);
      addUser(state);
    })
    .catch((error) => {
      const errorMessage = error.message;
      setstateAlert({ open: true, message: errorMessage });
    });
};
export const signIn = (state: IUser, setstateAlert: any): void => {
  firebase
    .auth()
    .signInWithEmailAndPassword(state.email, state.password)
    .catch((error) => {
      const errorMessage = error.message;
      setstateAlert({ open: true, message: errorMessage });
    });
};

export const signOut = (): void => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

export const singUpGoogle = (state: IUser): void => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(async (result) => {
      const user: firebase.User = result.user;
      if (result.additionalUserInfo.isNewUser) {
        await addUser({
          ...state,
          name: user.providerData[0].displayName || '',
          email: user.providerData[0].email || '',
          phone: user.providerData[0].phoneNumber || '',
          img: user.providerData[0].photoURL || '',
          id: user.providerData[0].uid,
        });
      }
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

export const uploudImage = async (file: any): Promise<string> => {
  const puth = `${file.type}/${file.name}`;
  let urlImage;
  await storageRef
    .child(puth)
    .put(file)
    .then((data) => data.ref.getDownloadURL().then((url) => (urlImage = url)));
  return urlImage;
};
export const getImageUrl = async (file): Promise<string> => {
  const puth = file;
  let urlImage: string;
  await storageRef
    .child(puth)
    .getDownloadURL()
    .then((url) => (urlImage = url));
  return urlImage;
};

/* services_category.forEach(async (item) => {
  const img = await getImageUrl(item.img);
  const logo = await getImageUrl(item.img);
  const newCityRef = db.collection('services_category').doc();
  const id = newCityRef.id;
  // later...
  newCityRef.set({ ...item, uid: id });
}); */

/*  const arrayDate = (startDate, endDate, uid, title) => {
    let array = {};
    let currentDate = moment(startDate);
    const stopDate = moment(endDate);
    console.log(+moment(currentDate).format('DD'));
    while (currentDate <= stopDate) {
      console.log(+moment(currentDate).format('HH'));
      if (+moment(currentDate).format('DD') % 2 !== 0) {
        while (+moment(currentDate).format('HH') < 15) {
          const obj = {
            title: title,
            id: moment(currentDate).format('YYYYMMDDHHmm'),
            startDate: moment(currentDate).format('LLLL'),
            endDate: moment(currentDate).add(30, 'minutes').format('LLLL'),
            available: true,
            doctorId: uid,
            patientId: '',
          };
          array = { ...array, [obj.id]: obj };
          currentDate = moment(currentDate).add(30, 'minutes');
        }
        currentDate = moment(currentDate).add(24, 'h');
      } else {
        while (+moment(currentDate).format('HH') < 20) {
          const obj = {
            title: title,
            id: moment(currentDate).format('YYYYMMDDHHmm'),
            startDate: moment(currentDate).format('LLLL'),
            endDate: moment(currentDate).add(30, 'minutes').format('LLLL'),
            available: true,
            doctorId: uid,
            patientId: '',
          };
          array = { ...array, [obj.id]: obj };
          currentDate = moment(currentDate).add(30, 'minutes');
        }
        currentDate = moment(currentDate).add(12, 'h');
      }
    }
    return array;
  }; */
  /* setDocument('appointment', '0', arrayDate('20210201T0800', '20210228T0800')); */
  /*   q.forEach(async (item) => {
    await setDocument('appointment', item.uid, arrayDate('20210201T0800', '20210228T0800', item.uid, item.title));
  }); */
