<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Workflow_process_groups;

class Workflow_processes_GroupController extends Controller
{
    //
    public function index(){
        // return view('')
        $colection = Workflow_process_groups::all();
        return view('page.workflow.workflow_process_groups.index',COMPACT('colection'));
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


        // dd($collection);
        // die;
        $collection->save();


        return redirect()->route('Workflow_processes_group_index');
    }

    public function edit($id){
        $colection = Workflow_process_groups::findorFail($id);

        return view('page.workflow.workflow_process_groups.edit',compact('colection'));
    }

    public function update(Request $request,$id){
        $workflow_process_group = Workflow_process_groups::findorFail($id);
        $workflow_process_group->name = $request->name;
        $workflow_process_group->status = $request->status;
        $workflow_process_group->ordering = $request->ordering;
        $workflow_process_group->save();
        return redirect()->back();
    }

    public function delete($id){
        $bookcompany = Workflow_process_groups::destroy($id);
        return redirect()->back();
    }
}
