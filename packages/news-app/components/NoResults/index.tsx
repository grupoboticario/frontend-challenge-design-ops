import { device } from "@assets/styles/breakpoints";
import Layout from "@components/Layout";
import Text from "@components/Text";
import { Container, useMediaQuery } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Languages } from "types/languages";
import { Theme } from "types/theme";

const noResultsTexts: Languages = {
  pt: "Sem resultados para:",
  br: "Sem resultados para:",
  us: "No results for:",
};

const trySearchTexts: Languages = {
  pt: "Tente pesquisar outros termos ou categorias.",
  br: "Tente pesquisar outros termos ou categorias.",
  us: "Try to search for other terms or categories.",
};

export default function NoResults({ term }: { term: string }) {
  const isTablet = useMediaQuery(device.tablet);

  const { resolvedTheme } = useTheme();
  const theme: Theme = resolvedTheme?.replace("Theme", "") || "us";
  const [trySearchText, setTrySearchText] = useState(trySearchTexts[theme]);
  const [noResultsText, setNoResultsText] = useState(noResultsTexts[theme]);

  useEffect(() => {
    setTrySearchText(resolvedTheme ? trySearchTexts[theme] : trySearchTexts.us);
    setNoResultsText(resolvedTheme ? noResultsTexts[theme] : noResultsTexts.us);
  }, [resolvedTheme, theme]);

  return (
    <Container>
      <Text
        textStyle={isTablet ? "SubtitleDesktop" : "SubtitleMobile"}
        sx={{ margin: isTablet ? "60px 0 36px 0" : "36px 0 16px 0" }}
      >
        {`${noResultsText} ${term}`}
      </Text>
      <Text>{trySearchText}</Text>
    </Container>
  );
}
