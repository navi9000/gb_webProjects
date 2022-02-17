const HtmlPlugin = require('html-webpack-plugin')
const MiniExtractPlugin = require('mini-css-extract-plugin')
const {resolve} = require('path')

module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.(mp3|mp4)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.(jpe?g|gif)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true,
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: [MiniExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlPlugin({template: resolve(__dirname, 'src', 'index.html')}),
        new MiniExtractPlugin({filename: 'css/style.css'})
    ]
}