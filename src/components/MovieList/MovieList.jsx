// @flow
import * as React from 'react';
import { Movie } from '../Movie';
import type { MovieType } from '../../types';
import './MovieList.less';

type MovieListPropsType = {
  movies: Array<MovieType>,
};

export class MovieList extends React.PureComponent<MovieListPropsType> {
  render() {
    const { movies } = this.props;
    return (
      <div className="mt-5">
        <div className="card-deck">
          {movies && movies.map(movie => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
}
