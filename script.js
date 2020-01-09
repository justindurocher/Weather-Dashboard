$(document).ready(function(){

    var cityList = [];

    var currentDate = new Date();

    var month = currentDate.getMonth() + 1;

    var day = currentDate.getDay()+5;

    var year = currentDate.getFullYear();

    var formattedDate = month + "/" + day + "/" + year;

    function renderTags(){

        $("#citys").empty();

        for (i=0;i<cityList.length;i++){

            var tag = $("<button>").text(cityList[i]);

            tag.attr("data-name",cityList[i]);

            tag.addClass("search");

            $("#citys").prepend(tag);

            tag.on("click", function(){

                var cityPlace = $(this).attr("data-name");

                var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityPlace + "&apikey=a1c5e53a2860792d2e8a9ef977e2d3ed";

                $.ajax({

                    url: queryUrl,

                    method: "GET"

                }).then(function(response){

                    console.log(response);

                    var name = response.name;

                    var temp = ((response.main.temp *(9/5))-459.67).toFixed(2);

                    var humidity = response.main.humidity;

                    var wind = response.wind.speed;

                    var lon = response.coord.lon;

                    var lat = response.coord.lat;

                    var queryUV = "http://api.openweathermap.org/data/2.5/uvi?appid=a1c5e53a2860792d2e8a9ef977e2d3ed&lat=" + lat + "&lon=" + lon;

                    $(".cityName").text(name + " " + formattedDate);

                    $(".temp").text("Temperature: " + temp + String.fromCharCode(176) + "F");

                    $(".humid").text("Humidity: " + humidity + "%");

                    $(".wind").text("Wind Speed: " + wind + "mph");

                    $(".dateOne").text(formattedDate);

                    $(".dateTwo").text(month + "/" + (day+1) + "/" + year);

                    $(".dateThree").text(month + "/" + (day+2) + "/" + year);

                    $(".dateFour").text(month + "/" + (day+3) + "/" + year);

                    $(".dateFive").text(month + "/" + (day+4) + "/" + year);

                    $(".temperOne").text(temp + String.fromCharCode(176) + "F");

                    $(".humidityOne").text(humidity + " %");

                    $.ajax({

                        url : queryUV,
                        
                        method: "GET"

                    }).then(function(response){

                        console.log(response);

                        var uv = response.value

                        $(".uv").text("UV Index: " + uv);

                    })
                })

            })

        }

    }
    $("#searchButton").on("click", function(event){

        event.preventDefault();

        var city = $(".inputTown").val().trim();

        cityList.push(city);

        console.log(cityList);

        $(".inputTown").val(" ");

        renderTags();
    });



});