<?php

namespace Modules\Workflow\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
// use Modules\Workflow\Entities\WorkflowProcess;
// use Modules\Workflow\Entities\WorkflowProcessGroups;
use Modules\Workflow\Services\WorkflowProcessService;
use Modules\Workflow\Services\WorkflowProcessGroupService;

class WorkflowProcessController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    // public $test = new WorkflowProcessService();
    protected $workflow_Process_Service;
    protected $workflow_Process_Group_Service;
    public function __construct(WorkflowProcessService $ser, WorkflowProcessGroupService $ser1)
    {

        $this->workflow_Process_Service = $ser;
        $this->workflow_Process_Group_Service = $ser1;
    }
    public function index()
    {
        $collection = $this->workflow_Process_Service->index();
        // dd($collection);
        $group = $collection[1];
        $colection = $collection[0];
        return view('workflow::workflow_process.index',compact('group','colection'));
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        $group = $this->workflow_Process_Group_Service->index();
        return view('workflow::workflow_process.add',compact('group'));
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {

        $group = $this->workflow_Process_Service->store($request);
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
       $data = $this->workflow_Process_Service->edit($id);
       $group = $data[1];
       $workflow_process = $data[0];
    //    dd($group);
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
        $workflow_process = $this->workflow_Process_Service->update($req,$id);
        // dd($workflow_process);
        // $workflow_process = $this->workflow_Process_Service->update($req,$id);
        // $workflow_process->name = $req->name;
        // $workflow_process->code = $req->code;
        // $workflow_process->status = $req->status;
        // $workflow_process->content_type_id = $req->content_type_id;
        // $workflow_process->ordering = $req->ordering;
        // $workflow_process->group_id = $req->group_id;

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
        $workflow_process = $this->workflow_Process_Service->destroy($id);
        return redirect()->back();
        //
    }
}
