module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.module.rule([
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /NIM_Web_SDK.*\.js/,
        query: {
          presets: [
            // ...
          ],
          // ...
        },
        // ...
      },
    ]);
  },
};