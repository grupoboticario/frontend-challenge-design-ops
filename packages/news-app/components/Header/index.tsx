import { Container } from "@mui/material";
import Flags from "./Flags";
import { HeaderStyled } from "./index.styles";
import InputSearch from "./InputSearch";
import Logo from "./Logo";

const Header = () => {
  return (
    <Container>
      <HeaderStyled>
        <Logo />
        <InputSearch />
        <Flags />
      </HeaderStyled>
    </Container>
  );
};

export default Header;
