import { styled } from '../../../stitches.config';
import type * as Stitches from '@stitches/react';
import Image from 'next/image';

type MyMenuProps = { css?: Stitches.CSS };

const StyledMenuLocation = styled('menu', {});
const List = styled('ul', {
  display: 'flex',
  listStyle: 'none',
});
const ListItem = styled('li', {
  marginRight: '$2',

  '&:last-child': {
    margin: 0,
  },

  '@desktop': {
    marginRight: '$4',
  },
});
const Button = styled('button', {
  background: 'none',
  border: 0,
});

export const MenuLocation = ({ props, onClick }: { props: MyMenuProps; onClick: any }) => {
  return (
    <StyledMenuLocation {...props}>
      <List>
        <ListItem>
          <Button onClick={onClick} value="br">
            <Image src="/images/icons/flag-br.svg" width="40" height="28" alt="Brazil flag icon" />
          </Button>
        </ListItem>
        <ListItem>
          <Button onClick={onClick} value="us">
            <Image
              src="/images/icons/flag-us.svg"
              width="40"
              height="28"
              alt="United States flag icon"
            />
          </Button>
        </ListItem>
        <ListItem>
          <Button onClick={onClick} value="pt">
            <Image
              src="/images/icons/flag-pt.svg"
              width="40"
              height="28"
              alt="Portugal flag icon"
            />
          </Button>
        </ListItem>
      </List>
    </StyledMenuLocation>
  );
};
