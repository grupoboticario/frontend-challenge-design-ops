const StyleDictionaryPackage = require('style-dictionary')
const _ = require('lodash');
const fs = require('fs');

const options = {
  showFileHeader: false,
}


const typingsES6Template = _.template(
  fs.readFileSync(`${__dirname}/typings/es6.template`)
);

StyleDictionaryPackage.registerFormat({
  name: 'typings/es6',
  formatter: typingsES6Template,
});

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
        transformGroup: "js",
        buildPath: `./dist/${theme}/`,
        options,
        files: [
          {
            destination: 'index.json',
            format: 'json/nested',
          }
        ]
      },
      'web/ts': {
        transformGroup: "js",
        buildPath: `./dist/${theme}/`,
        options,
        files: [
          {
            destination: "index.d.ts",
            format: "typings/es6"
          }
        ]
      }
    },
  }
}

console.log('Build started...')

const platforms = ['web/css', 'web/scss', 'web/json', 'web/ts']
const themes = ['br', 'us', 'pt']

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