@extends('workflow::layouts.master')
@section('title','Edit Workflow Processes Group')
<head>
    <style>
        select#inputGroupSelect01 {
    color: black;
    }
    select.custom-select {
    color: black;
    }
    </style>
</head>
@section('content')

	<div id="main-content">
        <div class="container-fluid">
            <div class="block-header">
                <div class="row clearfix">
                    {{-- <div class="col-md-6 col-sm-12">
                        <h1>Edit</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Oculux</a></li>
                            <li class="breadcrumb-item"><a href="#">Form</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Form Validation</li>
                            </ol>
                        </nav>
                    </div>      --}}

                </div>
            </div>
            <div class="row clearfix">
                <div class="col-md-12">
                    <div class="card">
                        <div class="header">
                            <h2>Edit Workflow Processes Group</h2>
                        </div>
                        <button type="submit" style="float: right;" class="btn btn-success">
                            <a style="color:white" href="{{ route('Workflow_processes_group_index') }}">    Back</a>
                            </button>

                        @if(count($errors) > 0)
                            <div class="alert alert-danger">
                                @foreach($errors->all() as $err)
                                    {{$err}}<br>
                                @endforeach
                            </div>
                        @endif


                        <div class="body">
                            <form id="basic-form" novalidate  method="POST"  action="{{Route('Workflow_processes_group_update',['id' => $colection->id])}}" enctype="multipart/form-data"> {{ csrf_field() }}



                                <div class="input-group mb-3 col-md-3 ">

                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="inputGroupSelect01">Name Workflow</label>
                                    </div>

                                    <input type="text" value="{{ $colection->name }}" name="name" class="form-control" required>

                                </div>
                                <div class="input-group mb-3 col-md-3 ">

                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="inputGroupSelect01">Status</label>
                                    </div>
                                    <select class="custom-select a" id="danhmuc" name="status">
                                            <option value="{{ $colection->status }}"> {{ $colection->status }}</option>


                                                <option value="100">100</option>
                                                <option value="101">101</option>
                                                <option value="200">200</option>
                                                <option value="201">201</option>
                                                <option value="202">202</option>
                                                <option value="203">203</option>
                                                <option value="204">204</option>
                                                <option value="205">205</option>
                                                <option value="206">206</option>
                                                <option value="300">300</option>
                                                <option value="305">305</option>
                                                <option value="400">400</option>
                                                <option value="403">403</option>
                                                <option value="404">404</option>

                                        </select>
                                    <!-- <input type="number" name="status" class="form-control" required> -->

                                </div>
                                <div class="input-group mb-3 col-md-3 ">

                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="inputGroupSelect01">Ordering</label>
                                    </div>

                                    <input type="number" value="{{ $colection->ordering }}" name="ordering" class="form-control" required>

                                </div>



                                {{-- <div class="form-group">
                                    <label>Email Input</label>
                                    <input type="email" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label>Text Area</label>
                                    <textarea class="form-control" rows="5" cols="30" required></textarea>
                                </div> --}}

                                <br>
                                <button type="submit" class="btn btn-success">Update</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

@endsection
