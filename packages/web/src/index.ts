import { colors } from '@crimson-ui/colors';
import { createStitches, defaultThemeMap } from '@stitches/react';
import { ScaleValue, PropertyValue, CSS as StitchesCSS } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
    opacity: 'opacity',
  },

  theme: {
    colors,

    space: {
      auto: 'auto',
      px: '1px',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.7rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      40: '10rem',
      64: '16rem',
      80: '20rem',
    },

    fontSizes: {
      xxs: '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
      '6xl': '3rem',
      '7xl': '4rem',
      '8xl': '4.5rem',
      '9xl': '6rem',
    },

    fonts: {
      default: 'Roboto, sans-serif',
      highlight: 'Roboto, sans-serif',
      reading: 'Roboto, serif',
    },

    fontWeights: {
      regular: 'regular',
      medium: 'medium',
      bold: 'bold',
    },

    lineHeights: {
      shorter: '125%',
      short: '140%',
      normal: '160%',
      tall: '180%',
    },

    borderWidths: {
      thin: '1px',
      medium: '1.5px',
      thick: '2px',
      heavy: '4px',
    },

    radii: {
      xs: '2.5px',
      sm: '5px',
      md: '10px',
      lg: '20px',
      full: '99999px',
    },

    opacity: {
      default: '100%',
      semiOpaque: '90%',
      intense: '75%',
      medium: '50%',
      light: '25%',
      semiTransparent: '10%',
    },

    zIndices: {
      overlay: 9995,
      modal: 9999,
    },
  },

  media: {
    mobile: '@media (max-width: 768px)',
  },

  utils: {
    justify: (value: PropertyValue<'justifyContent'>) => ({
      justifyContent: value,
    }),
    align: (value: PropertyValue<'alignItems'>) => ({
      alignItems: value,
    }),
    flexDir: (value: PropertyValue<'flexDirection'>) => ({
      flexDirection: value,
    }),

    pt: (value: ScaleValue<'space'>) => ({
      paddingTop: value,
    }),
    pr: (value: ScaleValue<'space'>) => ({
      paddingRight: value,
    }),
    pb: (value: ScaleValue<'space'>) => ({
      paddingBottom: value,
    }),
    pl: (value: ScaleValue<'space'>) => ({
      paddingLeft: value,
    }),
    px: (value: ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    mt: (value: ScaleValue<'space'>) => ({
      marginTop: value,
    }),
    mr: (value: ScaleValue<'space'>) => ({
      marginRight: value,
    }),
    mb: (value: ScaleValue<'space'>) => ({
      marginBottom: value,
    }),
    ml: (value: ScaleValue<'space'>) => ({
      marginLeft: value,
    }),
    mx: (value: ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});

export type CSS = StitchesCSS<typeof config>;
