import { device } from "@assets/styles/breakpoints";
import NewsCard from "@components/NewsCard";
import { Box, useMediaQuery } from "@mui/material";
import { Languages } from "types/languages";
import Title from "./Title";

const titles: Languages = {
  pt: "Principais notícias",
  br: "Principais notícias",
  us: "Headlines",
};

export default function Headlines() {
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
        <Box sx={{ flex: isTablet ? 2 : 1 }}>
          <NewsCard
            flexDirection="column"
            imagePath="https://media.wired.com/photos/6206ca1303dd42ee498c498b/191:100/w_1280,c_limit/Gear-Jabra-Elite-4-Active.jpg"
            imageHeight={isTablet ? 346 : 157}
            category="Science"
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
          <NewsCard
            flexDirection="column"
            imagePath="https://media.wired.com/photos/6206ca1303dd42ee498c498b/191:100/w_1280,c_limit/Gear-Jabra-Elite-4-Active.jpg"
            imageHeight={isTablet ? 120 : 102}
            category="Technology"
            title="Jabra's Elite 4 Active Offer Great Bang for Your Buck"
            titleStyle={isTablet ? "ArticleTitleDesktop" : "ArticleTitleMobile"}
            linkFullArticle="https://www.wired.com/review/jabra-elite-4-active/"
          />
          <NewsCard
            flexDirection="column"
            imagePath="https://media.wired.com/photos/6206ca1303dd42ee498c498b/191:100/w_1280,c_limit/Gear-Jabra-Elite-4-Active.jpg"
            imageHeight={isTablet ? 120 : 102}
            category="Business"
            title="Jabra's Elite 4 Active Offer Great Bang for Your Buck"
            titleStyle={isTablet ? "ArticleTitleDesktop" : "ArticleTitleMobile"}
            linkFullArticle="https://www.wired.com/review/jabra-elite-4-active/"
          />
        </Box>
      </Box>
    </Box>
  );
}
