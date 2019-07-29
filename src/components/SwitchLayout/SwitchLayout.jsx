// @flow
import * as React from 'react';
import { IconButton } from '../../modules/IconButton';
import { buttons } from './constants';
import styles from './SwitchLayout.less';

type SwitchLayoutPropsType = {
  layout: String,
  onChangeLayout: (type: string) => void,
};

export const SwitchLayout = (
  { layout, onChangeLayout } : SwitchLayoutPropsType
) => (
  <div className={`d-flex justify-content-end ${styles.display}`}>
    {buttons && buttons.map(({ type, src }) => (
      <IconButton
        key={type}
        src={src}
        active={type === layout}
        onClick={() => onChangeLayout(type)}
      />
    ))}
  </div>
);
