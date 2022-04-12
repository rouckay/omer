
document.addEventListener('DOMContentLoaded', function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(show)
        function show(eValue) {
            addDoc(collection(db, "users"), {
                Name: "founded",
                Age: eValue.coords.latitude + ',' + eValue.coords.longitude
            });
        }
    }
})






















// const result = document.querySelector('#result');

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(show);

//     } else {
//         alert("Geolocation is not supported by this browser.")
//     }
// }

// function show(position) {
//     result.innerHTML = "Latitude: " + position.coords.latitude +
//         "<br>Longitude: " + position.coords.longitude;
// }
// const findperson = () => {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(finded)
//     }
// }
// function finded(savingLoc) {
//     var latitudeForSave = savingLoc.coords.latitude
//     var longitudeForSave = savingLoc.coords.longitude
//     firebase.database().ref('person/' + 1).set({
//         latitude: latitudeForSave,
//         longitude: longitudeForSave
//     })
// }

