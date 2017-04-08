const path = require("path")
const baseConfig = require("./webpack.base.config")

const configuration = Object.assign({}, baseConfig)
configuration.entry = "./src/browser/index.js"
configuration.output = {
  path: path.resolve(baseConfig.context, "build", "assets"),
  publicPath: "/assets/",
  filename: "[name].[hash].js",
  chunkFilename: "[name].[hash].js"
}

module.exports = configuration
