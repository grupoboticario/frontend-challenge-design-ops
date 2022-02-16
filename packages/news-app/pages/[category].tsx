import { device } from "@assets/styles/breakpoints";
import Layout from "@components/Layout";
import Text from "@components/Text";
import { Box, Container, useMediaQuery } from "@mui/material";
import { categories } from "data/categories";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { Theme } from "types/theme";

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
            sx={{ textTransform: "capitalize" }}
          >
            {title}
          </Text>
        </Box>
      </Container>
    </Layout>
  );
}
