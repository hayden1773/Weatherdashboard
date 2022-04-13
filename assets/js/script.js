
var geo = $('#geo');
var input = $('input');


$("#geo").click(function () {
    var userInput = input.val()
    var geometric = "http://api.openweathermap.org/geo/1.0/direct?q=" + userInput + "&appid=d67baf8d305d039eb72cb7c450af0a11";
    fetch(geometric)
        .then(function (response) {
            console.log(response.status);
        
            return response.json();
        })
        .then(function (data) {
            // Make sure to look at the response in the console and read how 404 response is structured.
            var lat = data[0].lat
            var lon = data[0].lon
            var latLong = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=d67baf8d305d039eb72cb7c450af0a11"
            fetch(latLong)
                .then(function (response) {
                    console.log(response.status);
               
                    return response.json();
                })
                .then(function (data) {
                    // Make sure to look at the response in the console and read how 404 response is structured.
                    console.log(data);
                });
            console.log(data);
        });
    console.log(userInput);
});