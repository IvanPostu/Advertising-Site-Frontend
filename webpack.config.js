const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssNameOptimizer = require('./css-name-optimizer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')

const cssNameOptimizer = new CssNameOptimizer()

module.exports = (env, options) => {
    const isDev = options.mode === 'development'
    console.log("isDev = ", isDev)
    console.log()

    return {
        entry: isDev ? [
            'react-dev-utils/webpackHotDevClient',
            './src/main/index.js'
        ] : ['./src/main/index.js'],
        output: {
            path: path.join(__dirname, './build'),
            filename: isDev ? '[name].dev.js' : '[name].[contenthash].js'
        },
        devtool: isDev ? 'inline-source-map' : '',
        devServer: isDev ? {
            contentBase: "/build/client",
            overlay: true,
            // host: '192.168.1.5',
        } : {},
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.(scss|sass|css)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    mode: 'local',
                                    ...(isDev ?
                                        {
                                            localIdentName: '[path]_[name]_[local]',
                                        } :
                                        {
                                            getLocalIdent: (context, localIdentName, localName) => {
                                                const inputStr = context.resourcePath + "_" + localName
                                                return cssNameOptimizer.optimizeOneStr(inputStr)
                                            },
                                        }
                                    )
                                }
                            }
                        },
                        {
                            loader: 'sass-loader'
                        },
                    ]
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/main/index.html',
                filename: 'index.html',
                favicon: './favicon.ico'
            }),

            ...(isDev ? [] : [
                new OptimizeCssAssetsPlugin({}),
                new MiniCssExtractPlugin({
                    filename: isDev ? '[name].css' : '[name].[hash].css',
                    chunkFilename: isDev ? '[id].css' : '[id].[hash].css',
                }),
                new CleanWebpackPlugin(),
                new webpack.HashedModuleIdsPlugin(),
            ]),
        ],
        optimization: isDev ? {} : {
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }

        }


    }

}