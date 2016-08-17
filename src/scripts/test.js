  // var Showtimes = require('showtimes');
function getTheDatas (zip, movieInput){

  var api = new showtimes(zip, {});

  api.getMovies(function(err, movie){
    if (err) {
      throw err
    }
    movie.forEach(function(singleMov){
      if(userMovie == singleMov.name){
        console.log(singleMov.theaters[0].name);
      }
    })
  })
}

var output = getTheDatas(80241, 'Suicide Squad')
