
<div id="left-sidebar" class="sidebar">
    <div class="navbar-brand">
    <a href="" >Admin <span></span></a>
        <button type="button" class="btn-toggle-offcanvas btn btn-sm float-right"><i class="lnr lnr-menu icon-close"></i></button>
    </div>
    <div class="sidebar-scroll">
        <div class="user-account">
            <div class="user_div">
                <img src="{{asset('admin/img/user.png')}}"  class="user-photo" alt="User Profile Picture">
            </div>
            <div class="dropdown">
                <span>Xin chào,</span>
                <a href="javascript:void(0);" class="dropdown-toggle user-name" data-toggle="dropdown"><strong></strong></a>
                <ul class="dropdown-menu dropdown-menu-right account vivify flipInY">
                    <li><a href="#" ><i class="icon-user"></i>Hồ sơ người dùng</a></li>

                    <li><a href="" ><i class="icon-home"></i>Trang của tui</a></li>

                    <li><a href="javascript:void(0);"><i class="icon-settings"></i>Chỉnh sửa</a></li>

                    <li class="divider"></li>
                    <li><a href="" ><i class="icon-power"></i>Đăng xuất</a></li>
                </ul>
            </div>
        </div>
<nav id="left-sidebar-nav" class="sidebar-nav">
    <ul id="main-menu" class="metismenu">

        <li class="header">Bản điều khiển</li>
            <li>
                <a href="#uiIcons" class="has-arrow"><i class="icon-speedometer"></i><span>Workflow</span></a>
                <ul>
                    <li><a href="{{route('Workflow_processes_index')}}"> Workflow Processes</a></li>
                    <li><a href="{{route('Workflow_processes_group_create')}}"> Workflow Processes Groups</a></li>
                </ul>
            </li>

            <!-- <li>
                <a href="#uiIcons" class="has-arrow"><i class="icon-user"></i><span>Thành viên</span></a>
                <ul>
                    <li><a href="#"> Quyền</a></li>
                    <li><a href="#">Danh sách thành viên</a></li>
                </ul>
            </li> -->

    

        

    </ul>
</nav>
