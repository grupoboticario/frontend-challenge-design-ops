import { useTranslation } from 'react-i18next'

import * as S from './styles'

type LoadMoreButtonProps = {
  isEmpty?: boolean
  handleClick: () => void
}

export const LoadMoreButton = (props: LoadMoreButtonProps) => {
  const [t] = useTranslation()

  return (
    <S.Wrapper>
      <S.Button type="button" disabled={props.isEmpty} onClick={() => !props.isEmpty && props.handleClick()}>
        {!props.isEmpty ? t('loadMore') : t('noMoreResults')}
      </S.Button>
    </S.Wrapper>
  )
}
