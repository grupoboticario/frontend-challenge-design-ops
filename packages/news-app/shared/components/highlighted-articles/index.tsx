import { styled } from '../../../stitches.config';
import { Wrapper, Grid, Card, Text } from '..';

const StyledHighlitedArticles = styled('div', {});

export const HighlitedArticles = ({ title }: { title: string }) => {
  return (
    <Wrapper>
      <Grid>
        <Text as="h1">{title}</Text>
        <Card
          src="https://via.placeholder.com/272x102.png?text=Test+image"
          alt="Test"
          title="Title"
          category="Category"
          publishedTime="14h ago"
        />
      </Grid>
    </Wrapper>
  );
};
