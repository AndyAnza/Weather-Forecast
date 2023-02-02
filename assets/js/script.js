function searchCity(){
let cityInputEle = document.getElementById("cityInput").value;
let city = cityInputEle.toString();

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16a1bbc216267d941f85d26c9ef22dab&units=metric`)
  .then(response => response.json())
  .then(data => {
  // console.log(data);
  // console.log(data.name);
  // console.log(data.main.temp)
  // console.log(data.wind.speed)
  // console.log(data.main.humidity)

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
  document.getElementById("currentTemp").textContent = temp + " °C" ;
  document.getElementById("currentWind").textContent = wind + " MPH";
  document.getElementById("currentHumidity").textContent = humidity + " %";
  
});

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=16a1bbc216267d941f85d26c9ef22dab&units=metric`)
  .then(response => response.json())
  .then(forecast => {
    console.log(forecast);


});
};


searchBtn.addEventListener("click", searchCity)



//LOCAL STORAGE INFO WILL PREVAIL BY REFRESHING THE SITE

// document.getElementById("cityName").textContent = cityName;
// document.getElementById("currentTemp").textContent = temp + " °C" ;
// document.getElementById("currentWind").textContent = wind + " MPH";
// document.getElementById("currentHumidity").textContent = humidity + " %";
