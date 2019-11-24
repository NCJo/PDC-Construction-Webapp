function initMap() {
    var pdcLoc = {lat: 13.804701, lng: 100.417401};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: pdcLoc, mapTypeControl: false}
    );

    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h6 id="firstHeading" class="firstHeading">View Map</h6>'+
      '<div id="bodyContent">'+
      '<p><a href="http://www.pdccon.com/static/images/map.jpg"><img style="height:7em;" src="http://www.pdccon.com/static/images/map.jpg"></a></p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: pdcLoc, 
    map: map,
    title: 'Uluru (Ayers Rock)'
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  infowindow.open(map, marker);
    
}

