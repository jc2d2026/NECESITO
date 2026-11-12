javascript
const estadoTexto = document.getElementById('estado'); // Tu texto "Buscando señal..."
const botonMapa = document.getElementById('btn-mapa'); // Tu botón "Toca aquí para ver tu mapa"

const opcionesGPS = {
  enableHighAccuracy: false, // Permite usar Wi-Fi/Red para respuesta instantánea
  timeout: 5000,             // Máximo 5 segundos de espera antes de lanzar error
  maximumAge: 60000          // Acepta una ubicación guardada de hasta 1 minuto de antigüedad
};

function exitoUbicacion(posicion) {
  const lat = posicion.coords.latitude;
  const lng = posicion.coords.longitude;
  
  estadoTexto.textContent = "Ubicación lista";
  // Actualiza el enlace directo de Google Maps con las coordenadas exactas
  botonMapa.href = `https://google.com{lat},${lng}`;
}

function errorUbicacion(error) {
  estadoTexto.textContent = "No se pudo obtener la ubicación automática. Toca el botón para abrir el mapa.";
  // Enlace de respaldo que abre Google Maps centrado en la ubicación del dispositivo
  botonMapa.href = "https://google.com";
}

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(exitoUbicacion, errorUbicacion, opcionesGPS);
}
