# 主要教材
<a href="https://www.w3schools.com/js/default.asp">W3School</a>
<head>
<link rel="stylesheet" href="table.css"> //以link座連接
</head>
# 歷史簡介
JavaScript（通常縮寫為JS）是一種進階的、直譯的程式語言。JavaScript是一門基於原型、頭等函式的語言，是一門多範式的語言，它支援物件導向程式設計，指令式程式設計，以及函式語言程式設計。它提供語法來操控文字、陣列、日期以及正規表示式等，不支援I/O，比如網路、儲存和圖形等，但這些都可以由它的宿主環境提供支援。它已經由ECMA（歐洲電腦製造商協會）透過ECMAScript實作語言的標準化。它被世界上的絕大多數網站所使用，也被世界主流瀏覽器（Chrome、IE、Firefox、Safari、Opera）支援。
### 肇始於網景
1993年，國家超級電腦應用中心（NCSA）發表了NCSA Mosaic，這是最早流行的圖形介面網頁瀏覽器，它在全球資訊網的普及上發揮了重要作用。1994年，Mosaic的主要開發人員隨即創立了Netscape公司，並雇用了許多原來的NCSA Mosaic開發者用來開發Netscape Navigator，該公司的目標是取代NCSA Mosaic成為世界第一的網頁瀏覽器。在四個月內，已經佔據了四分之三的瀏覽器市場，並成為1990年代網際網路的主要瀏覽器。網景預見到網路需要變得更動態。公司的創始人馬克·安德森認為HTML需要一種膠水語言，讓網頁設計師和兼職程式設計師可以很容易地使用它來組裝圖片和外掛程式之類的元件，且程式碼可以直接編寫在網頁標記中。

1995年，網景招募了布蘭登·艾克，目標是把Scheme語言嵌入到Netscape Navigator瀏覽器當中。但更早之前，網景已經跟昇陽合作在Netscape Navigator中支援Java，這時網景內部產生激烈的爭論。後來網景決定發明一種與Java搭配使用的輔助手稿語言並且語法上有些類似，這個決策導致排除了採用現有的語言，例如Perl、Python、Tcl或Scheme。為了在其他競爭提案中捍衛JavaScript這個想法，公司需要有一個可以運作的原型。艾克在1995年5月僅花了十天時間就把原型設計出來了。

最初命名為Mocha，1995年9月在Netscape Navigator 2.0的Beta版中改名為LiveScript，同年12月，Netscape Navigator 2.0 Beta 3中部署時被重新命名為JavaScript，當時網景公司與昇陽電腦公司組成的開發聯盟為了讓這門語言搭上Java這個程式語言「熱詞」，因此將其臨時改名為JavaScript，日後這成為大眾對這門語言有諸多誤解的原因之一。(來源自<a href=https://zh.wikipedia.org/wiki/JavaScript>維基百科</a>)

# 甚麼是JavaScript
* JavaScript可以更改HTML內容
* JavaScript可以更改HTML屬性值
* JavaScript可以更改HTML樣式（CSS）
* JavaScript可以隱藏HTML元素
* JavaScript可以顯示HTML元素 

JavaScript可以通過不同的方式“顯示”數據：
* 使用寫入HTML元素innerHTML
* 使用寫入HTML輸出document.write()
* 使用寫入警報框window.alert()
* 使用寫入瀏覽器控制台console.log()

### JavaScript基本語法與c語言大致相同
<table>
  <tr>
    <th>相同點</th>
    <th>相異點</th>
  </tr>
  <tr>
    <td>運算子 </td>
    <td>使用var關鍵字聲明變量</td>
  </tr>
  <tr>
    <td>註解</td>
    <td>物件導向</td>
  </tr>
  <tr>
    <td>運算符</td>
    <td>變數宣告較為不嚴格</td>
  </tr>
</table>


<<img src="picture/運算字元.PNG" alt="picture">>

# JavaScript在HTML中放的位置
* JavaScriptfunction放置在< head >HTML頁面

```
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>

<h1>A Web Page</h1>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

</body>
</html>
來源自w3school
```
* JavaScriptfunction放置在< body >HTML頁面
```
<!DOCTYPE html>
<html>
<body>

<h1>A Web Page</h1>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html>
來源自w3school
```
* 外部JavaScript
```
<!DOCTYPE html>
<html>
<body>

<h2>External JavaScript</h2>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

<p>(myFunction is stored in an external file called "myScript.js")</p>

<script src="myScript.js"></script>

</body>
</html>
來源自w3school
```
# JavaScript實例說明
* 範例一(取得日期)
```
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript new Date()</h2>

<p id="demo"></p>

<script>
var d = new Date();
document.getElementById("demo").innerHTML = d;
</script>

</body>
</html>
來源自w3school
```
* <a href="https://brian891005.github.io/wp109b/homework/Note/JS/js1.html">範例一</a>

* 範例二(改變圖片)
```
<!DOCTYPE html>
<html>
<body>

<img id="myImage" onclick="changeImage()" src="pic_bulboff.gif" width="100" height="180">

<p>Click the light bulb to turn on/off the light.</p>

<script>
function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("bulbon")) {
    image.src = "pic_bulboff.gif";
  } else {
    image.src = "pic_bulbon.gif";
  }
}
</script>

</body>
</html>
來源自w3school
```
* <a href="https://brian891005.github.io/wp109b/homework/Note/JS/js2.html">範例二</a>