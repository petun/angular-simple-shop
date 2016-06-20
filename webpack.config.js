var webpack = require('webpack');
module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js',
    },
    output: {
        path: __dirname + '/app',
        filename: 'app.bundle.js'
    },
};