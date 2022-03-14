import { useTranslation } from 'react-i18next'
import { useFetchTopHeadlines } from '~/hooks/useFetchTopHeadlines'

import { Desktop } from './Desktop'
import { Mobile } from './Mobile'
import * as S from './styles'

export const Highlighted = () => {
  const [t] = useTranslation()
  const { data } = useFetchTopHeadlines()

  return (
    <>
      {data.length ? (
        <S.Highlighted>
          <S.Title>{t('headlines')}</S.Title>
          <Desktop data={data} />
          <Mobile data={data} />
        </S.Highlighted>
      ) : null}
    </>
  )
}
