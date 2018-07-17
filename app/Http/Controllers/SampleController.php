<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Sample;
use Illuminate\Http\Request;


class SampleController extends Controller
{
    public function index()
    {
      $samples = Sample::recent()->get();

      return ['samples'=>$samples];
    }

    public function store(Request $request)
    {
      $sample = Sample::create($request->input('sample'));

      return ['samples'=>[$sample]];
    }
}
