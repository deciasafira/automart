// import type { Palette, PaletteOptions } from '@mui/material';

// export const palette = (mode: Palette['mode']): Palette => {
//   const whiteColor = '#FFF';
//   const lightColor = '47, 43, 61';
//   const darkColor = '208, 212, 241';
//   const darkPaperBgColor = '#2F3349';
//   const mainColor = mode === 'light' ? lightColor : darkColor;

//   const primaryColor = {
//     50: '#FBFBFB',
//     100: '#F9F2F1',
//     200: '#F4E9E7',
//     300: '#EFDEDB',
//     400: '#DDBAB5',
//     500: '#912210',
//     600: '#831F0E',
//     700: '#741B0D',
//     800: '#6D1A0C',
//     900: '#57140A',
//     950: '#182753',
//     gradient: 'linear-gradient(135deg, #9E4233 0%, #831F0E 100%)'
//   };

//   const errorColor = {
//     50: '#FEF2F2',
//     100: '#FEE2E2',
//     200: '#FECACA',
//     300: '#FCA5A5',
//     400: '#F87171',
//     500: '#EF4444',
//     600: '#DC2626',
//     700: '#B91C1C',
//     800: '#991B1B',
//     900: '#7F1D1D',
//     950: '#450A0A'
//   };

//   const infoColor = {
//     50: '#EDFAFF',
//     100: '#D6F2FF',
//     200: '#B6EAFF',
//     300: '#83E0FF',
//     400: '#49CBFF',
//     500: '#1FADFF',
//     600: '#088FFF',
//     700: '#0177F4',
//     800: '#0962CC',
//     900: '#57140A',
//     950: '#0E325D'
//   };

//   const secondaryColor = {
//     100: '#FFFBED',
//     200: '#FEF498',
//     300: '#FDEC65',
//     400: '#FCE33F',
//     500: '#FBD600',
//     600: '#D7A800',
//     700: '#A56D00',
//     800: '#7A4900',
//     900: '#513000'
//   };

//   const successColor = {
//     50: '#F0FDF5',
//     100: '#DCFCE7',
//     200: '#BBF7D0',
//     300: '#86EFAC',
//     400: '#4ADE80',
//     500: '#22C55E',
//     600: '#16A34A',
//     700: '#15803C',
//     800: '#166533',
//     900: '#14532B',
//     950: '#052E14'
//   };

//   const warningColor = {
//     50: '#FFFBED',
//     100: '#FFF7D4',
//     200: '#FFEBA8',
//     300: '#FFDA71',
//     400: '#FFBF38',
//     500: '#FDA712',
//     600: '#F79009',
//     700: '#C56A09',
//     800: '#9D530F',
//     900: '#7E4510',
//     950: '#422006'
//   };

//   const defaultBgColor = () => {
//     if (mode === 'light') {
//       return '#F8F7FA';
//     }

//     return '#25293C';
//   };

//   return {
//     mode,
//     common: {
//       black: '#000',
//       white: whiteColor
//     },
//     customColors: {
//       avatarBg: mode === 'light' ? '#DBDADE' : '#4A5072',
//       bodyBg: mode === 'light' ? '#F8F7FA' : '#25293C',
//       dark: `rgba(${darkColor}, 1)`,
//       darkPaperBg: darkPaperBgColor,
//       light: `rgba(${lightColor}, 1)`,
//       lightPaperBg: whiteColor,
//       main: `rgba(${mainColor}, 1)`,
//       primaryText: mode === 'light' ? primaryColor[600] : primaryColor[300],
//       tableHeaderBg: mode === 'light' ? '#F6F6F7' : '#4A5072',
//       trackBg: mode === 'light' ? '#F1F0F2' : '#363B54'
//     },

//     error: {
//       contrastText: whiteColor,
//       dark: errorColor[800],
//       light: errorColor[600],
//       main: errorColor[700]
//     },
//     info: {
//       contrastText: whiteColor,
//       dark: infoColor[800],
//       light: infoColor[600],
//       main: infoColor[700]
//     },
//     primary: {
//       contrastText: whiteColor,
//       dark: primaryColor[800],
//       gradient: primaryColor.gradient,
//       light: primaryColor[600],
//       main: primaryColor[700]
//     },
//     secondary: {
//       contrastText: whiteColor,
//       dark: secondaryColor[800],
//       light: secondaryColor[600],
//       main: secondaryColor[500]
//     },
//     success: {
//       contrastText: whiteColor,
//       dark: successColor[800],
//       light: successColor[600],
//       main: successColor[700]
//     },
//     warning: {
//       contrastText: whiteColor,
//       dark: warningColor[800],
//       light: warningColor[600],
//       main: warningColor[700]
//     },

//     action: {
//       active: `rgba(${mainColor}, 0.54)`,
//       disabled: `rgba(${mainColor}, 0.26)`,
//       disabledBackground: `rgba(${mainColor}, 0.12)`,
//       focus: `rgba(${mainColor}, 0.12)`,
//       hover: `rgba(${mainColor}, 0.04)`,
//       selected: `rgba(${mainColor}, 0.06)`,
//       selectedOpacity: 0.06
//     },
//     background: {
//       default: defaultBgColor(),
//       paper: mode === 'light' ? whiteColor : darkPaperBgColor
//     },
//     divider: `rgba(${mainColor}, 0.16)`,
//     grey: {
//       100: '#FFFFFF',
//       200: '#F9FAFB',
//       300: '#F2F4F7',
//       400: '#EAECF0',
//       500: '#D0D5DD',
//       600: '#98A2B3',
//       700: '#667085',
//       800: '#475467',
//       900: '#1D2939',
//       A100: '#F5F5F5',
//       A200: '#EEEEEE',
//       A400: '#BDBDBD',
//       A700: '#616161'
//     },
//     text: {
//       disabled: `rgba(${mainColor}, 0.42)`,
//       primary: `rgba(${mainColor}, 1)`,
//       secondary: `rgba(${mainColor}, 0.68)`
//     }
//   } as PaletteOptions as Palette;
// };

import type { PaletteMode } from '@mui/material';

export const light = {
  alternate: {
    dark: '#edf1f7',
    main: '#f7faff'
  },
  background: {
    default: '#ffffff',
    level1: '#ffffff',
    level2: '#f5f5f5',
    paper: '#ffffff'
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  divider: 'rgba(0, 0, 0, 0.12)',
  mode: 'light' as PaletteMode,
  primary: {
    contrastText: '#fff',
    dark: '#2f6ad9',
    light: '#467de3',
    main: '#377dff'
  },
  secondary: {
    contrastText: 'rgba(0, 0, 0, 0.87)',
    dark: '#FF9800',
    light: '#ffb74d',
    main: '#f9b934'
  },
  text: {
    primary: '#1e2022',
    secondary: '#677788'
  }
};

export const dark = {
  alternate: {
    dark: '#151a30',
    main: '#1a2138'
  },
  background: {
    default: '#222B45',
    level1: '#2D3748',
    level2: '#333',
    paper: '#222B45'
  },
  cardShadow: 'rgba(0, 0, 0, .11)',
  common: {
    black: '#000',
    white: '#fff'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  mode: 'dark' as PaletteMode,
  primary: {
    contrastText: '#fff',
    dark: '#0d47a1',
    light: '#2196f3',
    main: '#1976d2'
  },
  secondary: {
    contrastText: 'rgba(0, 0, 0, 0.87)',
    dark: '#DBBE01',
    light: '#FFEA41',
    main: '#FFE102'
  },
  text: {
    primary: '#EEEEEF',
    secondary: '#AEB0B4'
  }
};
