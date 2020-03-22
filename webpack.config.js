const VueLoaderPlugin = require('vue-loader/dist/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    entry: './src/index.jsx',
    mode: "development",
    devtool: '#source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'vue'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            'JSXUTIL': path.join(process.cwd(),'../transform-jsx-vue3/mergeJSXProps.js'),
            // antdv:path.resolve(__filename,'../../work/ant-design-vue/')
        },
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
            },
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader']
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