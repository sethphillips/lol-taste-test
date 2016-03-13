<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Sample;
use App\Signup;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view()->make('admin');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function download(Request $request)
    {
        $date = $request->input('date') ?  $request->input('date') : Carbon::now()->format('Y-m-d');
        
        $signups = Signup::where('created_at', '>=', $date)->with('flavors')->get()->toArray();
        $signups = array_map(function($val)
        {
          return array_dot($val);
        }, $signups);

        $samples = Sample::where('created_at', '>=', $date)->get()->toArray();
        
        $excel = \Excel::create("Results since $date",function($excel) use ($signups, $samples){
            $excel->sheet('Signups', function($sheet) use ($signups){
                $sheet->fromModel($signups);
            });
            $excel->sheet('Samples', function($sheet) use ($samples){
                $sheet->fromModel($samples);
            });
        })->download('xlsx');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
