import { Box } from "@mui/material";
import { LogoStyled, News, World } from "./index.styles";

const Title = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <World>world</World>
      <News>news</News>
    </Box>
  );
};

const Logo = () => {
  return (
    <LogoStyled>
      <Title />
    </LogoStyled>
  );
};

export default Logo;
