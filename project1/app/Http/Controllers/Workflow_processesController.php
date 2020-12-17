<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Workflow_processesController extends Controller
{
    //
    public function index(){
        // return view('')
        
        return view('page.workflow.workflow_processes.index');
    }
    public function create(){

        return view('page.workflow.workflow_processes.add');
    }
}
