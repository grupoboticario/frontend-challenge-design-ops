import { useRouter } from 'next/router';
import type * as Stitches from '@stitches/react';

import { styled } from '../../../stitches.config';
import { Flex, Wrapper } from '../';
import Link from 'next/link';

type MyMenuProps = { css?: Stitches.CSS };

const StyledNav = styled('nav', {
  position: 'absolute',
  top: 70,
  width: '70vw',
  backgroundColor: '$theme',
  zIndex: 2,
  transition: 'all .3s',

  '@desktop': {
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
    marginTop: '$5',
  },
});

const StyledList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  width: '100%',

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
  paddingLeft: '$25',
  color: '$textMenu',
  fontSize: '$4',
  textDecoration: 'none',
  transition: 'all .2s',

  '&:hover, &.active': {
    backgroundColor: '$menuHover',
  },

  '&:visited': {
    backgroundColor: '$menuVisited',
  },

  '@desktop': {
    px: '$5',
  },
});

export const Nav = ({
  navItems,
  css,
  props,
}: {
  navItems: any[];
  css: any;
  props?: MyMenuProps;
}) => {
  const router = useRouter();
  return (
    <StyledNav css={css} {...props}>
      <Wrapper
        css={{
          padding: 0,
        }}
      >
        <Flex>
          <StyledList>
            {navItems.map((navItem, i) => (
              <StyledListItem key={`nav-item-${i}`}>
                <Link href={navItem.href} passHref>
                  <TextMenu
                    title="Go to home page"
                    className={router.pathname == navItem.href ? 'active' : ''}
                  >
                    {navItem.name}
                  </TextMenu>
                </Link>
              </StyledListItem>
            ))}
          </StyledList>
        </Flex>
      </Wrapper>
    </StyledNav>
  );
};
