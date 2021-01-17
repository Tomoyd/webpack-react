const { merge } = require("webpack-merge");
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpackCommon = require("./webpack.common");
// @ts-ignore
module.exports = merge(webpackCommon, {
  mode: "production",
  output: {
    filename: "[name].[contenthash:5].js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new HtmlWebpackPlugin({ template: "./index.html" })
  ]
});
