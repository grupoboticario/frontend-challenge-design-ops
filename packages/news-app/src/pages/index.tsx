import type { NextPage } from 'next'
import { useTranslation } from 'react-i18next'
import { Locales } from '~/components/Locales'
import { Text } from '~/components/Text'

const Home: NextPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Locales />
      <Text>{t('welcome.title')}</Text>
    </>
  )
}

export default Home
