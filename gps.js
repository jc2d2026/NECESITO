navigator.geolocation.watchPosition(function(position) {
    var numLat = position.coords.latitude;
    var numLon = position.coords.longitude;
    var numAcc = position.coords.accuracy.toFixed(1);

    // Actualiza el texto en la página web
    document.getElementById("txt-latitud").innerText = numLat;
    document.getElementById("txt-longitud").innerText = numLon;
    document.getElementById("txt-precision").innerText = numAcc;

    // Modifica el atributo href con la URL matemática exacta sin añadir texto extra
    document.getElementById("enlace-mapa").href = "https://google.com" + numLat + "," + numLon;
}, function(err) {
    console.warn("ERROR(" + err.code + "): " + err.message);
}, {
    enableHighAccuracy: true
});
