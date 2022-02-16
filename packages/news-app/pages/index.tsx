import { device } from "@assets/styles/breakpoints";
import Layout from "@components/Layout";
import NewCard from "@components/NewCard";
import Text from "@components/Text";
import { Box, Container, Divider, useMediaQuery } from "@mui/material";
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
          <Text
            textStyle={isTablet ? "TitleDesktop" : "TitleMobile"}
            sx={{ marginBottom: isTablet ? "20px" : "16px" }}
          >
            {title}
          </Text>
          <Box
            sx={{
              display: "flex",
              flexDirection: isTablet ? "row" : "column",
              gap: "16px",
            }}
          >
            <Box sx={{ flex: isTablet ? 2 : 1 }}>
              <NewCard
                flexDirection="column"
                imagePath="https://media.wired.com/photos/6206ca1303dd42ee498c498b/191:100/w_1280,c_limit/Gear-Jabra-Elite-4-Active.jpg"
                imageHeight={isTablet ? 346 : 157}
                category="Business"
                title="Jabra's Elite 4 Active Offer Great Bang for Your Buck"
                titleStyle={isTablet ? "HeadlineDesktop" : "HeadlineMobile"}
                linkFullArticle="https://www.wired.com/review/jabra-elite-4-active/"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                gap: "16px",
              }}
            >
              <NewCard
                flexDirection="column"
                imagePath="https://media.wired.com/photos/6206ca1303dd42ee498c498b/191:100/w_1280,c_limit/Gear-Jabra-Elite-4-Active.jpg"
                imageHeight={isTablet ? 120 : 102}
                category="Business"
                title="Jabra's Elite 4 Active Offer Great Bang for Your Buck"
                titleStyle={
                  isTablet ? "ArticleTitleDesktop" : "ArticleTitleMobile"
                }
                linkFullArticle="https://www.wired.com/review/jabra-elite-4-active/"
              />
              <NewCard
                flexDirection="column"
                imagePath="https://media.wired.com/photos/6206ca1303dd42ee498c498b/191:100/w_1280,c_limit/Gear-Jabra-Elite-4-Active.jpg"
                imageHeight={isTablet ? 120 : 102}
                category="Business"
                title="Jabra's Elite 4 Active Offer Great Bang for Your Buck"
                titleStyle={
                  isTablet ? "ArticleTitleDesktop" : "ArticleTitleMobile"
                }
                linkFullArticle="https://www.wired.com/review/jabra-elite-4-active/"
              />
            </Box>
          </Box>
        </Box>
        <Divider sx={{ margin: isTablet ? "60px 0" : "36px 0" }} />
      </Container>
    </Layout>
  );
};

export default Home;
