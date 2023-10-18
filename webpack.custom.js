// webpack.custom.js
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          'ts-loader'
        ]
      }
    ]
  }
};
