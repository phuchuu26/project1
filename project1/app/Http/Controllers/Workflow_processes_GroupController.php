<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Workflow_process_groups;

class Workflow_processes_GroupController extends Controller
{
    //
    public function index(){
        // return view('')
        
        return view('page.workflow.workflow_process_groups.index');
        // C:\xampp\htdocs\project1\project1\project1\resources\views\page\workflow\workflow_process_groups\index.blade.php
    }
    public function create(){

        return view('page.workflow.workflow_process_groups.add');
    }
    
    public function store(Request $request){
        // dd($request->all());
        $collection = new Workflow_process_groups;
        $collection->name  = $request->name;
        $collection->status  = $request->status;
        $collection->ordering  = $request->ordering;
        $collection->save();
        
        
        return redirect()->route('Workflow_processes_group_index');
    }
    
    public function edit($id){

        
        return view('page.workflow.workflow_process_groups.edit');
    }
    
    public function update(Request $request){

        
        return redirect()->route('Workflow_processes_group_index');
    }
}
