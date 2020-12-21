<?php

namespace Modules\Workflow\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class WorkflowProcessGroups extends Model
{
    use HasFactory;

    protected $fillable = [];

    protected static function newFactory()
    {
        // return \Modules\Workflow\Database\factories\WorkflowProcessGroupsFactory::new();
    }

    public $connection = 'pgsql';
    protected $table = 'workflow_process_groups';
    public $timestamps = false;
}
