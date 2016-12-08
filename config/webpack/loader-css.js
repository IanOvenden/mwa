var extractor 	= require ( 'extract-text-webpack-plugin' );

module.exports 	= {
    test: /\.css$/,
    loader: extractor.extract({
        loader: 'css-loader?importLoaders=1!postcss-loader'
    }),
}