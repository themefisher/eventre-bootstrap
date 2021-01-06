window.marker = null;

function initialize() {
  var map;
  var latitude = $('#map').attr('data-latitude');
  var longitude = $('#map').attr('data-longitude');
  var mapMarker = $('#map').attr('data-marker');
  var mapMarkerName = $('#map').attr('data-marker-name');
  var nottingham = new google.maps.LatLng(latitude, longitude);
  var style = [
      {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
              { "saturation": -100 },
              { "lightness": -8 },
              { "gamma": 1.18 }
          ]
      }, {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
              { "saturation": -100 },
              { "gamma": 1 },
              { "lightness": -24 }
          ]
      }, {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              { "saturation": -100 }
          ]
      }, {
          "featureType": "administrative",
          "stylers": [
              { "saturation": -100 }
          ]
      }, {
          "featureType": "transit",
          "stylers": [
              { "saturation": -100 }
          ]
      }, {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
              { "saturation": -100 }
          ]
      }, {
          "featureType": "road",
          "stylers": [
              { "saturation": -100 }
          ]
      }, {
          "featureType": "administrative",
          "stylers": [
              { "saturation": -100 }
          ]
      }, {
          "featureType": "landscape",
          "stylers": [
              { "saturation": -100 }
          ]
      }, {
          "featureType": "poi",
          "stylers": [
              { "saturation": -100 }
          ]
      }, {
      }
  ];
  var mapOptions = {
    center: nottingham,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    backgroundColor: "#000",
    zoom: 10,
    panControl: !1,
    zoomControl: !0,
    mapTypeControl: !1,
    scaleControl: !1,
    streetViewControl: !1,
    overviewMapControl: !1,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE
    }
  }
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var mapType = new google.maps.StyledMapType(style, {
    name: "Grayscale"
  });
  map.mapTypes.set('grey', mapType);
  map.setMapTypeId('grey');
  var marker_image = mapMarker;
  var pinIcon = new google.maps.MarkerImage(marker_image, null, null, null, new google.maps.Size(40, 60));
  marker = new google.maps.Marker({
    position: nottingham,
    map: map,
    icon: pinIcon,
    title: mapMarkerName
  })
}
var map = document.getElementById('map');
if (map != null) {
  google.maps.event.addDomListener(window, 'load', initialize)
}