function getTheDatas (zip, movieInput){
  var Showtimes = require('showtimes');
  var api = new Showtimes(zip, {});

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
