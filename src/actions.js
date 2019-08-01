// @flow
import { fetchMoviesWithRecommendations } from './api';
import { initializeInitialState, initializeInitialStateError } from './actionCreators';
import { ERRORS } from './constants';

export const requestMoviesWithRecommendations = () => async (dispatch) => {
  try {
    const [movies, recommendations] = await fetchMoviesWithRecommendations();
    dispatch(initializeInitialState({
      movies: movies.data,
      recommendations: recommendations.data,
    }));
  } catch (err) {
    dispatch(initializeInitialStateError(ERRORS.INITIAL_STATE_ERROR));
  }
};
