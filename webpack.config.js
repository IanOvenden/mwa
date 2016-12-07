'use strict';

const webpack = require("webpack");

module.exports = {
  context: __dirname + "/src",
  entry: {
    app: "./scripts/app.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/dist/assets",
    publicPath: "/assets"
  },
  devServer: {
    contentBase: __dirname + "/src"
  },
};