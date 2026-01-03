const path = require("path");
const { webpack, Template } = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin")
module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins:[
    new HtmlWebPackPlugin({
      template : "./src/index.html"
    }
    )
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    static: "./dist",
    port: 8080
  }
};
