// @flow
import { fetchMoviesWithRecommendations } from './api';
import { storeData } from './actionCreators';

export const requestMoviesWithRecommendations = () => async (dispatch) => {
  try {
    const [movies, recommendations] = await fetchMoviesWithRecommendations();
    dispatch(storeData({
      movies: movies.data,
      recommendations: recommendations.data,
    }));
  } catch (err) {
    dispatch(storeData(err));
  }
};
