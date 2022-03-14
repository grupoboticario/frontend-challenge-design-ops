import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Logo } from '~/components/Logo'
import { navigation } from '~/constants/navigation'
import { useStore } from '~/store'

import * as S from './styles'

export const Nav = () => {
  const { open } = useStore((store) => store.state)
  const { toggle } = useStore((store) => store.actions)
  const { asPath } = useRouter()
  const [t] = useTranslation()

  return (
    <S.Nav className={open ? 'show' : ''}>
      <S.WrapperHeader>
        <S.WrapperLogo>
          <Logo />
        </S.WrapperLogo>
        <S.Button onClick={() => toggle()}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              fill="white"
            />
          </svg>
        </S.Button>
      </S.WrapperHeader>
      <S.Wrapper>
        <Link href="/" passHref>
          <S.Link className={asPath === '/' ? 'active' : ''}>{t('home')}</S.Link>
        </Link>

        {navigation.map((item) => (
          <Link href={`/category${item.link}`} passHref key={item.key}>
            <S.Link className={asPath.includes(item.link) ? 'active' : ''} onClick={() => open && toggle()}>
              {t(`${item.key}`)}
            </S.Link>
          </Link>
        ))}
      </S.Wrapper>
    </S.Nav>
  )
}
