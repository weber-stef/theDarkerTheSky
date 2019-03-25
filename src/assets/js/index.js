import "@scss/styles.scss";
import logoImg from "@img/logo.png";
const weatherReport = document.querySelector(".weatherReport");
const polaroidImage = document.querySelector(".polaroidImage");
const myBrand = document.querySelector(".navbar-brand");
myBrand.innerHTML = "Breaking News : Weather ahead!"

window.addEventListener('click', (ev) => {
    const elm = ev.target;
    const selector = elm.getAttribute('data-target');
    collapse(selector, 'toggle');
}, false);

// weather api
const corsAnywhereProxy = `https://cors-anywhere.herokuapp.com/`
const firstPartOfUrl = `https://api.darksky.net/forecast/`;
const myDarkSkyApiKey = `8e7c3b8124cb62d06ecaf994b8e8ea9f/`;
// const myCoordinates = `52.520008,13.404954` // berlin
const myCoordinates = `24,54`;
let url2Fetch = `${corsAnywhereProxy}${firstPartOfUrl}${myDarkSkyApiKey}${myCoordinates}`
console.log(url2Fetch);
let currentTemperature = "";
let weAreIn = "";
let temperatureHere = 0;

function gob() {
    let feelGoodMode = "";
    let shockOrNoShock = "";
    let hotOrCold = "";
    if (temperatureHere < 8) {
        feelGoodMode = "kinda shitty..";
        shockOrNoShock = "shocking";
        hotOrCold = "freezing like crazy!!"
    } else if (temperatureHere > 8 && temperatureHere < 20) {
        feelGoodMode = "kinda ok";
        shockOrNoShock = "";
        hotOrCold = "feeling quite comfortable";
    } else if (temperatureHere > 25 && temperatureHere < 60) {
        feelGoodMode = "kinda too hot";
        shockOrNoShock = "";
        hotOrCold = "sweating like a crazy person";
    }
    return [feelGoodMode, shockOrNoShock, hotOrCold];
}

function fToC(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    return Math.floor(fToCel);
}

fetch(url2Fetch)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        temperatureHere = fToC(data.currently.temperature);
        console.log(temperatureHere);
        weAreIn = (data.timezone.split('/')[1]);
        console.log(weAreIn);
        console.log(gob(temperatureHere)[0]);
        console.log(weAreIn);
        polaroidImage.style.backgroundImage = `url("https://source.unsplash.com/random?${weAreIn}")`;
        console.log(polaroidImage.style.backgroundImage);

        weatherReport.innerHTML = `Hi there people, here in ${weAreIn} the weather is  ${gob(temperatureHere)[0]}, it's ${gob(temperatureHere)[1]} ${temperatureHere}° Celsius and I am ${gob(temperatureHere)[2]}..`
    });

//     $(".reminderPicture")