// @flow
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { requestData } from './actions';
import { getMoviesSelector, getRecommendationsSelector } from './selectors';
import { Header, MovieList, SwitchLayout } from './components';
import { LayoutType } from './constants';
import type { MovieType, recommendationsType } from './types';
import './App.less';

type AppPropsType = {
  movies: Array<MovieType>,
  recommendations: Array<recommendationsType>,
  getData: () => void,
};

export const App = connect(
  createStructuredSelector({
    movies: getMoviesSelector,
    recommendations: getRecommendationsSelector,
  }),
  { getData: requestData },
)(
  (
    { movies, recommendations, getData } : AppPropsType
  ) => {
    const [layout, changeLayout] = useState(LayoutType.DESKTOP);

    useEffect(() => {
      getData();
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
