import { device } from "@assets/styles/breakpoints";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Theme } from "types/theme";
import { ButtonLoadMoreStyled } from "./index.styles";

type LinkLoadMoreArticlesTexts = {
  [x: string]: string;
};

const linkLoadMoreArticlesTexts: LinkLoadMoreArticlesTexts = {
  pt: "Carregar mais artigos",
  br: "Carregar mais artigos",
  us: "Load more articles",
};

export default function ButtonLoadMore() {
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
      >
        {linkLoadMoreArticlesText}
      </ButtonLoadMoreStyled>
    </Box>
  );
}
