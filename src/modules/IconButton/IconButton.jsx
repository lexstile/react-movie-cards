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

const areEqual = (prevProps, nextProps) => {
  const isEqual = prevProps.src === nextProps.src
  && prevProps.active === nextProps.active;
  return isEqual;
};

export const IconButton = React.memo((
  { src, active, onClick } : IconButtonPropsType
) => (
  <ReactSVG
    src={src}
    className={classnames(styles.iconButton, active ? styles.active : '')}
    onClick={onClick}
  />
), areEqual);
