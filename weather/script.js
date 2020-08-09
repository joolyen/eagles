var lat;
var lon;

var weatherQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=London&APPID=bd613cfad0bef6db63ac6849f52f7a0e";
var UVQueryURL = "https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=bd613cfad0bef6db63ac6849f52f7a0e";

$.ajax({
    url: weatherQueryURL,
    method: "GET"
  }).then(function(data){
      console.log(data);
      lat = data.coord.lat
      lon = data.coord.lon
      console.log(lat + ", " + lon)
});


$.ajax({
    url: UVQueryURL,
    method: "GET"
  }).then(function(data){
      console.log(data);
});
