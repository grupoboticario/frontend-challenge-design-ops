import { device } from "@assets/styles/breakpoints";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Languages } from "types/languages";
import { Theme } from "types/theme";
import { ButtonLoadMoreStyled } from "./index.styles";

const linkLoadMoreArticlesTexts: Languages = {
  pt: "Carregar mais notícias",
  br: "Carregar mais notícias",
  us: "Load more articles",
};

export default function ButtonLoadMore({ loadMore }: { loadMore: any }) {
  const isTablet = useMediaQuery(device.tablet);
  const { resolvedTheme } = useTheme();
  const theme: Theme = resolvedTheme?.replace("Theme", "") || "us";
  const [linkLoadMoreArticlesText, setLinkLoadMoreArticlesText] = useState(
    linkLoadMoreArticlesTexts[theme]
  );

  useEffect(() => {
    setLinkLoadMoreArticlesText(
      resolvedTheme
        ? linkLoadMoreArticlesTexts[theme]
        : linkLoadMoreArticlesTexts.us
    );
  }, [resolvedTheme, theme]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ButtonLoadMoreStyled
        variant="outlined"
        sx={{ margin: isTablet ? "20px 0 120px 0" : "36px 0 60px 0" }}
        onClick={loadMore}
      >
        {linkLoadMoreArticlesText}
      </ButtonLoadMoreStyled>
    </Box>
  );
}
