import Color from 'color';

export const ICONS = {};

export const breakpoints = {
  smallDevice: '(min-width: 36em)',
  mediumDevice: '(min-width: 48em)',
  largeDevice: '(min-width: 62em)',
  fullHDevice: '(min-width: 90em)',
};

export const colors = {
  blue: Color.rgb(61, 90, 241),
  darkBlue: Color.rgb(14, 21, 58),
  darkBlue: Color.rgb(14, 21, 58),
  lightCyan: Color.rgb(226, 243, 245),
  yellow: Color.rgb(243, 241, 105),
  cyan: Color.rgb(34, 209, 238),
};

export const Utils = {
  readColor: color => color.hsl().string(),
  calculateRem: size => `${size / 16}rem`,
  customBreakpoint: min => `(min-width: ${min}px)`,
};
