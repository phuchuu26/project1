<?php
namespace Modules\Workflow\Repositories;
// use Modules\Workflow\Entities\WorkflowProcessGroups;
use Modules\Workflow\Entities\WorkflowProcess;

class WorkflowProcessRepositories{


    public function all(){
        $colection = WorkflowProcess::all();
        return $colection;
    }
    public function insert($data){
        // dd($data);
        // die;
        // $collection = new WorkflowProcess;
        // $collection->create($data->all());

        // $data = Input::all();
        $order = WorkflowProcess::create($data->all());
        $order->save();

        // dd($collection);
        // die;
        // $collection->name  = $data->name;
        // $collection->status  = $data->status;
        // $collection->ordering  = $data->ordering;
        // $collection->save();
    }
    public function find($id){
        $colection = WorkflowProcess::findorFail($id);
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

        $workflow_delete = WorkflowProcess::destroy($id);
    }
}
