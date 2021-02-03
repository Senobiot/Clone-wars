import { UPDATE_SERVICE_STATE } from '../actions/actionService';

const initialState = {
  service: {
    centers: null,
    query: null 
  }
};

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SERVICE_STATE:
      return { ...state, service: action.value };

    default:
      return state;
  }
};

export default servicesReducer;
