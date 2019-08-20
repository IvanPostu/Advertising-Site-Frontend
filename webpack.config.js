const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssNameOptimizer = require('./css-name-optimizer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const cssNameOptimizer = new CssNameOptimizer()

module.exports = (env, options) => {
    const isDev = options.mode === 'development'
    console.log("isDev = ", isDev)
    console.log()

    return {
        entry: './src/main/index.js',
        output: {
            path: path.join(__dirname, './build'),
            filename: 'index_bundle.js'
        },
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
                                                // const a = CssClassNameOptimizer1.optimizeOneStr(localName)
                                                // const b = CssClassNameOptimizer2.optimizeOneStr(context.resourcePath)
                                                // const separator = Math.floor(Math.random() * 10).toString();
                                                // return a + separator + b;
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
                // {
                //     test: /\.css$/,
                //     use: [
                //         "style-loader",
                //         {
                //             loader: "css-loader",
                //             options: {
                //                 modules: true
                //             }
                //         }
                //     ]
                // },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/main/index.html',
                filename: 'index.html',
            }),
            new MiniCssExtractPlugin({
                filename: isDev ? '[name].css' : '[name].[hash].css',
                chunkFilename: isDev ? '[id].css' : '[id].[hash].css',
            }),
        ],
        // optimization: {
        //     splitChunks: {
        //         cacheGroups: {
        //             commons: {
        //                 test: /[\\/]node_modules[\\/]/,
        //                 name: 'vendors',
        //                 chunks: 'all'
        //             }
        //         }
        //     }

        // }


    }

}