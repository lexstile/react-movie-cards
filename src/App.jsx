// @flow
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { requestData } from './actions';
import { getMoviesSelector, getRecommendationsSelector } from './selectors';
import { Header, MovieList, SwitchLayout } from './components';
import { LayoutType } from './constants';
import './App.less';

export const App = connect(
  createStructuredSelector({
    movies: getMoviesSelector,
    recommendations: getRecommendationsSelector,
  }),
  { getData: requestData },
)(
  (props) => {
    const { movies, recommendations } = props;

    const [layout, changeLayout] = useState(LayoutType.DESKTOP);

    useEffect(() => {
      props.getData();
    }, []);

    return (
      <React.Fragment>
        <Header>
          React Movie Cards
        </Header>
        <SwitchLayout
          layout={layout}
          onChangeLayout={changeLayout}
        />
        <MovieList
          movies={movies}
          recommendations={recommendations}
          layout={layout}
        />
      </React.Fragment>
    );
  },
);
