import Link from 'next/link'

import * as S from './styles'

export const Logo = () => {
  return (
    <Link href="/" passHref>
      <a>
        <S.Logo>
          world<strong>news</strong>
        </S.Logo>
      </a>
    </Link>
  )
}
