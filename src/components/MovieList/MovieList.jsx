// @flow
import * as React from 'react';
import { Movie } from '../Movie';
import styles from './MovieList.less';

export const MovieList = ({ movies, recommendations, display }) => (
  <div className="container">
    <div className="row">
      {movies && movies.map((movie, index) => (
        <div className={`col-${12 / display} ${styles.movie}`} key={movie.id}>
          <Movie
            movie={movie}
            index={index + 1}
            display={display}
            recommendations={recommendations.find(({ movieId }) => movieId === movie.id) || null}
          />
        </div>
      ))}
    </div>
  </div>
);
