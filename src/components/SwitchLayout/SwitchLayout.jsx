// @flow
import * as React from 'react';
import { IconButton } from '../../modules/IconButton';
import { LayoutType } from './constants';
import desktopIconPath from './assets/desctopIcon.svg';
import tabletIconPath from './assets/tabletIcon.svg';
import mobileIconPath from './assets/mobileIcon.svg';
import styles from './SwitchLayout.less';

const buttons = [
  {
    type: LayoutType.DESKTOP,
    src: desktopIconPath,
  },
  {
    type: LayoutType.TABLET,
    src: tabletIconPath,
  },
  {
    type: LayoutType.MOBILE,
    src: mobileIconPath,
  },
];

export const SwitchLayout = () => (
  <div className={`d-flex justify-content-end ${styles.display}`}>
    {buttons && buttons.map(button => (
      <IconButton
        src={button.src}
        svgClass="gold"
        // onClick={handleClick}
      />
    ))}
  </div>
);
