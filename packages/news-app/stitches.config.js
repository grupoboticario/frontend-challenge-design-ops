import { createStitches, globalCss } from '@stitches/react';

export const defaultTheme = {
  colors: {
    text: "#222",
    textMenu: "#FFF",
    textAuxiliar:"#666",
    line:"#CCC",
    theme: "#38446C",
    menuActive: "#526092",
    menuHover: "#6277C2",
    link: "#A53737",
    linkHover: "#D10B0B",
    linkVisited: "#693939"
  },
  radii: {
    sharp: "0px",
    small: "4px",
    medium: "6px",
    large: "16px",
    pill: "100%"
  },
  fonts: {
    sourceSansPro: 'Source Sans Pro, sans-serif',
    rubik: 'Rubik, sans-serif',
  },
  fontSizes: {
    xxs: "0.5rem",
    xs: "0.625rem",
    sm: "0.75rem",
    md: "0.875rem",
    lg: "1rem",
    xl: "1.125rem",
    xxl: "1.25rem",
    xxxl: "1.5rem",
  },
  fontWeights: {
    light: "300",
    regular: "400",
    medium: '500',
    semiBold: "600",
    bold: "700"
  },
  sizes: {
    0: "0rem",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    13: "3.25rem",
    14: "3.5rem",
    15: "3.75rem",
    16: "4rem",
    17: "4.25rem",
    18: "4.5rem",
    19: "4.75rem",
    20: "5rem",
    21: "5.25rem",
    22: "5.5rem",
    23: "5.75rem",
    24: "1.125rem",
  },
  space: {
    0: "0rem",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.125rem",
    6: "1.25rem",
    7: "1.5rem",
    8: "1.75rem",
    9: "2rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    13: "3.25rem",
    14: "3.5rem",
    15: "3.75rem",
    16: "4rem",
    17: "4.25rem",
    18: "4.5rem",
    19: "4.75rem",
    20: "5rem",
    21: "5.25rem",
    22: "5.5rem",
    23: "5.75rem",
    24: "1.125rem",
    25: "2.25rem",
  },
  lineHeights: {
    0: "0rem",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.125rem",
    6: "1.25rem",
    7: "1.5rem",
    8: "1.75rem",
    9: "2rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    13: "3.25rem",
    14: "3.5rem",
    15: "3.75rem",
    16: "4rem",
    17: "4.25rem",
    18: "4.5rem",
    19: "4.75rem",
    20: "5rem",
    21: "5.25rem",
    22: "5.5rem",
    23: "5.75rem",
    24: "1.125rem",
  },
}

export const { styled, createTheme, css, getCssText } = createStitches({
  theme: defaultTheme,
  media: {
    mobile: "(min-width: 520px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 992px)",
    ultrawide: "(min-width: 1400px)"
  },
  utils: {
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
  }
});

export const brazilTheme = createTheme({
  colors: {
    theme: "#386C43",
    menuActive: "#529259",
    menuHover: "#61B96A",
    link: "#1687AB",
    linkHover: "#00A6DB",
    linkVisited: "#295F71"
  }
})

export const portugalTheme = createTheme({
	colors: {
    theme: "#6C3838",
    menuActive: "#925252",
    menuHover: "#B85f5f",
    link: "#1C8A27",
    linkHover: "#0EB51E",
    linkVisited: "#1F5724"
  }
})

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
  "body": {
    fontFamily: "$sourceSansPro"
  }
});


