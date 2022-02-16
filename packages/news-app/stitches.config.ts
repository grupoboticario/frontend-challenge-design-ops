import { createStitches } from "@stitches/react";
const brazilTheme = require("@design-ops/design-system/dist/brazil");
const protugalTheme = require("@design-ops/design-system/dist/portugal");
const usaTheme = require("@design-ops/design-system/dist/usa");

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({ theme: { ...usaTheme } });

export const brTheme = createTheme({ ...brazilTheme });
export const ptTheme = createTheme({ ...protugalTheme });
export const usTheme = createTheme({ ...usaTheme });
