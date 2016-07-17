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

      $json = file_get_contents("$baseUrl?apikey=$apikey&actcode=$actcode&badgeid=52591&barcode=$barcode");

      $response = json_decode($json,true);

      // $response = [
      //   'Success'=> true,
      //   'LeadInfo'=> [
      //     'LeadID'=> "",
      //     'CapturedDate'=> "",
      //     'CapturedBy'=> "",
      //     'ConnectKey'=> "",
      //     'FirstName'=> "Seth",
      //     'LastName'=> "Phillips",
      //     'Title'=> "Good Guy",
      //     'Company'=> "TRMS",
      //     'Company2'=> "",
      //     'Address'=> "1900 East Medicine Lake Blvd",
      //     'Address2'=> "Downstairs",
      //     'Address3'=> "",
      //     'City'=> "Plymouth",
      //     'StateCode'=> "MN",
      //     'ZipCode'=> "55441",
      //     'CountryCode'=> "USA",
      //     'Email'=> "seth.phillips@trms.com",
      //     'Phone'=> "952-380-6554",
      //     'PhoneExtension'=> "232",
      //     'Fax'=> "",
      //     'Notes'=> ""
      //   ],
      // ];

      return $response;
    }
}
