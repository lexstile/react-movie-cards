// @flow
import * as React from 'react';
import { Movie } from '../Movie';
import type { MovieType, recommendationsType } from '../../types';
import styles from './MovieList.less';

type MovieListPropsType = {
  movies: Array<MovieType>,
  recommendations: Array<recommendationsType>,
};

export const MovieList = (
  { movies, recommendations } : MovieListPropsType
) => (
  <div className="container">
    <div className="row">
      {movies && movies.map((movie, index) => (
        <div className={`col-4 ${styles.movie}`} key={movie.id}>
          <Movie
            movie={movie}
            index={index}
            recommendations={recommendations.find(({ movieId }) => movieId === movie.id) || null}
          />
        </div>
      ))}
    </div>
  </div>
);
