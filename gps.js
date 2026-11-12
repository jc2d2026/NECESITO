const estadoTexto = document.getElementById('estado');
const botonMapa = document.getElementById('btn-mapa');

const opcionesGPS = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 60000
};

// Convierte coordenadas decimales al formato 12°11'37.3"S 77°00'16.4"W
function convertirAGrados(lat, lng) {
  function aDMS(coordenada, pos, neg) {
    const absoluto = Math.abs(coordenada);
    const grados = Math.floor(absoluto);
    const minutosDec = (absoluto - grados) * 60;
    const minutos = Math.floor(minutosDec);
    const segundos = ((minutosDec - minutos) * 60).toFixed(1);
    const direccion = coordenada >= 0 ? pos : neg;
    return `${grados}°${minutos}'${segundos}"${direccion}`;
  }
  return `${aDMS(lat, 'N', 'S')} ${aDMS(lng, 'E', 'W')}`;
}

function exitoUbicacion(posicion) {
  const lat = posicion.coords.latitude;
  const lng = posicion.coords.longitude;
  const coordenadasGrados = convertirAGrados(lat, lng);

  if (estadoTexto) {
    estadoTexto.textContent = `Ubicación lista: ${coordenadasGrados}`;
  }
  
  if (botonMapa) {
    // URL oficial de Google Maps que abre el pin exacto al instante
    botonMapa.href = `https://google.com{lat},${lng}`;
    botonMapa.target = "_blank";
    botonMapa.rel = "noopener noreferrer";
  }
}

function errorUbicacion(error) {
  if (estadoTexto) {
    estadoTexto.textContent = "No se pudo obtener la ubicación automática. Toca el botón para abrir el mapa.";
  }
  
  if (botonMapa) {
    botonMapa.href = "https://google.com";
    botonMapa.target = "_blank";
    botonMapa.rel = "noopener noreferrer";
  }
}

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(exitoUbicacion, errorUbicacion, opcionesGPS);
}
