module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://hutong.gocyprus.cn/',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/api'
          }
        },
        '/upload': {
          target: 'http://hutong.gocyprus.cn/',
          changeOrigin: true,
          pathRewrite: {
            '^/upload': '/upload'
          }
        }
      }
    }
}