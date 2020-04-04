const { resolve } = require('path');
const webpack = require('webpack');
module.exports = {
  context: __dirname,
  entry:  [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    './src/main.js'
  ],
  output: {
    path: resolve(__dirname, 'build'),
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    contentBase: resolve(__dirname, 'public'),
    hot: true,
    publicPath:'/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  devtool: "cheap-eval-source-map",
};
