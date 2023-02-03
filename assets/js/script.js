


function searchCity(){
let cityInputEle = document.getElementById("cityInput").value;
let city = cityInputEle.toString();


let btn = document.createElement("button");
btn.innerHTML = city;
btn.class = "border-2 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-8 mt-4 mb-2 rounded"
sidebarContainer.appendChild(btn)
// btn.onclick

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16a1bbc216267d941f85d26c9ef22dab&units=metric`)
  .then(response => response.json())
  .then(data => {
  console.log(data);

  localStorage.setItem('City', data.name);
  localStorage.setItem('Temperature', data.main.temp);
  localStorage.setItem('Wind', data.wind.speed);
  localStorage.setItem('Humidity', data.main.humidity);
  

  let iconUrl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
  let image = document.getElementById("currentIcon");
  image.src = iconUrl;

  let cityName = localStorage.getItem('City');
  let temp = localStorage.getItem('Temperature');
  let wind = localStorage.getItem('Wind');
  let humidity = localStorage.getItem('Humidity');

  document.getElementById("cityName").textContent = cityName;
  document.getElementById("currentDay").textContent = dayjs(data.dt).format("MMMM D, YYYY");
  document.getElementById("currentTemp").textContent = temp + " °C" ;
  document.getElementById("currentWind").textContent = wind + " MPH";
  document.getElementById("currentHumidity").textContent = humidity + " %";
  
});

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=16a1bbc216267d941f85d26c9ef22dab&units=metric`)
  .then(response => response.json())
  .then(forecast => {
    console.log(forecast);
    console.log(forecast.list[6].main.dt_txt)
    console.log(forecast.list[6].weather[0].icon)
    console.log(forecast.list[6].main.temp)
    console.log(forecast.list[6].wind.speed)
    console.log(forecast.list[6].main.humidity)

//////1-Day Forecast

    localStorage.setItem('Day 1', dayjs(forecast.list[6].dt_txt).format("MMMM D, YYYY HH:mm"))
    localStorage.setItem('D1 Temp', forecast.list[6].main.temp)
    localStorage.setItem('D1 Wind', forecast.list[6].wind.speed)
    localStorage.setItem('D1 Humidity', forecast.list[6].main.humidity)

    let day1 = localStorage.getItem('Day 1');
    let temp1 = localStorage.getItem('D1 Temp');
    let wind1 = localStorage.getItem('D1 Wind');
    let humidity1 = localStorage.getItem('D1 Humidity');

    let iconUrl1 = "http://openweathermap.org/img/w/" + forecast.list[6].weather[0].icon + ".png"
    let img1 = document.getElementById("img1");
    img1.src = iconUrl1;

    document.getElementById("day1").textContent = day1;
    document.getElementById("firstDayTemp").textContent = temp1 + " °C" ;
    document.getElementById("firstDayWind").textContent = wind1 + " MPH";
    document.getElementById("firstDayHumidity").textContent = humidity1 + " %";

//////2-Day Forecast 

localStorage.setItem('Day 2', dayjs(forecast.list[14].dt_txt).format("MMMM D, YYYY HH:mm"));
localStorage.setItem('D2 Temp', forecast.list[14].main.temp);
localStorage.setItem('D2 Wind', forecast.list[14].wind.speed);
localStorage.setItem('D2 Humidity', forecast.list[14].main.humidity);

let day2 = localStorage.getItem('Day 2');
let temp2 = localStorage.getItem('D2 Temp');
let wind2 = localStorage.getItem('D2 Wind');
let humidity2 = localStorage.getItem('D2 Humidity');

let iconUrl2 = "http://openweathermap.org/img/w/" + forecast.list[14].weather[0].icon + ".png"
let img2 = document.getElementById("img2");
img2.src = iconUrl2;

document.getElementById("day2").textContent = day2;
document.getElementById("secondDayTemp").textContent = temp2 + " °C" ;
document.getElementById("secondDayWind").textContent = wind2 + " MPH";
document.getElementById("secondDayHumidity").textContent = humidity2 + " %";

//////3-Day Forecast 

localStorage.setItem('Day 3', dayjs(forecast.list[22].dt_txt).format("MMMM D, YYYY HH:mm"))
localStorage.setItem('D3 Temp', forecast.list[22].main.temp)
localStorage.setItem('D3 Wind', forecast.list[22].wind.speed)
localStorage.setItem('D3 Humidity', forecast.list[22].main.humidity)

let day3 = localStorage.getItem('Day 3');
let temp3 = localStorage.getItem('D3 Temp');
let wind3 = localStorage.getItem('D3 Wind');
let humidity3 = localStorage.getItem('D3 Humidity');

let iconUrl3 = "http://openweathermap.org/img/w/" + forecast.list[22].weather[0].icon + ".png"
let img3 = document.getElementById("img3");
img3.src = iconUrl3;

document.getElementById("day3").textContent = day3;
document.getElementById("thirdDayTemp").textContent = temp3 + " °C" ;
document.getElementById("thirdDayWind").textContent = wind3 + " MPH";
document.getElementById("thirdDayHumidity").textContent = humidity3 + " %";

//////4-Day Forecast 

localStorage.setItem('Day 4', dayjs(forecast.list[30].dt_txt).format("MMMM D, YYYY HH:mm"))
localStorage.setItem('D4 Temp', forecast.list[30].main.temp)
localStorage.setItem('D4 Wind', forecast.list[30].wind.speed)
localStorage.setItem('D4 Humidity', forecast.list[30].main.humidity)

let day4 = localStorage.getItem('Day 4');
let temp4 = localStorage.getItem('D4 Temp');
let wind4 = localStorage.getItem('D4 Wind');
let humidity4 = localStorage.getItem('D4 Humidity');

let iconUrl4 = "http://openweathermap.org/img/w/" + forecast.list[30].weather[0].icon + ".png"
let img4 = document.getElementById("img4");
img4.src = iconUrl4;

document.getElementById("day4").textContent = day4;
document.getElementById("fourthDayTemp").textContent = temp4 + " °C" ;
document.getElementById("fourthDayWind").textContent = wind4 + " MPH";
document.getElementById("fourthDayHumidity").textContent = humidity4 + " %";

//////5-Day Forecast 

localStorage.setItem('Day 5', dayjs(forecast.list[38].dt_txt).format("MMMM D, YYYY HH:mm"))
localStorage.setItem('D5 Temp', forecast.list[38].main.temp)
localStorage.setItem('D5 Wind', forecast.list[38].wind.speed)
localStorage.setItem('D5 Humidity', forecast.list[38].main.humidity)

let day5 = localStorage.getItem('Day 5');
let temp5 = localStorage.getItem('D5 Temp');
let wind5 = localStorage.getItem('D5 Wind');
let humidity5 = localStorage.getItem('D5 Humidity');

let iconUrl5 = "http://openweathermap.org/img/w/" + forecast.list[38].weather[0].icon + ".png"
let img5 = document.getElementById("img5");
img5.src = iconUrl5;

document.getElementById("day5").textContent = day5;
document.getElementById("fifthDayTemp").textContent = temp5 + " °C" ;
document.getElementById("fifthDayWind").textContent = wind5 + " MPH";
document.getElementById("fifthDayHumidity").textContent = humidity5 + " %";

});
};

searchBtn.addEventListener("click", searchCity)

