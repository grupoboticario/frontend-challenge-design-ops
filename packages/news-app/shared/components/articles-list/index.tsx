import { styled } from '../../../stitches.config';
import { Wrapper, Card, Text } from '..';

const StyledHighlitedArticles = styled('div', {});

const List = styled('ul', {
  display: 'grid',
  gridAutoFlow: 'row',
  listStyle: 'none',

  '@desktop': {
    gridAutoFlow: 'dense',
    rowGap: '20px',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
});
const ListItem = styled('li', {
  width: '100%',
  height: 105,

  '& figure': {
    flexBasis: 100,
    width: 100,
    height: 104,
  },

  '@desktop': {
    width: 559,
    height: 146,

    '& figure': {
      flexBasis: 272,
      flexShrink: 0,
      width: 272,
      height: 146,
    },
  },
});

export const ArticlesList = ({ title }: { title: string }) => {
  return (
    <Wrapper>
      <Text as="h1">{title}</Text>
      <List>
        <ListItem>
          <Card
            src="https://via.placeholder.com/272x102.png?text=Test+image"
            alt="Test"
            title="Aqui vai um texto bem grandão pra ver o tamnho do box"
            category="Category"
          />
        </ListItem>
        <ListItem>
          <Card
            src="https://via.placeholder.com/272x102.png?text=Test+image"
            alt="Test"
            title="Title"
            category="Category"
          />
        </ListItem>
        <ListItem>
          <Card
            src="https://via.placeholder.com/272x102.png?text=Test+image"
            alt="Test"
            title="Title"
            category="Category"
          />
        </ListItem>
        <ListItem>
          <Card
            src="https://via.placeholder.com/272x102.png?text=Test+image"
            alt="Test"
            title="Title"
            category="Category"
          />
        </ListItem>
      </List>
    </Wrapper>
  );
};
