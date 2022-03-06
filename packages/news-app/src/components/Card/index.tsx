import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { ArticleProps } from '~/services/types/Article'
import { CSS } from '~/styles/stitches.config'

import { imageSizes } from './imageSizes'
import * as S from './styles'

type CardProps = {
  css?: CSS
  variant: 'highlight' | 'headlines' | 'category' | 'results' | 'mobileHighlight' | 'mobileHeadlines' | 'mobileResults'
  article: ArticleProps
  category: boolean
  publishAt: boolean
}

export const Card = ({ css, variant, article, category, publishAt }: CardProps) => {
  const { locale: activeLocale } = useRouter()
  const [t] = useTranslation()
  const imageSize = imageSizes(variant)
  const imageWidth = imageSize?.width ? imageSize.width : 100
  const imageHeight = imageSize?.height ? imageSize.height : 100
  const urlToImage = article.urlToImage ? article.urlToImage : ''
  const url = article.url ? article.url : ''

  const publishedAt = new Date(article.publishedAt).toLocaleDateString(activeLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <S.Card css={css} variant={variant}>
      <S.Image>
        <img src={urlToImage} width={imageWidth} height={imageHeight} alt={article.title} />
      </S.Image>
      <S.Wrapper>
        {category ? <S.Category>{article.source?.name}</S.Category> : null}
        <S.Headline>{article.title}</S.Headline>
        <Link href={url} passHref>
          <S.Link>
            {t('readMore')}
            <svg width="19" height="18" viewBox="0 0 19 18">
              <path d="M16.5 16.0001H2.5V2.00012H9.5V0.00012207H2.5C1.39 0.00012207 0.5 0.900122 0.5 2.00012V16.0001C0.5 17.1001 1.39 18.0001 2.5 18.0001H16.5C17.6 18.0001 18.5 17.1001 18.5 16.0001V9.00012H16.5V16.0001ZM11.5 0.00012207V2.00012H15.09L5.26 11.8301L6.67 13.2401L16.5 3.41012V7.00012H18.5V0.00012207H11.5Z" />
            </svg>
          </S.Link>
        </Link>
        {publishAt ? <S.PublishAt>{publishedAt}</S.PublishAt> : null}
      </S.Wrapper>
    </S.Card>
  )
}

Card.defaultProps = {
  category: true,
  publishAt: true,
}
