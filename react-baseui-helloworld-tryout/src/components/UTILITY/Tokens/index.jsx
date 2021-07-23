// myTheme.js
import { createTheme, lightThemePrimitives } from 'baseui';
import { colors } from 'baseui/tokens';
const myThemePrimitives = {
  ...lightThemePrimitives,
  primary: colors.blue400,
  primary50: colors.blue50,
  primary100: colors.blue100,
  primary200: colors.blue200,
  primary300: colors.blue300,
  primary400: colors.blue400,
  primary500: colors.blue500,
  primary600: colors.blue600,
  primary700: colors.blue700,
};
const myTheme = createTheme(myThemePrimitives, {});
export default () => {
  return <>myTheme</>;
};
