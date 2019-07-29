// @flow
import React from 'react';
import ReactSVG from 'react-svg';
import styles from './IconButton.less';

export const IconButton = ({
  src, active, onClick,
}) => (
  <ReactSVG
    src={src}
    className={`${styles.iconButton} ${(active && styles.active)}`}
    // beforeInjection={svg => svg.classList.add(classActive)}
    onClick={onClick}
  />
);
