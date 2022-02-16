import Text from "@components/Text";
import { Box, Link } from "@mui/material";
import { styled } from "@stitches.config";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Wrapper = styled(Box, {
  display: "flex",
  gap: "16px",
});

export const Category = styled(Text, {
  fontFamily: "Source Sans Pro",
  color: "$link",
});

export const LinkBox = styled(Box, {
  display: "flex",
  alignItems: "center",
  gap: "6px",
});

export const IconLink = styled(FaExternalLinkAlt, {
  color: "$link",
});

export const LinkReadFullArticle = styled(Link, {
  color: "$link",
  textDecoration: "none",
  borderBottom: "1px solid $link",
});

export const PublishedDateText = styled(Text, {
  color: "$text-auxiliar",
});
