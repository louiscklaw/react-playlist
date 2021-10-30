import { alpha } from '@mui/material/styles';

import { ColorLuminance } from '../utils/ColorLuminance';

// ----------------------------------------------------------------------

const LYNKED_RED = '#800000';
const LYNKED_SECONDARY = '#0079A5';
const LYNKED_INFO = '#0079A5';
const LYNKED_SUCCESS = '#74AA08';
const LYNKED_WARNING = '#8C4201';
const LYNKED_ERROR = '#BA1A3F';

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8)
};

const PRIMARY = {
  lighter: ColorLuminance(LYNKED_RED, 0.4),
  light: ColorLuminance(LYNKED_RED, 0.2),
  main: LYNKED_RED,
  dark: ColorLuminance(LYNKED_RED, -0.2),
  darker: ColorLuminance(LYNKED_RED, -0.4),
  contrastText: '#fff'
};
const SECONDARY = {
  lighter: ColorLuminance(LYNKED_SECONDARY, 0.4),
  light: ColorLuminance(LYNKED_SECONDARY, 0.2),
  main: LYNKED_SECONDARY,
  dark: ColorLuminance(LYNKED_SECONDARY, -0.2),
  darker: ColorLuminance(LYNKED_SECONDARY, -0.4),
  contrastText: '#fff'
};
const INFO = {
  lighter: ColorLuminance(LYNKED_INFO, 0.4),
  light: ColorLuminance(LYNKED_INFO, 0.2),
  main: LYNKED_INFO,
  dark: ColorLuminance(LYNKED_INFO, -0.2),
  darker: ColorLuminance(LYNKED_INFO, -0.4),
  contrastText: '#fff'
};
const SUCCESS = {
  lighter: ColorLuminance(LYNKED_SUCCESS, 0.4),
  light: ColorLuminance(LYNKED_SUCCESS, 0.2),
  main: LYNKED_SUCCESS,
  dark: ColorLuminance(LYNKED_SUCCESS, -0.2),
  darker: ColorLuminance(LYNKED_SUCCESS, -0.4),
  contrastText: GREY[800]
};
const WARNING = {
  lighter: ColorLuminance(LYNKED_WARNING, 0.4),
  light: ColorLuminance(LYNKED_WARNING, 0.2),
  main: LYNKED_WARNING,
  dark: ColorLuminance(LYNKED_WARNING, -0.2),
  darker: ColorLuminance(LYNKED_WARNING, -0.4),
  contrastText: GREY[800]
};
const ERROR = {
  lighter: ColorLuminance(LYNKED_ERROR, 0.4),
  light: ColorLuminance(LYNKED_ERROR, 0.2),
  main: LYNKED_ERROR,
  dark: ColorLuminance(LYNKED_ERROR, -0.2),
  darker: ColorLuminance(LYNKED_ERROR, -0.4),
  contrastText: '#fff'
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main)
};

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4']
};

const palette = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
  background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  }
};

export default palette;
