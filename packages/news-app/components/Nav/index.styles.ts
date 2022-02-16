import { Box, Container } from "@mui/material";
import { styled } from "@stitches.config";
import Text from "@components/Text";

export const NavStyled = styled("nav", {
  height: "60px",
  background: "$theme",
});

export const ContainerStyled = styled(Container, {
  display: "flex",
});

export const MenuItem = styled(Box, {
  height: "60px",
  display: "flex",
  alignItems: "center",
  padding: "20px",
  cursor: "pointer",
  background: "transparent",
  "&:hover": {
    backgroundColor: "$menu-active",
  },
  variants: {
    active: {
      true: {
        backgroundColor: "$menu-active",
      },
    },
  },
});

export const LabelMenuItem = styled(Text, {
  color: "$text-menu",
  letterSpacing: "0.08em",
});
