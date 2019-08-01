// @flow
import { actionType } from './constants';

const initialStateApp = {
  movies: [],
  recommendations: [],
  errors: [],
};

export const appReducer = (state = initialStateApp, action) => {
  switch (action.type) {
    case actionType.INITIAL_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case actionType.INITIAL_STATE_ERROR:
      return {
        ...state,
        errors: [
          ...state.errors,
          action.payload,
        ],
      };
    default:
      return state;
  }
};
