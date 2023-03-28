
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  pages: {
    'index': {
      // 入口文件，相当于单页面的 main.js
      entry: 'src/module/index.js',
      // 模板文件
      template: 'src/module/index.html',
      // 编译后 dist 目录下输出的文件，可以包含子目录
      filename: 'index.html'
    }
  },

  assetsDir: 'static'
})