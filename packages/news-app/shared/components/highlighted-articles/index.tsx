import { styled } from '../../../stitches.config';
import { Wrapper, Flex, Card, Text } from '..';

const StyledHighlitedArticles = styled('div', {});

const List = styled('ul', {
  display: 'grid',
  gridAutoFlow: 'row',
  listStyle: 'none',

  '@desktop': {
    gridAutoFlow: 'dense',
    rowGap: '20px',
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
});
const ListItem = styled('li', {
  '@desktop': {
    width: 368,
    height: 232,

    '&:first-child': {
      width: 736,
      height: 488,
      gridColumn: 'span 2',
      gridRow: 'span 2',

      '& figure': {
        width: 736,
        height: 346,
      },

      '& h3': {
        fontSize: 'calc($xl * 2)',
        lineHeight: '$11',
      },
    },
  },
});

export const HighlitedArticles = ({ title }: { title: string }) => {
  return (
    <Wrapper>
      <Text as="h1">{title}</Text>
      <List>
        <ListItem>
          <Card
            src="https://via.placeholder.com/272x102.png?text=Test+image"
            alt="Test"
            title="James Webb: A $10bn machine in search of the end of darkness"
            category="Category"
            publishedTime="14h ago"
            variant="highlight"
          />
        </ListItem>
        <ListItem>
          <Card
            src="https://via.placeholder.com/272x102.png?text=Test+image"
            alt="Test"
            title="Title"
            category="Category"
            publishedTime="14h ago"
            variant="highlight"
          />
        </ListItem>
        <ListItem>
          <Card
            src="https://via.placeholder.com/272x102.png?text=Test+image"
            alt="Test"
            title="Title"
            category="Category"
            publishedTime="14h ago"
            variant="highlight"
          />
        </ListItem>
      </List>
    </Wrapper>
  );
};
