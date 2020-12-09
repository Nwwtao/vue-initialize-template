
const path = require('path');

// 引入Vue-loader 插件
const VueloaderPlugin = require('vue-loader/lib/plugin');

// 引入html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    // 打包入口
    entry: './src/main.js',
    devServer: {
        contentBase: './dist',
        open: true
    },
    // 打包出口
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    // 打包规则
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {

                        }
                    },
                    {
                        loader: 'iview-loader',
                        options: {
                            prefix: false
                        }
                    }
                ]
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    limit: 2048
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.styl(us)?$/,
                use: ['vue-style-loader', 'css-loader', 'stylus-loader']
            },
            {
                test: /\.less$/,
                use: ['vue-style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(js|jsx|vue)$/,
                enforce: "pre",
                loader: "eslint-loader",
                include: [path.resolve(__dirname, 'src')]// 指定检查的目录
            }
        ]
    },
    // 插件
    plugins: [
        new VueloaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve('./src'),
            'vue': 'vue/dist/vue.js'
        }
    }
}
