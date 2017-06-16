var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    target: 'web',
    context: path.resolve('app'),
    entry: { 'app': [ '../app/index.js' ] },
    output: {
        path: path.resolve('build'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].[chunkhash].js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: [ '.js' ],
        modules: [ path.resolve('node_modules') ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            chunksSortMode: 'dependency'
        })
    ]
};