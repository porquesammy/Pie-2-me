const path = require("node:path"); //commonJS imports
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const historyApiFallback = require("connect-history-api-fallback"); //single page apps
const { type } = require("node:os");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js", //helps to invalidate cached information when updated code has been supplied
    clean: true, //delete old copy of js
    assetModuleFilename: "[name][ext]", //keep asset names the same
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ['./src/template.html'],
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(avif|png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'images/', // Custom output directory
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Pie 2 Me", //template in title to template.html
      filename: path.resolve(__dirname, "dist/index.html"),
      template: path.resolve(__dirname, "src/template.html"),
    }),
  ],
};
