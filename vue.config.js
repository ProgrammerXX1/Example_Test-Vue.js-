const path = require('path')

module.exports = {
  filenameHashing: true,
  devServer: {
    hot: true,
    open: true
  },

  pages: {
    index: {
      entry: './src/main.js',
      template: './src/index.pug'
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        path.resolve(__dirname, './src/styles/_global.sass'),
        path.resolve(__dirname, './src/styles/_smart-grid.sass'),
        path.resolve(__dirname, './src/styles/_mixins.sass'),
      ]
    }
  }
};
