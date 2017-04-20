const webpackMerge = require( 'webpack-merge' );
const baseConfig = require( './webpack.base.config' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const path = require( 'path' );

module.exports = function() {
	return webpackMerge( baseConfig(), {
		output: {
			filename: '[name].bundle.js'
		},
		devtool: 'source-map',
		devServer: {
			contentBase: path.join( __dirname, '../../build' ),
			inline: true,
			historyApiFallback: true
		},
		plugins: [
			new ExtractTextPlugin( '[name].bundle.css' )
		]
	});
};
