const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/modules/testModule.js',
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
      },
    output: {
        filename: 'ModuleImport.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react'],
              },
            },
          },
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
              },
            },
          },
        ],
      },
      devtool: 'source-map',
}