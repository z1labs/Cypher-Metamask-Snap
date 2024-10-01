const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust to the correct entry point of your project
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.wasm$/,
        type: 'webassembly/sync',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  experiments: {
    syncWebAssembly: true, // Enabling synchronous WebAssembly loading
  },
  resolve: {
    extensions: ['.js', '.wasm'],
  },
};
