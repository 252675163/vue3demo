const webpack = require('webpack')
const webpackconfig = require('../webpack.config.js')
const compiler = webpack(webpackconfig)
compiler.run()