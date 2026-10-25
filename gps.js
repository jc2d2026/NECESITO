// gps.js - CAPTURA DE COORDENADAS LIMPIAS
let valorEjeX = null;
let valorEjeY = null;

document.addEventListener("DOMContentLoaded", () => {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(coordenadasExitosas, errorGps, {
            enableHighAccuracy: true,
            maximumAge: 0
        });
    } else {
        const elementoGps = document.getElementById("texto-gps");
        if(elementoGps) elementoGps.innerHTML = "Tu dispositivo no soporta GPS.";
    }
});

function coordenadasExitosas(posicion) {
    valorEjeX = posicion.coords.latitude;
    valorEjeY = posicion.coords.longitude;
    const metrosPrecision = posicion.coords.accuracy;

    const elementoGps = document.getElementById("texto-gps");
    const elementoEnlace = document.getElementById("enlace-monoblock");

    // Imprime únicamente los números puros en pantalla, sin iniciales "Lat" o "Lon"
    if (elementoGps) {
        elementoGps.innerHTML = `🟢 UBICACIÓN REAL:<br>${valorEjeX.toFixed(6)}, ${valorEjeY.toFixed(6)}<br>(Precisión: ${metrosPrecision.toFixed(1)} metros)`;
    }

    // Inyecta de forma nativa el enlace a Google Maps en el bloque contenedor
    if (elementoEnlace) {
        elementoEnlace.href = `https://google.com{valorEjeX},${valorEjeY}`;
    }
}

function errorGps() {
    const elementoGps = document.getElementById("texto-gps");
    const elementoEnlace = document.getElementById("enlace-monoblock");
    
    if (elementoGps) elementoGps.innerHTML = "Buscando satélites en Chorrillos...";
    if (elementoEnlace) elementoEnlace.href = "javascript:void(0);";
}
