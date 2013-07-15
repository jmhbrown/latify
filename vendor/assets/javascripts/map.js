//			<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD3ElIhvvEMpv9AFm3MQRjXM2FexHaUgSQ&sensor=false">
//			</script>

var map;
var markersArray = [];
google.maps.event.addDomListener(window, 'load', initialize);

//var returned_lat = $("#returned_lat");
//var returned_lng = $("#returned_lng");
//var returned_address = $("#returned_address");

function initialize() {
	var mapOptions = {
		center: new google.maps.LatLng(38.890, -77.030),
		zoom: 8,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	};
	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	geocoder = new google.maps.Geocoder();
//	google.maps.event.addListener(map, 'click', function(event) {
//			addMarker(event.latLng);
//	});
} // initalize

function addMarker(location, address) {
	marker = new google.maps.Marker({
		position: location,
		map: map,
		title: address
	});
	markersArray.push(marker);
}

// Sets the map on all markers in the array
function setAllMap(map) {
	if(markersArray) {
		for (var i = 0; i < markersArray.length; i++) {
			markersArray[i].setMap(map)
		}
	}
}

// Removes the makers from the map, but keeps them in the array
function clearOverlays() {
	setAllMap(null);
}

// Shows any markers currently in the array
function showOverlays() {
	setAllMap(map);
}

// Removes and deletes the marker
function deleteOverlays() {
	clearOverlays();
	markersArray = [];
}



// prepares the geocode results to be sent to the database
function geocodeToAjax(results) {
	var returnedLAT = results[0].geometry.location.lat();
	$("#lat").val(returnedLAT);
	var returnedLNG = results[0].geometry.location.lng();
	$("#lng").val(returnedLNG);
	var returnedADDRESS = results[0].formatted_address;
	$("#geocode_address").val(returnedADDRESS);
	alert("lat: " + returnedLAT + ", lng: " + returnedLNG + " address: " + returnedADDRESS);
}

// given an address, geocodes it, adds it's maker to the map, and it's lat/lng/address to a database
function codeAddress() {
	var address = document.getElementById("address").value;
	geocoder.geocode( {'address': address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
/*			var marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location,
				title: address
			});
			markersArray.push(marker); */
			addMarker(results[0].geometry.location, address);
			geocodeToAjax(results);
		} else {
			alert("Geocode was not successful for the following reason: " + status);
		}
	});
}

