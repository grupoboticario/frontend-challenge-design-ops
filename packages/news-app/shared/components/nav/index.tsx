import { styled } from '../../../stitches.config';
import { Flex, Wrapper } from '../';
import Link from 'next/link';

const StyledNav = styled('nav', {
  position: 'absolute',
  top: 70,
  width: '70vw',
  backgroundColor: '$theme',
  zIndex: 2,

  '@desktop': {
    position: 'relative',
    top: 0,
    width: '100%',
    marginTop: '$5',
  },
});

const StyledList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',

  '@desktop': {
    flexDirection: 'row',
  },
});

const StyledListItem = styled('li', {
  transition: 'all .2s',
});

const TextMenu = styled('a', {
  display: 'block',
  py: '$5',
  px: '$5',
  color: '$textMenu',
  fontSize: '$4',
  textDecoration: 'none',

  '&:hover': {
    backgroundColor: '$menuHover',
  },

  '&:visited': {
    backgroundColor: '$menuVisited',
  },
});

export const Nav = ({ navItems }: { navItems: any[] }) => {
  return (
    <StyledNav>
      <Wrapper>
        <Flex>
          <StyledList>
            {navItems.map((navItem, i) => (
              <StyledListItem key={`nav-item-${i}`}>
                <Link href={navItem.href} passHref>
                  <TextMenu title="Go to home page">{navItem.name}</TextMenu>
                </Link>
              </StyledListItem>
            ))}
          </StyledList>
        </Flex>
      </Wrapper>
    </StyledNav>
  );
};
