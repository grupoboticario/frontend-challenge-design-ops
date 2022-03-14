const StyleDictionaryPackage = require('style-dictionary')

const options = {
  showFileHeader: false,
}

const getStyleDictionaryConfig = ({ theme }) => {
  return {
    source: ['tokens/foundation.json', `tokens/themes/${theme}.json`],
    platforms: {
      'web/css': {
        transformGroup: 'css',
        buildPath: `./dist/${theme}/`,
        options,
        files: [
          {
            destination: 'index.css',
            format: 'css/variables',
          },
        ],
      },
      'web/scss': {
        transformGroup: 'scss',
        buildPath: `./dist/${theme}/`,
        options,
        files: [
          {
            destination: 'index.scss',
            format: 'scss/variables',
          },
        ],
      },
      'web/json': {
        transforms: ['name/cti/constant'],
        buildPath: `./dist/${theme}/`,
        options,
        files: [
          {
            destination: 'index.json',
            format: 'json/nested',
          },
        ],
      },
    },
  }
}

console.log('Build started...')

const platforms = ['web/css', 'web/scss', 'web/json']
const themes = ['usa', 'brazil', 'portugal']

themes.forEach((theme) => {
  if (theme) {
    platforms.forEach((platform) => {
      const config = getStyleDictionaryConfig({ theme, platform })
      const StyleDictionary = StyleDictionaryPackage.extend(config)
      StyleDictionary.buildPlatform(platform)
    })
  }
})

console.log('Build finished...')
