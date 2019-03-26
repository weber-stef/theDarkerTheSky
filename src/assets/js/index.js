import "@scss/styles.scss";
import logoImg from "@img/logo.png";

class WeatherForecast {
  constructor(lat, long) {
    this.lat = lat;
    this.long = long;
    // this.addMyEventListeners();
    this.render();
  }
  fToC(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    return Math.floor(fToCel);
  }
  // addMyEventListeners() {
  //   // define querySel
  //   // console.log("Adding Events");
  //   const searchButton = document.querySelector("#searchButton");
  //   const searchField = document.querySelector("#searchField");
  //   // console.log(searchButton);
  //   // console.log(earchField);
  //   searchButton.addEventListener("click", e => {
  //     console.log("click");
  //     this.user = searchField.value;

  //     this.render();
  //   });

  // }
  // doneAt(time) {
  //   let momentDate = moment(time);
  //   let message = "";
  //   // "2018-10-17T09:02:48Z"

  //   return momentDate.format('DD.MM.YYYY');
  // }

  gob(temperatureHere) {
    let feelGoodMode = "";
    let shockOrNoShock = "";
    let hotOrCold = "";

    if (temperatureHere < 8) {
      feelGoodMode = "kinda shitty..";
      shockOrNoShock = "shocking";
      hotOrCold = "freezing like crazy!!"
    } else if (temperatureHere > 8 && temperatureHere < 25) {
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

  getKeyByValue(object, value) {
    console.log("das hier checkt gk " + (object, value));
    return Object.keys(object).find(key => object[key] === value);
  }


  render() {
    // weather api
    const corsAnywhereProxy = `https://cors-anywhere.herokuapp.com/`
    const firstPartOfUrl = `https://api.darksky.net/forecast/`;
    const myDarkSkyApiKey = `8e7c3b8124cb62d06ecaf994b8e8ea9f/`;
    // const myCoordinates = `52.520008,13.404954` // berlin
    let url2Fetch = `${corsAnywhereProxy}${firstPartOfUrl}${myDarkSkyApiKey}${this.lat},${this.long}`
    // console.log(url2Fetch);
    let currentTemperature = "";
    let weAreIn = "";
    let temperatureHere = 0;
    const weatherReport = document.querySelector(".weatherReport");
    const polaroidImage = document.querySelector(".polaroidImage");
    const myBrand = document.querySelector(".navbar-brand");
    const forecasts = document.querySelector("#forecasts");
    let f1 = [];
    myBrand.innerHTML = "Breaking News : Weather ahead!"
    fetch(url2Fetch)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        temperatureHere = this.fToC(data.currently.temperature);
        f1 = data.daily.data[1].cloudCover;
        console.log(f1);
        console.log(`${temperatureHere} is the current temperature`);
        console.log(this.gob(temperatureHere));
        // console.log(temperatureHere);
        weAreIn = (data.timezone.split('/')[1]);
        // console.log(weAreIn);

        polaroidImage.style.backgroundImage = `url("https://source.unsplash.com/random?${weAreIn}")`;

        weatherReport.innerHTML = `Hi there people, here in ${weAreIn} the weather is  ${this.gob(temperatureHere)[0]}, it's ${this.gob(temperatureHere)[1]} ${temperatureHere}° Celsius and I am ${this.gob(temperatureHere)[2]}..`
        for (let i = 0; i < 3; i++) {
          forecasts.innerHTML += `<div class="forecast-${i}"></div>`;
          document.querySelector(`.forecast-${i}`).innerHTML += Object.keys(data.daily.data[i])[26] + ": " + data.daily.data[i].cloudCover;
          console.log(data.daily.data[i]);
          console.log(this.getKeyByValue(data.daily.data[i], "cloudCover"));
          // console.log(Object.keys(data.daily.data[i])[26]);
          // console.log(`Dies ist die Liste von Array Nr. ${i}`);
          // Object.keys(data.daily.data[i]).forEach((key, index) => console.log(index, key));
        }
      });
  }






}


new WeatherForecast("47.5", "19.05");