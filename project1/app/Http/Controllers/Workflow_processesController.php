<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Workflow_process_groups;
use App\Models\Workflow_process;
class Workflow_processesController extends Controller
{
    //
    public function index(){
        // return view('')
        $group = Workflow_process_groups::all();
        $colection = Workflow_process::all();
        return view('page.workflow.workflow_processes.index',compact('colection','group'));
    }
    public function create(){
        // echo 'a';
        // die;

        $group = Workflow_process_groups::all();
        // dd($group);
        return view('page.workflow.workflow_processes.add',compact('group'));
    }
    public function store(Request $request){
        // $group = Workflow_process_groups::all();
        // dd($group);
        $new = new Workflow_process;
        // $new->id = 1;
        $new->type_id = $request->type_id;
        $new->name = $request->name;
        $new->code = $request->code;
        $new->status = $request->status;
        $new->content_type_id = $request->content_type_id;
        $new->ordering = $request->ordering;
        $new->group_id = $request->group_id;

        // dd($new);
        // die;
        $new->save();
        return redirect()->route('Workflow_processes_index');
    }

    public function edit(Request $req, $id){
        $group = Workflow_process_groups::all();
        $workflow_process = Workflow_process::findorFail($id);
        return view('page.workflow.workflow_processes.edit',compact('workflow_process','group'));
    }
    public function update(Request $req,$id ){
        $workflow_process = Workflow_process::find($id);
        // dd($workflow_process);
        $workflow_process->type_id = $req->type_id;
        $workflow_process->name = $req->name;
        $workflow_process->code = $req->code;
        $workflow_process->status = $req->status;
        $workflow_process->content_type_id = $req->content_type_id;
        $workflow_process->ordering = $req->ordering;
        $workflow_process->group_id = $req->group_id;

        $workflow_process->save();
        return redirect()->back();
    }

    public function delete($id){
        $workflow_process = Workflow_process::destroy($id);
        return redirect()->back();
    }
}
