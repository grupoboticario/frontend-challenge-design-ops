import { useTranslation } from 'react-i18next'
import { Header } from '~/components/Header'
import { Main } from '~/components/Main'
import { Nav } from '~/components/Nav'
import { Search } from '~/components/Search'
import { Text } from '~/components/Text'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Header />
      <Nav />
      <Main>
        <Search
          css={{
            '@bp1': {
              display: 'flex',
            },
            '@bp3': {
              display: 'none',
            },
          }}
        />
        <Text>{t('welcome.title')}</Text>
      </Main>
    </>
  )
}

export default Home
