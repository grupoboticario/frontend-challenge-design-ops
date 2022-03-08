import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { Category } from '~/components/Articles/Category'
import { Layout } from '~/components/Layout'

export default function Slug() {
  const { query } = useRouter()
  const { slug } = query
  const { t } = useTranslation()

  return (
    <Layout>
      <Category title={t(`${slug}`)} />
    </Layout>
  )
}
