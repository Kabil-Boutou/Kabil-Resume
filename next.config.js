const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withPurgeCss = require('next-purgecss')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = withCss(withSass(withPurgeCss()))
