// const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  name: 'client',
  entry: './src/assets/js/client.js',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|src|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['env'],
      },
    }],
  },
  target: 'web',
  // externals: [nodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist/assets/js'),
  },
};
