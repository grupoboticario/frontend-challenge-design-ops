import IconButton from "@mui/material/IconButton";
import { FaBars } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { device } from "../../assets/styles/breakpoints";
import Flags from "./Flags";
import { ContainerStyled, HeaderStyled } from "./index.styles";
import InputSearch from "./InputSearch";
import Logo from "./Logo";

const Header = () => {
  const isTablet = useMediaQuery({ query: device.tablet });
  return (
    <>
      <ContainerStyled>
        <HeaderStyled>
          <IconButton
            aria-label="open menu"
            component="span"
            sx={{ color: "white" }}
          >
            <FaBars />
          </IconButton>
          <Logo />
          {isTablet && <InputSearch />}
          <Flags />
        </HeaderStyled>
      </ContainerStyled>
      {!isTablet && <InputSearch />}
    </>
  );
};

export default Header;
