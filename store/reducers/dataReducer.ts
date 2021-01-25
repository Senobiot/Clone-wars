import { ADD_USER, GET_DATA } from '../actions/actionData';

const initState = { users: {}, med_centers: {}, services_category: {} };

const dataReducer = (state = initState, action) => {
  const { data } = action;
  switch (action.type) {
    case GET_DATA:
      return action.data;
    case ADD_USER:
      return {
        ...state.users,
        data,
      };
    default:
      return state;
  }
};
export default dataReducer;
