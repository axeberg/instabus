<?php
/**
 * Sample file for the boxcar php provider client
 *
 * @author Russell Smith <russell.smith@ukd1.co.uk>
 * @copyright UKD1 Limited 2010
 * @license licence.txt ISC license
 * @see https://github.com/ukd1/Boxcar
 */

define('API_KEY', 'L1w07ocaTwztsig6VW8v');
define('API_SEC', 'FGVcoDrWg2fKySINQ2Tw86YeH1RNZkN7rqUzva3Q');
define('YOUR_EMAIL', 'olsson.axel@gmail.com');

if (!function_exists('curl_init')) {
	trigger_error('CURL must be enabled for boxcar_api to function', E_USER_ERROR);
}

// load the api class
require_once 'boxcar_api.php';

// this is needed to stop warnings when using the date functions
date_default_timezone_set('Europe/London');

// instantiate a new instance of the boxcar api
$b = new boxcar_api(API_KEY, API_SEC, 'http://f.cl.ly/items/1F2K2M1D2j3h441s3u3g/Icon.png');

sleep(10);
// you can also do with a default icon
boxcar_api::factory(API_KEY, API_SEC, 'http://f.cl.ly/items/1F2K2M1D2j3h441s3u3g/Icon.png')
	->broadcast('Reminder', 'Your bus departs in 10 minutes!');

?>