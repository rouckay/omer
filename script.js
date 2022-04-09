const result = document.querySelector('#result');

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(show);
    } else {
        alert("Geolocation is not supported by this browser.")
    }
}

function show(position) {
    result.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}