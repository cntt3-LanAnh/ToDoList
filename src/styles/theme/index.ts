'use client';

import { createTheme, ThemeOptions } from '@mui/material/styles';

import paletteOptions from './color';

const customThemeOption: ThemeOptions = {
  palette: paletteOptions,
  components: {
    MuiButton: { defaultProps: { disableElevation: true } },
  },
};

export const miuiTheme = createTheme(customThemeOption);
