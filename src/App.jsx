// @flow
import React, { useState } from 'react';
import { Header, MovieList, SwitchLayout } from './components';
import { LayoutType } from './constants';
import './App.less';

export const App = () => {
  const [layout, changeLayout] = useState(LayoutType.DESKTOP);

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
        layout={layout}
      />
    </React.Fragment>
  );
};
