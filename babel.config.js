const transformJsx = require('./build/transform-jsx-vue3/index')
module.exports = {
    "presets": [
        [
            "@babel/preset-env"
            // {
            //     "useBuiltIns": "usage",
            //     "corejs": 3,
            //     "targets": {
            //         "chrome": "58",
            //         "ie": "10"
            //     }
            // }
        ]
    ],
    "plugins": [
        "@babel/plugin-transform-runtime",
        transformJsx
    ]
}