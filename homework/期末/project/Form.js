const Form = {}

Form.html = `
<div>
<form action="data base" cellpadding="5">
  <fieldset>
   <legend style="font-size: 120%;">
    個人資料:
   </legend>
    <label for="fname">姓氏:</label><br/>
    <input type="text" id="fname" name="fname" value="輸入姓..."required><br/>
    <label for="lname">名:</label><br/>
    <input type="text" id="lname" name="lname" value="輸入名..."required><br/>
    <p>你的性別<br/>
     <input type="radio" id="male" name="gender" value="male"required>
     <label for="male">男</label>
     <input type="radio" id="female" name="gender" value="female"required>
     <label for="female">女</label>
     <input type="radio" id="other" name="gender" value="other"required>
     <label for="other">其他</label><br/>
    </p>
     <label for="username">使用者名稱:</label><br/>
     <input type="text" id="username" name="username"required><br/>
     <label for="pwd">密碼:</label><br/>
     <input type="password" id="pwd" name="pwd"required><br/>
     <p>
        輸入你完成問卷的時間
         </p>
        <input type="date" name="day"required>
        <br /><br/><br/>
    <input type="reset" value="重設"/>
    <input type="submit"  value="提交">
    
     
  </fieldset>
</form>
<div> 
`