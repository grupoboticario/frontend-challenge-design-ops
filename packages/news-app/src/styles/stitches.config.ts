import type * as Stitches from '@stitches/react'
import { normalize } from 'stitches-normalize-css'

import brazil from '@design-ops/design-system/dist/brazil/index.json'
import portugal from '@design-ops/design-system/dist/portugal/index.json'
import usa from '@design-ops/design-system/dist/usa/index.json'
import { createStitches } from '@stitches/react'

export const { styled, css, globalCss, getCssText, createTheme, theme, config } = createStitches({
  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 992px)',
    bp4: '(min-width: 1400px)',
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
})

export type CSS = Stitches.CSS<typeof config>

const customGlobalStyles: Record<string, Stitches.CSS> = {
  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: '$sourceSansPro',
  },
}

export const globalStyles = globalCss(...normalize, customGlobalStyles)

export const usTheme = createTheme({ ...usa })
export const brTheme = createTheme({ ...brazil })
export const ptTheme = createTheme({ ...portugal })
