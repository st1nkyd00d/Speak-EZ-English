const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports ={
    entry: './src/index.js',
    output:{
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module:{
        rules:[
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },

            {
                test: /\.(png|jpg|gif|svg)$/, 
                type: 'asset/resource', 
                generator: {
                filename: 'images/[name][ext]', // nombre del archivo generado
                }
            },

            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader', 
                options: {
                    presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'planes.html',
            template: './src/planes.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'contacto.html',
            template: './src/contacto.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'aboutUs.html',
            template: './src/aboutUs.html',
        }),
        new MiniCssExtractPlugin(),
    ],

    devServer: {
        open: true,
    },
}