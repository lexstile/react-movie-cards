// @flow
import * as React from 'react';
import './Header.less';

export class Header extends React.PureComponent<{}> {
  render() {
    return (
      <nav className="header navbar navbar-dark bg-dark">
        <div className="container">
          <div className="row m-auto">
            <i className="fa fa-film fa-2x text-white my-auto" />
            <div className="h3 ml-3 my-auto text-light">{this.props.children}</div>
          </div>
        </div>
      </nav>
    );
  }
}
