const webpack = require("webpack");
const baseConfiguration = require("./webpack.config.server");

const configuration = Object.assign({}, baseConfiguration);

configuration.output.publicPath = `http://127.0.0.1:8080${configuration.output.publicPath}`;
configuration.devtool = "inline-source-map";

configuration.plugins = configuration.plugins.concat(
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("development"),
      BABEL_ENV: JSON.stringify("server-dev"),
      BROWSER: JSON.stringify(false)
    },

    __development__: true,
  })
);

module.exports = configuration;
