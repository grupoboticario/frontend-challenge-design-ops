import { device } from "@assets/styles/breakpoints";
import Text from "@components/Text";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
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

type LinkReadFullArticleTexts = {
  [x: string]: string;
};

const linkReadFullArticleTexts: LinkReadFullArticleTexts = {
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
          sx={{ borderRadius: "8px", width: "100%", height: imageHeight }}
        />
      </Box>
      <Box sx={{ flex: flexBoxTitle }}>
        <Category sx={{ fontSize: isTablet ? "16px" : "14px" }}>
          {category}
        </Category>
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
          <PublishedDateText>{publishedDate}</PublishedDateText>
        )}
      </Box>
    </Wrapper>
  );
}
