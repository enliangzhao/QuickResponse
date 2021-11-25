

// google map api setup
// Initialize and add the map
function initMap(locations) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 16,
            center: {lat:37.41061394071311, lng: -122.05973521573722},
            // lat +- 0.002  lng +- 0.004
            });
            const current_location = new google.maps.Marker({
                position: {lat:37.41061394071311, lng: -122.05973521573722},
                map,
                label: {text: "You", color: "white"},
                title: "current location"
            });
            current_location.addListener("click", () => {
                $.ajax({
                    type: "POST",
                    url: 'http://localhost:3000/createReport',
                    data: {},
                    success: function(data){
                        alert(data)
                    }
                  });
            });
            var iconUrl;
            // for (var i = 0; i < locations.length; i++) {
            //     newMarker(map, locations[i]);
            // }
        });
    }else{
        alert("Error: cannot get current location");
    }
}
