import $ from 'jquery'

//起動クラスの有無をbooleanでリターン
export default (classname) => {
  return ($(classname).length > 0)?true:false
}