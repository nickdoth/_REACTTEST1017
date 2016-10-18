module.exports = {
    entry: ['./src/app.js'],
    output: {
        path: '/built',
        filename: 'client.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
    
}