import { styled } from '~/styles/stitches.config'

export const Card = styled('div', {
  variants: {
    variant: {
      highlight: {},
      headlines: {
        display: 'flex',
        alignItems: 'center',

        '& div': {
          ml: '$4',

          '& span': {
            fontSize: '$md',
          },

          '& p': {
            fontSize: '$2xl',
          },

          '& a': {
            fontSize: '$md',

            '& svg': {
              width: 18,
              height: 18,
            },
          },
        },
      },
      category: {
        display: 'flex',
        flexDirection: 'column',

        '& div': {
          '& span': {
            fontSize: '$md',
          },

          '& p': {
            fontSize: '$2xl',
          },

          '& a': {
            fontSize: '$md',

            '& svg': {
              width: 18,
              height: 18,
            },
          },
        },
      },
      results: {
        display: 'flex',
        alignItems: 'center',

        '& div': {
          ml: '$4',

          '& span': {
            fontSize: '$md',
          },

          '& p': {
            fontSize: '$2xl',
          },

          '& a': {
            fontSize: '$md',

            '& svg': {
              width: 18,
              height: 18,
            },
          },
        },
      },
      mobileHighlight: {
        '& div': {
          '& span': {
            fontSize: '$md',
          },

          '& p': {
            fontSize: '$xl',
          },

          '& a': {
            display: 'flex',
            alignItems: 'center',
            fontSize: '$md',
            textDecorationLine: 'underline',

            '& svg': {
              width: 12,
              height: 12,
            },
          },
        },
      },
      mobileHeadlines: {
        '& div': {
          '& span': {
            fontSize: '$md',
          },

          '& p': {
            fontSize: '$xl',
          },

          '& a': {
            display: 'flex',
            alignItems: 'center',
            fontSize: '$md',
            textDecorationLine: 'underline',

            '& svg': {
              width: 12,
              height: 12,
            },
          },
        },
      },
      mobileResults: {
        display: 'flex',
        alignItems: 'center',

        '& div': {
          ml: '$4',

          '& span': {
            fontSize: '$md',
          },

          '& p': {
            fontSize: '$xl',
          },

          '& a': {
            display: 'flex',
            alignItems: 'center',
            fontSize: '$md',
            textDecorationLine: 'underline',

            '& svg': {
              width: 12,
              height: 12,
            },
          },
        },
      },
    },
  },
})

export const Image = styled('figure', {
  '& img': {
    borderRadius: '$medium',
  },
})

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Category = styled('span', {
  color: '$linkPrimary',
  fontSize: '$lg',
  fontWeight: '$semibold',
  letterSpacing: '$wider',
  lineHeight: '$5',
})

export const Headline = styled('p', {
  color: '$black',
  fontSize: '$3xl',
  fontWeight: '$semibold',
  letterSpacing: '$wider',
})

export const Link = styled('a', {
  display: 'flex',
  textDecoration: 'none',
  color: '$linkPrimary',
  fontSize: '$md',
  fontWeight: '$semibold',
  letterSpacing: '$wider',
  lineHeight: '$4-5',
  '-webkit-transition': 'all 0.2s',
  transition: 'all 0.2s',

  '& svg': {
    marginLeft: '$2',
    fill: '$linkPrimary',
  },

  '&:hover': {
    color: '$linkSecondary',

    '& svg': {
      fill: '$linkSecondary',
    },
  },

  '&:visited': {
    color: '$linkTertiary',

    '& svg': {
      fill: '$linkTertiary',
    },
  },
})

export const PublishAt = styled('small', {
  color: '$secondary',
  fontSize: '$md',
  fontWeight: '$normal',
  letterSpacing: '$wider',
  lineHeight: '$5',
})
