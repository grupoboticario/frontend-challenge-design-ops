import Text from "@components/Text";
import { Box } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Languages } from "types/languages";
import { Theme } from "types/theme";

const loadingNewsTexts: Languages = {
  pt: "Buscando notícias...",
  br: "Buscando notícias...",
  us: "Loading news...",
};
export default function LoadingNews() {
  const { resolvedTheme } = useTheme();
  const theme: Theme = resolvedTheme?.replace("Theme", "") || "us";
  const [loadingNewsText, setLoadingNewsText] = useState(
    loadingNewsTexts[theme]
  );

  useEffect(() => {
    setLoadingNewsText(
      resolvedTheme ? loadingNewsTexts[theme] : loadingNewsTexts.us
    );
  }, [resolvedTheme, theme]);
  return (
    <Box>
      <Text>{loadingNewsText}</Text>
    </Box>
  );
}
