const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]',
            outputPath: 'assets',
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.json'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/public/template.html',
    }),
  ],
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
  },
  devtool: 'source-map',
};
