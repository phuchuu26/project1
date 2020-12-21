<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workflow_process extends Model
{
    public $connection = 'pgsql';
    // use HasFactory;
    protected $table = 'workflow_processes';
    public $timestamps = false;
    public function getGroup(){
        return $this->belongsTo('App\Models\Workflow_process_groups','group_id','id');
    }
}
