const VueLoaderPlugin = require('vue-loader/dist/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    entry: './src/index.tsx',
    mode: "development",
    devtool: '#source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'vue']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: "vue-loader",
                }],

            },
            {
                test: /\.ts$|\.tsx$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsxSuffixTo: [/\.vue$/],
                            transpileOnly: true
                        }
                    }]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'vue-next-test',
            template: path.join(__dirname, '/public/index.html')
        })
    ],
    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true,
        stats: 'minimal',
        contentBase: path.join(__dirname, 'public'),
        overlay: true
    }
}