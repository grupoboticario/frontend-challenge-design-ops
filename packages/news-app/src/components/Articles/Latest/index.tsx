import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '~/components/Box'
import { Card } from '~/components/Card'
import { LoadMoreButton } from '~/components/LoadMoreButton'
import { useFetchLatestNews } from '~/hooks/useFetchLatestNews'
import { ArticleProps } from '~/services/types/Article'
import { useStore } from '~/store'
import { slugify } from '~/utils/slugify'

import * as S from './styles'

export const Latest = () => {
  const [t] = useTranslation()
  const { defaultPage, defaultPageSize } = useStore((store) => store.state)
  const [pageSize, setPageSize] = React.useState<number>(6)
  const { data, isEmpty, size, setSize } = useFetchLatestNews({
    pageSize,
  })

  const nextPage = () => {
    setSize(size + defaultPage)
    setPageSize(data.length + defaultPageSize)
  }

  return (
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

      <LoadMoreButton isEmpty={isEmpty} handleClick={() => nextPage()} />
    </S.Latest>
  )
}