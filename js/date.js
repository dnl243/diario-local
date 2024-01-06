const $ = document;
const $date = $.getElementById("fecha");

const date = new Date();
const dateWeek = date.getDay(); // 0-6
const dateMonth = date.getDate(); // fecha nro
const month = date.getMonth(); // 0-12
const year = date.getFullYear(); // año
const fullDate = `${dayOfWeek(dateWeek)} ${dateMonth} de ${monthOfYear(month)} de ${year}`;

$date.innerHTML = fullDate;

function dayOfWeek(d) {
  switch (d) {
    case 0:
      return "Domingo";
    case 1:
      return "Lunes";
    case 2:
      return "Martes";
    case 3:
      return "Miercoles";
    case 4:
      return "Jueves";
    case 5:
      return "Viernes";
    case 6:
      return "Sabado";
  }
}

function monthOfYear(y) {
  switch (y) {
    case 0:
      return "Enero";
    case 1:
      return "Febrero";
    case 2:
      return "Marzo";
    case 3:
      return "Abril";
    case 4:
      return "Mayo";
    case 5:
      return "Junio";
    case 6:
      return "Julio";
    case 7:
      return "Agosto";
    case 8:
      return "Septiembre";
    case 9:
      return "Octubre";
    case 10:
      return "Noviembre";
    case 11:
      return "Diciembre";
  }
}
