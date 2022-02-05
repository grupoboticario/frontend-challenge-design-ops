import { styled } from '../../../stitches.config';
import { Grid } from '../';
import { Wrapper } from '../containers';

const StyledNav = styled('nav', {
  backgroundColor: '$theme',
  marginTop: '$5',
});

const StyledList = styled('ul', {
  display: 'flex',
  listStyle: 'none',
});

const StyledListItem = styled('li', {
  transition: 'all .2s',

  '&:hover': {
    backgroundColor: '$menuHover',
  },
});

const TextMenu = styled('a', {
  display: 'block',
  py: '$5',
  px: '$5',
  color: '$textMenu',
  fontSize: '$4',
  textDecoration: 'none',
});

export const Nav = () => {
  return (
    <StyledNav>
      <Wrapper>
        <Grid>
          <StyledList>
            <StyledListItem>
              <TextMenu href="#" title="Go to page">
                Link 1
              </TextMenu>
            </StyledListItem>
            <StyledListItem>
              <TextMenu href="#" title="Go to page">
                Link 2
              </TextMenu>
            </StyledListItem>
            <StyledListItem>
              <TextMenu href="#" title="Go to page">
                Link 3
              </TextMenu>
            </StyledListItem>
          </StyledList>
        </Grid>
      </Wrapper>
    </StyledNav>
  );
};
