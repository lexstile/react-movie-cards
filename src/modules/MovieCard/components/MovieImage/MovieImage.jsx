// @flow
import * as React from 'react';

type MovieImagePropsType = {
  imageUrl: String,
  title: String,
};

export const MovieImage = (
  { imageUrl, title } : MovieImagePropsType
) => (
  <img className="card-img-top" src={imageUrl} alt={title} />
);
