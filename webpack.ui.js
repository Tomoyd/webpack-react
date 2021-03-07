const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const fs = require("fs");
const copyWebpackPlugin = require("copy-webpack-plugin");
const entryMap = () => {
  const libPath = path.resolve(__dirname, "./src/components");
  const dirs = fs.readdirSync(libPath);
  let entries = {};
  dirs.forEach((dir) => {
    if (fs.lstatSync(path.resolve(libPath, dir)).isDirectory()) {
      entries[dir] = path.resolve(libPath, dir, "index.jsx");
    }
  });
  return entries;
};
module.exports = {
  mode: "production",
  entry: entryMap(),
  output: {
    path: path.resolve(__dirname, "lib"),
    library: "react-ui",
    libraryTarget: "umd",
    filename: (chunkName) => {
      return chunkName.runtime === "index" ? "[name].js" : "[name]/index.js";
    },
    libraryExport: "default",
  },

  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: ({ chunk }) => {
        return chunk.name === "index" ? "[name].css" : "[name]/index.css";
      },
    }),

    new copyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/components/index.js"),
          to: path.resolve(__dirname, "lib/index.js"),
        },
        {
          from: path.resolve(__dirname, "src/components"),
          to: path.resolve(__dirname, "es"),
        },
      ],
    }),
  ],

  externals: {
    react: "React",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
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
                    localIdentName: "[hash:base64:5]",
                  },
                },
              },
              "postcss-loader",
              "less-loader",
            ],
            exclude: /node_modules/,
          },
          {
            test: /\.(js|jsx)$/,
            loader: "babel-loader",

            exclude: /node_modules/,
          },
        ],
      },
    ],
  },
};
