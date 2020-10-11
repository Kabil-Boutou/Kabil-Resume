require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

if (process.env.NODE_ENV === 'production') {
  const withCss = require('@zeit/next-css')
  const withSass = require('@zeit/next-sass')
  const withPurgeCss = require('next-purgecss')

  module.exports = withCss(
    withSass(
      withPurgeCss({
        purgeCss: {
          whitelistPatterns: () => ['/aws*/', 'foldRight', 'foldLeft', 'button'],
        },
      })
    )
  )
}
