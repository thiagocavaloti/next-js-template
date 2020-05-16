import { createMuiTheme } from '@material-ui/core/styles';
import RobotoCondensed from '../public/fonts/RobotoCondensed-Regular.ttf';

const roboto = {
  fontFamily: 'Roboto Condensed',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Roboto Condensed'),
    local('Roboto Condensed'),
    url(${RobotoCondensed}) format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
};

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto Condensed'
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [roboto]
      }
    }
  },
  palette: {
    primary: {
      main: '#680000'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: '#680000'
    },
    background: {
      default: '#fff'
    }
  }
});

export default theme;
