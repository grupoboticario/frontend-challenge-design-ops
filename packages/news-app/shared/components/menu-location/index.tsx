import { styled } from '../../../stitches.config';
import type * as Stitches from '@stitches/react';
import Image from 'next/image';
import { useState } from 'react';

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

export const MenuLocation = (props: MyMenuProps) => {
  const [language, setLanguage] = useState('');

  const changeLanguage = (lang: any) => {
    console.log(lang);

    window.localStorage.setItem('language', lang);
    if (lang === 'brazilTheme') {
      setLanguage(lang);
    } else if (lang === 'portugalTheme') {
      setLanguage(lang);
    } else {
      setLanguage('defaulTheme');
    }
  };

  return (
    <StyledMenuLocation {...props}>
      <List>
        <ListItem>
          <Button onClick={() => changeLanguage('brazilTheme')}>
            <Image src="/images/icons/flag-br.svg" width="40" height="28" alt="Brazil flag icon" />
          </Button>
        </ListItem>
        <ListItem>
          <Button onClick={() => changeLanguage('defaulTheme')}>
            <Image
              src="/images/icons/flag-us.svg"
              width="40"
              height="28"
              alt="United States flag icon"
            />
          </Button>
        </ListItem>
        <ListItem>
          <Button onClick={() => changeLanguage('portugalTheme')}>
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
