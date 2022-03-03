export const imageSizes = (variant: string) => {
  const size = {
    highlight: {
      width: 736,
      height: 346,
    },
    headlines: {
      width: 272,
      height: 146,
    },
    category: {
      width: 368,
      height: 120,
    },
    results: {
      width: 272,
      height: 102,
    },
    mobileHighlight: {
      width: 304,
      height: 148,
    },
    mobileHeadlines: {
      width: 304,
      height: 102,
    },
    mobileResults: {
      width: 100,
      height: 104,
    },
  }[variant]

  return size
}
