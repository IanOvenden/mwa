var extractor 	= require ( 'extract-text-webpack-plugin' );

module.exports 	= {
    test: /\.css$/,
    loader: extractor.extract({ // switch to use when supported by the extract text webpack plugin
        loader: 'css-loader?importLoaders=1!postcss-loader'
    }),
}