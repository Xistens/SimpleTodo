// const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  name: 'client',
  entry: ['./src/app/assets/js/client.js', './src/app/assets/js/edit.js'],
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
    path: path.join(__dirname, 'dist/app/assets/js'),
  },
};
