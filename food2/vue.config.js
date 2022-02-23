const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
  ? '/zhenghanli.github.io/food2/'
  : '/',
  transpileDependencies: true,
  publicPath:'./' 
})
