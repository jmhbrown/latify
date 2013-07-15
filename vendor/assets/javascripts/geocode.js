var geocoder;
var map;

function initializeGeocoder() {
	geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng(-34.397, 150.644);
	var mapOptions = {
		zoom: 8,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}

function codeAddress() {
	var address = document.getElementById("address").value;
	geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location
			});
		} else {
			alert("Geocode was not successful for the following reason: " + status);
		}
	});
}
/* this is the HTML to get the above code to run.
<body onload="initializeGeocoder()">
	<div id="map-canvas" style="width: 320px; height: 480px;"></div>
		<div>
			<input id="address" type="textbox" value="Sydney, NSW">
			<input type="button" value="Encode" onclick="codeAddress()">
		</div>
</body>
*/
