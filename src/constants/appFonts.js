import { scale } from 'utils/responsive';

// prefix font Family
const DEFAULT_PREFIX_FONT_FAMILY = 'AzeretMono-';
const DEFAULT_PREFIX_FONT_FAMILY_NOTO = 'NotoSansKR-';

// fontFamily
export const FONT_FAMILY = {
  Black: `${DEFAULT_PREFIX_FONT_FAMILY}Black`,
  BlackItalic: `${DEFAULT_PREFIX_FONT_FAMILY}BlackItalic`,
  Bold: `${DEFAULT_PREFIX_FONT_FAMILY}Bold`,
  BoldItalic: `${DEFAULT_PREFIX_FONT_FAMILY}BoldItalic`,
  ExtraBold: `${DEFAULT_PREFIX_FONT_FAMILY}ExtraBold`,
  ExtraBoldItalic: `${DEFAULT_PREFIX_FONT_FAMILY}ExtraBoldItalic`,
  ExtraLight: `${DEFAULT_PREFIX_FONT_FAMILY}ExtraLight`,
  ExtraLightItalic: `${DEFAULT_PREFIX_FONT_FAMILY}ExtraLightItalic`,
  Italic: `${DEFAULT_PREFIX_FONT_FAMILY}Italic`,
  Light: `${DEFAULT_PREFIX_FONT_FAMILY}Light`,
  LightItalic: `${DEFAULT_PREFIX_FONT_FAMILY}LightItalic`,
  Medium: `${DEFAULT_PREFIX_FONT_FAMILY}Medium`,
  MediumItalic: `${DEFAULT_PREFIX_FONT_FAMILY}MediumItalic`,
  Regular: `${DEFAULT_PREFIX_FONT_FAMILY}Regular`,
  SemiBold: `${DEFAULT_PREFIX_FONT_FAMILY}SemiBold`,
  SemiBoldItalic: `${DEFAULT_PREFIX_FONT_FAMILY}SemiBoldItalic`,
  Thin: `${DEFAULT_PREFIX_FONT_FAMILY}Thin`,
  ThinItalic: `${DEFAULT_PREFIX_FONT_FAMILY}ThinItalic`,
};

export const FONT_FAMILY_NOTO = {
  Black: `${DEFAULT_PREFIX_FONT_FAMILY_NOTO}Black`,
  Bold: `${DEFAULT_PREFIX_FONT_FAMILY_NOTO}Bold`,
  Light: `${DEFAULT_PREFIX_FONT_FAMILY_NOTO}Light`,
  Medium: `${DEFAULT_PREFIX_FONT_FAMILY_NOTO}Medium`,
  Regular: `${DEFAULT_PREFIX_FONT_FAMILY_NOTO}Regular`,
  Thin: `${DEFAULT_PREFIX_FONT_FAMILY_NOTO}Thin`,
};

// fontsize
export const FONT_SIZE = {
  Size48: scale(48),
  Size36: scale(36),
  Size24: scale(24),
  Size20: scale(20),
  Size16: scale(16),
  Size14: scale(14),

  Body20: scale(20),
  Body18: scale(18),
  Body16: scale(16),

  Small: scale(12),
  Tiny: scale(10),
};

export const LINE_HEIGHT = {
  Size48: scale(52),
  Size36: scale(40),
  Size24: scale(28),
  Size20: scale(24),
  Size16: scale(20),
  Size14: scale(20),

  Body20: scale(32),
  Body18: scale(30),
  Body16: scale(24),

  Small: scale(16),
  Tiny: scale(14),
};
