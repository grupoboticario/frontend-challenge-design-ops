import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import { SearchIconStyled } from "./index.styles";

export default function InputSearch() {
  return (
    <FormControl sx={{ width: "473px" }}>
      <OutlinedInput
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
