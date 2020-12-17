<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Toastr;
use App\User;
class AccountController extends Controller
{
    public function login(){
        return view('page.login.login-reg');
    }
    
    public function reg(Request $reg ){
        $this->validate($reg,[
            'phone' =>'required|max:12',
            'name' =>'required|min:2|max:15',
            'lastname' =>'required|min:2|max:10',
            'username' =>'required|min:3|max:15|unique:account,username',
            'email' => 'required|email|max:32|unique:info,info_email',
            'password' => 'required|min:3|max:50',
            'confirmpassword' => 'required|same:password',

        ],[

            'phone.required' => 'Bạn chưa nhập số điện thoại !',
            'phone.max' => 'Số điện thoại không được hơn 10 số !',

            'name.required' => 'Bạn chưa nhập tên !',
            'name.min' => 'Tên tối thiếu 2 ký tự !',
            'name.max' => 'Tên tối đa 15 ký tự !',

            'lastname.required' => 'Bạn chưa nhập Họ !',
            'lastname.min' => 'Họ tối thiếu 2 ký tự !',
            'lastname.max' => 'Họ tối đa 10 ký tự !',

            'username.required' => 'Bạn chưa nhập tên đăng nhập !',
            'username.min' => 'Tên đăng nhập tối thiểu 4 ký tự trở lên !',
            'username.max' => 'Tên đăng nhập không được vượt hơn 15 ký tự !',
            'username.unique' => 'Tên đăng nhập đã tồn tại !',


            'email.required' => 'Bạn chưa nhập Email !',
            'email.email' => 'Định dạng Email chưa đúng vd: @gmail.com !',
            'email.max' => 'Email không được vượt hơn 32 ký tự !',
            'email.unique' => 'Email đã tồn tại !',


            'password.required' => 'Bạn chưa nhập mật khẩu !',
            'password.min' => 'Mật khẩu phải có it nhât 6 ký tự !',
            'password.max' => 'Mật khẩu chỉ được tối đa 32 ký tự !',
            'confirmpassword.required' => 'Bạn chưa nhập lại mật khẩu !',
            'confirmpassword.same' => 'Nhập lại mật khẩu không trùng khớp !'
        ]);        

        $user = new User;
        if($user){
            $user->username = $reg->username ;
            $user->password = bcrypt($reg->password) ;
            $user->username = $reg->username ;
            $user->email = $reg->email ;
            // $user->birth= $reg->birth ;
            // $user->birth= $reg->birth ;

        }

        return view('page.login.login-reg');
    }
}
