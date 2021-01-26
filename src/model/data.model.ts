import { FirebaseReducer, FirestoreReducer } from 'react-redux-firebase';

export interface IMedicsList {
  speciality: string;
  medcenter: string;
  category: string;
  experience: string;
  graduation: string;
  img: string;
  name: string;
  phone: string;
  id: string;
  email: string;
  role: Role;
  uid: string;
}

export interface IUser extends IMedicsList {
  password: string;
  gender: string;
  birthday: string;
}

export enum Role {
  Doctor = 'doctor',
  Patient = 'patient',
}

export interface IServicesCategory {
  id: string;
  category_name: string;
  logo: string;
  medic: string | null;
  services: IServices;
}

interface IServices {
  [name: string]: string;
}

export interface IMedCenters {
  name: string;
  fullname: string;
  adress: string;
  history: string;
  img: string;
  logo: string;
  iframe: string;
  coord: string;
  phones: string[];
  schedule: string;
  services: { [name: string]: IPrice[] };
}

interface IPrice {
  [name: string]: number;
}

export interface IData {
  users: IUser[];
  services_category: IServicesCategory[];
  med_centers: IMedCenters[];
}

export interface IState {
  data: IData;
  user: { authorized: boolean; isNewUser: boolean; data: IUser };
  firebase: FirebaseReducer.Reducer;
  firestore: FirestoreReducer.Reducer;
}
