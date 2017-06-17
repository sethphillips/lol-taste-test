<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class BadgeScanController extends Controller
{
    public function scan(Request $request)
    {

      $barcode = $request->barcode;

      $baseUrl = 'https://developer.experientswap.com/APIv1/LeadInfo';

      $apikey = config('badgescan.apikey');

      $actcode = config('badgescan.actcode');

      $badgeid = config('badgescan.badgeid');

      $json = $this->getSSLPage("$baseUrl?apikey=$apikey&actcode=$actcode&badgeid=$badgeid&barcode=$barcode");

      $response = json_decode($json,true);

      return $response;
    }

    private function getSslPage($url) {
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
      curl_setopt($ch, CURLOPT_HEADER, false);
      curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
      curl_setopt($ch, CURLOPT_URL, $url);
      curl_setopt($ch, CURLOPT_REFERER, $url);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
      $result = curl_exec($ch);
      curl_close($ch);
      return $result;
}
}


