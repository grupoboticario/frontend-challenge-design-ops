import { styled } from '@utils/stitches';

const Typography = styled('span', {
  letterSpacing: '0.08em',
  variants: {
    bold: {
      true: {
        fontWeight: '$bold',
      },
    },
    semiBold: {
      true: {
        fontWeight: '$semibold',
      },
    },
    underline: {
      true: {
        textDecoration: 'underline',
      },
    },
    type: {
      title: {
        '@desktop': {
          fontSize: '$5xl',
        },
        '@mobile': {
          fontSize: '$3xl',
        },
      },
      subtitle: {
        '@desktop': {
          fontSize: '$4xl',
        },
        '@mobile': {
          fontSize: '$2xl',
        },
      },
      text: {
        fontSize: '$x',
      },
      headline: {
        '@desktop': {
          fontSize: '$3xl',
          lineHeight: '$11',
        },
        '@mobile': {
          fontSize: '$2xl',
        },
      },
      articleTitle: {
        '@desktop': {
          fontSize: '$2xl',
          lineHeight: '$7-5',
        },
        '@mobile': {
          fontSize: '$xl',
        },
      },
    },
  },
  length: 0,
});

export default Typography;
