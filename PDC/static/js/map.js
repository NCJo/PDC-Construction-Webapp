function initMap() {
    var pdcLoc = {lat: 13.804701, lng: 100.417401};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: pdcLoc}
    );
    var marker = new google.maps.Marker({position: pdcLoc, map: map});
}