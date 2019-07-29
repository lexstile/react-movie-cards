// @flow
import * as React from 'react';
import classnames from 'classnames';
import { LayoutType } from '../../constants';
import { MovieImage, MovieBody, MovieFooter } from './components';
import styles from './MovieCard.less';

export const MovieCard = ({
  movie,
  rating,
  layout,
  even,
}) => {
  const isMobileType = layout === LayoutType.MOBILE;
  const isTabletType = layout === LayoutType.TABLET;
  const classesNames = classnames(
    'movie-card',
    'card',
    rating,
    isMobileType && styles.mobile,
    isTabletType && styles.tablet,
    even ? styles.even : styles.odd,
  );

  return (
    <div className="movie-card">
      <div className={classesNames}>
        <MovieImage
          movie={movie}
        />
        <MovieBody
          movie={movie}
        />
        <MovieFooter
          movie={movie}
        />
      </div>
    </div>
  );
};
