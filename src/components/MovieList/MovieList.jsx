// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
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
            index={index}
            key={movie.id}
            layout={layout}
            movie={movie}
            recommendation={recommendations.find(({ movieId }) => movieId === movie.id)}
          />
        ))}
      </div>
    </div>
  );
});
