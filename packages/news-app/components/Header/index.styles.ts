import { Container } from "@mui/material";
import { device } from "@assets/styles/breakpoints";
import { styled } from "@stitches.config";

export const ContainerStyled = styled(Container, {
  background: "$theme",
  [`@media ${device.tablet}`]: {
    background: "transparent",
  },
});

export const HeaderStyled = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 0",
});
