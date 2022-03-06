import { useTranslation } from 'react-i18next'
import { Layout } from '~/components/Layout'
import { Text } from '~/components/Text'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Text>{t('welcome.title')}</Text>
    </Layout>
  )
}

export default Home
