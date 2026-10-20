// 📱 MOTOR DE GEOLOCALIZACIÓN REPARADO - APP "NECESITO"

document.addEventListener("DOMContentLoaded", () => {
    // Activa la geolocalización de forma 100% automática al abrir la pantalla
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(coordenadasExitosas, errorGps, {
            enableHighAccuracy: true, // Fuerza el uso del chip GPS del celular
            timeout: 10000,
            maximumAge: 0             // Cero memoria: Borra el anclaje de Las Antaras 186
        });
    } else {
        window.speechSynthesis.speak(new SpeechSynthesisUtterance("Tu dispositivo no soporta localización."));
    }
});

function coordenadasExitosas(posicion) {
    const lat = posicion.coords.latitude;
    const lon = posicion.coords.longitude;
    const precisionReal = posicion.coords.accuracy;

    // CORRECCIÓN MATRIZ: Creamos el enlace oficial y limpio de Google Maps con las coordenadas reales
    const hipervinculoGoogleMaps = `https://google.com{lat},${lon}`;
    
    // Guardamos la información limpia en la memoria interna del celular
    localStorage.setItem("ubicacion_remitente", hipervinculoGoogleMaps);
    localStorage.setItem("precision_gps", precisionReal);

    // Activación de la Voz Amiga y Calmada (Antiestrés)
    window.speechSynthesis.cancel();
    const mensajeVoz = new SpeechSynthesisUtterance("Ubicación satelital establecida con éxito. Todo está listo. Dime, ¿qué necesitas hoy?");
    mensajeVoz.lang = 'es-PE';
    mensajeVoz.rate = 0.9; // Velocidad pausada para mayor claridad
    window.speechSynthesis.speak(mensajeVoz);
}

function errorGps(error) {
    window.speechSynthesis.cancel();
    const mensajeError = new SpeechSynthesisUtterance("Estoy buscando una mejor señal de satélite para darte total seguridad. No te preocupes, tómate tu tiempo.");
    mensajeError.lang = 'es-PE';
    mensajeError.rate = 0.9;
    window.speechSynthesis.speak(mensajeError);
}
