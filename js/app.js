// Declaramos variables

let longitd;
let latitud;
let temperatura = document.querySelector(".temperatura");
let descripcion = document.querySelector(".descripcion");
let localizacion = document.querySelector(".localizacion");
let icono = document.querySelector(".icono");
const k = 273.15;

//Accedemos a la posicion
window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      longitd = position.coords.longitude;
      latitud = position.coords.latitude;

      const API = "6b56ac4a1324f8afc8aef0eb2e49acd8";

      //consumimos la API
      const URL =
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&` +
        `lon=${longitd}&appid=${API}`;

      fetch(URL)
        .then((res) => {
          return res.json();
        })

        .then((data) => {
          console.log(data);
          //agregamos la data a nuestras etiquetas html
          temperatura.textContent = Math.floor(data.main.temp - k) + "°C";
          descripcion.textContent = data.weather[0].description;
          localizacion.textContent = data.name + "," + data.sys.country;
        });
    });
  }
});
