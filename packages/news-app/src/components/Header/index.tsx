import * as React from 'react'
import { BurgerButton } from '~/components/BurgerButton'
import { Locales } from '~/components/Locales'
import { Logo } from '~/components/Logo'
import { Search } from '~/components/Search'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Header>
      <BurgerButton />
      <S.Wrapper>
        <Logo />
        <Search
          css={{
            '@bp1': {
              display: 'none',
            },
            '@bp3': {
              display: 'flex',
            },
          }}
        />

        <Locales />
      </S.Wrapper>
    </S.Header>
  )
}
