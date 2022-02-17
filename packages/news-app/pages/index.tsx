import { device } from "@assets/styles/breakpoints";
import Layout from "@components/Layout";
import { SerachContext } from "@context/SearchContext";
import { Container, Divider, useMediaQuery } from "@mui/material";
import type { NextPage } from "next";
import { useContext, useEffect } from "react";
import Headlines from "./components/Headlines";
import LatestNews from "./components/LatestNews";

const Home: NextPage = () => {
  const isTablet = useMediaQuery(device.tablet);

  const { setKeyWord } = useContext(SerachContext);

  useEffect(() => {
    setKeyWord("");
  }, [setKeyWord]);

  return (
    <Layout>
      <Container sx={{ marginTop: isTablet ? "44px" : "20px" }}>
        <Headlines />
        <Divider sx={{ margin: isTablet ? "60px 0" : "36px 0" }} />
        <LatestNews />
      </Container>
    </Layout>
  );
};

export default Home;
