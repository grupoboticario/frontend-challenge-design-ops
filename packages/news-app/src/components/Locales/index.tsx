import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useTranslation } from 'react-i18next'

import * as S from './styles'

export const Locales = () => {
  const router = useRouter()
  const { locales, locale: activeLocale } = router
  const otherLocales = locales.filter((locale) => locale !== activeLocale)
  const [t, i18n] = useTranslation()

  React.useEffect(() => {
    i18n.changeLanguage(activeLocale)
  }, [i18n, activeLocale])

  return (
    <S.Locales>
      <S.List>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router

          return (
            <S.Item key={locale}>
              <Link href={{ pathname, query }} as={asPath} locale={locale} passHref>
                <Image src={`/assets/brands/${locale}.svg`} width="40" height="28" alt={locale} />
              </Link>
            </S.Item>
          )
        })}
      </S.List>
    </S.Locales>
  )
}
