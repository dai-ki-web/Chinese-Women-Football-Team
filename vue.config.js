
const path = require('path')
module.exports = {
  publicPath: '/Chinese-Women-Football-Team/',
  outputDir: 'dist',
  transpileDependencies: true,
  devServer: {
    // 调试端口
    port: 8989
  },
  chainWebpack: config => {
    config.module
      .rule('url-loader')
      .test(/\.(GIF)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .end()
  },
}
