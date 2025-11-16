function ejercicioIF() {
  var aqi = Number(document.getElementById("aqi").value);
  var texto = "";
  if (aqi <= 50) texto = "Bueno";
  else if (aqi <= 100) texto = "Moderado";
  else if (aqi <= 150) texto = "Dañino para sensibles";
  else if (aqi <= 200) texto = "Dañino";
  else if (aqi <= 300) texto = "Muy dañino";
  else texto = "Peligroso";
  document.getElementById("resIF").textContent = texto;
}

function ejercicioFOR() {
  var entrada = document.getElementById("ruido").value;
  var arr = entrada.split(",").map(Number);
  var suma = 0;
  for (var i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  var prom = suma / arr.length;
  document.getElementById("resFOR").textContent = "Promedio: " + prom;
}

function ejercicioWHILE() {
  var entrada = document.getElementById("temperaturas").value;
  var arr = entrada.split(",").map(Number);

  var i = 0;
  var focos = 0;


  while (i < arr.length && arr[i] !== 0) {
    if (arr[i] > 45) {
      focos++;
    }
    i++;
  }

  document.getElementById("resWHILE").textContent = "Focos de calor: " + focos;
}


function ejercicioSWITCH() {
  var codigo = Number(document.getElementById("codigo").value);
  var tipo = "";
  switch (codigo) {
    case 1: tipo = "Orgánico"; break;
    case 2: tipo = "Plástico"; break;
    case 3: tipo = "Papel/Cartón"; break;
    case 4: tipo = "Vidrio"; break;
    default: tipo = "Código inválido";
  }
  document.getElementById("resSWITCH").textContent = tipo;
}

function ejercicioDOWHILE() {
  var entrada = document.getElementById("niveles").value;
  var arr = entrada.split(",");
  var i = 0, texto = "";
  do {
    var num = Number(arr[i]);
    if (!isNaN(num) && num > 3) {
      texto += "Alerta: " + num + " m supera 3 m. ";
    }
    i++;
  } while (arr[i] !== "no" && i < arr.length);
  document.getElementById("resDO").textContent = texto || "Sin alertas.";
}

