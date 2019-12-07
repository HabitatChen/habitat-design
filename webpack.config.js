const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        ckui: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'ckui',
        libraryTarget: "umd"

    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]

    }
}