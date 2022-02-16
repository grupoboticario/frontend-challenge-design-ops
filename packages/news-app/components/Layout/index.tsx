import { device } from "@assets/styles/breakpoints";
import Header from "@components/Header";
import Nav from "@components/Nav";
import DrawerMenu from "@components/Nav/DrawerMenu";
import { DrawerStorage } from "@context/DrawerContext";
import { useMediaQuery } from "@mui/material";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isTablet = useMediaQuery(device.tablet);

  return (
    <DrawerStorage>
      <Header />
      {!isTablet && <DrawerMenu />}
      {isTablet && <Nav />}
      {children}
    </DrawerStorage>
  );
};

export default Layout;
