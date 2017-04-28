const webpack = require("webpack");
const baseServerConfig = require("./webpack.config.server")

const configuration = Object.assign({}, baseServerConfig)
configuration.devtool = "eval-source-map"

configuration.plugins = configuration.plugins.concat(
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("development"),
      BABEL_ENV: JSON.stringify("server-dev"),
      BROWSER: JSON.stringify(false)
    }
  })
)

module.exports = configuration
