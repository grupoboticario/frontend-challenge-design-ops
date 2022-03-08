import { useTranslation } from 'react-i18next'

import { Desktop } from './Desktop'
import { Mobile } from './Mobile'
import * as S from './styles'

export const Highlighted = () => {
  const [t] = useTranslation()

  return (
    <S.Highlighted>
      <S.Title>{t('headlines')}</S.Title>
      <Desktop />
      <Mobile />
    </S.Highlighted>
  )
}
