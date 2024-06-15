const cityInputEle = document.getElementById('cityInput');
const form = document.getElementById('form');
const fiveDayForecastContainer = document.getElementById(
  'fiveDayForecastContainer'
);

function sendCity(e) {
  e.preventDefault();
  const city = cityInputEle.value;
  // console.log(cityInputEle.value);
  fetchCityWeather(city);
  createButton(city);
  cityInputEle.value = '';
}

function createButton(city) {
  if (!city) return;
  let btn = document.createElement('button');
  let fixedCity = city.toUpperCase();
  btn.textContent = fixedCity;
  btn.classList =
    'second-btn border-2 hover:bg-slate-700 text-white font-bold py-2 px-4 mx-8 mt-4 mb-2 rounded';
  sidebarContainer.appendChild(btn);
  btn.addEventListener('click', () => {
    fetchCityWeather(city);
  });
}

function fetchCityWeather(city) {
  fiveDayForecastContainer.innerHTML = '';
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16a1bbc216267d941f85d26c9ef22dab&units=metric`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Something went wrong`);
      } else {
        return response.json();
      }
    })
    .then((data) => {
      // console.log(data);
      const todayWeather = {
        cityName: data.name,
        temperature: data.main.temp,
        wind: data.wind.speed,
        humidity: data.main.humidity,
        icon:
          'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png',
      };
      let date = new Date(data.dt * 1000);

      document.getElementById('cityName').textContent = todayWeather.cityName;
      document.getElementById('currentDay').textContent = date.toDateString();
      document.getElementById('currentTemp').textContent =
        todayWeather.temperature + ' °C';
      document.getElementById('currentWind').textContent =
        todayWeather.wind + ' MPH';
      document.getElementById('currentHumidity').textContent =
        todayWeather.humidity + ' %';
      document
        .getElementById('currentIcon')
        .setAttribute('src', todayWeather.icon);
    })
    .catch((error) => alert(error.message));

  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=16a1bbc216267d941f85d26c9ef22dab&units=metric`
  )
    .then((response) => response.json())
    .then((forecast) => {
      // console.log(forecast);
      const fiveDays = [6, 14, 22, 30, 38];
      fiveDays.map((day) => {
        const date = new Date(forecast.list[day].dt * 1000);
        const card = `
                        <div id="firstDayCont" class="grid 0 box-content h-64 w-48 px-2 py-2 rounded fiveDayCont">
                    <h4 id="day1" class="'px-2 py-2 m-auto">${date.toDateString()}</h4>
                    <img id="img1" class="place-self-center" src="${
                      'http://openweathermap.org/img/w/' +
                      forecast.list[day].weather[0].icon +
                      '.png'
                    }">
                    <ul>
                        <li class="bg-gradient-to-r from-teal-600">Temp: <span id="firstDayTemp">${
                          forecast.list[day].main.temp + ' °C'
                        }</span></li>
                        <li class="bg-gradient-to-r from-teal-600">Wind: <span id="firstDayWind">${
                          forecast.list[day].wind.speed + ' MPH'
                        }</span></li>
                        <li class="bg-gradient-to-r from-teal-600">Humidity: <span id="firstDayHumidity">${
                          forecast.list[day].main.humidity + ' %'
                        }</span></li>
                    </ul>
                </div>`;
        fiveDayForecastContainer.insertAdjacentHTML('afterbegin', card);
      });
    });
}

form.addEventListener('submit', sendCity);
