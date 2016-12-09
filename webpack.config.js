'use strict';

const webpack = require( 'webpack' );
const path = require( 'path' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

var loaders = {
		css: require( './config/webpack/loader-css' ),
        js: require( './config/webpack/loader-js' )
	}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './app.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/assets'),
        publicPath: '/assets'
    },
    devServer: {
        contentBase: path.resolve(__dirname, '/src')
    },
    module: {
        rules: [
            loaders.js,
            loaders.css
        ],
    },
    plugins: [
        new ExtractTextPlugin('[name].bundle.css'),
    ]
};