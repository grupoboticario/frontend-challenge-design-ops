import { useRouter } from 'next/router'
import * as React from 'react'
import { Box } from '~/components/Box'
import { Card } from '~/components/Card'
import { LoadMoreButton } from '~/components/LoadMoreButton'
import { useFetchByCategory } from '~/hooks/useFetchByCategory'
import { ArticleProps } from '~/services/types/Article'
import { useStore } from '~/store'
import { slugify } from '~/utils/slugify'

import * as S from './styles'

type CategoryProps = {
  title: string
}

export const Category = ({ title }: CategoryProps) => {
  const { query } = useRouter()
  const { slug } = query
  const { defaultPage, defaultPageSize } = useStore((store) => store.state)
  const [pageSize, setPageSize] = React.useState<number>(defaultPageSize)
  const { data, isEmpty, size, setSize } = useFetchByCategory({
    pageSize,
    params: { category: slug },
  })

  const nextPage = () => {
    setSize(size + defaultPage)
    setPageSize(data.length + defaultPageSize)
  }

  return (
    <S.Category>
      <S.Title>{title}</S.Title>

      <Box
        css={{
          '@bp1': {
            display: 'none',
          },
          '@bp3': {
            display: 'block',
          },
        }}
      >
        {data.map((article: ArticleProps) => (
          <Card
            key={slugify(`${article?.publishedAt}-${article?.source?.name}`)}
            article={article}
            variant="results"
            category={false}
          />
        ))}
      </Box>

      <Box
        css={{
          '@bp1': {
            display: 'block',
          },
          '@bp3': {
            display: 'none',
          },
        }}
      >
        {data.map((article: ArticleProps) => (
          <Card
            key={slugify(`${article?.publishedAt}-${article?.source?.name}`)}
            article={article}
            variant="mobileResults"
            publishAt={false}
            category={false}
          />
        ))}
      </Box>

      <LoadMoreButton isEmpty={isEmpty} handleClick={() => nextPage()} />
    </S.Category>
  )
}
