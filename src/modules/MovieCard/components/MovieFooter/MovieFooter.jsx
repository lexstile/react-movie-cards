// @flow
import * as React from 'react';
import { StarRating } from '../../../StarRating';

export const MovieFooter = (
  { movie }
) => (
  <div className="card-footer">
    <div className="clearfix">
      <div className="float-left mt-1">
        <StarRating rating={movie.rating} />
      </div>
      <div className="card-footer-badge float-right badge badge-primary badge-pill">{movie.rating}</div>
    </div>
  </div>
);
