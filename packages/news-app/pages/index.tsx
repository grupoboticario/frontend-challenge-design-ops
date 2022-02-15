import { useMediaQuery } from "@mui/material";
import type { NextPage } from "next";
import { device } from "../assets/styles/breakpoints";
import Header from "../components/Header";
import Nav from "../components/Nav";
import DrawerMenu from "../components/Nav/DrawerMenu";
import { DrawerStorage } from "../context/DrawerContext";

const Home: NextPage = () => {
  const isTablet = useMediaQuery(device.tablet);
  return (
    <DrawerStorage>
      <Header />
      {!isTablet && <DrawerMenu />}
      {isTablet && <Nav />}
    </DrawerStorage>
  );
};

export default Home;
