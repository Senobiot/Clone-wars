import { BaseExtendedFirebaseInstance, ExtendedFirestoreInstance } from 'react-redux-firebase';
import { IUser } from '../../src/model/data.model';

export const UPDATE_SERVICE_STATE = 'UPDATE_SERVICE_STATE';


export const updateService = (value: any): { type: typeof UPDATE_SERVICE_STATE; value: boolean } => {
  return {
    type: UPDATE_SERVICE_STATE,
    value,
  };
};
