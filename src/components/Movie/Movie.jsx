// @flow
import * as React from 'react';
import { StarRating } from '../StarRating';
import type { MovieType, recommendationsType } from '../../types';
import styles from './Movie.less';

type MoviePropsType = {
  movie: MovieType,
  recommendations: recommendationsType,
};

export const Movie = (
  { movie, recommendations } : MoviePropsType
) => {
  const border = recommendations ? recommendations.rating : '';
  return (
    <div className="movie-card">
      <div className={`movie-card card ${border}`}>
        <img className="card-img-top" src={movie.imageUrl} alt={movie.title} />
        <div className="card-body">
          <h4 className="card-title">{movie.title}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
          <p className={`text-justify ${styles.movieDescr}`}>{movie.description}</p>
        </div>
        <div className="card-footer">
          <div className="clearfix">
            <div className="float-left mt-1">
              <StarRating rating={movie.rating} />
            </div>
            <div className="card-footer-badge float-right badge badge-primary badge-pill">{movie.rating}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
