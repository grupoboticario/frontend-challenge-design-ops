import { device } from "@assets/styles/breakpoints";
import ButtonLoadMore from "@components/ButtonLoadMore";
import Layout from "@components/Layout";
import { Container, Divider, useMediaQuery } from "@mui/material";
import type { NextPage } from "next";
import Headlines from "./components/Headlines";
import LatestNews from "./components/LatestNews";

const Home: NextPage = () => {
  const isTablet = useMediaQuery(device.tablet);

  return (
    <Layout>
      <Container sx={{ marginTop: isTablet ? "44px" : "20px" }}>
        <Headlines />
        <Divider sx={{ margin: isTablet ? "60px 0" : "36px 0" }} />
        <LatestNews />
        <ButtonLoadMore />
      </Container>
    </Layout>
  );
};

export default Home;
