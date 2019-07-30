// @flow
import * as React from 'react';

type MovieBodyPropsType = {
  title: String,
  subtitle: String,
  description: String,
};

export const MovieBody = (
  { title, subtitle, description } : MovieBodyPropsType
) => (
  <div className="card-body">
    <h4 className="card-title">{title}</h4>
    <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
    <p className="text-justify">{description}</p>
  </div>
);
