<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workflow_process_groups extends Model
{
    public $connection = 'pgsql';
    protected $table = 'workflow_process_groups';
    public $timestamps = false;
    //use HasFactory;

}
