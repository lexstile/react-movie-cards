// @flow
import React, { useState } from 'react';
import { Header, MovieList, SwitchLayout } from './components';
import { LayoutType, PAGE_TITLE } from './constants';
import './App.less';

export const App = () => {
  const [layout, changeLayout] = useState(LayoutType.DESKTOP);

  return (
    <React.Fragment>
      <Header>
        {PAGE_TITLE}
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
