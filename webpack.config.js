const path = require('path');

// use to expose obj to another file
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
    }

};