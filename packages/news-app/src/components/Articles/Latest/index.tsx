import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '~/components/Box'
import { Card } from '~/components/Card'
import { LoadMoreButton } from '~/components/LoadMoreButton'
import { useFetchLatestNews } from '~/hooks/useFetchLatestNews'
import { ArticleProps } from '~/services/types/Article'
import { slugify } from '~/utils/slugify'

import * as S from './styles'

export const Latest = () => {
  const [t] = useTranslation()
  const { data, size, setSize, isLoadingMore, isReachingEnd } = useFetchLatestNews({})

  return (
    <>
      {data.length ? (
        <S.Latest>
          <S.Title>{t('latestNews')}</S.Title>

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
            {data.map((article: ArticleProps) => (
              <Card
                key={slugify(`${article?.publishedAt}-${article?.source?.name}`)}
                variant="category"
                publishAt={false}
                article={article}
              />
            ))}
          </Box>

          <Box
            css={{
              '@bp1': {
                display: 'grid',
                gridAutoFlow: 'row',
                rowGap: '$4',
              },
              '@bp3': {
                display: 'none',
              },
            }}
          >
            {data.map((article: ArticleProps) => (
              <Card
                key={slugify(`${article?.publishedAt}-${article?.source?.name}`)}
                variant="mobileResults"
                publishAt={false}
                article={article}
              />
            ))}
          </Box>

          <LoadMoreButton isLoading={isLoadingMore} isDisabled={isReachingEnd} handleClick={() => setSize(size + 1)} />
        </S.Latest>
      ) : null}
    </>
  )
}
