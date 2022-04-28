/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';
import ptStyle from '@design-ops/design-system/dist/pt';
import usStyle from '@design-ops/design-system/dist/us';
import brStyle from '@design-ops/design-system/dist/br';

export const {
  styled, css, globalCss, getCssText, createTheme, theme, config,
} = createStitches({
  media: {
    desktop: '(min-width: 768px)',
    mobile: '(max-width: 767px)',
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});

export const injectGlobalStyles = globalCss({
  '*': {
    margin: 0, padding: 0, boxSizing: 'border-box', fontFamily: "'Source Sans Pro', sans-serif",
  },
  '*:after': { boxSizing: 'border-box' },
  '*:before': { boxSizing: 'border-box' },
});

export const themeUS = createTheme({ ...usStyle });
export const themeBR = createTheme({ ...brStyle });
export const themePT = createTheme({ ...ptStyle });
