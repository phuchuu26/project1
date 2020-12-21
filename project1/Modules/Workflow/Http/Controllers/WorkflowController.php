<?php

namespace Modules\Workflow\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Workflow\Entities\WorkflowProcessGroups;
// use Modules\Core\Entities\Role
// C:\xampp\htdocs\project1\project1\project1\Modules\Workflow\Entities\WorkflowProcessGroups.php

class WorkflowController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        // return view('workflow::index');
        $colection = WorkflowProcessGroups::all();
        return view('workflow::workflow_process_group.index',compact('colection'));
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('workflow::workflow_process_group.add');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
        //
        $collection = new WorkflowProcessGroups;
        $collection->name  = $request->name;
        $collection->status  = $request->status;
        $collection->ordering  = $request->ordering;


        // dd($collection);
        // die;
        $collection->save();


        return redirect()->route('Workflow_processes_group_index');
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
        $colection = WorkflowProcessGroups::findorFail($id);

        return view('workflow::workflow_process_group.edit',compact('colection'));
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {
        //
        $workflow_process_group = WorkflowProcessGroups::findorFail($id);
        $workflow_process_group->name = $request->name;
        $workflow_process_group->status = $request->status;
        $workflow_process_group->ordering = $request->ordering;
        $workflow_process_group->save();
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        //
        $workflow_delete = WorkflowProcessGroups::destroy($id);
        return redirect()->back();
    }
}
