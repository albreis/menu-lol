const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: './docs',
  publicPath: '/docs',
  transpileDependencies: true
})
