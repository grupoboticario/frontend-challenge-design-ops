import { Box, ListItem, ListItemText } from "@mui/material";
import { styled } from "@stitches.config";
import Drawer from "react-modern-drawer";

export const DrawerStyled = styled(Drawer, {
  background: "$theme !important",
});

export const ListItemStyled = styled(ListItem, {
  background: "transparent",
  "&:hover": {
    backgroundColor: "$menu-active",
  },
});

export const ListItemTextStyled = styled(ListItemText, {
  color: "$text-menu",
});
