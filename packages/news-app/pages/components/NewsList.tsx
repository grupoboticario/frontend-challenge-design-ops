import { device } from "@assets/styles/breakpoints";
import NewsCard from "@components/NewsCard";
import { Box, useMediaQuery } from "@mui/material";

export default function NewsList({
  category,
  showCategory = true,
}: {
  category: string;
  showCategory?: boolean;
}) {
  const isTablet = useMediaQuery(device.tablet);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {Array.from(Array(10)).map((_, index) => {
        return (
          <NewsCard
            key={index}
            flexBoxTitle={isTablet ? 4 : 2}
            imagePath="https://media.wired.com/photos/6206ca1303dd42ee498c498b/191:100/w_1280,c_limit/Gear-Jabra-Elite-4-Active.jpg"
            category={category}
            showCategory={showCategory}
            title="Jabra's Elite 4 Active Offer Great Bang for Your Buck"
            titleStyle={isTablet ? "ArticleTitleDesktop" : "ArticleTitleMobile"}
            linkFullArticle="https://www.wired.com/review/jabra-elite-4-active/"
            publishedDate="14 hours ago"
            showPublishedDate
          />
        );
      })}
    </Box>
  );
}
