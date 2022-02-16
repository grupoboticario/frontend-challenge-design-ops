import { Typography } from "@mui/material";
import { styled } from "@stitches.config";
import { textStyles } from "./index.styles";

const Text = styled(Typography, {
  variants: {
    textStyle: {
      ...textStyles,
    },
  },
});

export default Text;
