const path = require("path");
const { merge } = require("webpack-merge");
const webpackCommon = require("./webpack.common");

// @ts-ignore
module.exports = merge(webpackCommon, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
});
