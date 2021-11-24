

// google map api setup
// Initialize and add the map
function initMap(locations) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: currentLocation,
            });
            const current_location = new google.maps.Marker({
                position: currentLocation,
                map,
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
                alert("marker: current location");
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
