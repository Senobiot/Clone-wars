import { Role } from '../../src/model/data.model';
import {
  UPDATE_USER_STATE,
  UPDATE_USER_AUTHORIZATION,
  UPDATE_USER_FIELD,
  LOGOUT_USER,
  UPDATE_USER_NEW,
} from '../actions/actionUser';

const initState = {
  authorized: false,
  isNewUser: false,
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

const userReducer = (state = initState, action) => {
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
    default:
      return state;
  }
};

export default userReducer;
