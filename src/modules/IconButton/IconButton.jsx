// @flow
import React from 'react';
import ReactSVG from 'react-svg';
import classnames from 'classnames';
import styles from './IconButton.less';

type IconButtonPropsType = {
  src: String,
  active: Boolean,
  onClick: () => void,
};

export const IconButton = (
  { src, active, onClick } : IconButtonPropsType
) => (
  <ReactSVG
    src={src}
    className={classnames(styles.iconButton, active ? styles.active : '')}
    onClick={onClick}
  />
);
