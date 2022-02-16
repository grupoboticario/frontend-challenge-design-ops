import { device } from "@assets/styles/breakpoints";
import Layout from "@components/Layout";
import Text from "@components/Text";
import { Box, Container, useMediaQuery } from "@mui/material";
import { categories } from "data/categories";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { Theme } from "types/theme";
import NewCard from "@components/NewCard";

type Label = {
  [x: string]: string;
};

export default function Category() {
  const isTablet = useMediaQuery(device.tablet);

  const router = useRouter();
  const { category } = router.query;

  const { resolvedTheme } = useTheme();
  const theme: Theme = resolvedTheme?.replace("Theme", "") || "us";

  const [categoryPage] = categories.filter(
    (item) => item.route.replace("/", "") === category
  );

  const label: Label = categoryPage ? categoryPage.label : categories[0].label;

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
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {Array.from(Array(10)).map((_, index) => {
              return (
                <NewCard
                  key={index}
                  imagePath="https://media.wired.com/photos/6206ca1303dd42ee498c498b/191:100/w_1280,c_limit/Gear-Jabra-Elite-4-Active.jpg"
                  category={title}
                  title="Jabra's Elite 4 Active Offer Great Bang for Your Buck"
                  titleStyle={
                    isTablet ? "ArticleTitleDesktop" : "ArticleTitleMobile"
                  }
                  linkFullArticle="https://www.wired.com/review/jabra-elite-4-active/"
                  publishedDate="14 hours ago"
                  showPublishedDate
                />
              );
            })}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
