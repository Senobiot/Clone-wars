export const UPDATE_SERVICE_STATE = 'UPDATE_SERVICE_STATE';


export const updateService = (value) => {
  return {
    type: UPDATE_SERVICE_STATE,
    value
  };
};
