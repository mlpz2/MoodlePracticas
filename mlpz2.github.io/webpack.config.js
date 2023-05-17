const path = require("path");
const webpackMerge = require('webpack-merge');
const defaultConfig = require('@angular/cli/models/webpack-configs/default');

const Html = require('html-webpack-plugin');

module.exports = {
  entry: [
    "whatwg-fetch",
    "./js/index.js",
  ],
  output: {
    filename: "js/out.js",
    path: path.resolve(__dirname, "build")
  },
  devServer: {
    port: 3001,
  },
  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },

      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                require("autoprefixer")()
              ],
            },
          },
          'sass-loader',
        ]
      },

      {
        test: /\.(jpg|jpeg|gif|png)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: 'images',
            outputPath: 'images',
          }
        }
      },

      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: 'fonts',
            outputPath: 'fonts',
          }
        }
      },
      {
        test: /\.(sass|css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                require("autoprefixer")()
              ],
            },
          },
          'sass-loader',
        ]
      },{
        test: /\.(sass|less|css)$/,
        use: ["style-loader", "css-loader", 'sass-loader'],

      },

    ]

  },


  plugins: [
    new Html({
      filename: 'index.html',
      template: './index.html',
    })
  ]
};
