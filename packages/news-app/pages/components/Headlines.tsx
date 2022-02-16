import { device } from "@assets/styles/breakpoints";
import NewCard from "@components/NewCard";
import Text from "@components/Text";
import { Box, useMediaQuery } from "@mui/material";
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

export default function Headlines() {
  const isTablet = useMediaQuery(device.tablet);
  const { resolvedTheme } = useTheme();
  const theme: Theme = resolvedTheme?.replace("Theme", "") || "us";
  const [title, setTitle] = useState(titles[theme]);

  useEffect(() => {
    setTitle(resolvedTheme ? titles[theme] : titles.us);
  }, [resolvedTheme, theme]);
  return (
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
            titleStyle={isTablet ? "ArticleTitleDesktop" : "ArticleTitleMobile"}
            linkFullArticle="https://www.wired.com/review/jabra-elite-4-active/"
          />
          <NewCard
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
