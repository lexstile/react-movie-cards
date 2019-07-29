// @flow
import { actionType } from './constants';

export const storeData = data => ({
  type: actionType.DATA,
  payload: data,
});
