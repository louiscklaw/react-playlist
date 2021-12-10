import { createTheme } from 'baseui';

const primitives = {
  primaryFontFamily: 'Verdana',
  primary: '#800000',
};

const overrides = {
  typography: {
    DisplayLarge: { fontFamily: 'Georgia' },
    DisplayMedium: { fontFamily: 'Georgia' },
    DisplaySmall: { fontFamily: 'Georgia' },
    DisplayXSmall: { fontFamily: 'Georgia' },
  },
  colors: {
    buttonSecondaryFill: primitives.accent100,
    buttonSecondaryText: primitives.accent,
    buttonSecondaryHover: primitives.accent200,
    buttonSecondaryActive: primitives.accent300,
    buttonSecondarySelectedFill: primitives.accent200,
    buttonSecondarySelectedText: primitives.accent,
    buttonSecondarySpinnerForeground: primitives.accent700,
    buttonSecondarySpinnerBackground: primitives.accent300,
  },
};

const theme = createTheme(primitives, overrides);

export { theme };
