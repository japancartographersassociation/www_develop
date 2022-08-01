import $ from 'jquery'
import slick from 'slick-carousel'
import CheckExecClass from './check_exec_class.js'

export default () => {
  if(!CheckExecClass('.page--top')) return false

  $('.top--archives .archive-list').slick({
    dots: true,
    centerMode: true,
    slidesToShow: 1,
    responsive:[
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
        }
      }
    ]
  })
}