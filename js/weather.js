const apiKey = "fa8f24adec524606d87639c08ca2f768";
const city = "Tandil,Argentina";
const url = new URL(
  "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey + 
    "&lang=es"
);

const $desc = $.getElementById("desc");
const $image = $.getElementById("image");
const $temp = $.getElementById("temp");
const $st = $.getElementById("st");
const $hum = $.getElementById("hum");
const $pres = $.getElementById("pres");
const $wind = $.getElementById("wind");
const $windDir = $.getElementById("windDir");
const $gust = $.getElementById("gust");
const $vis = $.getElementById("vis");
const $sunr = $.getElementById("sunrise");
const $suns = $.getElementById("sunset");

let desc, codIcon, temp, st, hum, pres, wind, windDir, vis, gust, sunr, suns;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    desc = data.weather[0].description;
    codIcon = data.weather[0].icon;
    temp = (data.main.temp - 273.15).toFixed(1);
    st = (data.main.feels_like - 273.15).toFixed(1);
    hum = data.main.humidity;
    pres = data.main.pressure;
    wind = (data.wind.speed * 3.6).toFixed(1);
    windDir = windDirection(data.wind.deg);
    gust = (data.wind.gust * 3.6).toFixed(1);
    vis = (data.visibility / 1000).toFixed(1);
    sunr = unixToHs(data.sys.sunrise);
    suns = unixToHs(data.sys.sunset);

    $image.setAttribute(
      "src",
      "https://openweathermap.org/img/wn/" + codIcon + "@2x.png"
    );
    $desc.innerHTML = desc.toUpperCase();
    $temp.innerHTML = temp;
    $st.innerHTML = st;
    $hum.innerHTML = hum;
    $pres.innerHTML = pres;
    $wind.innerHTML = wind;
    $windDir.innerHTML = windDir;
    $gust.innerHTML = gust;
    $vis.innerHTML = vis;
    $sunr.innerHTML = sunr;
    $suns.innerHTML = suns;
  });

function unixToHs(h) {
  let date = new Date(h * 1000);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let time = hours + ":" + minutes;
  return time;
}

function windDirection(d) {
  switch (true) {
    case d < 23:
      return "Norte";
    case d < 68:
      return "Noreste";
    case d < 113:
      return "Este";
    case d < 158:
      return "Sudeste";
    case d < 203:
      return "Sur";
    case d < 248:
      return "Sudoeste";
    case d < 293:
      return "Oeste";
    case d < 338:
      return "Noroeste";
    default:
      return "Norte";
  }
}
