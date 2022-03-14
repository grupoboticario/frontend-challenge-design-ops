import { useRouter } from 'next/router'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useDebounce } from '~/hooks/useDebounce'
import { useStore } from '~/store'
import { CSS } from '~/styles/stitches.config'

import * as S from './styles'

type InputProps = {
  css?: CSS
}

export function Search({ css }: InputProps) {
  const { t } = useTranslation()
  const { asPath } = useRouter()
  const router = useRouter()
  const [keyword, setKeyword] = React.useState<string>('')
  const { setSearchForKeyword } = useStore((store) => store.actions)
  const { searchForKeyword } = useStore((store) => store.state)

  const onChangeKeyword = (value: string) => {
    setKeyword(value)
  }

  const handleSubmit = () => {
    router.replace({
      pathname: '/search',
      query: { q: keyword },
    })

    setSearchForKeyword(keyword)
  }

  React.useEffect(() => {
    if (!asPath.includes('/search')) {
      setKeyword('')
      setSearchForKeyword('')
    }
  }, [setKeyword, setSearchForKeyword])

  React.useEffect(() => {
    if (asPath.includes('/search')) {
      setKeyword(searchForKeyword)
    }
  }, [])

  return (
    <S.Wrapper css={css}>
      <S.Input onChange={(event) => onChangeKeyword(event.target.value)} value={keyword} placeholder={t('search')} />
      <S.Button onClick={() => handleSubmit()}>
        <svg width="25" height="24" viewBox="0 0 25 24">
          <path d="M17 15H16.21L15.93 14.73C16.91 13.59 17.5 12.11 17.5 10.5C17.5 6.91 14.59 4 11 4C7.41 4 4.5 6.91 4.5 10.5C4.5 14.09 7.41 17 11 17C12.61 17 14.09 16.41 15.23 15.43L15.5 15.71V16.5L20.5 21.49L21.99 20L17 15ZM11 15C8.51 15 6.5 12.99 6.5 10.5C6.5 8.01 8.51 6 11 6C13.49 6 15.5 8.01 15.5 10.5C15.5 12.99 13.49 15 11 15Z" />
        </svg>
      </S.Button>
    </S.Wrapper>
  )
}
