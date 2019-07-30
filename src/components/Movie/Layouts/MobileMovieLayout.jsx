// @flow
import * as React from 'react';
import { MovieCard } from '@/MovieCard';

type MobileMovieLayoutType = {
  movie: MovieType,
  layout: String,
  rating: String,
  even: Boolean,
};

export const MobileMovieLayout = ({
  movie,
  layout,
  rating,
  even,
} : MobileMovieLayoutType) => (
  <div className="col-12 mb-5 movie">
    <MovieCard
      movie={movie}
      layout={layout}
      rating={rating}
      even={even}
    />
  </div>
);
