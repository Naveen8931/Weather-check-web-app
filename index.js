const apiKey="1a8a29ff608869bedb7c9a857ab1e69c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
var wethIcon=document.querySelector(".weth-icon");

async function checkWeather(city){
    const resp=await fetch(apiUrl+ city + `&appid=${apiKey}`);

    if(resp.status==404){
        document.querySelector(".false").style.display="block";
        document.querySelector(".whether").style.display="none"
    }
    else{
        var data=await resp.json();
        console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML=data.wind.speed+ "km/h";

    if(data.weather[0].main=="Clouds"){
        wethIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        wethIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        wethIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        wethIcon.src="images/drizzle.png";
        }
    else if(data.weather[0].main=="Mist"){
        wethIcon.src="images/mist.png";
    }
    else if(data.weather[0].main=="Snow"){
        wethIcon.src="images/snow.png";
    }

    document.querySelector(".whether").style.display= "block";
    document.querySelector(".false").style.display="none";
   }
}

searchBtn.addEventListener("click",()=>{ // arrow function used
     checkWeather(searchBox.value);
})

