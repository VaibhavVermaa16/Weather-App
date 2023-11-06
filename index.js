const api="28f04955531a966b1b575e9cbfee84ae";
const url="https://api.openweathermap.org/data/2.5/weather?unit=metric";
const weather_i = document.querySelector(".weather_img")

async function weather(){
    var city= document.getElementById("input_city").value;
    const response = await fetch(url + `&appid=${api}` + `&q=${city}`);
    var data = await response.json();
    console.log(data);

    document.getElementById("city").innerHTML=data.name;
    document.getElementById("temperature").innerHTML= Math.round(data.main.temp) + "F";
    document.getElementById("humidity").innerHTML=data.main.humidity + "%";
    document.getElementById("wind_speed").innerHTML=data.wind.speed + "KM/Hr";

    if (data.weather[0].main == "Drizzle") {
        weather_i.src="images/drizzle.png";
        document.getElementById("w_condition").innerHTML="Drizzle";
    }
    else if (data.weather[0].main == "Clear") {
        weather_i.src="images/clear.png";
        document.getElementById("w_condition").innerHTML="Clear";
    }
    else if (data.weather[0].main == "Rain") {
        weather_i.src="images/rain.png";
        document.getElementById("w_condition").innerHTML="Rain";
    }
    else if (data.weather[0].main == "Mist") {
        weather_i.src="images/mist.png";
        document.getElementById("w_condition").innerHTML="Mist";
    }
    else if (data.weather[0].main == "Clouds") {
        weather_i.src="images/clouds.png";
        document.getElementById("w_condition").innerHTML="Clouds";
    }
    else if (data.weather[0].main == "Snow") {
        weather_i.src="images/snow.png";
        document.getElementById("w_condition").innerHTML="Snow";
    }

    document.querySelector("#content").style.display="block";
    
}

