import { styled } from "../../../stitches.config";
import { Grid } from "../../components";
import { Wrapper } from "../containers";


const StyledNav = styled('nav', {
  backgroundColor: "$theme",
  marginTop: "$5"
});

export const Nav = () => {
  return(
    <StyledNav>
      <Wrapper>
        <Grid>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </Grid>
      </Wrapper>
    </StyledNav>
  )
}