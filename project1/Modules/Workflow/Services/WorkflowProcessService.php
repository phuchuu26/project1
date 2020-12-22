<?php
namespace Modules\Workflow\Services;
use Illuminate\Http\Request;
use Modules\Workflow\Repositories\WorkflowProcessRepositories;
use Modules\Workflow\Repositories\WorkflowProcessGroupsRepositories;

class WorkflowProcessService
{
    protected $workflow_Process_Repositories;
    protected $workflow_Process_Groups_Repositories;

    public function __construct(WorkflowProcessRepositories $wfgr,WorkflowProcessGroupsRepositories $wfgr1){
        $this->workflow_Process_Repositories = $wfgr;
        $this->workflow_Process_Groups_Repositories = $wfgr1;
    }

    public function index(){
        $colection[] = $this->workflow_Process_Repositories->all();
        // $colection[] = $this->workflow_Process_Groups_Repositories->all();
        array_push($colection,$this->workflow_Process_Groups_Repositories->all());
        // dd($colection[1]);
        // die;
        return $colection;
    }

    // public function find($id){
    //     $colection = $this->workflow_Process_Repositories->find($id);
    //     return $colection;
    // }

    public function store(Request $request){
        // dd($request);
        $collection = $this->workflow_Process_Repositories->insert($request);
        return $collection;
    }

    public function edit($id){
        $colection[] = $this->workflow_Process_Repositories->find($id);
         array_push($colection,  $this->workflow_Process_Groups_Repositories->all() );
        return $colection;
    }

    public function update(Request $request,$id){

        $collection = $this->workflow_Process_Repositories->update($request,$id);

        return $collection;
    }

    public function destroy($id){
        $workflow_delete = $this->workflow_Process_Repositories->destroy($id);
    }
}
