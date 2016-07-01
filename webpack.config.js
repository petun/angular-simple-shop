var webpack = require('webpack');
var path = require('path');
module.exports = {
    context: path.join(__dirname, "app"),
    entry: {
        app: './app.js',
    },
    output: {
        path: path.join(__dirname, "app"),
        filename: 'app.bundle.js'
    },
};