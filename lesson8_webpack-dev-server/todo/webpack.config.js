const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, arg) => {
  const isProd = arg.mode === 'production';

  const config = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /.js$/,
          use: 'babel-loader',
        },
        {
          test: /.s?css$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /.(jpg|png|jpeg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: '[name].[ext]',
                outputPath: 'images',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({ template: './src/index.html' }),
    ],
    devServer: {
      port: 9000,
      hot: true,
    },
  };

  if (isProd)
    config.plugins.push(
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      })
    );
  return config;
};
