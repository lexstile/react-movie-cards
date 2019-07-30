// @flow
import React, { Suspense } from 'react';
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

export const Movie = ({
  movie,
  recommendation,
  layout,
  even,
} : MoviePropsType) => {
  const rating = setColorBorder(recommendation && recommendation.rating);
  const loadComponentName = `./layouts/${layout}MovieLayout`;
  const MovieLayout = React.lazy(() => import(loadComponentName));

  return (
    <Suspense fallback={<div>Загрузка макета...</div>}>
      <MovieLayout
        movie={movie}
        rating={rating}
        layout={layout}
        even={even}
      />
    </Suspense>
  );
};
