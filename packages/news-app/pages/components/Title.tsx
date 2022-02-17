import { device } from "@assets/styles/breakpoints";
import Text from "@components/Text";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Languages } from "types/languages";
import { Theme } from "types/theme";

export default function Title({ titles }: { titles: Languages }) {
  const isTablet = useMediaQuery(device.tablet);
  const { resolvedTheme } = useTheme();
  const theme: Theme = resolvedTheme?.replace("Theme", "") || "us";
  const [title, setTitle] = useState(titles[theme]);

  useEffect(() => {
    setTitle(resolvedTheme ? titles[theme] : titles.us);
  }, [resolvedTheme, theme, titles]);

  return (
    <Text
      textStyle={isTablet ? "TitleDesktop" : "TitleMobile"}
      sx={{ marginBottom: isTablet ? "20px" : "16px" }}
    >
      {title}
    </Text>
  );
}
