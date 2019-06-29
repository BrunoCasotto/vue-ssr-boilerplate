const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isProd = process.env.NODE_ENV === 'production'

const scssLoader = isProd ? [
  MiniCssExtractPlugin.loader,
  'css-loader',
  'postcss-loader',
  'sass-loader',
]: [
  'vue-style-loader',
  'css-loader',
  'postcss-loader',
  'sass-loader'
]

const baseRules = [
  {
    test: /\.vue$/,
    exclude: /node_modules/,
    loader: 'vue-loader',
    options: {},
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
  {
    test: /\.scss$/,
    use: scssLoader,
  },
  {
    test: /\.(jpg|png|svg)$/,
    use: {
      loader: 'file-loader',
      options: {
        name: '/images/[hash].[ext]',
      },
    },
  },
  {
    test: /\.(ico)$/,
    use: {
      loader: 'file-loader',
      options: {
        name: '/[name].[ext]',
      },
    },
  },
]

module.exports = baseRules
