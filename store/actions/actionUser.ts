import { IUser } from '../../src/model/data.model';

export const UPDATE_USER_STATE = 'UPDATE_USER_STATE';
export const UPDATE_USER_AUTHORIZATION = 'UPDATE_USER_AUTHORIZATION';
export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER_NEW = 'UPDATE_USER_NEW';

export const updateUser = (data: IUser) => {
  return {
    type: UPDATE_USER_STATE,
    data,
  };
};
export const updateUserField = (name: string, value: string) => {
  return {
    type: UPDATE_USER_FIELD,
    value,
    field: name,
  };
};

export const updateUserAuthorization = (value: boolean) => {
  return {
    type: UPDATE_USER_AUTHORIZATION,
    value,
  };
};
export const updateNewUser = (value: boolean) => {
  return {
    type: UPDATE_USER_NEW,
    value,
  };
};

export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};
