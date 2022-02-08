import { styled } from '../../../stitches.config';
import { Wrapper, Card, Title } from '..';

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
        height: 90,
      },
    },
  },
});

export const HeadlineArticles = ({ articles }: { articles: any[] }) => {
  return (
    <Wrapper>
      <Title as="h1">Headlines</Title>
      <List>
        {articles.map((article, i) => (
          <ListItem key={`headline-article-item-${i}`}>
            <Card
              src={article.urlToImage}
              alt="Here is the image alt description"
              title={article.title}
              category="Category"
              url={article.url}
              variant="highlight"
            />
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};
