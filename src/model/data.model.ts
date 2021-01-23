export interface IMedicsList {
  speciality: string;
  medcenter: string;
  category: string;
  experience: string;
  graduation: string;
  id: string;
  img: string;
  name: string;
  phone: string;
}

export interface IUser extends IMedicsList {
  email: string;
  password: string;
  gender: string;
  birthday: string;
  role: Role;
}

export enum Role {
  Doctor = 'doctor',
  Patient = 'patient',
}

export interface IServicesCategory {
  id: string;
  category_name: string;
  medic: string | null;
  services: IServices;
}

interface IServices {
  [name: string]: string;
}

export interface IMmedCenters {
  name: string;
  fullname: string;
  adress: string;
  img: string;
  logo: string;
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
  med_centers: IMmedCenters[];
}
