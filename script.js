mapboxgl.accessToken =
    "pk.eyJ1Ijoia2hhbGVkYWRyYW5pIiwiYSI6ImNraGYyeGpyNjBsbHUyem52djQ0NXpvNmYifQ.ykIARQj-FYHs5mhBcGsjLg";
navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{
    enableHighAccuracy: true
})

function successLocation(position){
    console.log(position)
    setupMap([position.coords.longitude,
        position.coords.latitude])
}

function errorLocation(){
    console.log('could not find your location, setting the map with a default location')
    setupMap([10.2061624,36.8107941])
}



function setupMap(center){
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 12
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-left');

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/cycling'
    });
    
    map.addControl(directions,'top-left');
}
