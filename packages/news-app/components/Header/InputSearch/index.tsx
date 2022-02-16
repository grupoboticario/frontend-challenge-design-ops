import {
  FormControl,
  InputAdornment,
  OutlinedInput,
  useMediaQuery,
} from "@mui/material";
import { device } from "@assets/styles/breakpoints";
import { SearchIconStyled } from "./index.styles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Theme } from "types/theme";

type Placeholders = {
  [x: string]: string;
};

const placeholders: Placeholders = {
  pt: "Buscar notícias",
  br: "Buscar notícias",
  us: "Search news",
};

export default function InputSearch() {
  const isTablet = useMediaQuery(device.tablet);

  const { resolvedTheme } = useTheme();
  const theme: Theme = resolvedTheme?.replace("Theme", "") || "us";
  const [placeholder, setPlaceholder] = useState(placeholders[theme]);

  useEffect(() => {
    setPlaceholder(resolvedTheme ? placeholders[theme] : placeholders.us);
  }, [resolvedTheme, theme]);

  return (
    <FormControl
      sx={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: isTablet ? "0 180px" : "16px 0",
      }}
    >
      <OutlinedInput
        sx={{
          width: "100%",
        }}
        placeholder={placeholder}
        endAdornment={
          <InputAdornment position="end">
            <SearchIconStyled />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
