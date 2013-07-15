function initializeGeocoder() {
	geocoder = new google.maps.Geocoder();
//	var returned_lat = $("");
//	var returned_lng = $("");
//	var returned_address = $("");
}

// prepares the geocode results to be sent to the database
function geocodeToAjax(results) {
	var results = document.getElementById("results");
	var returned_lat.val(results[0].geometry.location.lat());
	var returned_lng.val(results[0].geometry.location.lng());
	var returned_address.val(results[0].formatted_address);
}

// given an address, geocodes it, adds it's maker to the map, and it's lat/lng/address to a database
function codeAddress() {
	var address = document.getElementById("address").value;
	geocoder.geocode( {'address': address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			var marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location,
				title: address
			});
			addMarker(marker);
			geocodeToAjax(results);
		} else {
			alert("Geocode was not successful for the following reason: " + status);
		}
	});
}

// adds a marker to the marker array
function addMarker(marker) {
	if(markersArray) {
		markersArray.push(marker);
	}
}
