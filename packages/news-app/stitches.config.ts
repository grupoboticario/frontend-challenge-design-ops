import { createStitches } from "@stitches/react";
import brazilTheme from "@design-ops/design-system/dist/brazil";
import protugalTheme from "@design-ops/design-system/dist/portugal";
import usaTheme from "@design-ops/design-system/dist/usa";

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
