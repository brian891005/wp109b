# 期末專題
* 以老師的wp/11-app/pos/06-report專案進行更改，網址[https://gitlab.com/ccc109/wp/-/tree/master/11-app/pos/06-report]
    * 讀懂老師的程式碼並加以改變
    * 加入多個Js串聯，以單一頁面去做切換
    * 了解POS的使用與Order的儲存
    * 了解物件導向之用法與實際應用
    * 串聯商品訂單系統
    * 利用UI.js來簡化程式碼與重複使用
    * 使用外聯css將整個頁面美化，整合id、class
    * 在伺服器端抓取時間已取得購買時間
* 專題講解
    * 程式碼以index.html為根頁面
    * 使用js來做頁面之間的切換與更改
    * 新增Login介面，利用flag來限制使用者權限，登入帳密username.value == "admin" && pass.value == "123456"
    ```
    function login(flag) {
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
    if (username.value == "") {
    alert("請輸入使用者名稱");
    return window.flag = 0;
    } else if (pass.value  == "") {
    alert("請輸入密碼");
    return window.flag = 0;
    } else if(username.value == "admin" && pass.value == "123456"){   //登入帳密
    Ui.show(Shop.html)
    alert("歡迎"+username.value);
    return window.flag = 1;
    } else {
    alert("請輸入正確的使用者名稱和密碼！")
    return window.flag = 0;
    }
    }
    ```
    * 了解全域變數與區域變數的差別
        * 全域變數:能在整個程式碼中執行
        * 區域變數:只能在限定的function或區域內執行
    * 新增公司解說與表單填寫---->尚未有資料庫無法儲存
    * 學習頁面框架設定並套用背景圖片

* 未來發展
    * 增加資料庫系統儲存表單與訂單資料
    * 新增google地圖，自動找尋店家地理位置與附近地標
    * 內部更改訂單系統與手動修改已送出之訂單
    * 線上客服服務---->員工能接收客人訊息
    * 註冊會員系統---->不單單只能使用預設帳戶
    * 優化界面美感
