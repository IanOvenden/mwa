'use strict';

const webpack = require( 'webpack' );
const path = require( 'path' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const StyleLintPlugin = require( 'stylelint-webpack-plugin' );

var loaders = {
	css: require( './config/webpack/loader-css' ),
	js: require( './config/webpack/loader-js' )
};

module.exports = {
	context: path.resolve( __dirname, 'src' ),
	entry: {
		app: './app.jsx'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve( __dirname, 'build/dist/assets' ),
		publicPath: '/assets'
	},
	devtool: 'source-map',
	devServer: {
		contentBase: path.join( __dirname, 'build' ),
		inline: true
	},
	module: {
		rules: [
			loaders.js,
			loaders.css
		]
	},
	plugins: [
		new ExtractTextPlugin( '[name].bundle.css' ),
		new StyleLintPlugin({
			files: '**/*.css'
		})
	]
};
