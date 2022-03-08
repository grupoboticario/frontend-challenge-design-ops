import { useTranslation } from 'react-i18next'

import * as S from './styles'

type LoadMoreButtonProps = {
  isLoading?: boolean
  isDisabled?: boolean
  handleClick: () => void
}

export const LoadMoreButton = (props: LoadMoreButtonProps) => {
  const [t] = useTranslation()

  return (
    <S.Wrapper>
      <S.Button type="button" disabled={props.isDisabled} onClick={() => !props.isDisabled && props.handleClick()}>
        {props.isLoading ? t('loading') : props.isDisabled ? t('noMoreResults') : t('loadMore')}
      </S.Button>
    </S.Wrapper>
  )
}
