var Showtimes = require('showtimes');
var api = new Showtimes(80241, {});


  api.getMovies(function(err, movie){
    if (err) {
      throw err
    }
    movie.forEach(function(singleMov){
      console.log(singleMov.name);
    })
  })
