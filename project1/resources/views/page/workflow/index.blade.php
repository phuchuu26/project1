@extends('admin.layout')
@section('title','Trang quản trị')
@section('admin_content')
<style>
.c3 {
    height: 163px;
}
.c2 {
    height: 163px;
}
.d1 {
    /* height: 46px; */
    height: 164px;
}
.c1{
    float: right;
}
.a1 {
    font-size: 38px;
}
    .body.top_counter.b {
    /* margin: 10px 0px; */
    height: 185px;
    /* text-align: center; */
    /* width: auto; */
    /* height: auto; */
    padding-top: 38px;
    font-size: 22px;
}
small.text-muted {
    /* float: left; */
}
.b1 {
    padding-left: 87px;
    font-size: 14px;
}
    /* Style The Dropdown Button */
    .dropbtn {
      background-color: #4CAF50;
      color: white;
      padding: 16px;
      font-size: 16px;
      border: none;
      cursor: pointer;
    }
    .body.top_counter.a {
    /* margin: 10px 0px; */
    height: 112px;
    padding-top: 30px;
    /* text-align: center; */
    padding-left: 32px;
}

    /* The container <div> - needed to position the dropdown content */
    .dropdown {
      position: relative;
      display: inline-block;
    }

    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }

    /* Links inside the dropdown */
    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    /* Change color of dropdown links on hover */
    .dropdown-content a:hover {background-color: #f1f1f1}

    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {
      display: block;
    }

    /* Change the background color of the dropdown button when the dropdown content is shown */
    .dropdown:hover .dropbtn {
      background-color: #3e8e41;
    }
    </style>
            {{-- ///////////////////////////////// Admin ////////////////////////////// --}}


        <div id="main-content">
            <div class="container-fluid">
                <div class="block-header">
                    <div class="row clearfix">
                        <div class="col-md-6 col-sm-12">
                            <h1>Trang quản trị</h1>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Người quản trị</a></li>
                                    {{-- <li class="breadcrumb-item active" aria-current="page">Finance Performance</li> --}}
                                </ol>
                            </nav>
                        </div>
                        {{-- <div class="col-md-6 col-sm-12 text-right hidden-xs">
                            <a href="javascript:void(0);" class="btn btn-sm btn-primary" title="">Create Campaign</a>
                        </div> --}}
                    </div>
                </div>


    <script src="{{asset('public/admin/toastr/jquery.min.js')}}"></script>

@endsection
