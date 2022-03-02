import { useStore } from '~/store'
import { CSS } from '~/styles/stitches.config'

import * as S from './styles'

type BurgerButtonProps = { css?: CSS }

export const BurgerButton = ({ css }: BurgerButtonProps) => {
  const { toggle } = useStore((store) => store.actions)

  return (
    <S.Button css={css} onClick={() => toggle()}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="white" />
      </svg>
    </S.Button>
  )
}
