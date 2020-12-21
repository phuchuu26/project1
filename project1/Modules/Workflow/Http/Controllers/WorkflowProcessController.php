<?php

namespace Modules\Workflow\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Workflow\Entities\WorkflowProcess;
use Modules\Workflow\Entities\WorkflowProcessGroups;

class WorkflowProcessController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        $group = WorkflowProcessGroups::all();
        $colection = WorkflowProcess::all();
        return view('workflow::workflow_process.index',compact('group','colection'));
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        $group = WorkflowProcessGroups::all();
        return view('workflow::workflow_process.add',compact('group'));
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
        //
        $new = new WorkflowProcess;
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

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('workflow::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        $group = WorkflowProcessGroups::all();
        $workflow_process = WorkflowProcess::findorFail($id);
        return view('workflow::workflow_process.edit',compact('group','workflow_process'));
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $req, $id)
    {
        //
        $workflow_process = WorkflowProcess::find($id);
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

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        $workflow_process = WorkflowProcess::destroy($id);
        return redirect()->back();
        //
    }
}
