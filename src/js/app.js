require('bootstrap')

import "core-js/stable"
import "regenerator-runtime/runtime"

import $ from 'jquery'

import archiveCarousel from './components/archive_carousel.js'
import topGetnote from './components/top_getnote.js'
import parentActive from './components/parent_active.js'

$(() => {
  archiveCarousel()
  topGetnote()
  parentActive()
})