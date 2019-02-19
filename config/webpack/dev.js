const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const express = require('express')
const util = require('util')
const { baseConfig, resolvePath } = require('./base')

const result = baseConfig({
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath('views/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    open: true,
    port: process.env.PORT,
    hotOnly: true,
    overlay: true,
    historyApiFallback: {
      disableDotRule: true
    },
    before(app){
      app.use(express.static(resolvePath('public')))
    }
  }
})
module.exports = result