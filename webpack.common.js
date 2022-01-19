const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    pageList: "./src/page-list.js",
    pageResult: "./src/page-result.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      /* style and css loader */
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      /* babel loader */
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                { plugins: ["@babel/plugin-proposal-class-properties"] }
              ]
            }
          }
        ]
      },
      // url loader
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
            name: "[name].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/pageList.html",
      filename: "pageList.html",
      chunks: ["pageList"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/pageResult.html",
      filename: "pageResult.html",
      chunks: ["pageResult"]
    })
  ]
};
