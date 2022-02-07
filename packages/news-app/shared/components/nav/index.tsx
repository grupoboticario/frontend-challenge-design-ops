import { useState } from 'react';
import { styled } from '../../../stitches.config';
import { Flex, Wrapper, Logo } from '../';

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

export const Nav = () => {
  return (
    <StyledNav>
      <Wrapper>
        <Flex>
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
        </Flex>
      </Wrapper>
    </StyledNav>
  );
};
