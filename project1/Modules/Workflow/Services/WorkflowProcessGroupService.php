<?php
namespace Modules\Workflow\Services;
use Illuminate\Http\Request;
use Modules\Workflow\Repositories\WorkflowProcessGroupsRepositories;

class WorkflowProcessGroupService
{
    // protected $workflow_Process_Groups_Repositories = new WorkflowProcessGroupsRepositories() ;
    protected $workflow_Process_Groups_Repositories ;
    public function __construct(){
        $this->workflow_Process_Groups_Repositories = new WorkflowProcessGroupsRepositories() ;
    }
    // public function __construct(WorkflowProcessGroupsRepositories $wfgr){
    //     $this->workflow_Process_Groups_Repositories = $wfgr;
    // }

    public function index(){
        $colection = $this->workflow_Process_Groups_Repositories->all();
        // dd($colection);
        return $colection;
    }

    // public function find($id){
    //     $colection = $this->workflow_Process_Groups_Repositories->find($id);
    //     return $colection;
    // }

    public function store(Request $request){
        // dd($request);
        $collection = $this->workflow_Process_Groups_Repositories->insert($request);
        return $collection;
    }

    public function edit($id){
    $colection = $this->workflow_Process_Groups_Repositories->find($id);
        return $colection;
    }

    public function update(Request $request,$id){

        $collection = $this->workflow_Process_Groups_Repositories->update($request,$id);

        return $collection;
    }

    public function destroy($id){
        $workflow_delete = $this->workflow_Process_Groups_Repositories->destroy($id);
    }
}
