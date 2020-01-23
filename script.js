$(document).ready(function(){

    var cityList = [];

    var currentDate = new Date();

    var month = currentDate.getMonth() + 1;

    var day = currentDate.getDate();

    var year = currentDate.getFullYear();

    var formattedDate = month + "/" + day + "/" + year;

    console.log(formattedDate);

    rememberTag();

    function rememberTag() {

        var startButton = localStorage.getItem("City");

        newButton = $("<button>").text(startButton);

        newButton.attr("data-name", startButton);

        newButton.addClass("search");

        newButton.on("click", function(){

            var cityPlace = $(this).attr("data-name");

            var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityPlace + "&apikey=a1c5e53a2860792d2e8a9ef977e2d3ed";

            $.ajax({

                url: queryUrl,

                method: "GET"

            }).then(function(response){

                $(".picOne").empty();

                $(".picTwo").empty();

                $(".picThree").empty();

                $(".picFour").empty();

                $(".picFive").empty();

                console.log(response);

                var name = response.name;

                var temp = ((response.main.temp *(9/5))-459.67).toFixed(2);

                var humidity = response.main.humidity;

                var wind = response.wind.speed;

                var lon = response.coord.lon;

                var lat = response.coord.lat;

                var iconCode = response.weather[0].icon;

                var iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png";

                var iconforcast1 = $("<img>").attr("src",iconUrl);

                var icon =$("<img>").attr("src",iconUrl);

                icon.attr("alt","Icon");

                var queryUV = "https://api.openweathermap.org/data/2.5/uvi?appid=a1c5e53a2860792d2e8a9ef977e2d3ed&lat=" + lat + "&lon=" + lon;

                $(".cityName").text(name + " " + formattedDate);

                $(".cityName").append(icon);

                $(".picOne").append(iconforcast1);

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

                    $(".uv").text("UV Index: ");

                   var insert =  $("<div>")

                    insert.text

                    var queryForcast = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityPlace + "&apikey=a1c5e53a2860792d2e8a9ef977e2d3ed";

                    $.ajax({

                        url : queryForcast,

                        method: "GET"

                    }).then(function(response){

                        console.log(response);

                        var icon2 = response.list[7].weather[0].icon;

                        var icon3 =response.list[14].weather[0].icon;

                        var icon4 = response.list[21].weather[0].icon;

                        var icon5 = response.list[28].weather[0].icon;

                        var temp2 = ((response.list[7].main.temp *(9/5))-459.67).toFixed(2);

                        var humid2 = response.list[7].main.humidity;

                        var temp3 = ((response.list[14].main.temp *(9/5))-459.67).toFixed(2);

                        var humid3 = response.list[14].main.humidity;
                        
                        var temp4 = ((response.list[21].main.temp *(9/5))-459.67).toFixed(2);

                        var humid4 = response.list[21].main.humidity;

                        var temp5 = ((response.list[28].main.temp *(9/5))-459.67).toFixed(2);

                        var humid5 = response.list[28].main.humidity;

                        var iconUrl2 = "https://openweathermap.org/img/w/" + icon2 + ".png";

                        var iconUrl3 = "https://openweathermap.org/img/w/" + icon3 + ".png";

                        var iconUrl4 = "https://openweathermap.org/img/w/" + icon4 + ".png";

                        var iconUrl5 = "https://openweathermap.org/img/w/" + icon5 + ".png";

                        var iconForcast2 = $("<img>").attr("src", iconUrl2);

                        var iconForcast3 = $("<img>").attr("src", iconUrl3);

                        var iconForcast4 = $("<img>").attr("src", iconUrl4);

                        var iconForcast5 = $("<img>").attr("src", iconUrl5);

                        iconForcast2.attr("alt","icon");

                        iconForcast3.attr("alt","icon");

                        iconForcast4.attr("alt","icon");

                        iconForcast5.attr("alt","icon");

                        $(".picTwo").append(iconForcast2);

                        $(".picThree").append(iconForcast3);

                        $(".picFour").append(iconForcast4);

                        $(".picFive").append(iconForcast5);

                        $(".temperTwo").text(temp2 + String.fromCharCode(176) + "F");

                        $(".humidityTwo").text(humid2 + "%");

                        $(".temperThree").text(temp3 + String.fromCharCode(176) + "F");

                        $(".humidityThree").text(humid3 + "%");

                        $(".temperFour").text(temp4 + String.fromCharCode(176) + "F");

                        $(".humidityFour").text(humid4 + "%");

                        $(".temperFive").text(temp5 + String.fromCharCode(176) + "F");

                        $(".humidityFive").text(humid5 + "%");
                    })
                })
            })

        })

        $("#citys").append(newButton);



    }

    function renderTags(){

        $("#citys").empty();

        for (i=0;i<cityList.length;i++){

            var tag = $("<button>").text(cityList[i]);

            localStorage.setItem("City", cityList[i]);

            tag.attr("data-name",cityList[i]);

            tag.addClass("search");

            $("#citys").prepend(tag);

            tag.on("click", function(){

                var cityPlace = $(this).attr("data-name");

                var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityPlace + "&apikey=a1c5e53a2860792d2e8a9ef977e2d3ed";

                $.ajax({

                    url: queryUrl,

                    method: "GET"

                }).then(function(response){

                    $(".picOne").empty();

                    $(".picTwo").empty();

                    $(".picThree").empty();

                    $(".picFour").empty();

                    $(".picFive").empty();

                    console.log(response);

                    var name = response.name;

                    var temp = ((response.main.temp *(9/5))-459.67).toFixed(2);

                    var humidity = response.main.humidity;

                    var wind = response.wind.speed;

                    var lon = response.coord.lon;

                    var lat = response.coord.lat;

                    var iconCode = response.weather[0].icon;

                    var iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png";

                    var iconforcast1 = $("<img>").attr("src",iconUrl);

                    var icon =$("<img>").attr("src",iconUrl);

                    icon.attr("alt","Icon");

                    var queryUV = "https://api.openweathermap.org/data/2.5/uvi?appid=a1c5e53a2860792d2e8a9ef977e2d3ed&lat=" + lat + "&lon=" + lon;

                    $(".cityName").text(name + " " + formattedDate);

                    $(".cityName").append(icon);

                    $(".picOne").append(iconforcast1);

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

                        $(".uv").addClass("red");

                        var queryForcast = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityPlace + "&apikey=a1c5e53a2860792d2e8a9ef977e2d3ed";

                        $.ajax({

                            url : queryForcast,

                            method: "GET"

                        }).then(function(response){

                            console.log(response);

                            var icon2 = response.list[7].weather[0].icon;

                            var icon3 =response.list[14].weather[0].icon;

                            var icon4 = response.list[21].weather[0].icon;

                            var icon5 = response.list[28].weather[0].icon;

                            var temp2 = ((response.list[7].main.temp *(9/5))-459.67).toFixed(2);

                            var humid2 = response.list[7].main.humidity;

                            var temp3 = ((response.list[14].main.temp *(9/5))-459.67).toFixed(2);

                            var humid3 = response.list[14].main.humidity;
                            
                            var temp4 = ((response.list[21].main.temp *(9/5))-459.67).toFixed(2);

                            var humid4 = response.list[21].main.humidity;

                            var temp5 = ((response.list[28].main.temp *(9/5))-459.67).toFixed(2);

                            var humid5 = response.list[28].main.humidity;

                            var iconUrl2 = "https://openweathermap.org/img/w/" + icon2 + ".png";

                            var iconUrl3 = "https://openweathermap.org/img/w/" + icon3 + ".png";

                            var iconUrl4 = "https://openweathermap.org/img/w/" + icon4 + ".png";

                            var iconUrl5 = "https://openweathermap.org/img/w/" + icon5 + ".png";

                            var iconForcast2 = $("<img>").attr("src", iconUrl2);

                            var iconForcast3 = $("<img>").attr("src", iconUrl3);

                            var iconForcast4 = $("<img>").attr("src", iconUrl4);

                            var iconForcast5 = $("<img>").attr("src", iconUrl5);

                            iconForcast2.attr("alt","icon");

                            iconForcast3.attr("alt","icon");

                            iconForcast4.attr("alt","icon");

                            iconForcast5.attr("alt","icon");

                            $(".picTwo").append(iconForcast2);

                            $(".picThree").append(iconForcast3);

                            $(".picFour").append(iconForcast4);

                            $(".picFive").append(iconForcast5);

                            $(".temperTwo").text(temp2 + String.fromCharCode(176) + "F");

                            $(".humidityTwo").text(humid2 + "%");

                            $(".temperThree").text(temp3 + String.fromCharCode(176) + "F");

                            $(".humidityThree").text(humid3 + "%");

                            $(".temperFour").text(temp4 + String.fromCharCode(176) + "F");

                            $(".humidityFour").text(humid4 + "%");

                            $(".temperFive").text(temp5 + String.fromCharCode(176) + "F");

                            $(".humidityFive").text(humid5 + "%");
                        })
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
