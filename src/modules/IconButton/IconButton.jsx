// @flow
import React from 'react';
import ReactSVG from 'react-svg';
import styles from './IconButton.less';

export const IconButton = ({
  src, onClick,
}) => (
  <ReactSVG
    src={src}
    className={styles.iconButton}
    beforeInjection={svg => svg.classList.add(styles.active)}
    onClick={onClick}
  />
);
