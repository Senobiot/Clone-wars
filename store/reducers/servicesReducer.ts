import { useState } from 'react';
import { Role } from '../../src/model/data.model';
import {
  UPDATE_SERVICE_STATE
} from '../actions/actionService';

const initState = {
  allServices: [],
  service: []
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_SERVICE_STATE:
      return { ...state, service: action.value };
    // case UPDATE_ALL_SERVICES_STATE:
    //   return { ...state, service: action.value };

    default:
      return state;
  }
};

export default userReducer;
