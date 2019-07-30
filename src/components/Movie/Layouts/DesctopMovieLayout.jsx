// @flow
import * as React from 'react';
import { MovieCard } from '@/MovieCard';

type DesctopMovieLayoutType = {
  movie: MovieType,
  rating: String,
  even: Boolean,
};

const DesctopMovieLayout = (
  { movie, rating, even } : DesctopMovieLayoutType
) => (
  <div className="col-4 mb-5 movie">
    <MovieCard
      movie={movie}
      rating={rating}
      even={even}
    />
  </div>
);

export default DesctopMovieLayout;
