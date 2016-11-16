const path = require('path')
const webpack = require('webpack')

// --------------------------------------------------------------------

const env = process.env.NODE_ENV || 'development'
const TARGET = process.env.npm_lifecycle_event

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  config: path.resolve(__dirname, 'config'),
  dist: path.resolve(__dirname, 'dist')
}

// ------------------------------------------------------------

module.exports = {
  context:          PATHS.src,
  
  cache:            true,
  debug:            true,
  devtool:          'inline-source-map',

  entry: {
    main:           './index.ts'
  },

  output: {
    path:           PATHS.dist,
    filename:       '[name].js'
  },

  resolve: {
    root:           __dirname,
    extensions:     [ '', '.js', '.json', '.ts' ]
  },
  
  resolveLoader: {
    modulesDirectories: [ 'node_modules' ]
  },


  module: {
    loaders: [
      {
        test: /\.ts$/,
        include: PATHS.src,
        loader: 'ts'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'NODE_ENV':  JSON.stringify(env)
    }),
    //new ConfigPlugin({
    //  dir: PATHS.config,
    //  environment: env
    //})
  ]
}
