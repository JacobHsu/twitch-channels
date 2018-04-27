const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // ProvidePlugin
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
   ]
};