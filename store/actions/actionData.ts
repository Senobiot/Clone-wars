export const ADD_USER = 'ADD_USER';
export const GET_DATA = 'GET_DATA';

export const getData = (data) => {
  console.log('DATA', data);
  return {
    type: GET_DATA,
    data,
  };
};

export const addUser = ({ firestore }, user) => {
  return (dispatch, getState) => {
    firestore
      .collection('users')
      .add(user)
      .then(() => {
        console.log('Then it was done', user);
        dispatch({ type: 'ADD_USER', data: user });
      });
  };
};
