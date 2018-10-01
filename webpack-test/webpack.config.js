module.exports = {
    entry: {
        main: './js/main.js'
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
        ]
    }
}