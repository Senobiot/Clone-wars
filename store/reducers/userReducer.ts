import { Role } from '../../src/model/data.model';
import {
  UPDATE_USER_STATE,
  UPDATE_USER_AUTHORIZATION,
  UPDATE_USER_FIELD,
  DELETE_USER,
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
  },
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_USER_STATE:
      console.log(action.state);
      return { ...state, data: action.data };
    case DELETE_USER:
      console.log(action.state);
      return initState;
    case UPDATE_USER_FIELD:
      console.log(action.state);
      return { ...state, data: { ...state.data, [action.field]: action.value } };
    case UPDATE_USER_AUTHORIZATION:
      console.log(action.value);
      return { ...state, authorized: action.value };
    case UPDATE_USER_NEW:
      console.log(action.value);
      return { ...state, isNewUser: action.value };
    default:
      return state;
  }
};

export default userReducer;
