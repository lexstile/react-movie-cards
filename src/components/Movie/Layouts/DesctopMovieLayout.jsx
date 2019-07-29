// @flow
import * as React from 'react';
import { StarRating } from '../../StarRating';

export const DesctopMovieLayout = ({ movie, rating }) => (
  <div className="col-4 mb-5">
    <div className="movie-card">
      <div className={`movie-card card ${rating}`}>
        <img className="card-img-top" src={movie.imageUrl} alt={movie.title} />
        <div className="card-body">
          <h4 className="card-title">{movie.title}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
          <p className="text-justify">{movie.description}</p>
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
  </div>
);
