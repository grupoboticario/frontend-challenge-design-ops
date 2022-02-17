import { device } from "@assets/styles/breakpoints";
import LoadingNews from "@components/LoadingNews";
import NewsCard from "@components/NewsCard";
import { Box, useMediaQuery } from "@mui/material";
import { useFetchHeadlines } from "hooks/use-fetch-headlines";
import { useTheme } from "next-themes";
import { Languages } from "types/languages";
import { Theme } from "types/theme";
import Title from "./Title";

const titles: Languages = {
  pt: "Principais notícias",
  br: "Principais notícias",
  us: "Headlines",
};

export default function Headlines() {
  const isTablet = useMediaQuery(device.tablet);

  const { resolvedTheme } = useTheme();
  const country: Theme = resolvedTheme?.replace("Theme", "") || "us";

  const { headlines, loading } = useFetchHeadlines(country);

  const newsAboutScience = headlines?.science;
  const newsAboutTechnology = headlines?.technology;
  const newsAboutBusiness = headlines?.business;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Title titles={titles} />
      <>
        {loading ? (
          <LoadingNews />
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: isTablet ? "row" : "column",
              gap: "16px",
            }}
          >
            <Box sx={{ flex: isTablet ? 2 : 1 }}>
              <NewsCard
                flexDirection="column"
                imagePath={newsAboutScience?.urlToImage || ""}
                imageHeight={isTablet ? 346 : 157}
                category="Science"
                title={newsAboutScience?.title || ""}
                titleStyle={isTablet ? "HeadlineDesktop" : "HeadlineMobile"}
                linkFullArticle={newsAboutScience?.url || ""}
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
              <NewsCard
                flexDirection="column"
                imagePath={newsAboutTechnology?.urlToImage || ""}
                imageHeight={isTablet ? 120 : 102}
                category="Technology"
                title={newsAboutTechnology?.title || ""}
                titleStyle={
                  isTablet ? "ArticleTitleDesktop" : "ArticleTitleMobile"
                }
                linkFullArticle={newsAboutTechnology?.url || ""}
              />
              <NewsCard
                flexDirection="column"
                imagePath={newsAboutBusiness?.urlToImage || ""}
                imageHeight={isTablet ? 120 : 102}
                category="Business"
                title={newsAboutBusiness?.title || ""}
                titleStyle={
                  isTablet ? "ArticleTitleDesktop" : "ArticleTitleMobile"
                }
                linkFullArticle={newsAboutBusiness?.url || ""}
              />
            </Box>
          </Box>
        )}
      </>
    </Box>
  );
}
