import { device } from "@assets/styles/breakpoints";
import ButtonLoadMore from "@components/ButtonLoadMore";
import Layout from "@components/Layout";
import Text from "@components/Text";
import { Box, Container, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { Languages } from "types/languages";
import NewsList from "./components/NewsList";
import { useTheme } from "next-themes";
import { Theme } from "types/theme";
import { useEffect, useState } from "react";

const resultsForTexts: Languages = {
  pt: "Resultados para:",
  br: "Resultados para:",
  us: "Results for:",
};

export default function Search() {
  const isTablet = useMediaQuery(device.tablet);
  const router = useRouter();
  const { category } = router.query;

  const { resolvedTheme } = useTheme();
  const theme: Theme = resolvedTheme?.replace("Theme", "") || "us";
  const [resultsForText, seResultsForText] = useState(resultsForTexts[theme]);

  useEffect(() => {
    seResultsForText(
      resolvedTheme ? resultsForTexts[theme] : resultsForTexts.us
    );
  }, [resolvedTheme, theme]);

  return (
    <Layout>
      <Container sx={{ marginTop: isTablet ? "44px" : "20px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Text
            textStyle={isTablet ? "SubtitleDesktop" : "SubtitleMobile"}
            sx={{ marginBottom: isTablet ? "20px" : "16px" }}
          >
            {`${resultsForText}`}
          </Text>
          <NewsList
            category={Array.isArray(category) ? category[0] : category || ""}
            showCategory={false}
          />
        </Box>
        <ButtonLoadMore />
      </Container>
    </Layout>
  );
}
