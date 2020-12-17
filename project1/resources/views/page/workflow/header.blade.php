<!-- Page Loader -->
<head>
    <style>



        ul.nav.navbar-nav {
    font-size: 25px;
    margin-top: -6px!important;

}
i.fa.fa-commenting {
    position: absolute;
    /* top: 13px;
    left: 7px; */
}
i.fa.fa-commenting {
    top: 7px;
    right: 3px;
}

.so {
    border: 0.5px solid red;
    /* padding-left: 3px; */
    padding-left: 7px;
    width: 20px!important;
    color: #e74c3c;
    /* opacity: 0.9; */
    /* padding-bottom: -13px; */
    position: absolute;
    top: 22px;
    right: -1px;

    background-color: darkturquoise;
    border-radius: 50px;
    font-size: 15px;
    max-height: 20px;
    max-width: -3px;
    width: 17px;
    padding-left: 5px;

}
    </style>
</head>
<div class="page-loader-wrapper">
	            <div class="loader">
	                <div class="bar1"></div>
	                <div class="bar2"></div>
	                <div class="bar3"></div>
	                <div class="bar4"></div>
	                <div class="bar5"></div>
	            </div>
	    </div>

	    <!-- Theme Setting -->
	    <div class="themesetting">
	        <a href="javascript:void(0);" class="theme_btn"><i class="icon-magic-wand"></i></a>
	        <div class="card theme_color">
	            <div class="header">
	                <h2>Chỉnh sửa màu chữ</h2>
	            </div>
	            <ul class="choose-skin list-unstyled mb-0">
	                <li data-theme="green"><div class="green"></div></li>
	                <li data-theme="orange"><div class="orange"></div></li>
	                <li data-theme="blush"><div class="blush"></div></li>
	                <li data-theme="cyan" class="active"><div class="cyan"></div></li>
	                <li data-theme="indigo"><div class="indigo"></div></li>
	                <li data-theme="red"><div class="red"></div></li>
	            </ul>
	        </div>
	        <div class="card font_setting">
	            <div class="header">
	                <h2>Chỉnh sửa kiểu chữ</h2>
	            </div>
	            <div>
	                <div class="fancy-radio mb-2">
	                    <label><input name="font" value="font-krub" type="radio"><span><i></i>Krub Google font</span></label>
	                </div>
	                <div class="fancy-radio mb-2">
	                    <label><input name="font" value="font-montserrat" type="radio" checked><span><i></i>Montserrat Google font</span></label>
	                </div>
	                <div class="fancy-radio">
	                    <label><input name="font" value="font-roboto" type="radio"><span><i></i>Robot Google font</span></label>
	                </div>
	            </div>
	        </div>
	        <div class="card setting_switch">
	            <div class="header">
	                <h2>Chỉnh sửa bố cục và màu giao diện</h2>
	            </div>
	            <ul class="list-group">
	                <li class="list-group-item">
	                    Sáng / Tối
	                    <div class="float-right">
	                        <label class="switch">
	                            <input type="checkbox" class="lv-btn">
	                            <span class="slider round"></span>
	                        </label>
	                    </div>
	                </li>
	                <li class="list-group-item">
	                    Đổi bố cục thanh bên
	                    <div class="float-right">
	                        <label class="switch">
	                            <input type="checkbox" class="rtl-btn">
	                            <span class="slider round"></span>
	                        </label>
	                    </div>
	                </li>
	                <li class="list-group-item">
	                    Ẩn thanh bên
	                    <div class="float-right">
	                        <label class="switch">
	                            <input type="checkbox" class="hmenu-btn" >
	                            <span class="slider round"></span>
	                        </label>
	                    </div>
	                </li>
	                <li class="list-group-item">
	                    Thu gọn thanh bên
	                    <div class="float-right">
	                        <label class="switch">
	                            <input type="checkbox" class="mini-sidebar-btn">
	                            <span class="slider round"></span>
	                        </label>
	                    </div>
	                </li>
	            </ul>
	        </div>
	        <div class="card">
	            <div class="form-group">
	                <label class="d-block">Độ trễ băng thông <span class="float-right">12%</span></label>
	                <div class="progress progress-xxs">
	                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100" style="width: 12%;"></div>
	                </div>
	            </div>
	            <div class="form-group">
	                <label class="d-block">Tốc độ Băng thông <span class="float-right">75%</span></label>
	                <div class="progress progress-xxs">
	                    <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;"></div>
	                </div>
	            </div>
	        </div>
	    </div>

	    <!-- Overlay For Sidebars -->
    	<div class="overlay"></div>

    	<div id="wrapper">
	        <nav class="navbar top-navbar">
	            <div class="container-fluid">

	                <div class="navbar-left">
	                    <div class="navbar-btn">
	                        <a href="" ><img src="{{asset('admin/css/icon.svg')}}"  alt="Admin Logo" class="img-fluid logo"></a>
	                        <button type="button" class="btn-toggle-offcanvas"><i class="lnr lnr-menu fa fa-bars"></i></button>
	                    </div>
	                    {{-- <ul class="nav navbar-nav">
	                        <li class="dropdown">
	                            <a href="javascript:void(0);" class="dropdown-toggle icon-menu" data-toggle="dropdown">
	                                <i class="icon-envelope"></i>
	                                <span class="notification-dot bg-green">4</span>
	                            </a>
	                            <ul class="dropdown-menu right_chat email vivify fadeIn">
	                                <li class="header green">You have 4 New eMail</li>
	                                <li>
	                                    <a href="javascript:void(0);">
	                                        <div class="media">
	                                            <div class="avtar-pic w35 bg-red"><span>FC</span></div>
	                                            <div class="media-body">
	                                                <span class="name">James Wert <small class="float-right text-muted">Just now</small></span>
	                                                <span class="message">Update GitHub</span>
	                                            </div>
	                                        </div>
	                                    </a>
	                                </li>
	                                <li>
	                                    <a href="javascript:void(0);">
	                                        <div class="media">
	                                            <div class="avtar-pic w35 bg-indigo"><span>FC</span></div>
	                                            <div class="media-body">
	                                                <span class="name">Folisise Chosielie <small class="float-right text-muted">12min ago</small></span>
	                                                <span class="message">New Messages</span>
	                                            </div>
	                                        </div>
	                                    </a>
	                                </li>
	                                <li>
	                                    <a href="javascript:void(0);">
	                                        <div class="media">
	                                            <img class="media-object " src="{{asset('admin/img/avatar5.jpg')}}"  alt="">
	                                            <div class="media-body">
	                                                <span class="name">Louis Henry <small class="float-right text-muted">38min ago</small></span>
	                                                <span class="message">Design bug fix</span>
	                                            </div>
	                                        </div>
	                                    </a>
	                                </li>
	                                <li>
	                                    <a href="javascript:void(0);">
	                                        <div class="media mb-0">
	                                            <img class="media-object " src="{{asset('admin/img/avatar2.jpg')}}"  alt="">
	                                            <div class="media-body">
	                                                <span class="name">Debra Stewart <small class="float-right text-muted">2hr ago</small></span>
	                                                <span class="message">Fix Bug</span>
	                                            </div>
	                                        </div>
	                                    </a>
	                                </li>
	                            </ul>
	                        </li>
	                        <li class="dropdown">
	                            <a href="javascript:void(0);" class="dropdown-toggle icon-menu" data-toggle="dropdown">
	                                <i class="icon-bell"></i>
	                                <span class="notification-dot bg-azura">4</span>
	                            </a>
	                            <ul class="dropdown-menu feeds_widget vivify fadeIn">
	                                <li class="header blue">You have 4 New Notifications</li>
	                                <li>
	                                    <a href="javascript:void(0);">
	                                        <div class="feeds-left bg-red"><i class="fa fa-check"></i></div>
	                                        <div class="feeds-body">
	                                            <h4 class="title text-danger">Issue Fixed <small class="float-right text-muted">9:10 AM</small></h4>
	                                            <small>WE have fix all Design bug with Responsive</small>
	                                        </div>
	                                    </a>
	                                </li>
	                                <li>
	                                    <a href="javascript:void(0);">
	                                        <div class="feeds-left bg-info"><i class="fa fa-user"></i></div>
	                                        <div class="feeds-body">
	                                            <h4 class="title text-info">New User <small class="float-right text-muted">9:15 AM</small></h4>
	                                            <small>I feel great! Thanks team</small>
	                                        </div>
	                                    </a>
	                                </li>
	                                <li>
	                                    <a href="javascript:void(0);">
	                                        <div class="feeds-left bg-orange"><i class="fa fa-question-circle"></i></div>
	                                        <div class="feeds-body">
	                                            <h4 class="title text-warning">Server Warning <small class="float-right text-muted">9:17 AM</small></h4>
	                                            <small>Your connection is not private</small>
	                                        </div>
	                                    </a>
	                                </li>
	                                <li>
	                                    <a href="javascript:void(0);">
	                                        <div class="feeds-left bg-green"><i class="fa fa-thumbs-o-up"></i></div>
	                                        <div class="feeds-body">
	                                            <h4 class="title text-success">2 New Feedback <small class="float-right text-muted">9:22 AM</small></h4>
	                                            <small>It will give a smart finishing to your site</small>
	                                        </div>
	                                    </a>
	                                </li>
	                            </ul>
	                        </li>
	                        <li class="dropdown language-menu">
	                            <a href="javascript:void(0);" class="dropdown-toggle icon-menu" data-toggle="dropdown">
	                                <i class="fa fa-language"></i>
	                            </a>
	                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
	                                <a class="dropdown-item pt-2 pb-2" href="#"><img src="{{asset('admin/css/us.svg')}}"  class="w20 mr-2 rounded-circle"> US English</a>
	                                <a class="dropdown-item pt-2 pb-2" href="#"><img src="{{asset('admin/css/gb.svg')}}" " class="w20 mr-2 rounded-circle"> UK English</a>
	                                <div class="dropdown-divider"></div>
	                                <a class="dropdown-item pt-2 pb-2" href="#"><img src="{{asset('admin/css/russia.svg')}}"  class="w20 mr-2 rounded-circle"> Russian</a>
	                                <a class="dropdown-item pt-2 pb-2" href="#"><img src="{{asset('admin/css/arabia.svg')}}"  class="w20 mr-2 rounded-circle"> Arabic</a>
	                                <a class="dropdown-item pt-2 pb-2" href="#"><img src="{{asset('admin/css/france.svg')}}"  class="w20 mr-2 rounded-circle"> French</a>
	                            </div>
	                        </li>
	                        <li><a href="javascript:void(0);" class="megamenu_toggle icon-menu" title="Mega Menu">Mega</a></li>
	                        <li class="p_social"><a href="page-social.html"  class="social icon-menu" title="News">Social</a></li>
	                        <li class="p_news"><a href="page-news.html"  class="news icon-menu" title="News">News</a></li>
	                        <li class="p_blog"><a href="page-blog.html"  class="blog icon-menu" title="Blog">Blog</a></li>
	                    </ul> --}}
	                </div>

	                <div class="navbar-right">
	                    <div id="navbar-menu">
	                        <ul class="nav navbar-nav">
                            <li><a href="" class="icon-menu" title="Quay về trang khách hàng"><i class="fa fa-home" aria-hidden="true"></i></a></li>
	                            <li><a href="javascript:void(0);" class="search_toggle icon-menu" title="Search Result"><i class="icon-magnifier"></i></a></li>
	                            {{-- <li><a href="javascript:void(0);" class="right_toggle icon-menu" title="Right Menu"><i class="icon-bubbles"></i><span class="notification-dot bg-pink">2</span></a></li> --}}
                                <li><a style="margin-right:0px;" href=""  class="icon-menu">
                                    <i class="fa fa-commenting" style="margin-bottom: -19px;" aria-hidden="true">
                                    </i>
                                    {{-- fa fa-commenting --}}
                                        <div class="so">


                                        </div>

                            </a>

                            </li>
	                            <li><a style="margin-right:0px;" href=""  class="icon-menu"><i class="icon-power"></i></a></li>
	                        </ul>
	                    </div>
	                </div>
	            </div>
	            <div class="progress-container"><div class="progress-bar" id="myBar"></div></div>
	        </nav>

	        {{-- <div class="search_div">
	            <div class="card">
	                <div class="body">
	                    <form id="navbar-search" class="navbar-form search-form">
	                        <div class="input-group mb-0">
	                            <input type="text" class="form-control" placeholder="Search...">
	                            <div class="input-group-append">
	                                <span class="input-group-text"><i class="icon-magnifier"></i></span>
	                                <a href="javascript:void(0);" class="search_toggle btn btn-danger"><i class="icon-close"></i></a>
	                            </div>
	                        </div>
	                    </form>
	                </div>
	            </div>
	            <span>Search Result <small class="float-right text-muted">About 90 results (0.47 seconds)</small></span>
	            <div class="table-responsive">
	                <table class="table table-hover table-custom spacing5">
	                    <tbody>
	                        <tr>
	                            <td class="w40">
	                                <span>01</span>
	                            </td>
	                            <td>
	                                <div class="d-flex align-items-center">
	                                    <div class="avtar-pic w35 bg-red" data-toggle="tooltip" data-placement="top" title="" data-original-title="Avatar Name"><span>SS</span></div>
	                                    <div class="ml-3">
	                                        <a href="page-invoices-detail.html"  title="">South Shyanne</a>
	                                        <p class="mb-0">south.shyanne@example.com</p>
	                                    </div>
	                                </div>
	                            </td>
	                        </tr>
	                        <tr>
	                            <td>
	                                <span>02</span>
	                            </td>
	                            <td>
	                                <div class="d-flex align-items-center">
	                                    <img src="{{asset('admin/img/avatar2.jpg')}}"  data-toggle="tooltip" data-placement="top" title="" alt="Avatar" class="w35 h35 rounded" data-original-title="Avatar Name">
	                                    <div class="ml-3">
	                                        <a href="javascript:void(0);" title="">Zoe Baker</a>
	                                        <p class="mb-0">zoe.baker@example.com</p>
	                                    </div>
	                                </div>
	                            </td>
	                        </tr>
	                        <tr>
	                            <td>
	                                <span>03</span>
	                            </td>
	                            <td>
	                                <div class="d-flex align-items-center">
	                                        <div class="avtar-pic w35 bg-indigo" data-toggle="tooltip" data-placement="top" title="" data-original-title="Avatar Name"><span>CB</span></div>
	                                    <div class="ml-3">
	                                        <a href="javascript:void(0);" title="">Colin Brown</a>
	                                        <p class="mb-0">colinbrown@example.com</p>
	                                    </div>
	                                </div>
	                            </td>
	                        </tr>
	                        <tr>
	                            <td>
	                                <span>04</span>
	                            </td>
	                            <td>
	                                <div class="d-flex align-items-center">
	                                    <div class="avtar-pic w35 bg-green" data-toggle="tooltip" data-placement="top" title="" data-original-title="Avatar Name"><span>KG</span></div>
	                                    <div class="ml-3">
	                                        <a href="javascript:void(0);" title="">Kevin Gill</a>
	                                        <p class="mb-0">kevin.gill@example.com</p>
	                                    </div>
	                                </div>
	                            </td>
	                        </tr>
	                        <tr>
	                            <td>
	                                <span>05</span>
	                            </td>
	                            <td>
	                                <div class="d-flex align-items-center">
	                                    <img src="{{asset('admin/img/avatar5.jpg')}}"  data-toggle="tooltip" data-placement="top" title="" alt="Avatar" class="w35 h35 rounded" data-original-title="Avatar Name">
	                                    <div class="ml-3">
	                                        <a href="javascript:void(0);" title="">Brandon Smith</a>
	                                        <p class="mb-0">Maria.gill@example.com</p>
	                                    </div>
	                                </div>
	                            </td>
	                        </tr>
	                        <tr>
	                            <td>
	                                <span>06</span>
	                            </td>
	                            <td>
	                                <div class="d-flex align-items-center">
	                                    <img src="{{asset('admin/img/avatar6.jpg')}}"  data-toggle="tooltip" data-placement="top" title="" alt="Avatar" class="w35 h35 rounded" data-original-title="Avatar Name">
	                                    <div class="ml-3">
	                                        <a href="javascript:void(0);" title="">Kevin Baker</a>
	                                        <p class="mb-0">kevin.baker@example.com</p>
	                                    </div>
	                                </div>
	                            </td>
	                        </tr>
	                        <tr>
	                            <td>
	                                <span>07</span>
	                            </td>
	                            <td>
	                                <div class="d-flex align-items-center">
	                                    <img src="{{asset('admin/img/avatar2.jpg')}}"  data-toggle="tooltip" data-placement="top" title="" alt="Avatar" class="w35 h35 rounded" data-original-title="Avatar Name">
	                                    <div class="ml-3">
	                                        <a href="javascript:void(0);" title="">Zoe Baker</a>
	                                        <p class="mb-0">zoe.baker@example.com</p>
	                                    </div>
	                                </div>
	                            </td>
	                        </tr>
	                    </tbody>
	                </table>
	            </div>
	        </div> --}}

	        {{-- <div id="megamenu" class="megamenu particles_js">
	            <a href="javascript:void(0);" class="megamenu_toggle btn btn-danger"><i class="icon-close"></i></a>

	            <div class="container">
	                <div class="row clearfix">

	                    <div class="col-12">
	                        <ul class="q_links">
	                            <li><a href="app-inbox.html"><i class="icon-envelope"></i><span>Inbox</span></a></li>
	                            <li><a href="app-chat.html" ></i><span>Messenger</span></a></li>
	                            <li><a href="app-calendar.html" ><i class="icon-calendar"></i><span>Event</span></a></li>
	                            <li><a href="page-profile.html" ><i class="icon-user"></i><span>Profile</span></a></li>
	                            <li><a href="page-invoices.html" ><i class="icon-printer"></i><span>Invoice</span></a></li>
	                            <li><a href="page-timeline.html" ><i class="icon-list"></i><span>Timeline</span></a></li>
	                        </ul>
	                    </div>

			            <div class="col-md-4 col-sm-12">
			                <div class="card w_card3">
			                    <div class="body">
			                        <div class="text-center"><i class="icon-picture text-info"></i>
			                            <h4 class="m-t-25 mb-0">104 Picture</h4>
			                            <p>Your gallery download complete</p>
			                            <a href="javascript:void(0);" class="btn btn-info btn-round">Download now</a>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div class="col-md-4 col-sm-12">
			                <div class="card w_card3">
			                    <div class="body">
			                        <div class="text-center"><i class="icon-diamond text-success"></i>
			                            <h4 class="m-t-25 mb-0">813 Point</h4>
			                            <p>You are doing great job!</p>
			                            <a href="javascript:void(0);" class="btn btn-success btn-round">Read now</a>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div class="col-md-4 col-sm-12">
			                <div class="card w_card3">
			                    <div class="body">
			                        <div class="text-center"><i class="icon-social-twitter text-primary"></i>
			                            <h4 class="m-t-25 mb-0">3,756</h4>
			                            <p>New Followers on Twitter</p>
			                            <a href="javascript:void(0);" class="btn btn-primary btn-round">Find more</a>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div class="col-12">
			                <ul class="list-group">
			                    <li class="list-group-item">
			                        Anyone send me a message
			                        <div class="float-right">
			                            <label class="switch">
			                                <input type="checkbox" checked="">
			                                <span class="slider round"></span>
			                            </label>
			                        </div>
			                    </li>
			                    <li class="list-group-item">
			                        Anyone seeing my profile page
			                        <div class="float-right">
			                            <label class="switch">
			                                <input type="checkbox" checked="">
			                                <span class="slider round"></span>
			                            </label>
			                        </div>
			                    </li>
			                    <li class="list-group-item">
			                        Anyone posts a comment on my post
			                        <div class="float-right">
			                            <label class="switch">
			                                <input type="checkbox">
			                                <span class="slider round"></span>
			                            </label>
			                        </div>
			                    </li>
			                </ul>
			            </div>
	                </div>
	            </div>

	            <div id="particles-js"></div>
	        </div> --}}

	        {{-- <div id="rightbar" class="rightbar">
	            <div class="body">
	                <ul class="nav nav-tabs2">
	                    <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#Chat-one">Chat</a></li>
	                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Chat-list">List</a></li>
	                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Chat-groups">Groups</a></li>
	                </ul>
	                <hr>

	                <div class="tab-content">

	                    <div class="tab-pane vivify fadeIn delay-100 active" id="Chat-one">
	                        <div class="slim_scroll">
	                            <div class="chat_detail">
	                                <ul class="chat-widget clearfix">
	                                    <li class="left float-left">
	                                        <div class="avtar-pic w35 bg-pink"><span>KG</span></div>
	                                        <div class="chat-info">
	                                            <span class="message">Hello, John<br>What is the update on Project X?</span>
	                                        </div>
	                                    </li>
	                                    <li class="right">
	                                        <img src="{{asset('admin/img/avatar1.jpg')}}"  class="rounded" alt="">
	                                        <div class="chat-info">
	                                            <span class="message">Hi, Alizee<br> It is almost completed. I will send you an email later today.</span>
	                                        </div>
	                                    </li>
	                                    <li class="left float-left">
	                                        <div class="avtar-pic w35 bg-pink"><span>KG</span></div>
	                                        <div class="chat-info">
	                                            <span class="message">That's great. Will catch you in evening.</span>
	                                        </div>
	                                    </li>
	                                    <li class="right">
	                                        <img src="{{asset('admin/img/avatar1.jpg')}}"  class="rounded" alt="">
	                                        <div class="chat-info">
	                                            <span class="message">Sure we'will have a blast today.</span>
	                                        </div>
	                                    </li>
	                                </ul>
	                                <div class="input-group p-t-15">
	                                    <textarea rows="3" class="form-control" placeholder="Enter text here..."></textarea>
	                                </div>
	                            </div>
	                        </div>
	                    </div>

	                    <div class="tab-pane vvivify fadeIn delay-100" id="Chat-list">
	                        <ul class="right_chat list-unstyled mb-0">
	                            <li class="offline">
	                                <a href="javascript:void(0);">
	                                    <div class="media">
	                                        <div class="avtar-pic w35 bg-red"><span>FC</span></div>
	                                        <div class="media-body">
	                                            <span class="name">Folisise Chosielie</span>
	                                            <span class="message">offline</span>
	                                            <span class="badge badge-outline status"></span>
	                                        </div>
	                                    </div>
	                                </a>
	                            </li>
	                            <li class="online">
	                                <a href="javascript:void(0);">
	                                    <div class="media">
	                                        <img class="media-object " src="{{asset('admin/img/avatar3.jpg')}}"  alt="">
	                                        <div class="media-body">
	                                            <span class="name">Marshall Nichols</span>
	                                            <span class="message">online</span>
	                                            <span class="badge badge-outline status"></span>
	                                        </div>
	                                    </div>
	                                </a>
	                            </li>
	                            <li class="online">
	                                <a href="javascript:void(0);">
	                                    <div class="media">
	                                        <div class="avtar-pic w35 bg-red"><span>FC</span></div>
	                                        <div class="media-body">
	                                            <span class="name">Louis Henry</span>
	                                            <span class="message">online</span>
	                                            <span class="badge badge-outline status"></span>
	                                        </div>
	                                    </div>
	                                </a>
	                            </li>
	                            <li class="online">
	                                <a href="javascript:void(0);">
	                                    <div class="media">
	                                        <div class="avtar-pic w35 bg-orange"><span>DS</span></div>
	                                        <div class="media-body">
	                                            <span class="name">Debra Stewart</span>
	                                            <span class="message">online</span>
	                                            <span class="badge badge-outline status"></span>
	                                        </div>
	                                    </div>
	                                </a>
	                            </li>
	                            <li class="offline">
	                                <a href="javascript:void(0);">
	                                    <div class="media">
	                                        <div class="avtar-pic w35 bg-green"><span>SW</span></div>
	                                        <div class="media-body">
	                                            <span class="name">Lisa Garett</span>
	                                            <span class="message">offline since May 12</span>
	                                            <span class="badge badge-outline status"></span>
	                                        </div>
	                                    </div>
	                                </a>
	                            </li>
	                            <li class="online">
	                                <a href="javascript:void(0);">
	                                    <div class="media">
	                                        <img class="media-object " src="{{asset('admin/img/avatar5.jpg')}}"  alt="">
	                                        <div class="media-body">
	                                            <span class="name">Debra Stewart</span>
	                                            <span class="message">online</span>
	                                            <span class="badge badge-outline status"></span>
	                                        </div>
	                                    </div>
	                                </a>
	                            </li>
	                            <li class="offline">
	                                <a href="javascript:void(0);">
	                                    <div class="media">
	                                        <img class="media-object " src="{{asset('admin/img/avatar2.jpg')}}"  alt="">
	                                        <div class="media-body">
	                                            <span class="name">Lisa Garett</span>
	                                            <span class="message">offline since Jan 18</span>
	                                            <span class="badge badge-outline status"></span>
	                                        </div>
	                                    </div>
	                                </a>
	                            </li>
	                            <li class="online">
	                                <a href="javascript:void(0);">
	                                    <div class="media">
	                                        <div class="avtar-pic w35 bg-indigo"><span>FC</span></div>
	                                        <div class="media-body">
	                                            <span class="name">Louis Henry</span>
	                                            <span class="message">online</span>
	                                            <span class="badge badge-outline status"></span>
	                                        </div>
	                                    </div>
	                                </a>
	                            </li>
	                            <li class="online">
	                                <a href="javascript:void(0);">
	                                    <div class="media">
	                                        <div class="avtar-pic w35 bg-pink"><span>DS</span></div>
	                                        <div class="media-body">
	                                            <span class="name">Debra Stewart</span>
	                                            <span class="message">online</span>
	                                            <span class="badge badge-outline status"></span>
	                                        </div>
	                                    </div>
	                                </a>
	                            </li>
	                            <li class="offline">
	                                <a href="javascript:void(0);">
	                                    <div class="media">
	                                        <div class="avtar-pic w35 bg-info"><span>SW</span></div>
	                                        <div class="media-body">
	                                            <span class="name">Lisa Garett</span>
	                                            <span class="message">offline since May 12</span>
	                                            <span class="badge badge-outline status"></span>
	                                        </div>
	                                    </div>
	                                </a>
	                            </li>
	                        </ul>
	                    </div>

	                    <div class="tab-pane vivify fadeIn delay-100" id="Chat-groups">
	                        <ul class="right_chat list-unstyled mb-0">
	                            <li class="offline">
	                                <a href="javascript:void(0);">
	                                    <div class="media">
	                                        <div class="avtar-pic w35 bg-cyan"><span>DT</span></div>
	                                        <div class="media-body">
	                                            <span class="name">Designer Team</span>
	                                            <span class="message">offline</span>
	                                            <span class="badge badge-outline status"></span>
	                                        </div>
	                                    </div>
	                                </a>
	                            <li class="online">
	                                <a href="javascript:void(0);">
	                                    <div class="media">
	                                        <div class="avtar-pic w35 bg-azura"><span>SG</span></div>
	                                        <div class="media-body">
	                                            <span class="name">Sale Groups</span>
	                                            <span class="message">online</span>
	                                            <span class="badge badge-outline status"></span>
	                                        </div>
	                                    </div>
	                                </a>
	                            </li>
	                            <li class="online">
	                                <a href="javascript:void(0);">
	                                    <div class="media">
	                                        <div class="avtar-pic w35 bg-orange"><span>NF</span></div>
	                                        <div class="media-body">
	                                            <span class="name">New Fresher</span>
	                                            <span class="message">online</span>
	                                            <span class="badge badge-outline status"></span>
	                                        </div>
	                                    </div>
	                                </a>
	                            </li>
	                            <li class="offline">
	                                <a href="javascript:void(0);">
	                                    <div class="media">
	                                        <div class="avtar-pic w35 bg-indigo"><span>PL</span></div>
	                                        <div class="media-body">
	                                            <span class="name">Project Lead</span>
	                                            <span class="message">offline since May 12</span>
	                                            <span class="badge badge-outline status"></span>
	                                        </div>
	                                    </div>
	                                </a>
	                            </li>
	                        </ul>
	                    </div>
	                </div>

	            </div>
	        </div> --}}



			 @include('page.includes.sidebar')
            </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        {{-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> --}}
        <script src="https://js.pusher.com/4.1/pusher.min.js"></script>


     

