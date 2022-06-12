import { Dimensions, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { scale } from 'utils/responsive';

export const STATUS_BAR_HEIGHT =
  Platform.OS === 'ios'
    ? DeviceInfo.hasNotch()
      ? scale(44)
      : scale(20)
    : DeviceInfo.hasNotch()
    ? scale(35)
    : scale(10);

export const BOTTOM_BAR_HEIGHT = Platform.OS === 'ios' ? scale(15) : scale(10);

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const HEADER_HEIGHT = STATUS_BAR_HEIGHT + scale(44);

export const BOTTOM_TAB_HEIGHT = BOTTOM_BAR_HEIGHT + scale(70);

export const ICON_SIZE = {
  Tiny: scale(2),
  XSmall: scale(4),
  Small: scale(6),
  Normal: scale(8),
  Medium: scale(10),
  Large: scale(12),
  XLarge: scale(14),
  XXLarge: scale(16),
};

export const BORDER_RADIUS = scale(8);

export const SPACING = {
  Tiny: scale(2),
  XSmall: scale(4),
  Small: scale(6),
  Normal: scale(8),
  Medium: scale(10),
  Large: scale(12),
  XLarge: scale(14),
  XXLarge: scale(16),
};

export const SIZE = {
  Size1: scale(1),
  Size2: scale(2),
  Size4: scale(4),
  Size6: scale(6),
  Size8: scale(8),
  Size10: scale(10),
  Size12: scale(12),
  Size14: scale(14),
  Size15: scale(15),
  Size16: scale(16),
  Size20: scale(20),
  Size22: scale(22),
  Size24: scale(24),
  Size28: scale(28),
  Size30: scale(30),
  Size40: scale(40),
  Size44: scale(44),
  Size60: scale(60),
};
