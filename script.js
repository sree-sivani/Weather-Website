const apiid = "4889a928164985ed9256eff19c19832a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.querySelector('.weather-icon');
const searchBox = document.querySelector(".search-bar");
const searchBtn = document.querySelector('.search-btn');

async function checkWeather (city){
    const response = await fetch(apiUrl + city + `&appid=${apiid}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".vals").style.display = "none";
        alert("Enter a Valid City Name");
    }
    
    else{
    var data = await response.json();
    document.querySelector('.city-name').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + " %";
    document.querySelector('.windspeed').innerHTML = data.wind.speed + " km/h";


    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
        else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "images/clear.png";
    }
        else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "images/rain.png";
    }
        else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".vals").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

function handleKeyDown(event){
    if(event.key === 'Enter' || event.key === 'Enter + Shift'){
        checkWeather(searchBox.value);
    }
}
