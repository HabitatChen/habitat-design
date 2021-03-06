const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // mode: 'production',
    entry: {
        ckui: './lib/index.tsx'
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', 'jsx' ]
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
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            },
            {
                test: /\.s([ac])ss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)/,
                use: ['file-loader']
            }
        ]

    },
  //  externals: {
  //      react: {
  //          commonjs: 'react',
  //          commonjs2: 'react',
  //          amd: 'react',
  //          root: React
  //      },
  //      'react-dom': {
  //          commonjs: 'react-dom',
  //          commonjs2: 'react-dom',
  //          amd: 'react-dom',
  //          root: 'ReactDOM'
  //      }
  //  },
  //  plugins: [
  //      new HtmlWebpackPlugin({
  //          title: "CKUI",
  //          template: "example.html"
  //      })
  //  ]
}