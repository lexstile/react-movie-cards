// @flow
import * as React from 'react';

export const MovieImage = (
  { movie }
) => (
  <img className="card-img-top" src={movie.imageUrl} alt={movie.title} />
);
