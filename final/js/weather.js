'use strict'
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let dateObj = new Date();
let month = monthNames[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate() - 1;
let year = dateObj.getUTCFullYear();

let newdate = `${month} ${day}, ${year}`;

const app = document.querySelector('.app');

fetch('https://api.openweathermap.org/data/2.5/weather?q=Salt Lake City&APPID=2d48b1d7080d09ea964e645ccd1ec93f&units=metric')
    .then(response => response.json())
    .then(data => {
        console.log(data)

        app.insertAdjacentHTML('afterbegin', `<div class="bar">
        <div class="center"><a href="#"><i class="fas fa-crosshairs"></i></a></div>
        <div class="search"><a href="#"><i class="fas fa-search"></i></a></div>
    </div><div class="titlebar">
    <p class="date">${newdate}</p>
    <h4 class="city" id="cityname">${data.name}</h4>
    <p class="description">${data.weather[0].description}</p>
</div>
<div class="temperature">
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    <h2>${Math.round((data.main.temp)*9/5 + 32)}°F</h2>
</div>
<div class="extra">
    <div class="col">
        <div class="info">
            <h5>Wind Status</h5>
            <p>${data.wind.speed}mps</p>
        </div>
        
    </div>
    
    <div class="col">
        <div class="info">
            <h5>Humidity</h5>
            <p>${data.main.humidity}%</p>
        </div>
    </div>
</div>
    
</div>`)

    });