import { device } from "@assets/styles/breakpoints";
import Text from "@components/Text";
import { Box, useMediaQuery } from "@mui/material";
import { textStyle } from "types/text";
import {
  Category,
  IconLink,
  PublishedDateText,
  LinkBox,
  LinkReadFullArticle,
  Wrapper,
} from "./index.styles";

type NewCardProps = {
  flexDirection?: "row" | "column";
  imagePath: string;
  imageHeight?: number;
  category: string;
  title: string;
  titleStyle: textStyle;
  linkFullArticle: string;
  publishedDate?: string;
  showPublishedDate?: boolean;
};

export default function NewCard({
  flexDirection = "row",
  imagePath,
  imageHeight = 104,
  category,
  title,
  titleStyle,
  linkFullArticle,
  publishedDate,
  showPublishedDate = false,
}: NewCardProps) {
  const isTablet = useMediaQuery(device.tablet);

  return (
    <Wrapper sx={{ flexDirection: flexDirection }}>
      <Box sx={{ flex: 1 }}>
        <Box
          component="img"
          alt={title}
          src={imagePath}
          sx={{ borderRadius: "8px", width: "100%", height: imageHeight }}
        />
      </Box>
      <Box sx={{ flex: isTablet ? 4 : 1 }}>
        <Category sx={{ fontSize: isTablet ? "16px" : "14px" }}>
          {category}
        </Category>
        <Text textStyle={titleStyle}>{title}</Text>
        <LinkBox>
          <LinkReadFullArticle href={linkFullArticle} target="_blank">
            <Text sx={{ fontSize: isTablet ? "16px" : "14px" }}>
              Read full article
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
