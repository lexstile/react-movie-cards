// @flow
import { actionType } from './constants';

export const initializeInitialState = data => ({
  type: actionType.INITIAL_STATE,
  payload: data,
});
