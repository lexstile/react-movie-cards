// @flow
import { fetchMoviesWithRecommendations } from './api';
import { initializeInitialState } from './actionCreators';

export const requestMoviesWithRecommendations = () => async (dispatch) => {
  try {
    const [movies, recommendations] = await fetchMoviesWithRecommendations();
    dispatch(initializeInitialState({
      movies: movies.data,
      recommendations: recommendations.data,
    }));
  } catch (err) {
    dispatch(initializeInitialState(err));
  }
};
