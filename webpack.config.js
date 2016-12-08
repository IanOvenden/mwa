'use strict';

const webpack = require( 'webpack' );
const path = require( 'path' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: "./scripts/app.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist/assets'),
        publicPath: "/assets"
    },
    devServer: {
        contentBase: __dirname + "/src"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    options: { presets: ["es2015"] }
                }],
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader?importLoaders=1!postcss-loader'
                }),
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin('[name].bundle.css'),
    ]
};