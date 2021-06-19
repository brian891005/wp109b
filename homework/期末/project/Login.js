/**
* Created by Kay on 2016/3/8.
*/
const Login = {}

Login.html = `
<body>
<div id="login_frame">
<i class="fa fa-user"></i><p>使用者登入介面</p>
<br>
<form method="post" action="login.js">
<p><label class="label_input">使用者</label><input type="text" id="username" class="text_field"/></p>
<br>
<p><label class="label_input">密碼</label><input type="text" id="password" class="text_field"/></p>
<br>
<div id="login_control">
<input type="button" id="btn_login" value="登入" onclick="login(flag);"/>
<a id="forget_pwd" href="forget_pwd.html">忘記密碼？</a>
</div>
</form>
`



function login(flag) {
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
    if (username.value == "") {
    alert("請輸入使用者名稱");
    return window.flag = 0;
    } else if (pass.value  == "") {
    alert("請輸入密碼");
    return window.flag = 0;
    } else if(username.value == "admin" && pass.value == "123456"){
    Ui.show(Shop.html)
    alert("歡迎"+username.value);
    return window.flag = 1;
    } else {
    alert("請輸入正確的使用者名稱和密碼！")
    return window.flag = 0;
    }
    }