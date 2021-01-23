const dataReducer = (state = {}, action) => {
  const { data } = action;
  switch (action.type) {
    case 'GET_DATA':
      return action.data;
    case 'ADD_USER':
      return {
        ...state,
        data,
      };
    default:
      return state;
  }
};
export default dataReducer;
