import $ from 'jquery'
import CheckExecClass from './check_exec_class.js'

export default () => {
  if(!CheckExecClass('[data-parent-active]')) return false

  $('[data-parent-active] a').on('mouseenter', (e) => {
    $(e.target).parents('[data-parent-active]').addClass('active')
  })
  $('[data-parent-active] a').on('mouseleave', (e) => {
    $(e.target).parents('[data-parent-active]').removeClass('active')
  })

}