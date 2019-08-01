// @flow
import { actionType } from './constants';

export const initializeInitialState = data => ({
  type: actionType.INITIAL_STATE,
  payload: data,
});

export const initializeInitialStateError = error => ({
  type: actionType.INITIAL_STATE_ERROR,
  payload: error,
});
