import { device } from "@assets/styles/breakpoints";
import ButtonLoadMore from "@components/ButtonLoadMore";
import Layout from "@components/Layout";
import NewsCard from "@components/NewsCard";
import NoResults from "@components/NoResults";
import Text from "@components/Text";
import { Box, Container, useMediaQuery } from "@mui/material";
import { categories } from "data/categories";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { Languages } from "types/languages";
import { Theme } from "types/theme";
import NewsList from "./components/NewsList";
import Search from "./search";

export default function Category() {
  const isTablet = useMediaQuery(device.tablet);

  const router = useRouter();
  const { category } = router.query;

  const { resolvedTheme } = useTheme();
  const theme: Theme = resolvedTheme?.replace("Theme", "") || "us";

  const [categoryPage] = categories.filter(
    (item) => item.route.replace("/", "") === category
  );

  if (category === "search") {
    return <Search />;
  }

  if (!categoryPage)
    return (
      <NoResults
        term={Array.isArray(category) ? category[0] : category || ""}
      />
    );

  const label: Languages = categoryPage
    ? categoryPage.label
    : categories[0].label;

  const title = resolvedTheme ? label[theme] : label.us;

  return (
    <Layout>
      <Container sx={{ marginTop: isTablet ? "44px" : "20px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Text
            textStyle={isTablet ? "TitleDesktop" : "TitleMobile"}
            sx={{
              textTransform: "capitalize",
              marginBottom: isTablet ? "20px" : "16px",
            }}
          >
            {title}
          </Text>
          <NewsList
            category={Array.isArray(category) ? category[0] : category || ""}
          />
        </Box>
        <ButtonLoadMore />
      </Container>
    </Layout>
  );
}