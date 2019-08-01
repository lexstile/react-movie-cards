// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { find } from 'lodash';
import { requestMoviesWithRecommendations } from '../../actions';
import { getMoviesSelector, getRecommendationsSelector, getStateErrors } from '../../selectors';
import { Movie } from '../Movie';
import type { MovieType, RecommendationsType } from '../../types';

type MovieListPropsType = {
  movies: Array<MovieType>,
  recommendations: Array<RecommendationsType>,
  getMoviesWithRecommendations: () => void,
};

export const MovieList = connect(
  createStructuredSelector({
    movies: getMoviesSelector,
    recommendations: getRecommendationsSelector,
    errors: getStateErrors,
  }),
  { getMoviesWithRecommendations: requestMoviesWithRecommendations },
)(({
  movies,
  recommendations,
  errors,
  layout,
  getMoviesWithRecommendations,
} : MovieListPropsType) => {
  useEffect(() => {
    getMoviesWithRecommendations();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {movies && movies.length ? movies.map((movie, index) => (
          <Movie
            key={movie.id}
            even={(index + 1) % 2 === 0}
            layout={layout}
            movie={movie}
            recommendation={find(recommendations, { movieId: movie.id })}
          />
        )) : (
          <div className="col-12">
            <ul>
              {errors && errors.map(error => (
                <li key={error}>
                  {error}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
});
