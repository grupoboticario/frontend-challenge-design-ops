import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import React, { useContext, useState } from "react";
import "react-modern-drawer/dist/index.css";
import Logo from "../../Header/Logo";
import { menuItems } from "../data";
import {
  DrawerStyled,
  ListItemStyled,
  ListItemTextStyled,
} from "./index.styles";
import { BsX } from "react-icons/bs";
import { DrawerContext } from "../../../context/DrawerContext";

export default function DrawerMenu() {
  const { isOpen, setIsOpen } = useContext(DrawerContext);

  const toggleDrawer = () => {
    setIsOpen(false);
  };

  return (
    <DrawerStyled open={isOpen} onClose={toggleDrawer} direction="left">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "6px 0 0 6px",
        }}
      >
        <Logo />
        <IconButton
          aria-label="close drawer"
          component="span"
          sx={{ color: "white" }}
          onClick={toggleDrawer}
        >
          <BsX />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((text, index) => (
          <ListItemStyled key={index}>
            <ListItemTextStyled primary={text} />
          </ListItemStyled>
        ))}
      </List>
    </DrawerStyled>
  );
}
