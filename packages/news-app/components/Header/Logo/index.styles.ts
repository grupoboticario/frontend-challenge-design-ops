import { Box } from "@mui/material";
import { styled } from "@stitches.config";
import Text from "@components/Text";

export const LogoStyled = styled(Box, {
  display: "flex",
  alignItems: "center",
  padding: "10px",
  background: "$theme",
  borderRadius: "$small",
});

export const World = styled(Text, {
  color: "$text-menu",
  letterSpacing: "0.08em",
});

export const News = styled(Text, {
  color: "$text-menu",
  letterSpacing: "0.08em",
  fontWeight: "bold",
});
