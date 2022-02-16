import { device } from "@assets/styles/breakpoints";
import Text from "@components/Text";
import { Box, useMediaQuery } from "@mui/material";
import { textStyle } from "types/text";
import {
  Category,
  IconLink,
  LastUpdateDateText,
  LinkBox,
  LinkReadFullArticle,
  Wrapper,
} from "./index.styles";

type NewCardProps = {
  flexDirection?: "row" | "column";
  imagePath: string;
  category: string;
  title: string;
  titleStyle: textStyle;
  linkFullArticle: string;
  lastUpdateDate: string;
};

export default function NewCard({
  flexDirection = "row",
  imagePath,
  category,
  title,
  titleStyle,
  linkFullArticle,
  lastUpdateDate,
}: NewCardProps) {
  const isTablet = useMediaQuery(device.tablet);

  return (
    <Wrapper>
      <Box sx={{ flex: 1 }}>
        <Box
          component="img"
          alt={title}
          src={imagePath}
          sx={{ borderRadius: "8px", width: "100%", height: 104 }}
        />
      </Box>
      <Box sx={{ flex: isTablet ? 4 : 1 }}>
        <Category sx={{ fontSize: isTablet ? "16px" : "14px" }}>
          {category}
        </Category>
        <Text
          textStyle={isTablet ? "ArticleTitleDesktop" : "ArticleTitleMobile"}
        >
          {title}
        </Text>
        <LinkBox>
          <LinkReadFullArticle href={linkFullArticle} target="_blank">
            <Text>Read full article</Text>
          </LinkReadFullArticle>
          <IconLink />
        </LinkBox>
        {isTablet && <LastUpdateDateText>{lastUpdateDate}</LastUpdateDateText>}
      </Box>
    </Wrapper>
  );
}
