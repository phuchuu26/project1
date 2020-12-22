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

Route::prefix('workflow')->group(function() {
    Route::get('/', 'WorkflowProcessGroupsController@index')->name('Workflow_processes_group_index');


    // Route::get('/','WorkflowController@index')
	Route::get('/add','WorkflowProcessGroupsController@create')->name('Workflow_processes_group_create');
	Route::post('/store','WorkflowProcessGroupsController@store')->name('Workflow_processes_group_store');

	Route::get('/edit/{id}','WorkflowProcessGroupsController@edit')->name('Workflow_processes_group_edit');
	Route::post('/updated/{id}','WorkflowProcessGroupsController@update')->name('Workflow_processes_group_update');

    Route::get('/delete-{id}','WorkflowProcessGroupsController@destroy')->name('Workflow_processes_group_delete');
});

Route::group(['prefix' => 'workflow_processes'],function(){

	Route::get('/','WorkflowProcessController@index')->name('Workflow_processes_index');
	Route::get('/add','WorkflowProcessController@create')->name('Workflow_processes_create');
	Route::post('/store','WorkflowProcessController@store')->name('Workflow_processes_store');

	Route::get('/edit/{id}','WorkflowProcessController@edit')->name('Workflow_processes_edit');
	Route::post('/update/{id}','WorkflowProcessController@update')->name('Workflow_processes_update');

    Route::get('/delete-{id}','WorkflowProcessController@destroy')->name('Workflow_processes_delete');


});
