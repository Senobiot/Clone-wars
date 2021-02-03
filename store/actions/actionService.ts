import { IService  } from '../../src/model/data.model';

export const UPDATE_SERVICE_STATE = 'UPDATE_SERVICE_STATE';


export const updateService = (value: IService): { type: typeof UPDATE_SERVICE_STATE; value: IService } => {
  return {
    type: UPDATE_SERVICE_STATE,
    value
  };
};
