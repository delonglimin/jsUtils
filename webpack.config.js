var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const entry = process.env.NODE_ENV == 'production' ? './src/index.js':'./src/test.js'
module.exports = { 
    entry: entry, 
    output: { 
        path: path.resolve(__dirname,"dist"), 
        filename: 'bundle.js', 
    }, 
    module: { 
        loaders: [{ 
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: 'babel-loader',
            query:{
                presets:["env"]
            } 
        }] 
    },
    plugins: [
        new HtmlWebpackPlugin()
      ],
    devServer:{
        contentBase: path.join(__dirname, "dist")
    }
} 