const StyleDictionaryPackage = require("style-dictionary");

const options = {
  showFileHeader: false,
};

const getStyleDictionaryConfig = ({ theme }) => {
  return {
    source: ["tokens/foundation.json", `tokens/themes/${theme}.json`],
    platforms: {
      "web/css": {
        transformGroup: "css",
        buildPath: `./dist/${theme}/`,
        options,
        files: [
          {
            destination: "index.css",
            format: "css/variables",
          },
        ],
      },
      "web/scss": {
        transformGroup: "scss",
        buildPath: `./dist/${theme}/`,
        options,
        files: [
          {
            destination: "index.scss",
            format: "scss/variables",
          },
        ],
      },
      "web/js": {
        transforms: ["name/cti/constant"],
        buildPath: `./dist/${theme}/`,
        options,
        files: [
          {
            destination: "index.js",
            format: "javascript/module",
          },
        ],
      },
    },
  };
};

console.log("Build started...");

const platforms = ["web/css", "web/scss", "web/js"];
const themes = ["theme-one", "brazil", "portugal", "usa"];

themes.forEach((theme) => {
  if (theme) {
    platforms.forEach((platform) => {
      const config = getStyleDictionaryConfig({ theme, platform });
      const StyleDictionary = StyleDictionaryPackage.extend(config);
      StyleDictionary.buildPlatform(platform);
    });
  }
});

console.log("Build finished...");
