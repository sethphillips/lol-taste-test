<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::group(['middleware' => 'web'], function () {
    Route::auth();

    Route::get('/home', 'HomeController@index');

    Route::group(['prefix'=>'admin','middleware'=>'auth'],function(){
      Route::get('/',['uses'=>'AdminController@index','as'=>'admin.index']);
      Route::post('download','AdminController@download');
    });
});


Route::group(['prefix'=>'api'],function(){
  Route::resource('samples','SampleController');
  Route::resource('signups','SignupController');
  Route::post('badgescan','BadgeScanController@scan');
});


Route::get('{data?}', function(){
  return View::make('ember');
})->where('data', '.*');


