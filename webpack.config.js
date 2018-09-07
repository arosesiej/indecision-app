const path = require('path');

// use to expose obj to another file
// https://webpack.js.org/
module.exports = {
    // config details
    // where to start? - main file
    // loaded and executed by default
    entry: './src/app.js',
    output: {
        // absolute path to where we want to output this file
        // path to current location
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {

        // defines how we want to use our loader
        // run babel whenever it sees a JS file except the ones in
        // the node_modules
        rules: [
        
            {
                loader: 'babel-loader',
                // what files we want to load this on - js extension
                test: /\.js$/,
                // don't run babel on these libraries
                exclude: /node_modules/
            },

            {
                // look for any file ending w .scss
                test: /\.scss$/,
                // 'use' - an array of loaders
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
    
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }

};