const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
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
    usedExports: true,
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 6,
      automaticNameDelimiter: "~",
      // name: true,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors"
        },
        default: {
          minSize: 30000,
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM"
  // },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.less$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
                options: {
                  modules: {
                    // localIdentName: "[path][name]__[local]--[hash:base64:5]",
                    localIdentName: "[hash:base64:5]"
                  }
                }
              },
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
            ],
            // include: [path.resolve(__dirname, "src")],
            exclude: /node_modules/
          },
          {
            test: /\.(js|jsx)$/,
            loader: "babel-loader",
            include: [path.resolve(__dirname, "src")],
            exclude: /node_modules/
          }
        ]
      }
    ]
  }
};
