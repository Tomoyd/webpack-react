const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: { main: "./src/index.js" },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new HtmlWebpackPlugin({ template: "./index.html" })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.less$/,
            use: [
              MiniCssExtractPlugin.loader,
              { loader: "css-loader", options: { modules: true } },
              // {
              //   loader: "postcss-loader"
              //   // options: {
              //   //   postcssOptions: {
              //   //     plugins: ["postcss-preset-env"]
              //   //   }
              //   // }
              // },
              "postcss-loader",
              "less-loader"
            ]
          },
          {
            test: /\.(js|jsx)$/,
            loader: "babel-loader",
            exclude: "/node_modules/"
          }
        ]
      }
    ]
  }
};
