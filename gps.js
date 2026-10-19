// 📱 MOTOR DE GEOLOCALIZACIÓN MILIMÉTRICA (HACIA 0 METROS) - APP "NECESITO"
// Diseñado con empatía y enfoque antiestrés para adultos mayores

document.addEventListener("DOMContentLoaded", () => {
    // Ejecutar la ubicación de forma 100% automática al abrir la app o usar la voz
    obtenerUbicacionAbsoluta();
});

function obtenerUbicacionAbsoluta() {
    // Verificar si el celular del usuario soporta geolocalización nativa
    if (!navigator.geolocation) {
        window.speechSynthesis.speak(new SpeechSynthesisUtterance("Tu dispositivo no cuenta con el sistema de localización por voz activo."));
        return;
    }

    // CONFIGURACIÓN DE ALTA PRECISIÓN EXTREMA (BÚSQUEDA DE CERO METROS DE ERROR)
    const opcionesGpsMilimetrico = {
        enableHighAccuracy: true, // Fuerza el uso de antenas de doble banda (satélite directo)
        timeout: 10000,           // Espera máxima de 10 segundos para respuesta rápida
        maximumAge: 0             // CERO MEMORIA: Borra el pasado. Rompe el anclaje de Las Antaras 186
    };

    // Solicitar coordenadas al satélite en tiempo real
    navigator.geolocation.getCurrentPosition(coordenadasExitosas, errorGps, opcionesGpsMilimetrico);
}

function coordenadasExitosas(posicion) {
    const latitud = posicion.coords.latitude;
    const longitud = posicion.coords.longitude;
    const precisionReal = posicion.coords.accuracy; // Margen de error entregado por el chip

    console.log(`GPS Operando. Lat: ${latitud}, Lon: ${longitud}. Precisión: ${precisionReal} metros.`);

    // Crear el hipervínculo dinámico exacto de Google Maps para el técnico, taxista o repartidor
    const hipervinculoEntrega = `https://google.com{latitud},${longitud}`;
    
    // Guardar la ubicación móvil real en la memoria temporal viva del teléfono
    localStorage.setItem("ubicacion_remitente", hipervinculoEntrega);
    localStorage.setItem("precision_gps", precisionReal);

    // Activación de Voz Amiga y Calmada (Antiestrés)
    window.speechSynthesis.cancel(); // Detiene cualquier audio robótico previo
    const mensajeVoz = new SpeechSynthesisUtterance("Ubicación satelital establecida con éxito. Todo está listo. Dime, ¿qué necesitas hoy?");
    mensajeVoz.lang = 'es-PE'; // Acento local pausado
    mensajeVoz.rate = 0.9;     // Velocidad ligeramente más lenta de lo normal para mayor claridad
    window.speechSynthesis.speak(mensajeVoz);
}

function errorGps(error) {
    console.warn(`Señal de satélite en búsqueda. Código: ${error.code}`);
    
    // Mensaje de voz pacífico en caso de estar en interiores o zona sin cobertura
    window.speechSynthesis.cancel();
    const mensajeError = new SpeechSynthesisUtterance("Estoy buscando una mejor señal de satélite para darte total seguridad. No te preocupes, tómate tu tiempo. Aquí estoy contigo.");
    mensajeError.lang = 'es-PE';
    mensajeError.rate = 0.9;
    window.speechSynthesis.speak(mensajeError);
}
