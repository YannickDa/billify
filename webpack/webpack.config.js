const path = require("path")

const rootFolder = path.resolve(__dirname, "..")

module.exports = {
  context: rootFolder,

  entry: {
    main: "./src/browser/js/index.js"
  },

  output: {
    path: path.resolve(rootFolder, "public"),
    publicPath: "/",
    filename: "[name].[hash].js",
    chunkFilename: "[name].[hash].js"
  },

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
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
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

  plugins: []
}
