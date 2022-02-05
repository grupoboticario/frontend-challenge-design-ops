import { styled } from "../../../stitches.config";

import { MenuLocation, Form, Wrapper, Grid, Nav } from "../";

const StyledHeader = styled('header', {
  backgroundColor: "$theme",
  paddingTop: "$5",
  marginBottom: "$4",

  "@desktop": {
    backgroundColor: "transparent",
    marginBottom: "$15",
  }
});

export const Header = () => {
  return(
    <StyledHeader>
      <Wrapper>
        <Grid>
          <span>LOGO</span>
          <Form />
          <MenuLocation />
        </Grid>
      </Wrapper>

      <Nav />
    </StyledHeader>
  )
  
}