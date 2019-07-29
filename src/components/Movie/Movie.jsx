// @flow
import * as React from 'react';
import * as MovieLayouts from './Layouts';
import { Rating } from './constants';
import type { MovieType, RecommendationsType } from '../../types';
import styles from './Movie.less';

type MoviePropsType = {
  movie: MovieType,
  recommendation: RecommendationsType,
  layout: String,
  even: Boolean,
};

const setColorBorder = (rating) => {
  switch (rating) {
    case Rating.GOLD: return styles.borderGold;
    case Rating.SILVER: return styles.borderSilver;
    default: return '';
  }
};

const initializeComponent = layout => MovieLayouts[`${layout}MovieLayout`];

export const Movie = ({
  movie,
  recommendation,
  layout,
  even,
} : MoviePropsType) => {
  const rating = setColorBorder(recommendation && recommendation.rating);
  const MovieLayout = initializeComponent(layout);

  return (
    <MovieLayout
      movie={movie}
      rating={rating}
      layout={layout}
      even={even}
    />
  );
};
