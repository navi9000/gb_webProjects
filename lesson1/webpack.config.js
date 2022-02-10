const HtmlPlugin = require('html-webpack-plugin')
const {resolve} = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    entry: './js/main.js',
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.mp3$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlPlugin({template: resolve(__dirname, 'index.html')}),
        new BundleAnalyzerPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}