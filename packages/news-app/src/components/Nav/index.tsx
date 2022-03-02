import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { navigation } from '~/constants/navigation'

import * as S from './styles'

export const Nav = () => {
  const { pathname, locale: activeLocale } = useRouter()
  const [t] = useTranslation()

  return (
    <S.Nav>
      <S.Wrapper>
        {navigation.map((item) => (
          <Link href={item.link} locale={activeLocale} passHref key={item.key}>
            <S.Link className={pathname === item.link ? 'active' : ''}>{t(`${item.key}`)}</S.Link>
          </Link>
        ))}
      </S.Wrapper>
    </S.Nav>
  )
}
