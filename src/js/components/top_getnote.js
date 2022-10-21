import $ from 'jquery'
import axios from 'axios'
import CheckExecClass from './check_exec_class.js'

export default () => {
  if(!CheckExecClass('.page--top')) return false

  let note_list = []
  let append_html = ''

  axios.get('https://jcacj-api.testupsite.com/api/note/contents.json')
    .then((res) => {
      note_list = (res.data.data.contents) ? res.data.data.contents : []
    }).finally(() => {
      append_html += '<div class="topics-list">'
      note_list.forEach((v,i) => {
        if(i < 3){
          //console.log(v)
          append_html += '<a href="https://note.com/jcacj/n/' + v.key + '" class="topics" target="_blank">'
          append_html += '<div class="t-img"><img src="' + v.eyecatch + '" alt="" class="w-100"></div>'
          append_html += '<div class="t-val">'
          append_html += '<p class="name">' + v.name + '</p>'
          append_html += '</div>'
          append_html += '</a>'
        }
      })
      append_html += '</div>'
      $('#top-note-list').append(append_html)
    })
}