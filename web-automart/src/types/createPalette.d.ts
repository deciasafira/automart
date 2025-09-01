// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as createPalette from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    paper: string;
    default: string;
    level2: string;
    level1: string;
    footer: string;
  }

  // interface PaletteOptions {
  //   cardShadow?: string;
  //   alternate: {
  //     main: string;
  //     dark: string;
  //   };
  // }

  interface PaletteOptions {
    customColors?: {
      avatarBg?: string;
      bodyBg?: string;
      dark?: string;
      darkPaperBg?: string;
      gradient?: string;
      light?: string;
      lightPaperBg?: string;
      main?: string;
      tableHeaderBg?: string;
      trackBg?: string;
      primaryText?: string;
    };
  }

  interface Palette {
    cardShadow?: string;
    alternate: {
      main: string;
      dark: string;
    };
  }
}
