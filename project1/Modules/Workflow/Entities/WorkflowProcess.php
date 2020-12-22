<?php

namespace Modules\Workflow\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class WorkflowProcess extends Model
{
    use HasFactory;

    protected $fillable = [];

    protected static function newFactory()
    {
        // return \Modules\Workflow\Database\factories\WorkflowProcessFactory::new();
    }
    public $connection = 'pgsql';
    protected $table = 'workflow_processes';
    public $timestamps = false;
    public function getGroup(){
        return $this->belongsTo('Modules\Workflow\Entities\WorkflowProcess','group_id','id');
    }
}
