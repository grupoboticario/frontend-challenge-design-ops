import { Box } from "@mui/material";
import { styled } from "../../../stitches.config";
import Text from "../../Text";

export const LogoStyled = styled(Box, {
  display: "flex",
  alignItems: "center",
  padding: "10px",
  background: "$theme",
  borderRadius: "$small",
});

export const World = styled(Text, {
  color: "$text-menu",
});

export const News = styled(Text, {
  color: "$text-menu",
  fontWeight: "bold",
});
