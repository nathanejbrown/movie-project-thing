var userMovie;
var userZip;
var outputStuff = new Promise(function(resolve, reject) {})


$(document).ready(function(){
  $('#movie-input').submit(function(e){
    e.preventDefault()
    $('#googleMap').empty()
    userMovie = $('#title').val()
    userMovieArr =  userMovie.split(' ')
    var newArr = []
    userMovieArr.forEach(function(el){
      var rest = el.substr(1)
      el = el.charAt(0).toUpperCase()
      newArr.push(el + rest);
    })
    userMovie = newArr.join(' ')
    userZip = $('#zip').val()

    if(userMovie.length == 0){
      userMovie = null
      outputStuff = Promise.resolve()
    }else{
      outputStuff = Promise.resolve()
    }
    if(userZip.length === 0){
        $.ajax({
        method: 'GET',
        url: 'http://ipinfo.io/json'
        }).done(function (ip) {
          userZip = ip.postal
          outputStuff = Promise.resolve()
        })
    }else{
      outputStuff = Promise.resolve()
    }
    outputStuff.then(function(){
      return new Promise(function(resolve, reject) {

        getTheDatas(userZip, userMovie).then(function(data){
          console.log(data);
          if(!userMovie){
            $('#googleMap').append('Movies')
            $('#googleMap').append('<ul id="movies"> </ul>')
            data.forEach(function(movObj){
              $('#movies').append(`<li class="movClick">${movObj.name}</li>`)
            })
          }else{
            $('#googleMap').append(data[0].name)
            $('#googleMap').append('<br>Showtimes')
            $('#googleMap').append('<ol id="timesOn1"></ol>')
            data[0].showtimes.forEach(function(time){
              $('#timesOn1').append(`<li>${time}</li>`)
            })
            if(data.length >= 2){
              $('#googleMap').append(data[1].name)
              $('#googleMap').append('<br>Showtimes')
              $('#googleMap').append('<ol id="timesOn2"></ol>')
              data[1].showtimes.forEach(function(time){
                $('#timesOn2').append(`<li>${time}</li>`)
              })
            }
          }
          resolve(data)
        })
      });
    }).then(function(data){
      $('.movClick').click(function(){
        var theMovie = $(this).text()
        // console.log(data);
        data.forEach(function(mov){
          if(mov.name == theMovie){
            console.log(mov);
            $('#movieDets').empty()
            $('#movieDets').append(`<h1>${mov.name}`)
            $('#movieDets').append(`<p>Description: ${mov.description}`)
            $('#movieDets').append(`<p> Runtime: ${mov.runtime}`)
            $('#movieDets').append(`<br> ${mov.theaters[0].name}`)
            $('#movieDets').append('<br>Showtimes')
            $('#movieDets').append('<ol id="timesOn1"></ol>')
            mov.theaters[0].showtimes.forEach(function(time){
              $('#timesOn1').append(`<li>${time}</li>`)
            })
            if(mov.theaters.length >= 1) {
              $('#movieDets').append(`<br> ${mov.theaters[1].name}`)
              $('#movieDets').append('<br>Showtimes')
              $('#movieDets').append('<ol id="timesOn2"></ol>')
              mov.theaters[1].showtimes.forEach(function(time){
                $('#timesOn2').append(`<li>${time}</li>`)
              })
            }
          }
        })
      })
    })
  })
})
