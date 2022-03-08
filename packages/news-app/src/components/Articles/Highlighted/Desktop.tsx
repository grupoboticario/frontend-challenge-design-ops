import { Box } from '~/components/Box'
import { Card } from '~/components/Card'
import { useFetchTopHeadlines } from '~/hooks/useFetchTopHeadlines'
import { ArticleProps } from '~/services/types/Article'
import { slugify } from '~/utils/slugify'

export const Desktop = () => {
  const { data } = useFetchTopHeadlines()

  return (
    <>
      {data ? (
        <Box
          css={{
            '@bp1': {
              display: 'none',
            },
            '@bp3': {
              display: 'grid',
              gridAutoFlow: 'dense',
              columnGap: '$4',
              rowGap: '$8',
              gridTemplateColumns: 'repeat(2, 1fr)',
            },
          }}
        >
          {data.slice(0, 1).map((article: ArticleProps) => (
            <Card
              key={slugify(`${article?.publishedAt}-${article?.source?.name}`)}
              variant="highlight"
              publishAt={false}
              article={article}
            />
          ))}

          <Box
            css={{
              '@bp3': {
                display: 'flex',
                flexDirection: 'column',
                gap: '$4',
              },
            }}
          >
            {data.slice(1, 3).map((article: ArticleProps) => (
              <Card
                key={slugify(`${article?.publishedAt}-${article?.source?.name}`)}
                variant="category"
                publishAt={false}
                article={article}
              />
            ))}
          </Box>
        </Box>
      ) : null}
    </>
  )
}
