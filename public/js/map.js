const l1 = {position: {lat:37.40884747971561, lng: -122.06000685125716},
     label: "Crime 1",
     title: "Murder here! 2021,1,1"};
const l2 = {position: {lat:37.409993741493295, lng: -122.06358518842138},
     label: "describe Crime 2"};
const l3 = {position: {lat:37.40998147620404, lng: -122.06286383452085},
     label: "describe Crime 3"};
const locations = [l1,l2,l3];


function newMarker(map, location){
    console.log(location.position.lat)
    console.log(location.position.lng)
    var temp;
    temp = new google.maps.Marker({
        position: location.position,
        map,
        label: {text: location.label, color: "green"},
        title: location.title
    });

    temp.addListener("click", () => {
        alert(temp.getTitle())
        // $.ajax({
        //     type: "POST",
        //     url: 'http://localhost:3000/createReport',
        //     data: {},
        //     success: function(data){
        //         alert(data)
        //     }
        // });
    });
}



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

            
            // current_location.addListener("click", () => {
            //     $.ajax({
            //         type: "POST",
            //         url: 'http://localhost:3000/createReport',
            //         data: {},
            //         success: function(data){
            //             alert(data)
            //         }
            //       });
            // });
            for (var i = 0; i < locations.length; i++) {
                 newMarker(map, locations[i]);
            }
        });
    }else{
        alert("Error: cannot get current location");
    }
}

initMap(locations)
