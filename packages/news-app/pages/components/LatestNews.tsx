import { device } from "@assets/styles/breakpoints";
import LoadingNews from "@components/LoadingNews";
import NewsCard from "@components/NewsCard";
import { Box, useMediaQuery } from "@mui/material";
import { useFetchLatestNews } from "hooks/use-fetch-latest-news";
import { useTheme } from "next-themes";
import { Languages } from "types/languages";
import { Theme } from "types/theme";
import Title from "./Title";

const titles: Languages = {
  pt: "Últimas notícias",
  br: "Últimas notícias",
  us: "Latest news",
};

export default function LatestNews() {
  const isTablet = useMediaQuery(device.tablet);

  const { resolvedTheme } = useTheme();
  const country: Theme = resolvedTheme?.replace("Theme", "") || "us";

  const { latestNews, loading } = useFetchLatestNews(country);

  const news = Object.entries(latestNews || {});

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", marginBottom: "60px" }}
    >
      <Title titles={titles} />
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
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {news.slice(0, news.length / 2).map(([category, news], index) => {
              return (
                <NewsCard
                  key={index}
                  flexBoxTitle={isTablet ? 1 : 2}
                  imagePath={news?.urlToImage || ""}
                  category={category}
                  title={news?.title || ""}
                  titleStyle={
                    isTablet ? "ArticleTitleDesktop" : "ArticleTitleMobile"
                  }
                  linkFullArticle={news?.url || ""}
                />
              );
            })}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {news.slice(news.length / 2).map(([category, news], index) => {
              return (
                <NewsCard
                  key={index}
                  flexBoxTitle={isTablet ? 1 : 2}
                  imagePath={news?.urlToImage || ""}
                  category={category}
                  title={news?.title || ""}
                  titleStyle={
                    isTablet ? "ArticleTitleDesktop" : "ArticleTitleMobile"
                  }
                  linkFullArticle={news?.url || ""}
                />
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
}
