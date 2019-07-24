// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { APP_STORE_KEY, MOVIES_STORE_KEY, MOVIES_REC_STORE_KEY } from './constants';
import { Header, MovieList } from './components';
import type { MovieType } from './types';
import './App.less';

type AppComponentPropsType = {
  movies: Array<MovieType>,
};

class AppComponent extends React.PureComponent<AppComponentPropsType> {
  render() {
    const { movies, recommended } = this.props;
    return (
      <React.Fragment>
        <Header>
          React Movie Cards
        </Header>
        <MovieList
          movies={movies}
          recommended={recommended}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movies: get(state[APP_STORE_KEY], MOVIES_STORE_KEY),
  recommended: get(state[APP_STORE_KEY], MOVIES_REC_STORE_KEY),
});

const mapDispatchToProps = {
  //
};

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
