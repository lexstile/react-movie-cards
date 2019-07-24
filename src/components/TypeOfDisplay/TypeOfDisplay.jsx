// @flow
import * as React from 'react';
import './TypeOfDisplay.less';

export class TypeOfDisplay extends React.PureComponent<{}> {
  render() {
    const { oneInRow, twoInRow, threeInRow } = this.props;
    return (
      <div className="display">
        <button type="button" onClick={oneInRow}>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 455 455">
            <g>
              <rect width="455" height="212" />
              <rect y="242" width="455" height="213" />
            </g>
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
        </button>
        <button type="button" onClick={twoInRow}>
          <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 455 455">
            <g>
              <rect width="213" height="212" />
              <rect x="243" width="212" height="212" />
              <rect y="242" width="213" height="213" />
              <rect x="243" y="242" width="212" height="213" />
            </g>
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
        </button>
        <button type="button" onClick={threeInRow}>
          <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 455 455">
            <g>
              <rect x="162" y="161" width="132" height="132" />
              <rect x="162" y="323" width="132" height="132" />
              <rect y="161" width="132" height="132" />
              <rect x="324" width="131" height="131" />
              <rect width="132" height="131" />
              <rect x="162" width="132" height="131" />
              <rect x="324" y="323" width="131" height="132" />
              <rect y="323" width="132" height="132" />
              <rect x="324" y="161" width="131" height="132" />
            </g>
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
        </button>
      </div>
    );
  }
}
