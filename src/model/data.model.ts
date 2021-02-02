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

export interface IAppointment {
  title?: string;
  startDate: Date;
  endDate: Date;
  id: string | number;
  doctorId?: string | number;
  available?: boolean;
  patientId?: string;
}

export interface IUser extends IMedicsList {
  password?: string;
  gender?: string;
  birthday?: string;
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
  appointment?: IAppointment[];
}

export interface IActiveUser {
  authorized: boolean;
  isNewUser: boolean;
  appointment: IAppointment[];
  appointmentDoctor: IAppointment[];
  data: IUser;
}

export interface IState {
  data: IData;
  user: IActiveUser;
  service: { service: any };
  firebase: FirebaseReducer.Reducer;
  firestore: FirestoreReducer.Reducer;
}
