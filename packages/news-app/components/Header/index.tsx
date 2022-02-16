import { Container, useMediaQuery } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { device } from "@assets/styles/breakpoints";
import { DrawerContext } from "@context/DrawerContext";
import Flags from "./Flags";
import { ContainerStyled, HeaderStyled } from "./index.styles";
import InputSearch from "./InputSearch";
import Logo from "./Logo";

const Header = () => {
  const isTablet = useMediaQuery(device.tablet);

  const { setIsOpen } = useContext(DrawerContext);

  return (
    <>
      <ContainerStyled>
        <HeaderStyled>
          {!isTablet && (
            <IconButton
              aria-label="open menu"
              component="span"
              sx={{ color: "white" }}
              onClick={() => setIsOpen(true)}
            >
              <FaBars />
            </IconButton>
          )}
          <Logo />
          {isTablet && <InputSearch />}
          <Flags />
        </HeaderStyled>
      </ContainerStyled>
      {!isTablet && (
        <Container>
          <InputSearch />
        </Container>
      )}
    </>
  );
};

export default Header;
