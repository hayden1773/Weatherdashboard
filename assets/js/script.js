
var geo = $('#geo');
var input = $('input');
var current = $(".current-weather");
var day1 = $(".day1")
var day2 = $(".day2")
var day3 = $(".day3")
var day4 = $(".day4")
var day5 = $(".day5")
var icon = $(".icon");
var iconOne = $(".iconOne")
var iconTwo = $(".iconTwo")
var iconThree = $(".iconThree")
var iconFour = $(".iconFour")
var iconFive = $(".iconFive")


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
            var latLong = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=d67baf8d305d039eb72cb7c450af0a11&units=imperial"
            fetch(latLong)
                .then(function (response) {
                    console.log(response.status);

                    return response.json();
                })
                .then(function (data) {
                    // Make sure to look at the response in the console and read how 404 response is structured.
                    console.log(data);
                    current.text(data.current.temp)
                    var iconUrl = "http://openweathermap.org/img/wn/" + data.current.weather[0].icon + ".png"
                    icon.attr("src", iconUrl)

                    day1.text(data.daily[0].temp.day)
                    var iconUrl1 = "http://openweathermap.org/img/wn/" + data.daily[0].weather[0].icon + ".png"
                    console.log(iconUrl1)
                    iconOne.attr("src", iconUrl1)

                    day2.text(data.daily[1].temp.day)
                    var iconUrl2 = "http://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + ".png"
                    console.log(iconUrl2)
                    iconTwo.attr("src", iconUrl2)

                    day3.text(data.daily[2].temp.day)
                    var iconUrl3 = "http://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + ".png"
                    console.log(iconUrl3)
                    iconThree.attr("src", iconUrl3)

                    day4.text(data.daily[3].temp.day)
                    var iconUrl4 = "http://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + ".png"
                    console.log(iconUrl4)
                    iconFour.attr("src", iconUrl4)

                    day5.text(data.daily[4].temp.day)
                    var iconUrl5 = "http://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + ".png"
                    console.log(iconUrl5)
                    iconFive.attr("src", iconUrl5)

                }
                );
            console.log(data);
        });
    console.log(userInput);
});