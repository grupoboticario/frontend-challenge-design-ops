import { useRouter } from 'next/router'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '~/components/Box'
import { Card } from '~/components/Card'
import { Layout } from '~/components/Layout'
import { LoadMoreButton } from '~/components/LoadMoreButton'
import { Paragraph, Title } from '~/components/Text'
import { useFetchByKeywords } from '~/hooks/useFetchByKeywords'
import { ArticleProps } from '~/services/types/Article'
import { slugify } from '~/utils/slugify'

export default function Search() {
  const { query } = useRouter()
  const { q: keyword } = query
  const { t } = useTranslation()
  const { data, size, setSize, isLoadingMore, isReachingEnd } = useFetchByKeywords({
    params: { q: keyword },
  })

  return (
    <Layout>
      {!data.length ? (
        <>
          <Title>
            {t('noResultsFor')}: {keyword}
          </Title>
          <Paragraph>{t('tryToSearch')}</Paragraph>
        </>
      ) : null}

      {data.length > 1 ? (
        <>
          <Title>
            {t('resultsFor')}: {keyword}
          </Title>
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
            {data.map((article: ArticleProps, index) => (
              <Card
                key={slugify(`${article?.publishedAt}-${article?.source?.name}`)}
                article={article}
                variant="mobileResults"
                publishAt={false}
              />
            ))}
          </Box>

          <LoadMoreButton isLoading={isLoadingMore} isDisabled={isReachingEnd} handleClick={() => setSize(size + 1)} />
        </>
      ) : null}
    </Layout>
  )
}
