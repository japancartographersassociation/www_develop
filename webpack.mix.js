const mix = require('laravel-mix')
const glob = require('glob')
require('laravel-mix-ejs')


mix
  .webpackConfig({
    module: {
      rules: [{
        test: /\.scss/,
        enforce: "pre",
        loader: 'import-glob-loader'
      }]
    },
    devtool: "inline-source-map",
  })
  .js('src/js/app.js', 'docs/assets/js')
  .extract()
  .sass('src/sass/app.scss', 'docs/assets/css')
    .options({
      processCssUrls: false
    })
  .sourceMaps(false, 'inline-source-map')
  .browserSync(
    {
      server: {
        baseDir: 'docs',
        index: 'index.html'
      },
      port: 8080,
      proxy: false,
      // Watch files
      files: 'docs/**/*',
    }
  )