import { responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';

// import { palette } from './palette.js';
import { dark, light } from './palette.js';
import shadows from './shadows.js';

import type { Theme } from '@mui/material';
import type { ComponentsOverrides } from '@mui/material/styles';

const getTheme = (mode: string, themeToggler: () => void): Theme => responsiveFontSizes(
  createTheme({
    themeToggler,
    components: {
      MuiButton: {
        styleOverrides: {
          containedSecondary: mode === 'light' ? { color: 'white' } : {},
          root: {
            borderRadius: 5,
            fontWeight: 400,
            paddingBottom: 10,
            paddingTop: 10
          }
        } as ComponentsOverrides['MuiButton']
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8
          }
        } as ComponentsOverrides['MuiCard']
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            borderRadius: 5
          }
        } as ComponentsOverrides['MuiInputBase']
      },
      MuiOutlinedInput: {
        styleOverrides: {
          input: {
            borderRadius: 5
          },
          root: {
            borderRadius: 5
          }
        } as ComponentsOverrides['MuiOutlinedInput']
      }
    },
    // palette: mode === 'light' ? palette('light') : palette('dark'),
    palette: mode === 'light' ? light : dark,
    shadows: shadows(mode),
    typography: {
      button: {
        fontWeight: 'medium' as React.CSSProperties['fontWeight'],
        textTransform: 'none'
      },
      fontFamily: '"Inter", sans-serif'
    },
    zIndex: {
      appBar: 1200,
      drawer: 1300
    }
  })
);

export default getTheme;
