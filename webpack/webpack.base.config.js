const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const rootFolder = path.resolve(__dirname, "..")

module.exports = {
  context: rootFolder,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          "babel-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            "sass-loader"
          ]
        })
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          "img-loader",
          "file-loader"
        ]
      }
    ]
  },

  resolve: {
    alias: {
      utils: path.resolve(rootFolder, "src/utils"),
      pdf: path.resolve(rootFolder, "src/pdf")
    }
  },

  plugins: [
    new ExtractTextPlugin("style.css")
  ]
}
