const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package')

const port = 8082

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  devServer: {
    hot: true,
    port,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${name}`
    }
  }
})
