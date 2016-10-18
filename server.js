var express = require('express');
var expressBrowserify = require('express-browserify');
var webpack = require('webpack');
var wpConfig = require('./webpack.config');

module.exports = function runApp() {
    // wpConfig.plugins = [
    //     new webpack.optimize.OccurrenceOrderPlugin(), 
    //     new webpack.HotModuleReplacementPlugin(),
    //     new webpack.NoErrorsPlugin()
    // ].concat(wpConfig.plugins);

    // wpConfig.entry.unshift('webpack-hot-middleware/client');

    var complier = webpack(wpConfig);


    var app = express.Router();

    // app.get('/', (req, res) => res.sendFile(__dirname + '/static/index.html'));
    // app.use('/client.js', expressBrowserify(__dirname + '/cli/index.js', 
    //     Object.assign({ watch: true }, require('./package.json').browserify)));

    app.use(require('webpack-dev-middleware')(complier, {
        noInfo: false, 
    }));

    app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

    // app.use(require('webpack-hot-middleware')(compiler));

    return app;
}