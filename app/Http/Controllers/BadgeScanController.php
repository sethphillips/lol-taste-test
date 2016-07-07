<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class BadgeScanController extends Controller
{
    public function scan(Request $request)
    {
      $badgeID = $request->badgeid;

      $baseUrl = 'https://developer.experientswap.com/APIv1/LeadInfo';

      $apikey = config('badgescan.apikey');

      $actcode = config('badgescan.actcode');

      $json = file_get_contents("$baseUrl?apikey=$apikey&actcode=$actcode&badgeid=$badgeID");

      $response = json_decode($json,true);

      return $response;
    }
}
