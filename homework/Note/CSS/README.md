# 主要教材
<a href="https://www.w3schools.com/css/default.asp">W3School</a>

# 歷史簡介
階層式樣式表（英語：Cascading Style Sheets，縮寫：CSS；又稱串樣式列表、級聯樣式表、串接樣式表、階層式樣式表）是一種用來為結構化文件（如HTML文件或XML應用）添加樣式（字型、間距和顏色等）的電腦語言，由W3C定義和維護。CSS 被分為不同等級：CSS1 現已廢棄， CSS2.1 是推薦標準， CSS3 分成多個小模組且正在標準化中。(來源自<a href=https://zh.wikipedia.org/wiki/%E5%B1%82%E5%8F%A0%E6%A0%B7%E5%BC%8F%E8%A1%A8>維基百科</a>)

# 甚麼是CSS?
* CSS代表級聯樣式表
* CSS描述瞭如何在屏幕，紙張或其他媒體上顯示HTML元素
* CSS節省了大量工作。它可以一次控制多個網頁的佈局
* 外部樣式表存儲在CSS文件中
簡單來說CSS用來美化HTML所做出來的網頁，例如:顏色、字體大小、背景......等。CSS用於定義網頁的樣式，包括針對不同設備和屏幕尺寸的顯示設計，佈局和變體。

# 插入CSS的三種方法
有三種插入樣式表的方法：

* 外部CSS
* 內部CSS
* 內聯CSS
### 外部CSS:
外部樣式表可以在任何文本編輯器中編寫，並且必須以.css擴展名保存。

外部.css文件不應包含任何HTML標記。
```
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="mystyle.css"> //以link座連接
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```
* mystyle.css
```
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}
```
### 內部CSS
```
<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```
### 內聯的CSS
```
<!DOCTYPE html>
<html>
<body>

<h1 style="color:blue;text-align:center;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>

</body>
</html>
```

# CSS實例說明
通常以style來進行附加的動作，並以id、class來做選擇指定的標籤
```
<style>
p {
  text-align: center;
  color: red;
} 
</style>
```
* 範例一(將字體變紅)
```
<!DOCTYPE html>
<html>
<head>
<style>
p {
  color: red;
  text-align: center;
} 
</style>
</head>
<body>

<p>Hello World!</p>
<p>These paragraphs are styled with CSS.</p>

</body>
</html>
來自w3school
```
* <a href="https://brian891005.github.io/wp109b/homework/Note/CSS/css1.html">範例一</a>

* 範例二(列表屬性改變)
```
<!DOCTYPE html>
<html>
<head>
<style>
ul.a {
  list-style-type: circle;
}

ul.b {
  list-style-type: square;
}

ol.c {
  list-style-type: upper-roman;
}

ol.d {
  list-style-type: lower-alpha;
}
</style>
</head>
<body>

<h2>Lists</h2>
<p>Example of unordered lists:</p>
<ul class="a">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>

<ul class="b">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>

<p>Example of ordered lists:</p>
<ol class="c">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ol>

<ol class="d">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ol>

</body>
</html>
來源自w3school
```
* <a href="https://brian891005.github.io/wp109b/homework/Note/CSS/css2.html">範例二</a>
