import React from 'react';
import { Typography, Link } from '@components/atoms';
import { CardContainer, Container } from './style';

interface ICard {
  direction?: 'vertical' | 'horizontal'
  isHeadline?: boolean
  isSmall?: boolean
  category?: string;
  categoryHref?: string;
  title: string;
  linkUrl: string;
  imageUrl: string;
  date?: string;
}
function Card({
  direction = 'vertical',
  isHeadline,
  isSmall,
  date,
  linkUrl,
  title,
  category,
  categoryHref,
  imageUrl,
}: ICard) {
  const setCardSize = () => {
    if (isHeadline) return 'big';
    if (isSmall) return 'small';
    return 'normal';
  };

  return (

    <CardContainer direction={direction} size={setCardSize()}>
      <figure>
        <img src={imageUrl} alt={title} />
      </figure>

      <Container>
        <Link href={categoryHref}>{category}</Link>
        <Typography type={isHeadline ? 'headline' : 'articleTitle'} semiBold as="h3">{title}</Typography>
        <Link href={linkUrl} target="_blank">
          Read full article
          <span className="material-symbols-outlined">open_in_new</span>
        </Link>
        {date && (
        <Typography type="text" as="p" css={{ color: '$textAux' }}>
          {date}
        </Typography>
        )}
      </Container>
    </CardContainer>
  );
}

export default Card;
