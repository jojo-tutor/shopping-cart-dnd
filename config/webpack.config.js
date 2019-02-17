const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
require('dotenv').config({ path: resolvePath('config/.env') })

const configs = {
  development : {
    styleLoader : require.resolve('style-loader')
  },
  production: {
    styleLoader: MiniCssExtractPlugin.loader
  }
}
const { PORT } = process.env
module.exports = (mode) => {
  const { styleLoader } = configs[mode]
  return {
    entry: [
      './src/index.js'
    ],
    mode,
    module: {
      rules: [
        {
          oneOf: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules|bower_components/,
              loader: require.resolve('babel-loader')
            },
            {
              test: /\.css$/,
              use: getStyleLoaders({ importLoaders: 1 }, styleLoader),
            },
            {
              test: /\.(scss|sass)$/,
              use: getStyleLoaders({ importLoaders: 2 }, styleLoader, 'sass-loader'),
            },
            {
              exclude: [/\.(js|mjs|jsx)$/, /\.html$/, /\.json$/],
              loader: require.resolve('file-loader'),
              options: {
                name: 'media/[name].[hash:8].[ext]',
              }
            }
          ]
        }
      ]
    },
    output: {
      path: path.join(process.cwd(), 'build'),
      filename: 'js/[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolvePath('public/index.html'),
      }),
      new webpack.DefinePlugin(getEnv()),
      mode === 'development' && new webpack.HotModuleReplacementPlugin(),
      mode === 'production' &&
        new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash:8].css',
        }),
    ].filter(Boolean),
    devServer: {
      open: true,
      port: PORT,
      hotOnly: true
    }
  }
}

function getEnv(){
  const REACT_APP = /^APP_/i;
  const env = Object
    .entries(process.env)
    .filter(([key]) => REACT_APP.test(key))
    .reduce((result, [key, val]) => {
      result[key.replace(REACT_APP, '')] = JSON.stringify(val)
      return result
    }, {})
  return {
    'process.env': env
  }
}

function resolvePath(relativePath) {
  return path.join(process.cwd(), relativePath)
}

function getStyleLoaders(cssOptions, mainLoader, preProcessor) {
  return [
    mainLoader,
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
          }),
        ],
      },
    },
    preProcessor
  ].filter(Boolean)
};
