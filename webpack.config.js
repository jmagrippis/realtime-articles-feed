var webpack = require("webpack")

module.exports = {
  entry: [
    __dirname + "/src/index.js",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server"
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: "react-hot!babel"
    }]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: __dirname + "/dist",
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
