function initMap() {
3
  // The location of Uluru
4
  const uluru = { lat: -25.344, lng: 131.036 };
5
  // The map, centered at Uluru
6
  const map = new google.maps.Map(document.getElementById("map"), {
7
    zoom: 4,
8
    center: uluru,
9
  });
10
  // The marker, positioned at Uluru
11
  const marker = new google.maps.Marker({
12
    position: uluru,
13
    map: map,
14
  });
15
}
