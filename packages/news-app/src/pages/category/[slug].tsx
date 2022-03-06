import { useRouter } from 'next/router'
import useSWR from 'swr'
import { Card } from '~/components/Card'
import { Layout } from '~/components/Layout'
import { ArticleProps } from '~/services/types/Article'

export default function Category() {
  const { locale, query } = useRouter()
  const { slug } = query
  const activeLocale = locale?.split('-')[1].toLowerCase()
  const { data } = useSWR(`/top-headlines?country=${activeLocale}&category=${slug}`)

  return (
    <Layout>
      {data
        ? data.articles.map((article: ArticleProps) => (
            <Card key={`${article.publishedAt}${article.author}`} variant="category" article={article} />
          ))
        : null}
    </Layout>
  )
}
