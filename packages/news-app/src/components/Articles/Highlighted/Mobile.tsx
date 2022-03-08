import { Box } from '~/components/Box'
import { Card } from '~/components/Card'
import { useFetchTopHeadlines } from '~/hooks/useFetchTopHeadlines'
import { ArticleProps } from '~/services/types/Article'
import { slugify } from '~/utils/slugify'

export const Mobile = () => {
  const { data } = useFetchTopHeadlines()

  return (
    <Box
      css={{
        display: 'grid',
        gridAutoFlow: 'row',
        rowGap: '$4',
        '@bp3': {
          display: 'none',
        },
      }}
    >
      {data.slice(0, 1).map((article: ArticleProps) => (
        <Card
          key={slugify(`${article?.publishedAt}-${article?.source?.name}`)}
          variant="mobileHighlight"
          publishAt={false}
          article={article}
        />
      ))}

      {data.slice(1, 3).map((article: ArticleProps) => (
        <Card
          key={slugify(`${article?.publishedAt}-${article?.source?.name}`)}
          variant="mobileHeadlines"
          publishAt={false}
          article={article}
        />
      ))}
    </Box>
  )
}
