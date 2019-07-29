// @flow
import { LayoutType } from '../../constants';
import desktopIconPath from './assets/desctopIcon.svg';
import tabletIconPath from './assets/tabletIcon.svg';
import mobileIconPath from './assets/mobileIcon.svg';

export const buttons = [
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
