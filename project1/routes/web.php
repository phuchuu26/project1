<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/home', function () {
//     return view('welcome');
// });

Route::get('/login','App\Http\Controllers\AccountController@login')->name('login');
Route::get('/login','App\Http\Controllers\AccountController@reg')->name('reg');

Route::group(['prefix' => 'workflow_processes'],function(){

	Route::get('/','App\Http\Controllers\Workflow_processesController@index')->name('Workflow_processes_index');
	Route::get('/add','App\Http\Controllers\Workflow_processesController@create')->name('Workflow_processes_create');
	Route::post('/store','Workflow_processesController@store')->name('Workflow_processes_store');

	Route::get('/edit','Workflow_processesController@edit')->name('Workflow_processes_edit');
	Route::post('/update','Workflow_processesController@update')->name('Workflow_processes_update');

    Route::get('/delete-{id}','Workflow_processesController@delete')->name('Workflow_processes_delete');
	// Route::get('/checkout','Workflow_processesController@checkout')->name('checkout');


});


Route::group(['prefix' => 'workflow_processes_group'],function(){
	// C:\xampp\htdocs\project1\project1\project1\app\Http\Controllers\Workflow_processes_GroupController.php
	Route::get('/','App\Http\Controllers\Workflow_processes_GroupController@index')->name('Workflow_processes_group_index');
	Route::get('/add','App\Http\Controllers\Workflow_processes_GroupController@create')->name('Workflow_processes_group_create');
	Route::post('/store','App\Http\Controllers\Workflow_processes_GroupController@store')->name('Workflow_processes_group_store');

	Route::get('/edit','Workflow_processesController@edit')->name('Workflow_processes_edit');
	Route::post('/update','Workflow_processesController@update')->name('Workflow_processes_update');

    Route::get('/delete-{id}','Workflow_processesController@delete')->name('Workflow_processes_delete');
	// Route::get('/checkout','Workflow_processesController@checkout')->name('checkout');


});