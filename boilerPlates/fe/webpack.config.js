const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require("dotenv").config();

module.exports = {
  target: "web",
  entry: {
    bundle: "./src/app/app.tsx",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", "node_modules"],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8080,
    host: `localhost`,
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
              ],
              plugins: [
                ["styled-jsx/babel", { optimizeForSpeed: true }],
              ],
            },
          },
          "ts-loader",
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/app/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};
