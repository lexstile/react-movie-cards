// @flow
import { fetchData } from './api';
import { storeData } from './actionCreators';

export const requestData = () => async (dispatch) => {
  try {
    const [movies, recommendations] = await fetchData();
    dispatch(storeData({
      movies: movies.data,
      recommendations: recommendations.data,
    }));
  } catch (err) {
    dispatch(storeData(err));
  }
};
