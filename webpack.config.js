const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BUILD_DIR = path.resolve(__dirname, './build/app')
const SRC_DIR = path.resolve(__dirname, './src/app')


module.exports = {
  entry: {
    main: SRC_DIR + "/index.tsx"
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  module: {
    rules: [
      { test: /\.(ts|js)x?$/, include: SRC_DIR, loader: "babel-loader" },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|svg)$/, use: 'url-loader?limit=100000' },
      { test: /\.(ts|js)x?$/, enforce: 'pre', use: 'source-map-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/app/index.html' })
  ]
}