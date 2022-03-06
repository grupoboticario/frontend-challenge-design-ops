import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useTranslation } from 'react-i18next'

import * as S from './styles'

export const Locales = () => {
  const { setTheme } = useTheme()
  const { asPath, locales, locale: activeLocale } = useRouter()
  const otherLocales = locales?.filter((locale) => locale !== activeLocale)
  const [t, i18n] = useTranslation()

  React.useEffect(() => {
    i18n.changeLanguage(activeLocale)
    setTheme(activeLocale)
  }, [i18n, activeLocale, setTheme])

  return (
    <S.Locales>
      <S.List>
        {otherLocales?.map((locale) => (
          <S.Item key={locale}>
            <Link href={asPath} locale={locale} passHref>
              <a>
                <Image src={`/assets/brands/${locale}.svg`} width="40" height="28" alt={locale} />
              </a>
            </Link>
          </S.Item>
        ))}
      </S.List>
    </S.Locales>
  )
}
