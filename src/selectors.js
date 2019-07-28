// @flow
import { createSelector } from 'reselect';
import { get } from 'lodash';
import { APP_STORE_KEY, MOVIES_STORE_KEY, MOVIES_REC_STORE_KEY } from './constants';

const store = state => get(state, APP_STORE_KEY);

export const getMoviesSelector = createSelector(
  store,
  state => get(state, MOVIES_STORE_KEY),
);

export const getRecommendationsSelector = createSelector(
  store,
  state => get(state, MOVIES_REC_STORE_KEY),
);
