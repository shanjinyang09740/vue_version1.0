const path = require('path')

function resolve (dir) {
  return path.join(__dirname,  dir)
}//扩展简写引入的函数

module.exports = {
  runtimeCompiler: true, // 运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  lintOnSave: false, // 关闭ESLint编译
  chainWebpack: config => {//热替换
    // 修复HMR
    config.resolve.symlinks(true);
  },
  configureWebpack : {
    resolve: {
      extensions: ['.js', '.vue', '.json'],//可不写的扩展名
      alias: {//设置文件查找路径
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'components': resolve('src/components'),
      }
    },
  },
  css: { // CSS 相关的 loader 传递选项
    loaderOptions: {
      css:{
        
      },
      postcss: {
        plugins: [
          
        ]
      }
    }
  },
  devServer: {
    sockHost: 'demo.my-domain.com',
    disableHostCheck: true,
  },
 
}
