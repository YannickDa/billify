const serverConfiguration = require("universal-webpack").server_configuration;
const settings = require("./universal-webpack-settings");
const configuration = require("./webpack.config");

const fileLoaders = configuration.module.rules.filter(item => item.loader === "file-loader");
for (const loader of fileLoaders) {
  loader.options = {
    emitFile: false
  };
}

module.exports = serverConfiguration(configuration, settings)
