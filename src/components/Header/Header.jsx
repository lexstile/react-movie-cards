// @flow
import * as React from 'react';
import styles from './Header.less';

type HeaderPropsType = {
  children: String,
};

export const Header = (
  { children } : HeaderPropsType
) => (
  <nav className={`${styles.header} navbar navbar-dark bg-dark`}>
    <div className="container">
      <div className="row m-auto">
        <i className="fa fa-film fa-2x text-white my-auto" />
        <div className="h3 ml-3 my-auto text-light">{children}</div>
      </div>
    </div>
  </nav>
);
