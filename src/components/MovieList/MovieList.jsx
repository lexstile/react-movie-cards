// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { find } from 'lodash';
import { requestData } from '../../actions';
import { getMoviesSelector, getRecommendationsSelector } from '../../selectors';
import { Movie } from '../Movie';
import type { MovieType, RecommendationsType } from '../../types';

type MovieListPropsType = {
  movies: Array<MovieType>,
  recommendations: Array<RecommendationsType>,
  getData: () => void,
};

export const MovieList = connect(
  createStructuredSelector({
    movies: getMoviesSelector,
    recommendations: getRecommendationsSelector,
  }),
  { getData: requestData },
)(({
  movies,
  recommendations,
  layout,
  getData,
} : MovieListPropsType) => {
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {movies && movies.map((movie, index) => (
          <Movie
            key={movie.id}
            even={(index + 1) % 2 === 0}
            layout={layout}
            movie={movie}
            recommendation={find(recommendations, { movieId: movie.id })}
          />
        ))}
      </div>
    </div>
  );
});
