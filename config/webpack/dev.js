const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const express = require('express');
const util = require('util');
const { baseConfig, resolvePath } = require('./base');

const result = baseConfig({
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath('views/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: {
      name: 'manifest',
    },
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    open: true,
    port: process.env.PORT || 3000,
    hotOnly: true,
    overlay: true,
    historyApiFallback: true,
    before(app) {
      app.use(express.static(resolvePath('public')));
    },
  },
});
module.exports = result;
