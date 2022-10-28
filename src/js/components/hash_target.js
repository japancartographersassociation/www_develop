import $ from 'jquery'
import CheckExecClass from './check_exec_class.js'

export default () => {
  if(!CheckExecClass('[data-hash-target]')) return false

  $(window).on('load', () => {
    if(location.hash){
      const offset_top = $('[data-hash-target="' + location.hash + '"]').offset().top - $('#header').innerHeight()
      $('body, html').animate({scrollTop:offset_top}, 300)
    }
  })
}