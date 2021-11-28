const l1 = {position: {lat:37.40884747971561, lng: -122.06000685125716},
     label: "gun",
     title: "Someone got gun shot here!",
     url:'../images/gun.svg' 
    };
const l2 = {position: {lat:37.409993741493295, lng: -122.06358518842138},
     label: "thief",
     title: "Some stole wallet here! ",
     url:'../images/thief.svg' 
    };
const l3 = {position: {lat:37.40998147620404, lng: -122.06286383452085},
     label: "bomb",
     title: "Found Bomb here!",url:'../images/bomb.svg' };
const locations = [l1,l2,l3];




function newMarker(map, location){
    console.log(location.position.lat)
    console.log(location.position.lng)
    var temp;
    temp = new google.maps.Marker({
        position: location.position,
        map,
        
        title: location.title,
        icon:{url:location.url,scaledSize:new google.maps.Size(30,30)}
    });

    

    temp.addListener("click", () => {
        var infowindow = new google.maps.InfoWindow({
            content: `<p>${temp.getTitle()}</p>
                      <p>It happens on &nbsp &nbsp &nbsp   <font color="red">11-12-2021</font> </p>
            `,
            maxWidth: 200,
          });
        infowindow.open({
            anchor: temp,
            map,
            shouldFocus: false,
          });
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
