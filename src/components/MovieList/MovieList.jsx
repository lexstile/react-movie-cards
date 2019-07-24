// @flow
import * as React from 'react';
import { Movie } from '../Movie';
import type { MovieType, recommendedType } from '../../types';
import './MovieList.less';

type MovieListPropsType = {
  movies: Array<MovieType>,
  recommended: Array<recommendedType>,
};

export class MovieList extends React.PureComponent<MovieListPropsType> {
  render() {
    const { movies, recommended, display } = this.props;
    return (
      <div className="container">
        <div className="row">
          {movies && movies.map((movie, index) => (
            <div className={`col-${12 / display}`} key={movie.id}>
              <Movie
                movie={movie}
                index={index}
                recommended={recommended.find(({ movieId }) => movieId === movie.id) || null}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
