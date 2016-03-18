<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Sample;
use Illuminate\Http\Request;


class SampleController extends Controller
{
    public function index()
    {
      $samples = Sample::today()->get();

      return ['samples'=>$samples];
    }

    public function store(Request $request)
    {
      $truthyAnswers = array_filter($request->input('sample'));
      if(count($truthyAnswers) > 2){
        return \Response::make('too many true answers', 400);
      }

      $sample = Sample::create($request->input('sample'));

      return ['sample'=>$sample];
    }
}
