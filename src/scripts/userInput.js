$(document).ready(function(){
  $('#movie-input').submit(function(e){
    e.preventDefault()
    var userVal = $('#movie-input').val()
    console.log(userVal);
  })

})
