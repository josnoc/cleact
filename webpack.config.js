const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./sandbox.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/"
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [{ loader: "ts-loader" }]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{ loader: "source-map-loader" }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require("html-webpack-template"),
      appMountId: "root",
      title: "Cleact small react clone"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    headers: {
      "Cached-Control": "no-cache"
    },
    historyApiFallback: true,
    compress: true,
    port: 8080
  }
};
