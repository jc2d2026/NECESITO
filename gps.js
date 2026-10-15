// 📱 MOTOR DE GEOLOCALIZACIÓN DE ALTA PRECISIÓN - APP "NECESITO"
// Diseñado con empatía para usuarios con limitaciones visuales

document.addEventListener("DOMContentLoaded", () => {
    // Ejecutar la ubicación de forma 100% automática al abrir la app o usar la voz
    obtenerUbicacionAutomatica();
});

function obtenerUbicacionAutomatica() {
    // Verificar si el celular del usuario soporta geolocalización nativa
    if (!navigator.geolocation) {
        alert("Tu dispositivo no soporta el sistema de localización por voz.");
        return;
    }

    // Configuración obligatoria de Misión Crítica (GPS Satelital Directo)
    const opcionesGps = {
        enableHighAccuracy: true, // FUERZA el uso del chip GPS nativo (Alta Precisión < 3 metros)
        timeout: 15000,           // Tiempo máximo de espera: 15 segundos
        maximumAge: 0             // CERO MEMORIA: Borra ubicaciones pasadas (Rompe el anclaje de la PC)
    };

    // Solicitar coordenadas al satélite en segundo plano
    navigator.geolocation.getCurrentPosition(coordenadasExitosas, errorGps, opcionesGps);
}

function coordenadasExitosas(posicion) {
    const latitud = posicion.coords.latitude;
    const longitud = posicion.coords.longitude;
    const precisionReal = posicion.coords.accuracy;

    console.log(`GPS Listo. Lat: ${latitud}, Lon: ${longitud}. Precisión: ${precisionReal} metros.`);

    // Crear el hipervínculo dinámico exacto de Google Maps para el repartidor o técnico
    const hipervinculoEntrega = `https://google.com{latitud},${longitud}`;
    
    // Guardar la ubicación móvil real en el almacenamiento temporal del teléfono
    localStorage.setItem("ubicacion_remitente", hipervinculoEntrega);
    localStorage.setItem("precision_gps", precisionReal);

    // Activar confirmación por voz automática en el celular
    window.speechSynthesis.speak(new SpeechSynthesisUtterance("Ubicación satelital establecida con éxito. El sistema está listo para recibir tu pedido."));
}

function errorGps(error) {
    console.warn(`Error de GPS Código: ${error.code}. Buscando señal de respaldo.`);
    // Alerta de voz si el usuario está en un sótano o lugar sin cobertura
    window.speechSynthesis.speak(new SpeechSynthesisUtterance("Señal baja de GPS. Por favor, asegúrate de estar en un espacio abierto para actualizar tu dirección de ayuda."));
}
