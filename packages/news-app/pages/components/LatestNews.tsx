import { device } from "@assets/styles/breakpoints";
import NewsCard from "@components/NewsCard";
import { Box, useMediaQuery } from "@mui/material";
import { Languages } from "types/languages";
import Title from "./Title";

const titles: Languages = {
  pt: "Últimas notícias",
  br: "Últimas notícias",
  us: "Latest news",
};

export default function LatestNews() {
  const isTablet = useMediaQuery(device.tablet);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Title titles={titles} />
      <Box
        sx={{
          display: "flex",
          flexDirection: isTablet ? "row" : "column",
          gap: "16px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {Array.from(Array(3)).map((_, index) => {
            return (
              <NewsCard
                key={index}
                flexBoxTitle={isTablet ? 1 : 2}
                imagePath="https://media.wired.com/photos/6206ca1303dd42ee498c498b/191:100/w_1280,c_limit/Gear-Jabra-Elite-4-Active.jpg"
                category="Science"
                title="Jabra's Elite 4 Active Offer Great Bang for Your Buck"
                titleStyle={
                  isTablet ? "ArticleTitleDesktop" : "ArticleTitleMobile"
                }
                linkFullArticle="https://www.wired.com/review/jabra-elite-4-active/"
              />
            );
          })}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {Array.from(Array(3)).map((_, index) => {
            return (
              <NewsCard
                key={index}
                flexBoxTitle={isTablet ? 1 : 2}
                imagePath="https://media.wired.com/photos/6206ca1303dd42ee498c498b/191:100/w_1280,c_limit/Gear-Jabra-Elite-4-Active.jpg"
                category="Business"
                title="Jabra's Elite 4 Active Offer Great Bang for Your Buck"
                titleStyle={
                  isTablet ? "ArticleTitleDesktop" : "ArticleTitleMobile"
                }
                linkFullArticle="https://www.wired.com/review/jabra-elite-4-active/"
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
