import { styled } from '@utils/stitches';

export const CardContainer = styled('div', {

  figure: {
    width: '100%',
  },
  img: {
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'top',
    borderRadius: '$large',
    height: '100%',

  },
  variants: {
    size: {
      big: {
        img: {
          maxHeight: '346px',
        },
      },
      normal: {
        img: {
          maxHeight: '120px',
        },
      },
      small: {
        img: {
          maxHeight: '100px',
        },
      },
    },
    direction: {
      vertical: {
        display: 'flex',
        flexDirection: 'column',
        img: {
          marginBottom: '$2',
        },
      },
      horizontal: {
        display: 'grid',
        '@desktop': {
          grid: 'auto / auto 1fr',
        },
        '@mobile': {
          grid: 'auto / 100px 1fr',
        },
        alignItems: 'center',
        div: {
          marginLeft: '$4',
        },
      },
    },
  },
  compoundVariants: [
    {

      direction: 'horizontal',
      size: 'big',
      css: {
        img: {
          height: '146px',
        },
      },
    },
    {
      direction: 'horizontal',
      size: 'normal',
      css: {
        img: {
          '@desktop': {
            width: '272px',
            height: '146px',
          },
          '@mobile': {
            width: '100%',
            height: '100px',
            objectFit: 'cover',
          },

        },
      },
    }, {
      direction: 'horizontal',
      size: 'small',
      css: {
        img: {
          '@desktop': {
            width: '272px',
            height: '146px',
          },
          '@mobile': {
            width: '100%',
            height: '100px',
            objectFit: 'cover',
          },
        },
      },

    },
  ],
});

export const Container = styled('div', {
  display: 'grid',
  alignItems: 'center',
});
