// @flow
import { actionType } from './constants';

const initialStateApp = {
  movies: [],
  recommendations: [],
};

export const appReducer = (state = initialStateApp, action) => {
  switch (action.type) {
    case actionType.INITIAL_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
