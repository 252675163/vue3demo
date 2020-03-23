const transformJsx = require('./build/transform-jsx-vue3/index')
module.exports = {
    "presets": [
        [
            "@babel/preset-env"
        ]
    ],
    "plugins": [
        "@babel/plugin-transform-runtime",
        transformJsx
    ]
}