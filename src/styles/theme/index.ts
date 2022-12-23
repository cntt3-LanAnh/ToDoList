'use client';

import { createTheme, ThemeOptions } from '@mui/material/styles';

import paletteOptions from './color';

const customThemeOption: ThemeOptions = {
  palette: paletteOptions,
  components: {
    MuiButton: { defaultProps: { disableElevation: true } },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
};

export const miuiTheme = createTheme(customThemeOption);
