import {
  FormControl,
  InputAdornment,
  OutlinedInput,
  useMediaQuery,
} from "@mui/material";
import { device } from "../../../assets/styles/breakpoints";
import { SearchIconStyled } from "./index.styles";

export default function InputSearch() {
  const isTablet = useMediaQuery(device.tablet);

  return (
    <FormControl
      sx={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: isTablet ? "0 180px" : "16px 28px",
      }}
    >
      <OutlinedInput
        sx={{
          width: "100%",
        }}
        placeholder="Search"
        endAdornment={
          <InputAdornment position="end">
            <SearchIconStyled />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
