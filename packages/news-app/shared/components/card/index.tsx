/* eslint-disable @next/next/link-passhref */
import Image from 'next/image';
import * as S from './index.style';

export const Card = ({
  src,
  alt,
  category = null,
  title,
  publishedTime = null,
}: {
  src: string;
  alt: string;
  category: any;
  title: string;
  publishedTime: any;
}) => {
  return (
    <>
      <S.StyledCard>
        <S.StyledImage>
          <Image width="272" height="104" src={src} alt={alt} />
        </S.StyledImage>
        <S.CardContent>
          {category && (
            <S.StyledText as="span" variant="category">
              {category}
            </S.StyledText>
          )}

          <S.StyledText as="h3">{title}</S.StyledText>
          <S.StyledLink href="#" title="Click to read this article">
            Read full article{''}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z" />
            </svg>
          </S.StyledLink>
          {publishedTime && (
            <S.StyledText as="span" variant="time">
              {publishedTime}
            </S.StyledText>
          )}
        </S.CardContent>
      </S.StyledCard>
    </>
  );
};
