@extends('workflow::layouts.master')
@section('title','Workflow Process Groups')
@section('content')

<div id="main-content">
        <div class="container-fluid">
            <div class="block-header">
                <div class="row clearfix">
                    <div class="col-md-6 col-sm-12">
                        <h1>Workflow Process Groups</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="{{route('Workflow_processes_group_index')}}">Workflow Process Groups</a></li>

                            </ol>
                        </nav>
                    </div>

                </div>
            </div>

            <div class="row clearfix">
                <div class="col-lg-12">
                    <div class="card" >
                        <div class="header" style="padding-bottom: 0px !important">

                            <a  href="{{route('Workflow_processes_group_create')}}" class="btn btn-round btn-success">Add</a>

                            <ul class="header-dropdown dropdown">



                                <li><a href="javascript:void(0);" class="full-screen"><i class="icon-frame"></i></a></li>
                                <li class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another Action</a></li>
                                        <li><a href="javascript:void(0);">Something else</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <br>
                        <div class="body">
                            <div class="table-responsive">
                                {{-- js-basic-example --}}
                                <table class="table table-hover dataTable table-custom spacing5">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Status</th>
                                            <th>Ordering</th>
                                            <th>Function</th>

                                        </tr>
                                    </thead>

                                    <tbody>
                                        @foreach($colection as $col)

                                        <tr>
                                            <td>{{$col->id}}</td>
                                            <td>{{$col->name}}</td>
                                            <td>{{$col->status}}</td>
                                            <td>{{$col->ordering}}</td>

                                            <td colspan="2">
                                                <a href="{{ route('Workflow_processes_group_edit',['id'=>$col->id]) }}" style="padding-right: 30px;"><i class="fa fa-pencil"></i></a>

                                                <a href="{{ route('Workflow_processes_group_delete',['id'=>$col->id]) }}"><i class="fa fa-trash-o fa-fw"></i></a>
                                            </td>
                                        </tr>

                                        @endforeach

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>



    <script src="{{asset('public/admin/toastr/jquery.min.js')}}"></script>

    <script src="{{asset('public/admin/toastr/toastr.min.js')}}" ></script>




@endsection

