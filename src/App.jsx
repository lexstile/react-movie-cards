// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { APP_STORE_KEY, MOVIES_STORE_KEY, MOVIES_REC_STORE_KEY } from './constants';
import { Header, MovieList, TypeOfDisplay } from './components';
import type { MovieType, recommendedType } from './types';
import './App.less';

type AppComponentPropsType = {
  movies: Array<MovieType>,
  recommended: Array<recommendedType>,
};

class AppComponent extends React.PureComponent<AppComponentPropsType> {
  state = {
    display: 3,
    btnActive: {
      one: false,
      two: false,
      three: true,
    },
  }

  oneInRow = () => this.setState({
    display: 1,
    btnActive: {
      one: true,
      two: false,
      three: false,
    },
  });

  twoInRow = () => this.setState({
    display: 2,
    btnActive: {
      one: false,
      two: true,
      three: false,
    },
  });

  threeInRow = () => this.setState({
    display: 3,
    btnActive: {
      one: false,
      two: false,
      three: true,
    },
  });

  render() {
    const { movies, recommended } = this.props;
    const { display, btnActive } = this.state;
    return (
      <React.Fragment>
        <Header>
          React Movie Cards
        </Header>
        <TypeOfDisplay
          btnActive={btnActive}
          oneInRow={this.oneInRow}
          twoInRow={this.twoInRow}
          threeInRow={this.threeInRow}
        />
        <MovieList
          movies={movies}
          recommended={recommended}
          display={display}
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
