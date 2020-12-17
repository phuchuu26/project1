<!DOCTYPE html>
<html lang="en">

	<head>
		<title>Quản lý | @yield('title')</title>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">


		<link rel="icon" href="{{asset('admin/img/favicon.ico')}}" >
		<!-- VENDOR CSS -->
		<link rel="stylesheet" href="{{asset('admin/css/bootstrap.min.css')}}" >
		<link rel="stylesheet" href="{{asset('admin/css/font-awesome.min.css')}}" >
        <link rel="stylesheet" href="{{asset('admin/css/vivify.min.css')}}" >
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.css">

		<link rel="stylesheet" href="{{asset('admin/css/c3.min.css')}}" >
		<link rel="stylesheet" href="{{asset('admin/css/morris.css')}}"  >
        {{-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> --}}

		<!-- MAIN CSS -->
		<link rel="stylesheet" href="{{asset('admin/css/site.min.css')}}" >
        <link rel="stylesheet" href="{{asset('vendor/chartjs/Chart.css') }}">
		{{-- upload --}}
		<link rel="stylesheet" href="{{asset('admin/css/dropify.min.css')}}" >





	{{-- Bảng table css --}}

	<link rel="stylesheet" href="{{asset('admin/css/dataTables.bootstrap4.min.css')}}" >
	<link rel="stylesheet" href="{{asset('admin/css/dataTables.fixedcolumns.bootstrap4.min.css')}}" >
	<link rel="stylesheet" href="{{asset('admin/css/dataTables.fixedheader.bootstrap4.min.css')}}" >
	<link rel="stylesheet" href="{{asset('admin/css/sweetalert.css')}}" >


	<style>

	    td.details-control {
	    background: url('{{asset('admin/img/details_open.png')}}')/*tpa=http://puffintheme.com/demo/oculux/assets/images/details_open.png*/ no-repeat center center;
	    cursor: pointer;
	}
	    tr.shown td.details-control {
	        background: url('{{asset('admin/css/details_close.png')}}')/*tpa=http://puffintheme.com/demo/oculux/assets/images/details_close.png*/ no-repeat center center;
	    }
        /* div#main-content {
    margin: 0;
} */
	</style>

		{{-- Toast --}}
		     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.css" />


    		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" />

	{{--  --}}

	</head>





	<body class="theme-cyan font-montserrat light_version">




@include('page.workflow.header')

@yield('admin_content')


	    <!-- Javascript -->
		<script src="{{asset('admin/js/libscripts.bundle.js')}}" ></script>
		<script src="{{asset('admin/js/vendorscripts.bundle.js')}}" ></script>

		<script src="{{asset('admin/js/c3.bundle.js')}}" ></script>
		<script src="{{asset('admin/js/knob.bundle.js')}}" ></script><!-- Jquery Knob-->

		<script src="{{asset('admin/js/mainscripts.bundle.js')}}" ></script>
		<script src="{{asset('admin/js/index6.js')}}" ></script>

		{{-- danh sach js --}}
		<script src="{{asset('admin/js/datatablescripts.bundle.js')}}"></script>
		<script src="{{asset('admin/js/dataTables.buttons.min.js')}}" ></script>
		<script src="{{asset('admin/js/buttons.bootstrap4.min.js')}}" ></script>
		<script src="{{asset('admin/js/buttons.colVis.min.js')}}" ></script>
		<script src="{{asset('admin/js/buttons.html5.min.js')}}" ></script>
		<script src="{{asset('admin/js/buttons.print.min.js')}}" ></script>
		<script src="{{asset('admin/js/sweetalert.min.js')}}" ></script><!-- SweetAlert Plugin Js -->
         <script src="{{asset('admin/js/jquery-datatable.js')}}" ></script>

            <script src="{{asset('admin/js/dropify.js')}}" ></script>
		<script src="{{asset('admin/js/dropify-1.js')}}" ></script>

		{{-- danh sach js --}}

		<script src="{{asset('ckeditor5-build-classic/ckeditor.js')}}" ></script>

        <script>
            $(".theme-cyan font-montserrat nimbus-is-editor").addClass( ".light_version" );
            ClassicEditor
                .create( document.querySelector( '#editor' ) )
                .catch( error => {
                    console.error( error );
                } );
        </script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js" type="text/javascript"></script>




	</body>
</html>
