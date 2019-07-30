// @flow
import * as React from 'react';
import { StarRating } from '@/StarRating';

type MovieFooterPropsType = {
  rating: String,
};

export const MovieFooter = (
  { rating } : MovieFooterPropsType
) => (
  <div className="card-footer">
    <div className="clearfix">
      <div className="float-left mt-1">
        <StarRating rating={rating} />
      </div>
      <div className="card-footer-badge float-right badge badge-primary badge-pill">{rating}</div>
    </div>
  </div>
);
