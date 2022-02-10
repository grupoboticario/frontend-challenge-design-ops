import Image from 'next/image';
import { styled } from '../../../stitches.config';
import type * as Stitches from '@stitches/react';
import { useArticleDispatch, useArticleState } from '../../store';

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
  cursor: 'pointer',
});

export const MenuLocation = (props: MyMenuProps | undefined) => {
  const { language } = useArticleState();
  const dispatch = useArticleDispatch();

  const changeLanguage = (lang: any) => {
    dispatch({
      type: 'saveLanguage',
      value: {
        name: lang,
      },
    });
  };

  const renderFlags = () => {
    if (language.name == 'br') {
      return (
        <List>
          <ListItem>
            <Button onClick={() => changeLanguage('us')}>
              <Image
                src="/images/icons/flag-us.svg"
                width="40"
                height="28"
                alt="United States flag icon"
              />
            </Button>
          </ListItem>

          <ListItem>
            <Button onClick={() => changeLanguage('pt')}>
              <Image
                src="/images/icons/flag-pt.svg"
                width="40"
                height="28"
                alt="Portugal flag icon"
              />
            </Button>
          </ListItem>
        </List>
      );
    } else if (language.name == 'pt') {
      return (
        <List>
          <ListItem>
            <Button onClick={() => changeLanguage('br')}>
              <Image
                src="/images/icons/flag-br.svg"
                width="40"
                height="28"
                alt="Brazil flag icon"
              />
            </Button>
          </ListItem>

          <ListItem>
            <Button onClick={() => changeLanguage('us')}>
              <Image
                src="/images/icons/flag-us.svg"
                width="40"
                height="28"
                alt="United States flag icon"
              />
            </Button>
          </ListItem>
        </List>
      );
    } else {
      return (
        <List>
          <ListItem>
            <Button onClick={() => changeLanguage('br')}>
              <Image
                src="/images/icons/flag-br.svg"
                width="40"
                height="28"
                alt="Brazil flag icon"
              />
            </Button>
          </ListItem>

          <ListItem>
            <Button onClick={() => changeLanguage('pt')}>
              <Image
                src="/images/icons/flag-pt.svg"
                width="40"
                height="28"
                alt="Portugal flag icon"
              />
            </Button>
          </ListItem>
        </List>
      );
    }
  };

  return <StyledMenuLocation {...props}>{renderFlags()}</StyledMenuLocation>;
};
