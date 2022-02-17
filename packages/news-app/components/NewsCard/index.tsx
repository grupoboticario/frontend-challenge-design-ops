import { device } from "@assets/styles/breakpoints";
import Text from "@components/Text";
import { Box, useMediaQuery } from "@mui/material";
import { categories } from "data/categories";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Languages } from "types/languages";
import { textStyle } from "types/text";
import { Theme } from "types/theme";
import {
  Category,
  IconLink,
  PublishedDateText,
  LinkBox,
  LinkReadFullArticle,
  Wrapper,
} from "./index.styles";

const linkReadFullArticleTexts: Languages = {
  pt: "Ler o artigo completo",
  br: "Ler o artigo completo",
  us: "Read full article",
};

type NewsCardProps = {
  flexDirection?: "row" | "column";
  flexBoxImage?: number;
  flexBoxTitle?: number;
  imagePath: string;
  imageHeight?: number;
  category: string;
  showCategory?: boolean;
  title: string;
  titleStyle: textStyle;
  linkFullArticle: string;
  publishedDate?: string;
  showPublishedDate?: boolean;
};

export default function NewsCard({
  flexDirection = "row",
  flexBoxImage = 1,
  flexBoxTitle = 1,
  imagePath,
  imageHeight = 104,
  category,
  showCategory = true,
  title,
  titleStyle,
  linkFullArticle,
  publishedDate,
  showPublishedDate = false,
}: NewsCardProps) {
  const isTablet = useMediaQuery(device.tablet);

  const { resolvedTheme } = useTheme();
  const theme: Theme = resolvedTheme?.replace("Theme", "") || "us";
  const [linkReadFullArticleText, setLinkReadFullArticleText] = useState(
    linkReadFullArticleTexts[theme]
  );
  const [categoryPage] = categories.filter(
    (item) => item.route.replace("/", "") === category.toLowerCase()
  );

  const label: Languages = categoryPage
    ? categoryPage.label
    : categories[0].label;

  const categoryTranslate = resolvedTheme ? label[theme] : label.us;

  useEffect(() => {
    setLinkReadFullArticleText(
      resolvedTheme
        ? linkReadFullArticleTexts[theme]
        : linkReadFullArticleTexts.us
    );
  }, [resolvedTheme, theme]);

  return (
    <Wrapper sx={{ flexDirection: flexDirection }}>
      <Box sx={{ flex: flexBoxImage }}>
        <Box
          component="img"
          alt={title}
          src={imagePath}
          sx={{
            borderRadius: "8px",
            width: "100%",
            height: imageHeight,
            objectFit: "cover",
          }}
        />
      </Box>
      <Box sx={{ flex: flexBoxTitle }}>
        {showCategory && (
          <Category sx={{ fontSize: isTablet ? "16px" : "14px" }}>
            {categoryTranslate}
          </Category>
        )}
        <Text textStyle={titleStyle}>{title}</Text>
        <LinkBox>
          <LinkReadFullArticle href={linkFullArticle} target="_blank">
            <Text sx={{ fontSize: isTablet ? "16px" : "14px" }}>
              {linkReadFullArticleText}
            </Text>
          </LinkReadFullArticle>
          <IconLink />
        </LinkBox>
        {showPublishedDate && (
          <PublishedDateText>
            {new Intl.DateTimeFormat("pt-BR").format(new Date(publishedDate))}
          </PublishedDateText>
        )}
      </Box>
    </Wrapper>
  );
}
