const WebpackCleanupPlugin = require( 'webpack-cleanup-plugin' );
const webpackMerge = require( 'webpack-merge' );
const baseConfig = require( './webpack.base.config' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = function() {
	return webpackMerge( baseConfig(), {
		devtool: 'none',
		output: {
			filename: '[name].[hash].bundle.js'
		},
		plugins: [
			new ExtractTextPlugin( '[name].[hash].bundle.css' ),
			new WebpackCleanupPlugin(),
			new HtmlWebpackPlugin({
				filename: '../../dist/index.html',
				template: './_assets/templates/index.template',
				inject: 'body'
			})
		]
	});
};
