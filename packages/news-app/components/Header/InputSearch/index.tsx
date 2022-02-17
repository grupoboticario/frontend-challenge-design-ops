import { device } from "@assets/styles/breakpoints";
import { SerachContext } from "@context/SearchContext";
import {
  FormControl,
  InputAdornment,
  OutlinedInput,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { Languages } from "types/languages";
import { Theme } from "types/theme";
import { SearchIconStyled } from "./index.styles";

const placeholders: Languages = {
  pt: "Buscar notícias",
  br: "Buscar notícias",
  us: "Search news",
};

export default function InputSearch() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { keyWord, setKeyWord } = useContext(SerachContext);

  const router = useRouter();
  const isTablet = useMediaQuery(device.tablet);

  const { resolvedTheme } = useTheme();
  const theme: Theme = resolvedTheme?.replace("Theme", "") || "us";
  const [placeholder, setPlaceholder] = useState(placeholders[theme]);

  useEffect(() => {
    setPlaceholder(resolvedTheme ? placeholders[theme] : placeholders.us);
  }, [resolvedTheme, theme]);

  const handleChange = (event: any) => {
    setKeyWord(event.target.value);
  };

  const redirectToSearchPage = () => {
    if (keyWord) {
      router.push(`/search?q=${keyWord}`);
    }
  };

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
        value={keyWord}
        ref={inputRef}
        sx={{
          width: "100%",
        }}
        placeholder={placeholder}
        endAdornment={
          <InputAdornment position="end">
            <SearchIconStyled />
          </InputAdornment>
        }
        onChange={handleChange}
        onKeyPress={(e) => e.key === "Enter" && redirectToSearchPage()}
        onBlur={(e) => redirectToSearchPage()}
      />
    </FormControl>
  );
}
