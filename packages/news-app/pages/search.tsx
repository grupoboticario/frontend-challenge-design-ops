import { device } from "@assets/styles/breakpoints";
import ButtonLoadMore from "@components/ButtonLoadMore";
import Layout from "@components/Layout";
import Text from "@components/Text";
import { Box, Container, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { Languages } from "types/languages";
import NewsList from "./components/NewsList";
import { useTheme } from "next-themes";
import { Theme } from "types/theme";
import { useContext, useEffect, useState } from "react";
import { SerachContext } from "@context/SearchContext";
import { useFetchNewsByKeyWord } from "hooks/use-fetch-news-by-keyword";
import LoadingNews from "@components/LoadingNews";
import NoResults from "@components/NoResults";

const resultsForTexts: Languages = {
  pt: "Resultados para:",
  br: "Resultados para:",
  us: "Results for:",
};

export default function Search() {
  const [pageSize, setPageSize] = useState<number>(10);
  const isTablet = useMediaQuery(device.tablet);
  const router = useRouter();
  const { q: keyWord } = router.query;

  const { resolvedTheme } = useTheme();
  const theme: Theme = resolvedTheme?.replace("Theme", "") || "us";
  const [resultsForText, seResultsForText] = useState(resultsForTexts[theme]);

  const languages: any = {
    pt: "pt",
    br: "pt",
    us: "en",
  };

  const language = languages[theme];

  const { newsByKeyWord, loading } = useFetchNewsByKeyWord(
    Array.isArray(keyWord) ? keyWord[0] : keyWord || "",
    language,
    pageSize
  );

  useEffect(() => {
    seResultsForText(
      resolvedTheme ? resultsForTexts[theme] : resultsForTexts.us
    );
  }, [resolvedTheme, theme]);

  return (
    <Layout>
      <Container sx={{ marginTop: isTablet ? "44px" : "20px" }}>
        {loading ? (
          <LoadingNews />
        ) : (
          <>
            {newsByKeyWord?.articles.length ? (
              <>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Text
                    textStyle={isTablet ? "SubtitleDesktop" : "SubtitleMobile"}
                    sx={{ marginBottom: isTablet ? "20px" : "16px" }}
                  >
                    {`${resultsForText} ${keyWord}`}
                  </Text>
                  <NewsList
                    articles={newsByKeyWord?.articles}
                    category=""
                    showCategory={false}
                  />
                </Box>
                <ButtonLoadMore
                  loadMore={() => setPageSize((current) => current + 10)}
                />
              </>
            ) : (
              <NoResults
                term={Array.isArray(keyWord) ? keyWord[0] : keyWord || ""}
              />
            )}
          </>
        )}
      </Container>
    </Layout>
  );
}
