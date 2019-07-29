// @flow
import * as React from 'react';
import { MovieCard } from '../../../modules';

type TabletMovieLayoutType = {
  movie: MovieType,
  layout: String,
  rating: String,
  even: Boolean,
};

export const TabletMovieLayout = ({
  movie,
  layout,
  rating,
  even,
} : TabletMovieLayoutType) => (
  <div className="col-6 mb-5 movie">
    <MovieCard
      movie={movie}
      layout={layout}
      rating={rating}
      even={even}
    />
  </div>
);
