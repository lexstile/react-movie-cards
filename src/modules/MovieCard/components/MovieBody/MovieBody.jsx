// @flow
import * as React from 'react';

export const MovieBody = (
  { movie }
) => (
  <div className="card-body">
    <h4 className="card-title">{movie.title}</h4>
    <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
    <p className="text-justify">{movie.description}</p>
  </div>
);
