<?php
if (!function_exists('curl_init')) {
	trigger_error('CURL must be enabled for boxcar_api to function', E_USER_ERROR);
}

// create a new cURL resource
$ch = curl_init();

// set URL and other appropriate options
curl_setopt($ch, CURLOPT_URL, "https://api.trafiklab.se/samtrafiken/resrobotstops/GetDepartures.json?apiVersion=2.2&coordSys=RT90&locationId=7400003&timeSpan=30&key=6f4e51160be00a645deb0abc8339d275");
curl_setopt($ch, CURLOPT_HEADER, 0);

// grab URL and pass it to the browser
curl_exec($ch);

// close cURL resource, and free up system resources
curl_close($ch);

?>