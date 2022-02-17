import { device } from "@assets/styles/breakpoints";
import NewsCard from "@components/NewsCard";
import { Box, useMediaQuery } from "@mui/material";
import { News } from "types/news";

export default function NewsList({
  articles,
  category,
  showCategory = true,
}: {
  articles: News[] | undefined;
  category: string;
  showCategory?: boolean;
}) {
  const isTablet = useMediaQuery(device.tablet);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {articles?.map((article, index) => {
        return (
          <NewsCard
            key={index}
            flexBoxTitle={isTablet ? 4 : 2}
            imagePath={article?.urlToImage || ""}
            category={category}
            showCategory={showCategory}
            title={article?.title || ""}
            titleStyle={isTablet ? "ArticleTitleDesktop" : "ArticleTitleMobile"}
            linkFullArticle={article?.url || ""}
            publishedDate={article?.publishedAt || ""}
            showPublishedDate
          />
        );
      })}
    </Box>
  );
}
