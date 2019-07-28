// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { requestData } from './actions';
import { getMoviesSelector, getRecommendationsSelector } from './selectors';
import { Header, MovieList, SwitchLayout } from './components';
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

    // const [layout, switchLayout] = useState('DESCTOP');

    useEffect(() => {
      props.getData();
    }, []);

    return (
      <React.Fragment>
        <Header>
          React Movie Cards
        </Header>
        <SwitchLayout />
        <MovieList
          movies={movies}
          recommendations={recommendations}
          display="3"
        />
      </React.Fragment>
    );
  },
);
