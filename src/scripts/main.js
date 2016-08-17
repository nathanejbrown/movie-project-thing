$(document).ready(function() {
  console.log('sanity check');
  getTheDatas(80241, 'Suicide Squad')
})

function initialize(x,y) {
  console.log(x + ' x - y ' + y);
  var mapProp = {
    center:new google.maps.LatLng(x,y),
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('googleMap'),mapProp);
}
google.maps.event.addDomListener(window, 'load');
