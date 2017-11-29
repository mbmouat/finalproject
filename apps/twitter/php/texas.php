<?php
ini_set('display_errors', 1);
require_once('../TwitterAPIExchange.php');

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' =>"2385620364-UIWjpDs4MrkPoclLfy0n6wPVVnBe0lcJwtsCW6a",
    'oauth_access_token_secret' =>"p4GvIAFkDLnQOwGVAQYOY63qxB5mAERt2jztU67CowZQe",
    'consumer_key' => "jAztCOrHlTt9N1ZX1VM5ky5zn",
    'consumer_secret' => "vC6j5vVVC5I0PfAEb3ha28vvkNIR5UDwwHcXiTGicIR18Q3S2g"
);

/** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
//$url = 'https://api.twitter.com/1.1/blocks/create.json';
$requestMethod = 'GET';

/** POST fields required by the URL above. See relevant docs as above **/
$postfields = array(
    'screen_name' => 'usernameToBlock',
    'skip_status' => '1'
);

/** Perform a POST request and echo the response **/
//$twitter = new TwitterAPIExchange($settings);
//echo $twitter->buildOauth($url, $requestMethod)
             //->setPostfields($postfields)
        //  ->performRequest();

/** Perform a GET request and echo the response **/
/** Note: Set the GET field BEFORE calling buildOauth(); **/
$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?q=sutherlandsprings';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
$tweetData= json_decode ($twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest(),$assoc=TRUE);


             foreach($tweetData['statuses'] as $index => $items){
               $userArray = $items['user'];
               echo '<div class="tweet">';
               echo '<div class="avatar">' . '<a href="http://twitter.com/' . $userArray['screen_name'] . '"><img src="' . $userArray['profile_image_url'] . '"></a></div>';
               echo $userArray['screen_name'] . "<br />";
               echo $items['text']. "<br />";
               echo '</div>';
             }
?>
