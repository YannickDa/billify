const path = require("path")
const baseConfig = require("./webpack.base.config")

const configuration = Object.assign({}, baseConfig)

configuration.entry = {
  server: "./src/server/index.js"
}

configuration.output = {
  path: path.resolve(baseConfig.context, "build"),
  publicPath: "/assets/",
  filename: "[name].js",
  chunkFilename: "[name].js"
}

configuration.target = "node"
configuration.node = {
  __dirname: false,
  __filename: false
}

const fileLoaders = configuration.module.rules.filter(item => item.loader === "file-loader")
for (const loader of fileLoaders) {
  loader.options = {
    emitFile: false
  }
}


module.exports = configuration
