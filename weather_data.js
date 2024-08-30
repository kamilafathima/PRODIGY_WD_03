
const description=document.querySelector(".city");
const weather_icon=document.querySelector(".weather_icon");
const temp=document.querySelector(".temperature");
const humidity1=document.getElementById("humidity1");
const wind1=document.getElementById("windspeed1");
const input=document.getElementById("input");
const searchbtn=document.querySelector(".searchbtn");
const humidity=document.querySelector(".humidity");
const wind=document.querySelector(".windspeed");

async function weatherdata(city) {
    

const APIKEY="b1533df1df89a22d5bb713bfa2828478";
const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;
const weather=await fetch(`${URL}`).then(response => response.json());
console.log(weather);
temp.innerHTML=`${Math.round(weather.main.temp-273.15)}°C`;
description.innerHTML=`${weather.weather[0].main}`;
wind1.innerHTML=`${weather.wind.speed}Km/Hr`;
humidity1.innerHTML=`${weather.main.humidity}%`;
if(weather.weather[0].main=="Clouds")
    {
    weather_icon.src="images_weather/cloudy.png";
}
else if(weather.weather[0].main=="Mist")
    {
    weather_icon.src="images_weather/mist.png";
}
else if(weather.weather[0].main=="Snow")
    {
    weather_icon.src="images_weather/snowy.png";
}
else if(weather.weather[0].main=="Drizzle")
    {
    weather_icon.src="images_weather/drizzle.png";
}
else if(weather.weather[0].main=="Clear")
    {
    weather_icon.src="images_weather/sun.png";
}

}
searchbtn.addEventListener('click',()=>{
    weatherdata(input.value)
})

