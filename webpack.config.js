const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: "main[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Todo App',
          filename: 'index.html',
          template: 'src/template.html',
        }),
      ],
}