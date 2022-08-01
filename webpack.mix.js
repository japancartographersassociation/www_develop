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



glob.sync(
  'src/ejs/**/*.ejs',
  {ignore: 'src/ejs/**/_*.ejs'}
).map((file) => {
  const index = file.indexOf('/ejs')
  const dir = file.slice(index + 1)
  const path = dir.split("/").reverse().slice(1).reverse().slice(1).join("/")
  mix.ejs(file, 'docs/' + path)
})