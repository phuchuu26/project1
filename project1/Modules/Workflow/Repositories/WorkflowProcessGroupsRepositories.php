<?php
namespace Modules\Workflow\Repositories;
use Modules\Workflow\Entities\WorkflowProcessGroups;

class WorkflowProcessGroupsRepositories{

    public function test(){

    }
    public function all(){
        $colection = WorkflowProcessGroups::all();
        return $colection;
    }
    public function insert($data){
        // dd($data);
        // die;
        // $collection = new WorkflowProcessGroups;
        // $collection->create($data->all());

        // $data = Input::all();
        $order = WorkflowProcessGroups::create($data->all());
        $order->save();

        // dd($collection);
        // die;
        // $collection->name  = $data->name;
        // $collection->status  = $data->status;
        // $collection->ordering  = $data->ordering;
        // $collection->save();
    }
    public function find($id){
        $colection = WorkflowProcessGroups::findorFail($id);
        return $colection;
    }

    public function update($request, $id){

        $collection = $this->find($id);
        $collection->fill($request->all());
        $collection->save();
        // dd($collection);


        // c2:
        // $post_data = Input::all();
        // HugeForm::find($id)->update($post_data);

        return $collection;

    }

    public function destroy($id){
        $workflow_delete = WorkflowProcessGroups::destroy($id);
    }
}
