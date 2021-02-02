import { ADD_USER, GET_DATA } from '../actions/actionData';
import { medicsList } from '../../src/data/medicsList.js';
import { med_centers } from '../../src/data/medcentersList.js';
import { services_category } from '../../src/data/servicesList.js';
import { IAppointment, IData, IUser } from '../../src/model/data.model';

const initState: IData = { users: medicsList, med_centers, services_category };

const dataReducer = (state = initState, action) => {
  const { data } = action;
  switch (action.type) {
    case GET_DATA:
      return action.data;
    case ADD_USER:
      return {
        ...state,
        users: { ...state.users, [data.uid]: data },
      };
    default:
      return state;
  }
};
export default dataReducer;
