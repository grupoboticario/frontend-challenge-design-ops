import Link from 'next/link';
import { useRouter } from 'next/router';
import type * as Stitches from '@stitches/react';

import { Flex, Wrapper } from '../';
import * as S from './index.style';

type MyMenuProps = { css?: Stitches.CSS };

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
    <S.StyledNav css={css} {...props} role="navigation" aria-label="main">
      <Wrapper
        css={{
          padding: 0,
        }}
      >
        <Flex>
          <S.StyledList role="list">
            {navItems.map((navItem, i) => (
              <S.StyledListItem key={`nav-item-${i}`} role="listitem">
                <Link href={navItem.href} passHref>
                  <S.TextMenu
                    title="Go to home page"
                    className={router.pathname == navItem.href ? 'active' : ''}
                  >
                    {navItem.name}
                  </S.TextMenu>
                </Link>
              </S.StyledListItem>
            ))}
          </S.StyledList>
        </Flex>
      </Wrapper>
    </S.StyledNav>
  );
};
