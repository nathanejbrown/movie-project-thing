var userMovie;
var userZip;

$(document).ready(function(){
  $('#movie-input').submit(function(e){
    e.preventDefault()
    userMovie = $('nathens movie id').val()
    userZip = $('nathens zip id').val()
    getTheDatas(userMovie, userZip).then(function(data){
      console.log(data);
    })
  })

})
