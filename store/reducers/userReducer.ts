import { AppointmentDoctor } from '../../src/components/Appointment';
import { IActiveUser, IUser, Role } from '../../src/model/data.model';
import {
  UPDATE_USER_STATE,
  UPDATE_USER_AUTHORIZATION,
  UPDATE_USER_FIELD,
  LOGOUT_USER,
  UPDATE_USER_NEW,
  ADD_APPOINTMENT,
  REMOVE_APPOINTMENT,
  GET_APPOINTMENT,
  UPDATE_APPOINTMENT_USER,
  UPDATE_APPOINTMENT_DOCTOR,
  CHANGE_AVAILABLE,
  GET_APPOINTMENT_DOCTOR,
} from '../actions/actionUser';

const initState = {
  authorized: false,
  isNewUser: false,
  appointment: [],
  appointmentDoctor: [],
  data: {
    email: '',
    password: '',
    role: Role.Patient,
    category: '',
    experience: '',
    graduation: '',
    id: '',
    img: '',
    medcenter: '',
    name: '',
    phone: '',
    speciality: '',
    gender: '',
    birthday: '',
    uid: '',
  },
};

const userReducer = (state: IActiveUser = initState, action) => {
  switch (action.type) {
    case UPDATE_USER_STATE:
      return { ...state, data: action.data };
    case LOGOUT_USER:
      return initState;
    case UPDATE_USER_FIELD:
      return { ...state, data: { ...state.data, [action.field]: action.value } };
    case UPDATE_USER_AUTHORIZATION:
      return { ...state, authorized: action.value };
    case UPDATE_USER_NEW:
      return { ...state, isNewUser: action.value };
    case GET_APPOINTMENT:
      return { ...state, appointment: action.data };
    case GET_APPOINTMENT_DOCTOR:
      return { ...state, appointmentDoctor: action.data };
    case ADD_APPOINTMENT:
      return { ...state, appointment: [...state.appointment, ...action.data] };
    case UPDATE_APPOINTMENT_USER:
      return { ...state, appointment: [...state.appointment, ...action.data] };
    case UPDATE_APPOINTMENT_DOCTOR:
      return { ...state, appointmentDoctor: [...state.appointmentDoctor, ...action.data] };
    case REMOVE_APPOINTMENT:
      const array = state.appointment.filter((e) => e.id !== action.value);
      return { ...state, appointment: array };
    case CHANGE_AVAILABLE:
      return {
        ...state,
        appointmentDoctor: state.appointmentDoctor.map((e) => (e.id === action.obj.id ? action.obj : e)),
      };

    default:
      return state;
  }
};

export default userReducer;
