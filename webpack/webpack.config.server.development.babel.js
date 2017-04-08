const webpack = require("webpack");
const webpackShell = require("webpack-shell-plugin")
const baseServerConfig = require("./webpack.config.server")

const configuration = Object.assign({}, baseServerConfig)
configuration.output.publicPath = `http://127.0.0.1:8080${baseServerConfig.output.publicPath}`
configuration.devtool = "eval-source-map"

configuration.plugins = configuration.plugins.concat(
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("development"),
      BABEL_ENV: JSON.stringify("server-dev"),
      BROWSER: JSON.stringify(false)
    }
  }),

  new webpackShell({
    onBuildEnd: [
      "nodemon --watch build ./build/server.js"
    ]
  })
)

module.exports = configuration
