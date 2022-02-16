import { device } from "@assets/styles/breakpoints";
import Layout from "@components/Layout";
import Text from "@components/Text";
import { Box, Container, useMediaQuery } from "@mui/material";
import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Theme } from "types/theme";

type Titles = {
  [x: string]: string;
};

const titles: Titles = {
  pt: "Manchetes",
  br: "Manchetes",
  us: "Headlines",
};

const Home: NextPage = () => {
  const isTablet = useMediaQuery(device.tablet);
  const { resolvedTheme } = useTheme();
  const theme: Theme = resolvedTheme?.replace("Theme", "") || "us";
  const [title, setTitle] = useState(titles[theme]);

  useEffect(() => {
    setTitle(resolvedTheme ? titles[theme] : titles.us);
  }, [resolvedTheme, theme]);

  return (
    <Layout>
      <Container sx={{ marginTop: isTablet ? "44px" : "20px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Text textStyle={isTablet ? "TitleDesktop" : "TitleMobile"}>
            {title}
          </Text>
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
