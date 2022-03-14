export const imageSizes = (variant: string) => {
  const size = {
    highlight: {
      width: '100%',
      height: 346,
    },
    headlines: {
      width: '100%',
      height: 146,
    },
    category: {
      width: '100%',
      height: 120,
    },
    results: {
      width: 272,
      height: 102,
    },
    mobileHighlight: {
      width: '100%',
      height: 148,
    },
    mobileHeadlines: {
      width: '100%',
      height: 102,
    },
    mobileResults: {
      width: 100,
      height: 104,
    },
  }[variant]

  return size
}
