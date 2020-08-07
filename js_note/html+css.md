授课老师 ： 石博文 

联系方式 ： shibw@tedu.cn

授课阶段 ： Web前端基础

------

[TOC]

# HTML基础

## 一、Web前端介绍

## 1.  什么是网页

网页是基于浏览器的应用程序，是数据展示的载体.

##  2.  网页的组成

1. 浏览器
   - 代替用户向服务器发请求
   - 接收并解析数据展示给用户
2. 服务器
   - 存储数据
   - 处理并响应请求
3. 协议
   - 规范数据在传输过程中的打包方式

## 3.  开发前的准备

1. 运行环境：浏览器，设置chrome为默认浏览器，作为网页文件的运行环境。
2. 调试工具：浏览器自带的调试工具，使用快捷键"F12"或右键"检查"打开。
   ctrl + - 缩小字体     ctrl + + 放大字体 
3. 开发工具：不限，选用个人习惯的即可。（Sublime、VSCode、EditPlus、PyCharm等）
   open in browser

## 二、 HTML语法介绍

## 1.  HTML介绍

超文本标记语言（HyperText Markup Language）浏览器能够识别和解析的语言，通过标签的形式构建页面结构和填充内容

<!--超文本是一种组织信息的方式，它通过超级链接方法将文本中的文字、图表与其他信息媒体相关联。-->

## 2. 标签

标签也称为标记或元素，用于在网页中标记内容  <!--标题 正文 表格 表单 图片 链接...-->

1. 语法：标签使用< >为标志，标签名不区分大小写，推荐小写表示

2. 分类：

   - 双标签：成对出现，包含开始标签和结束标签。例：

   ```html
   <html>
   <!-- 内容或其他标签 -->
   </html>
   ```

   - 单标签：只有开始标签，没有结束标签，可以手动添加“/”表示闭合。例：

   ```html
   <br>
   <br/>
   ```

3. 标签属性：  <!--不分先后-->

   - 标签属性书写在开始标签中，使用空格与标签名隔开，用于设置当前标签的显示内容或者修饰显示效果。由属性名和属性值组成，属性值使用双引号表示。例：

    ```HTML
    <meta charset="utf-8">
    ```

   - 同一个标签中可以添加若干组标签属性，使用空格间隔。例：

    ```html
    <img src="lily.jpg" width="200px" height="200px">
    ```

## 3. 使用

1. 创建网页文件，使用.html或.htm作为文件后缀

2. 添加网页的基本结构   <!--Tab键自动补全-->

   ```html 
   <!doctype html>
   <html>
   	<head>
   		<title>网页标题</title>
   		<meta charset="utf-8">
   	</head>
   	<body>
            网页主体内容
   	</body>
   </html>
   ```

3. 标签嵌套
   在双标签中书写其他标签，称为标签嵌套

   - 嵌套结构中，外层元素称为父元素，内层元素称为子元素；
   - 多层嵌套结构中，所有外层元素统称为祖先元素，内层元素统称为后代元素
   - 平级结构互为兄弟元素

4. HTML语法规范

   - 标签名不区分大小写，建议使用小写
   - 注释语法：   <!--crtl+/-->

   ```html
   <!-- 此处为注释 -->
   ```

## 三、常用标签介绍

## 1. 基本结构解析

 ```html
<!-- 文档类型声明，便于浏览器正确解析标签及渲染样式 -->
<!doctype html> 
<!-- HTML文档开始的标志 -->
<html> 
   <!-- 头部设置，可在head中设置网页标题，网页选项卡图标，引入外部的资源文件，设置网页相关信息等 -->
   <head>
       <!-- 设置网页标题，显示在网页选项卡上方 -->
       <title>网页标题</title>
       <!-- 设置网页字符编码 -->
       <meta charset="utf-8"> 
   </head>
   
  <!-- 网页主体部分，显示网页主要内容 -->
   <body> 
       网页主体内容
   </body>
</html><!-- 文档结束-->
 ```

## 2. body中常用标签

  - 文本标签

    - 标题标签：自带加粗效果，从h1到h6字体大小逐级递减

    ```html
     <h1>一级标题</h1>  #记忆1
     <h2>二级标题</h2>
     <h3>三级标题</h3>
     <h4>四级标题</h4>
     <h5>五级标题</h5>
     <h6>六级标题</h6>
    ```

    - 段落标签：  p*2 tab    p>lorem tab  p*2 >lorem tab

     ```html
     <p>段落文本</p>      #记忆2
     ```

    - 普通文本标签：

     ```html
     <span>行分区标签，用于对特殊文本特殊处理</span> #记忆3 只记span,span本身无任何样式,适合修改
     <b>加粗标签</b>
     <strong>强调标签，效果同b标签</strong>
     <label>普通文本标签，常与表单控件结合实现文本与控件的绑定</label> #手机端容易选中文本框
     <i>斜体标签</i>
     <u>下划线标签</u>
     ```

    - 格式标签：
      浏览器会忽略代码中的换行和空格，只显示为一个空格。想要实现页面中的换行，需要借助于换行标签。

     ```html
     <br>   #有替代方法
     ```

    - 水平线标签，在页面中插入一条水平分割线

     ```html
     <hr>   #有替代方法
     ```

    - 字符实体：
      某些情况下，浏览器会将一些特殊字符按照HTML的方式解析，影响显示结果。此时需要将这类字符转换为其他的形式书写
      例：  <!--都记-->

    ```
     使用 &lt; 在页面中呈现 "<"  
     使用 &gt; 在页面中呈现 ">"
     使用 &nbsp; 在页面中呈现一个空格
     使用 &copy; 在页面中呈现版权符号"©"
     使用 &yen; 在页面中呈现人民币符号"￥"
    ```

  - 容器标签
    常用于页面结构划分，结合CSS实现网页布局

       ```html
       <div id="top">页面顶部区域</div>
       <div id="main">页面主体区域</div>
       <div id="bottom">页面底部区域</div>
       ```

  - 图片与超链接标签      #都记

    <!--img占位置,自己有大小   背景不占位置,要靠内容,没有内容背景出不来,而且还容易被覆盖-->

    - 图片标签 <img src="">：用于在网页中插入一张图片。
      1. 属性 src 用于给出图片的URL，必填.
      2. 属性 width/height 用于设置图片尺寸，取像素值，默认按照图片的原始尺寸显示。
      3. 属性 title 用于设置图片标题，鼠标悬停在图片上时显示
      4. 属性 alt 用于设置图片加载失败后的提示文本

    2. 语法：

~~~html
```html
<img src="" width="" height="" title="" alt="">
```
```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>图片标签</title>
</head>
<body>
    <!-- 休息14:56~15:10 -->
    <img src="../imgs/img1.jpg" width="200px" 
    height="300px" title="以梦为马，越骑越傻" alt="图挂了">
    <!-- <img 			src="http://cdn.tmooc.cn/bsfile//courseImg///A39738762E2741B2892D358B5C6500C1.jpg" alt=""> -->
</body>
</html>
```
~~~


​    ​    

~~~html
- 超链接标签：用户可以点击超链接(**文本或图片**)实现跳转至其他页面
  1. 属性 href 用于设置目标文件的URL，必填。
  2. 属性 target用于设置目标文件的打开方式，默认在当前窗口打开(取"_self")。可以设置新建窗口打开目标文本(取"_blank")
```html
<a href="http://www.taobao.com" target="_self">淘宝</a>
<a href="http://www.baidu.com" target="_blank">百度</a>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>超链接</title>
</head>
<body>
    <!-- a标签属于文本标签 可以在同一行显示 -->
    <!-- 当图片和文字在同一行显示时 默认是底边对齐 -->
    <a href="http://www.baidu.com">baidu</a>
    <!-- target="_blank"  在新窗口打开页面 -->
    <a href="img.html" target="_blank">img.html</a>
    <a href="http://tmooc.cn">
        <img src="../imgs/img01.jpg" width="200px" alt="">
    </a>
</body>
</html>
```
~~~


​    

## 3. 常用结构标签

  - 列表标签        #页面结构类似使用,无序列表常用

    - 有序列表（ordered list）
      默认使用阿拉伯数字标识每条数据

     ```html
    <ol>
    	<li>list item 列表项</li> 
    	<li>list item 列表项</li>
    	<li>list item 列表项</li>
    </ol>
     ```

    - 无序列表（unordered list）
      默认使用实心圆点标识列表项

     ```html
     <ul>
      	<li>list item 列表项</li> 
      	<li>list item 列表项</li>
      	<li>list item 列表项</li>
      </ul>
     ```

    - 列表嵌套
      在已有列表中嵌套添加另一个列表，常见于下拉菜单

     ```html
    <ol>
    	<li>
    		西游记
    		<ul>
    			<li>孙悟空</li>
    			<li>孙悟空</li>
    			<li>孙悟空</li>
    		</ul>
    	</li>
    </ol>
     ```

  - 表格标签

    - 表格由行和单元格组成，常用于直接的数据展示或辅助排版,基本结构如下

    ```html
    <!-- 创建表格标签 -->
    <table>
    	 <!-- 创建行标签 -->
    	<tr>
    		<!-- 行中创建单元格以显示数据 -->
    		<td>姓名</td>
    		<td>年龄</td>
    		<td>班级</td>
    	</tr>
    	<tr>
    		<td>迪丽热巴</td>
    		<td>20</td>
    		<td>002</td>
    	</tr>
    </table>
    ```

    - 单元格合并：用于调整表格结构，分为跨行合并和跨列合并，合并之后需要删除被合并的单元格，保证表格结构完整      #重点记忆

      | 单元格属性 | 作用           | 取值       |
      | ---------- | -------------- | ---------- |
      | colspan    | 跨列合并单元格 | 无单位数值 |
      | rowspan    | 跨行合并单元格 | 无单位数值 |

      ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>表格标签</title>
      </head>
      <body>
          <!-- border="1" 添加1像素的边框 -->
          <!-- cellspacing="0" 设置单元格之间的距离为0 -->
          <table border="1" cellspacing="0">
              <!-- tr*4>td*3 + tab -->
              <tr>
                  <!-- colspan跨列 横向合并单元格
                       合并后注意本行后面的删除多余的单元格 -->
                  <td colspan="3">11</td>
                  <!-- <td>12</td>
                  <td>13</td> -->
              </tr>
              <tr>
                  <!-- rowspan 纵向合并单元格 
                  合并后注意删除其它行的对应位置的单元格-->
                  <td rowspan="3">21</td>
                  <td>22</td>
                  <td>23</td>
              </tr>
              <tr>
                  <!-- <td>31</td> -->
                  <td>32</td>
                  <td>33</td>
              </tr>
              <tr>
                  <!-- <td>41</td> -->
                  <td>42</td>
                  <td>43</td>
              </tr>
          </table>
      </body>
      </html>
      ```
    
- 行分组标签：可以将表格中的若干行划分为一组，表示表头，表尾及表格主体，默认在表格中创建的所有行都会被自动加入表格主体中
  
```html
    <table border="1px" width="300px" height="300px">
		<thead></thead>
        <tfoot></tfoot>
        <tbody></tbody>
    </table>
```

  - 表单标签
    **表单用于采集用户的信息并提交给服务器，由表单元素和表单控件组成**。表单元素form负责提交数据给服务器，表单控件负责收集数据。

     - 表单使用<form></form>

    | 属性名  | 取值                                                         |
    | ------- | ------------------------------------------------------------ |
    | action  | 设置数据的提交地址                                           |
    | method  | 设置数据的提交方式，默认为get方式，可以设置为post   #文件必须post提交 |
    | enctype | 设置数据的编码类型，涉及二进制数据提交（例如图片，文件，音视频等），必须设置数据的提交方式为post,编码类型为"multipart/form-data" |

    [](https://blog.csdn.net/broaden08/article/details/78950093)

    [](https://www.cnblogs.com/my-blogs-for-everone/p/6160824.html)
    
    ```
    表单提交中get和post方式的区别有5点
    1.get是从服务器上获取数据，post是向服务器传送数据。
2.get是把参数数据
    队列加到提交表单的ACTION属性所指的URL中，值和表单内各个字段一一对应，在URL中可以看到。post是通过HTTPpost机制，将表单内各个字段与其内容放置在HTML HEADER内一起传送到ACTION属性所指的URL地址。用户看不到这个过程。
    3.对于get方式，服务器端用Request.QueryString获取变量的值，对于post方式，服务器端用Request.Form获取提交的数据。
4.get传送的数据量较小，不能大于2KB。post传送的数据量较大，一般被默认为不受限制。但理论上，IIS4中最大量为80KB，IIS5中为100KB。
    5.get安全性非常低，post安全性较高。
    ```
    
    例如：
    
    ```html
    <form action="" method="" enctype="">
    	<!--此处为表单控件-->
    </form>
    ```
    
     - 表单控件使用（重点）
       表单控件用于采集用户信息，可设置以下标签**属性**
    
    | 属性名      | 取值                                   |
    | ----------- | -------------------------------------- |
    | type        | 设置控件类型                           |
    | name        | 设置控件名称，最终与值一并发送给服务器 |
    | value       | 设置控件的值                           |
    | placeholder | 设置输入框中的提示文本                 |
    | maxlength   | 设置输入框中可输入的最大字符数         |
    | checked     | 设置单选按钮或复选按钮的默认选中       |
    | selected    | 设置下拉菜单的默认选中                 |

表单控件用于采集用户信息，常用**控件**如下： <!--div换行-->

```html
  <input type="text">  文本框   #与lable配合
  <input type="password">  密码框
  <input type="radio">  单选按钮  
  <input type="checkbox">  复选框
  <input type="file">  文件上传   #要在form标签下设置
  <input type="button"> 普通按钮
  <input type="submit">  提交按钮
  <select></select>  下拉菜单
  <textarea></textarea> 文本域 
```



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=`, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>form表单控件</title>
</head>
<body>
    <div>
        <label for="username">姓名：</label>
        <input id="username" placeholder="用户名不能超过16位" 
        type="text">
    </div>
    <div>
        <label for="pwd">密码：</label>
        <input id="pwd" type="password">
    </div>
    <div>
        性别：<input name="gender" type="radio">男
             <input name="gender" type="radio">女
        <input name="gender" checked type="radio">保密
    </div>
    <div>
        爱好：<input type="checkbox">抽烟
        <input type="checkbox">喝酒
        <input checked type="checkbox">烫头
    </div>
    <div>
        上传头像： <input type="file">
    </div>
    <div>
        班级:
        <select name="" id="">
            <option value="">--请选择--</option>
            <option selected value="">AID2005</option>
        </select>
    </div>
    <div>
        其它：
        <textarea name="" id=""></textarea>
    </div>
    <div>
        <input type="button" value="普通按钮">
        <input type="submit" value="登录">
        <input type="reset">
    </div>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>表单数据提交</title>
</head>
<body>
    <!-- 演示1:将wd=python提交到www.baidu.com/s,实现任意内容的搜索功能，活化下方代码 -->
    <!-- <a href="http://www.baidu.com/s?wd=python">百度搜索 Python</a> -->
    
    <form action="http://www.baidu.com/s" method="get">
        <input type="text" name="wd">
        <input type="submit" value="百度一下">
    </form>
    
    <!-- 演示2：提交单选和复选的功能 -->
    <!-- file:///home/tarena/month03/day02/code/form2.html?answer=a&answer2=a&answer2=b&answer2=c -->
    
    <form action="">
        <div>
            <input name="answer" value="a" type="radio"> A
            <input name="answer" value="b" type="radio"> B
            <input name="answer" value="c" type="radio"> C
        </div>
        <div>
            <input name="answer2" value="a" type="checkbox"> A
            <input name="answer2" value="b" type="checkbox"> B
            <input name="answer2" value="c" type="checkbox"> C
        </div>
        <input type="submit">
    </form>    
        
    <!-- 演示3：提交下拉菜单的功能 -->
    <form action="">
        <select name="classname" id="">
            <option value="请选择">请选择</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
        </select>
        <input type="submit">
    </form>    
</body>
</html>
```



<!--样式书写参考顺序 宽高 颜色 字体 位置-->

# CSS 基础使用
## 一、CSS介绍
 CSS全称为： Cascading Style Sheets ，意为层叠样式表 ，与HTML相辅相成，实现网页的排版布局与样式美化

## 二、CSS使用方式
### 1. 行内样式/内联样式
  借助于style标签属性，为当前的元素添加样式声明
  ```html
 <标签名 style="样式声明">
  ```
  CSS样式声明 : 由CSS属性和值组成
  例：
  ```html
 style="属性:值;属性:值;"
  ```
  常用CSS属性 :
  - 设置文本颜色 color:red;
  - 设置背景颜色 background-color:green;
  - 设置字体大小 font-size:32px;
### 2. 内嵌样式

<!--写在head里-->

  借助于style标签，在HTML文档中嵌入CSS样式代码，可以实现CSS样式与HTML标签之间的分离。同时需借助于CSS选择器到HTML 中匹配元素并应用样式
  示例:
  ```
  <style>
     	选择器{
     	 	属性:值;
      		属性:值;
     	}
  </style>
  ```
  选择器 : 通过标签名或者某些属性值到页面中选取相应的元素，为其应用样式
  示例：
  ```css     					
/*标签选择器 : 根据标签名匹配所有的该元素*/  
p{
    color:red;
  }
  ```
### 3. 外链样式表

  - 创建外部样式表文件 后缀使用.css
  - 在HTML文件中使用<link>标签引入外部样式表
  ```html
 <link rel="stylesheet" href="URL" type="text/css">
  ```
  - 样式表文件中借助选择器匹配元素应用样式
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>css</title>
    <!-- 3.导入外部样式表文件 -->
    <link rel="stylesheet" href="index.css">
    <!-- 2.内嵌样式 -->
    <style>
        h1{
            /* 样式声明 */
            background-color:red;
            text-align: center;
            /* 样式声明2 */
            color:white;
            
            font-size:64px;
        }
        h2{
            /* 样式声明 */
            background-color:green;
            text-align: center;
            /* 样式声明2 */
            color:white;
            
            font-size:32px;
        }
        body{
            color:green;
        }
    </style>    
</head>
<body>
    <h1>hello world</h1>
    <h1>CSS Day01</h1>
    <!-- 1.行内样式 -->
    <!-- <h1 style="background-color: red;text-align:center">
        hello world
    </h1> -->
</body>
</html>
```

## 三、样式表特征

### 1. 层叠性
多组CSS样式共同作用于一个元素
### 2. 继承性
后代元素可以继承祖先元素中的某些样式
例 : 大部分的文本属性都可以被继承

<!--body{color: green}-->

### 3. 样式表的优先级
优先级用来解决样式冲突问题。同一个元素的同一个样式(例如文本色)，在不同地方多次进行设置，最终选用哪一种样式？此时哪一种样式表的优先级高选用哪一种。

<!--就近原则,行内优先级最高-->

  - 行内样式的优先级最高 

  - 文档内嵌与外链样式表,优先级一致,看代码书写顺序,后来者居上

    ​	  <!--文档内嵌: h1优先级高于body优先级-->

  - 浏览器默认样式和继承样式优先级较低 
## 四、CSS 选择器 *
### 1. 作用
匹配文档中的某些元素为其应用样式
### 2. 分类 :
#### 1. 标签选择器
根据标签名匹配文档中所有该元素
语法 :   <!--基本不用-->

```css
标签名{
  属性:值;
}
```
#### 2. id选择器
根据元素的 id 属性值匹配文档中惟一的元素，id具有唯一性，不能重复使用
语法 : <!--基本不用-->

```css
  #id属性值{
  
  }
```
注意 :
  id属性值自定义,可以由数字，字母，下划线，- 组成，不能以数字开头;
  尽量见名知意，多个单词组成时，可以使用连接符，下划线，小驼峰表示

#### 3. class选择器/类选择器    <!--推荐用-->
根据元素的class属性值匹配相应的元素,class属性值可以重复使用,实现样式的复用
语法 :
```css
.class属性值 {
 	
}
```
特殊用法 :
 1. 类选择器与其他选择器结合使用
      注意标签与类选择器结合时,标签在前,类选择器在后
        	
      
    例 : a.c1{ }
    
 2. class属性值可以写多个,共同应用类选择器的样式

     例 : .c1{  }
         	.c2{  }						
```css
  	<p class="c1 c2"></p>  
```

#### 4. 群组选择器

为一组元素统一设置样式
语法 :  <!--标签\ID\类选择器都可以放进群组选择器-->

```css
selector1,selector2,selector3{	         
}
```
#### 5. 后代选择器
匹配满足选择器的所有后代元素(包含直接子元素和间接子元素)
语法 :

<!--无论几代的后代都可以找到-->

```css
selector1 selector2{
}
```
匹配selector1中所有满足selector2的后代元素
#### 6. 子代选择器

<!--子代选择器只能找到直接的一代-->

匹配满足选择器的所有直接子元素
语法 :

```css
selector1>selector2{
}
```
#### 7. 伪类选择器
为元素的不同状态分别设置样式,必须与基础选择器结合使用
分类 :

```
:link 	 超链接访问前的状态
:visited 超链接访问后的状态
:hover	 鼠标滑过时的状态
:active  鼠标点按不抬起时的状态(激活)
:focus	 焦点状态(文本框被编辑时就称为获取焦点)
```
使用 :
```css
a:link{
}
a:visited{
}
.c1:hover{ }
```
注意 :
  1. 超链接如果需要为四种状态分别设置样式,必须按照以下顺序书写
  ```css
  :link
  :visited
  :hover
  :active
  ```
  2. 超链接常用设置 :
  ```css
  a{
  	/*统一设置超链接默认样式(不分状态)*/
  }
  a:hover{
  	/*鼠标滑过时改样式*/
  }
  ```
### 3. 选择器的优先级
使用选择器为元素设置样式,发生样式冲突时,主要看选择器的权重,权重越大,优先级越高

| 选择器       | 权重 |
| ------------ | ---- |
| 标签选择器   | 1    |
| (伪)类选择器 | 10   |
| id选择器     | 100  |
| 行内样式     | 1000 |

复杂选择器(后代,子代,伪类)最终的权重为各个选择器权重值之和
群组选择器权重以每个选择器单独的权重为准，不进行相加计算
例 :
```css
/*群组选择器之间互相独立，不影响优先级*/
body,h1,p{ /*标签选择器权重为 1 */
 color:red;
}
.c1 a{ /*当前组合选择器权重为 10+1  */
 color:green;
}
#d1>.c2{ /*当前组合选择器权重为 100+10 */
 color:blue;
}
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        /* 1.2 内嵌样式   2.1 标签选择器 权重为1 (范围太广基本不用)*/
        div{color: red; background-color:grey; font-size: 32px; text-align: center}

        /* 2.2 id选择器 权重为100，因为必须唯一，不重复，用一个少一个，也基本不用 */
        #title{
            color:blue; background-color: grey
        }

        /* 2.3 类选择器 权重为10 */
        .green{
            color:green;
        }

        .yellow{
            background-color: yellow
        }

        /* 2.4标签选择器+类选择器 权重为11 */
        div.green{
            font-size: 40px;
        }

        /* 2.5群组选择器 权重为1*/
        h1,p,ul,li{
            /* 清除元素默认的边距 */
            padding: 0;
            margin: 0;
        }

        /* 2.6子代选择器 + 伪类选择器 */
        ul li{
            font-size: 30px;
        }
        ul>li{
            color: red;
            /* transition 过渡 当指定样式的值发生改变时，可以让值的改变在规定时间内完成而不是马上完成 */
            transition: all 0.5s;
        }
        ul>li:hover{
            color: aqua;
        }
        li a:link{
            font-style: italic
        }
        
        /* 2.7后代选择器 */
        body>ul>li{
            text-align: center;
        }
        /* body li{
            font-size: 25px;
        } */

    </style>
</head>
<body>
    <!-- 1.1 行内样式  权重为1000 -->
    <!-- <div style="color: red; background-color:green; font-size: 32px"> -->
    

    <!-- 2.1 标签选择器 -->
    <div>
        this is a test string
    </div>

    <!-- 2.2 id选择器 -->
    <div id="title">fixed
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt debitis neque nisi adipisci, unde illum quisquam dignissimos a nemo eveniet consequatur sequi consectetur! Sunt dolore aut eius hic excepturi vero.
    </div>
   
    <!-- 2.3 类选择器 -->
    <div class="green yellow">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consectetur est perspiciatis officiis vel sapiente? Ipsum, doloremque deserunt unde ipsam sed cum temporibus assumenda nulla odio totam, adipisci, laboriosam consequatur.
    </div>

    <!-- 2.4标签选择器+类选择器结合 -->
    <div class="green">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consectetur est perspiciatis officiis vel sapiente? Ipsum, doloremque deserunt unde ipsam sed cum temporibus assumenda nulla odio totam, adipisci, laboriosam consequatur.
    </div>

    <!-- 2.6+2.7 子代/后代选择器 -->
    <ul>
        <li><a href="http://www.4399.com">锄禾日当午</a></li>
        <li>汗滴禾下土</li>
        <li>谁知盘中餐</li>
        <li>粒粒皆辛苦
            <!-- <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul> -->
        </li>
    </ul>

</body>
</html>
```

## 五、标签分类及嵌套 *

### 1. 块元素 block
独占一行,不与元素共行;可以手动设置宽高,默认宽度与与父元素保持一致

例 : body div h1~h6 p ul ol li form, table(默认尺寸由内容决定)

### 2. 行内元素 inline
可以与其他元素共行显示;不能手动设置宽高,尺寸由内容决定

例 : span label b strong i s u sub sup a

### 3. 行内块元素 inline-block
可以与其他元素共行显示,又能手动调整宽高

例 : img input button (表单控件)

### 4. 嵌套原则
1. 块元素中可以嵌套任意类型的元素
   
    p元素除外,段落标签只能嵌套行内元素,不能嵌套块元素
    
2. 行内元素中最好只嵌套行内或行内块元素  <!--如a标签嵌套文本或图片-->

    <!--尽量用大的内容嵌套小的内容-->

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        /* display  调整元素的显示方式 */
        /* 取值  block 块元素 默认独占一行，可以调整宽高 */
        /* inline 行内元素 可以和其他元素共行显示，不能调整宽高,只能根据内容确定大小(hello) */
        /* inline-block 行内块元素 可以调整宽高也可以和其他元素共行显示 */
        /* none 隐藏元素 */

        /* 演示1：div块元素与span行内元素共同显示 */
        .red{
            width: 200px;
            height: 200px;
            background-color: red;
            /* span:改block基础上再调整为 div、span都是行内块，两者可以横着排列 */
            display:inline-block
        }
        /* 如果不设置block span内为空的不占空间，所以无法显示 */
        span{
            display: block;
        }
        
        /* 演示2 完全隐藏span, span.red 与.red组合使用效果，如登录框点击前隐藏*/
        /* .red{
            width: 200px;
            height: 200px;
            background-color: red;
            display:inline-block
        }
        span.red{
            display: none;
        } */
       

        /* 演示3 尺寸  body默认情况下height为0 则.red按百分比结果为空*/
        html{
            height: 100%;
        }
        body{
            height: 100%;
        } 
        .red{
            width: 50%;
            height: 100%;
        }
        
        /* 演示4 尺寸 高度尽量不用百分比 直接取值*/
        .red{
            width: 50%;
            height: 200px;
        }
        .inner{
            width: 100%;
            /* 会覆盖父元素 */
            height: 100%;
            /* 会覆盖父元素一半 */
            height: 100px;
            background-color: aqua;
        } 

        /* 演示5:字体尺寸 默认16px rem参照根元素:html em参照父元素:body */
        html{
            font-size:16px;
        }
        body{
            font-size: 16px;
        }
        div{
            /* font-size: 0.8em; */
            font-size: 2rem;
        }
    </style>
</head>
<body>
    <!-- 演示1 演示2 -->
    <div class="red"></div>
    <span class="red"></span>

    <!-- 演示3 +演示4 -->
    <div class="red">
        <div class="inner"></div>
    </div>

    <!-- 演示5 -->
    <div>
        普普通通的文字
    </div>
</body>
</html>
```

## 六、尺寸单位
- px 像素单位
-  % 百分比，参照父元素对应属性的值进行计算
- em 字体尺寸单位，参照父元素的字体大小计算，1em=16px <!--body-->
- rem字体尺寸单位,参照根元素的字体大小计算，1rem=16px  <!--html -->
## 七、颜色单位
- 英文单词：red，green，blue
- rgb(r,g,b) 使用三原色表示，每种颜色取值0~255
- rgba(r,g,b,alpha) 三原色每种取值0~255，alpha取值0（透明）~1（不透明）
- 十六进制表示：以#为前缀，分为长十六进制和短十六进制。
  - 长十六进制：每两位为一组，代表一种三原色；每位的取值范围0~9，a~f
    例：red rgb(255,0,0) #ff0000
    - opacity:0.5; (取值范围0-1)
  - 短十六进制：由3位组成，每一位代表一种三原色，浏览器会自动对每一位进行重复扩充，仍然按照长十六进制解析
    例：#000  #fff   #f00

## 八、背景属性
### 1. 背景颜色
```css
background-color: red;
```
### 2. 背景图片相关
#### 1） 设置背景图片
```css
background-image : url("路径");
```
设置背景图片，指定图片路径，如果路径中出现中文或空格，需要加引号
#### 2） 设置背景图片的重复方式
默认背景图片从元素的左上角显示，如果图片尺寸与元素尺寸不匹配时，会出现以下情况：
1. 如果元素尺寸大于图片尺寸，会自动重复平铺，直至铺满整个元素
2. 如果元素尺寸小于图片尺寸，图片默认从元素左上角开始显示，超出部分不可见
```css
background-repeat:repeat/repeat-x/repeat-y/no-repeat
```
```text
取值 ：
	repeat  默认值，沿水平和垂直方向重复平铺
	repeat-x 沿X轴重复平铺
	repeat-y 沿Y轴重复平铺
	no-repeat 不重复平铺
```
#### 3） 设置背景图片的显示位置
默认显示在元素左上角
```css
background-position:x y;
```
取值方式 ：
```text
1. 像素值
	设置背景图片的在元素坐标系中的起点坐标
2. 方位值
	水平 ：left/center/right
	垂直 ：top/center/bottom
	注：如果只设置某一个方向的方位值，另外一个方向默认为center
3. 百分比
	类似于方位值，根据百分比计算背景图片的显示坐标。
	计算方式：
		横坐标 = (元素宽度 - 背景图片宽度）* x%
		纵坐标 = (元素高度 - 背景图片高度) * y %
	特殊值：
		0% 0%     左上角
		100% 100% 右下
		50% 50%   居中显示
```
精灵图技术 ：为了减少网络请求，可以将所有的小图标拼接在一张图片上，一次网络请求全部得到；借助于background-position进行背景图片位置的调整，实现显示不同的图标
#### 4）设置背景图片的尺寸
```css
background-size:width height;
```
取值方式 ：
```text
1. 像素值
	1. 500px 500px; 同时指定宽高
	2. 500px;  指定宽度，高度自适应
2. 百分比
	百分比参照元素的尺寸进行计算
	1. 50% 50%; 根据元素宽高,分别计算图片的宽高
	2. 50%; 根据元素宽度计算图片宽高,图片高度等比例缩放
```
### 3. 背景属性简写
```css
background:color url("") repeat position;
```
注意 ：
1. 如果需要同时设置以上属性值，遵照相应顺序书写
2. background-size 单独设置
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>颜色单位</title>
    <style>
        /* 演示1 颜色单位 */
        /* body{
            background-color: blue;
        }
        div{
            width: 200px;
            height: 200px;
            background-color: #e4393c;
            opacity: 0.5;    不透明度  0透明  1不透明
        } */
  
        /* 演示2 背景属性 */
        div{
            /* width: 200px;
            height: 250px;
            background-color: red;
            background-image: url('../imgs/img01-1.png');
            background-repeat: no-repeat; */
            
            /* width: 25px;
            height: 25px;
            background-color: red;
            background-image: url('../imgs/img01-1.png');
            background-repeat: no-repeat;
            background-position-y: -100px; */
            
            /* background常用简写 只显示颜色和只显示图片 */
            width: 250px;
            height: 250px;
            background: red;
            background:url('../imgs/img01-1.png')  no-repeat;
            background-size: 250px 250px;
        }
        
        /* 练习 使用 img01-2.png作为背景图 在页面中显示 ECDAB */
        /* div{
            width: 25px;
            height: 25px;
            background-image: url('../imgs/img01-2.png');
            background-repeat: no-repeat;
            display: inline-block;
        }
        .b{
            background-position-x: -25px;
        }
        .c{
            background-position-x: -50px;
        }
        .d{
            background-position-x: -75px;
        }
        .e{
            background-position-x: -100px;
        } */
    </style>
</head>
<body>
    <!-- 演示1 演示2 -->
    <div></div>
    
    <!-- 练习 -->
    <!-- <div class="e"></div> -->
    <!-- <div class="c"></div>
    <div class="d"></div>
    <div></div>
    <div class="b"></div> -->
</body>
</html>
```



## 九、文本属性
### 1. 字体相关
#### 1） 设置字体大小
```css
font-size:20px;
```
#### 2）设置字体粗细程度
```css
font-weight:normal;
```
取值 ：
```text
1. normal（默认值）等价于400
2. bold   (加粗) 等价于700
```
#### 3）设置斜体
```css
font-style:italic;
```
#### 4） 设置字体名称
```css
font-family:Arial,"黑体"; 
```
取值 :
    1. 可以指定多个字体名称作为备选字体,使用逗号隔开
        2. 如果字体名称为中文,或者名称中出现了空格,必须使用引号
例 :

```Css
font-family:Arial;
font-family:"黑体","Microsoft YaHei",Arial;
```

#### 5）字体属性简写
```css
font : style weight size family;
```
注意 :
    1. 如果四个属性值都必须设置,严格按照顺序书写
    2. size family 是必填项
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div{
            /* font-weight: bold;
            font-style: italic;
            font-family: 'Courier New', Courier, monospace */
            font: 20px 'Courier New';
        }
    </style>
</head>
<body>
    <div>This is a test string</div>
</body>
</html>
```



### 2. 文本样式

#### 1）文本颜色
```css
color:red;
```
#### 2） 文本装饰线
```css
text-decoration:none;
```
取值 :
    underline		下划线
    overline		上划线
    line-through 	 删除线
    none			取消装饰线

#### 3）文本内容的水平对齐方式
```css
text-align:center;
```
<!--注意是给居中内容的父元素进行水平对齐-->

取值 : 

```text
left(默认值)	左对齐
center		  居中对齐
right		  右对齐
justify		  两端对齐
```
#### 4）行高
```css
line-height:30px;
```
使用 :
    文本在当前行中永远垂直居中,可以借助行高调整文本在元素中的垂直显示位置.  
               line-height = height 设置一行文本在元素中垂直居中   
               line-height > height 文本下移显示

​               line-height < height 文本靠上显示

特殊 :line-height可以采用无单位的数值,代表当前字体大小的倍数,以此计算行高

#### 5） font属性简写2
```css
font : size/line-height family;
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>回顾</title>
    <style>
        div{
            color:#f00;
            display: block;
        }
        body{
            font-size: 30px;
        }
        #title div{}
        .red{}
        h1,p,body,ul,li{}
        body div{}
        body>div{}
        div:hover{}

        a{
            color: #000;
            /* 取消超链接默认下划线 */
            text-decoration:none;
            transition: all 0.5s;
        }
        a:hover{
            color:blue;
            text-decoration: underline;
        }

        p{
            width: 300px;
            height: 300px;
            background-color: aquamarine;
            /* 设置文本水平居中的方式 */
            text-align: center;
            /* line-height = height 设置文本垂直居中 */
            /* line-height: 300px;
            font-size: 30px; */
            /* 字体大小/行高   字体名称 */
            font:30px/300px "黑体";
        }
    </style>
    <link rel="stylesheet" href="demo.css">
</head>
<body>
    <a href="http://www.baidu.com">baidu</a>
    <p>
        <img src="../imgs/img01.png" alt="">
    </p>

    <!-- <div id="header"></div>
    <div id="main"></div>
    <div id="footer"></div> -->
    <!-- <div id="title" class="red center" style="color:red">hello world</div> -->
</body>
</html>
```

# CSS 盒模型

## 1. 内容尺寸
- 一般情况下，为元素设置width/height，指定的是内容框的大小

- 内容溢出：内容超出元素的尺寸范围，称为溢出。默认情况下溢出部分仍然可见，可以使用overflow调整溢出部分的显示,取值如下：

  | 取值    | 作用                           |
  | ------- | ------------------------------ |
  | visible | 默认值，溢出部分可见           |
  | hidden  | 溢出部分隐藏                   |
  | scroll  | 强制在水平和垂直方向添加滚动条 |
  | auto    | 自动在溢出方向添加可用滚动条   |
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>内容</title>
    <style>
        div{
            width: 150px;
            height: 200px;
            background-color: aquamarine;
            /* 强制水平和垂直都加滚动条 */
            overflow: scroll;
            /* 适用文本 */
            overflow: auto;
            /* 适用图片，溢出就不要了 */
            overflow: hidden;
        }
    </style>
</head>
<body>
    <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla possimus vel dolorum tempora ipsa, enim, ducimus harum neque aliquid incidunt est ex dolorem consequatur accusamus ipsam animi tenetur dignissimos numquam.Earum harum, in sint commodi tempore provident odio delectus ducimus sapiente quos esse tempora eos alias voluptates quibusdam eaque facilis velit, id mollitia assumenda. Numquam placeat quidem cupiditate modi tenetur?
    </div>
</body>
</html>
```

## 2. 边框

### 1. 边框实现
语法：
```css
border:width style color;
```
边框样式为必填项，分为：

| 样式取值 | 含义     |
| -------- | -------- |
| solid    | 实线边框 |
| dotted   | 点线边框 |
| dashed   | 虚线边框 |
| double   | 双线边框 |

### 2. 单边框设置
分别设置某一方向的边框，取值：width style color;

| 属性          | 作用       |
| ------------- | ---------- |
| border-top    | 设置上边框 |
| border-bottom | 设置下边框 |
| border-left   | 设置左边框 |
| border-right  | 设置右边框 |


### 3. 网页三角标制作
1. 元素设置宽高为0
2. 统一设置四个方向透明边框
3. 调整某个方向边框可见色
```html
<title>网页三角标志</title>
    <style>
        div{
            width: 0;
            height: 0;
            border: 10px solid transparent;
            border-top-color:#000;
            
        }
    </style>
```

### 4. 圆角边框

1. 属性：border-radius 指定圆角半径
2. 取值：像素值或百分比
3. 取值规律：
```
一个值 	表示统一设置上右下左
四个值 	表示分别设置上右下左
两个值 	表示分别设置上下 左右
三个值 	表示分别设置上右下，左右保持一致
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>边框</title>
    <style>
        /* 11:01~11:15 */
        div{
            width: 200px;
            height: 200px;
            /* 5px 实线 红色边框 */
            border: 30px solid red;
            /* 先统一设置所有的边框  再对单独一条边设置 */
            border-left-style: double;
            /* transparent和背景颜色一致 */
            border-bottom-color:transparent;
            background-color: aqua;
        }
        /*滑动鼠标出现底边*/
        div:hover{
            border-bottom: 30px solid red;
        }
        p{
            width: 300px;
            height: 300px;
            background-color: blue;
            /* border: 5px solid blue; */
            
          	/*border-radius不是必须使用border属性，其他的如background也可以  */
            /* 长宽相同时 生成圆形 */  
            /* border-radius: 50%; */
            /* 取值规律 */
            /* 顺序：上右下左 顺时针 */
            border-radius: 5px 25px 45px 65px;
            /* 顺序：上右下 左与对角线的右圆角一致 */
            border-radius: 5px 25px 45px;
            /* 顺序：上右 下与上对应，左与右对应 */
            border-radius: 5px 25px;
        }
    </style>
</head>
<body>
    <div></div>
    <p></p>
</body>
</html>
```

## 3. 内边距

1. 属性：padding
2. 作用：调整元素内容框与边框之间的距离
3. 取值：
```
20px;					一个值表示统一设置上右下左
20px 30px;				两个值表示分别设置(上下) (左右)
20px 30px 40px;			三个值表示分别设置上右下，左右保持一致
20px 30px 40px 50px;	表示分别设置上右下左
```
4. 单方向内边距,只能取一个值：
```
padding-top
padding-right
padding-bottom
padding-left
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>内边距</title>
    <style>
        div{
            width: 200px;
            height: 200px;
            border: 5px solid red;
            /* 上 右 下 左 */
            padding: 10px 0 0 10px;
            /* padding: 10px 20px 30px; */
        }
    </style>
</head>
<body>
    <div>
        好好学习 天天向上
    </div>
</body>
</html>
```

## 4. 外边距

1. 属性：margin

2. 作用：调整元素与元素之间的距离

3. 特殊：
    		1）margin:0; 取消默认外边距  
        		  2）margin:0 auto;左右自动外边距，实现元素在父元素范围内水平居中  
        		  3）margin:-10px;元素位置的微调  
      
4. 单方向外边距：只取一个值
    		margin-top
        		margin-right
        		margin-bottom
        		margin-left
      
5. 外边距合并：  
      1）垂直方向  

            		1.子元素的margin-top作用于父元素上 
            			解决：  
            				为父元素添加顶部边框；  
            				或为父元素设置padding-top:0.1px;  
            		2. 元素之间同时设置垂直方向的外边距，最终取较大的值  
        2）水平方向  
        	块元素对盒模型相关属性（width,height,padding,border,margin）完全支持;  
        	行内元素对盒模型相关属性不完全支持，不支持width/height,不支持上下边距  
        	行内元素水平方向上的外边距会叠加显示  

6. 带有默认边距的元素：  
    body,h1,h2,h3,h4,h5,h6,p,ul,ol{
    
    margin:0;
    
    padding:0;
    
    list-style:none;
    
    }
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>外边距</title>
        <style>
            /* div{
                width:300px;
                height: 300px;
                background-color: aqua;
                margin-bottom: 30px;
            }
            p标签默认有外边距
            p{
                width:200px;
                height: 200px;
                border: 5px solid red;
            } */
    
            div{
                width:300px;
                height: 300px;
                background-color: aqua;
                display: inline-block;
                margin-right: 100px;
            }
            /* p标签默认有外边距 */
            p{
                width:200px;
                height: 200px;
                border: 5px solid red;
                display: inline-block;
                margin: 0 0 0 50px;
            }
    
            /* 设置块元素的水平居中 */
            /* div{
                width:300px;
                height: 300px;
                background-color: aqua;
               
                margin:0 auto;
            } */
        </style>
    </head>
    <body>
        <div></div>
        <p></p>
    </body>
    </html>
    ```
    
    

# 布局方式
## 1. 标准流/静态流
默认布局方式,按照代码书写顺序及标签类型从上到下,从左到右依次显示
## 2. 浮动布局
主要用于设置块元素的水平排列
#### 1）属性
	float
#### 2）取值 
可取left或right，设置元素向左浮动或向右浮动
```css
float:left/right;
```
#### 3）特点
+ 元素设置浮动会从原始位置脱流,向左或向右依次停靠在其他元素边缘,在文档中不再占位
+ 元素设置浮动,就具有块元素的特征,可以手动调整宽高
+ "文字环绕":浮动元素遮挡正常元素的位置,无法遮挡正常内容的显示,内容围绕在浮动元素周围显示
#### 4）常见问题 
子元素全部设置浮动,导致父元素高度为0,影响父元素背景色和背景图片展示,影响页面布局
#### 5）解决
+ 对于内容固定的元素,如果子元素都浮动,可以给父元素固定高度(例:导航栏)
+ 在父元素的末尾添加空的块元素。设置clear:both;清除浮动
+ 为父元素设置overflow:hidden;解决高度为0    <!--重新计算高度 会计算浮动元素-->
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>浮动</title>
    <style>
        /* 浮动后块元素可以并排显示 */
        div{
            width: 200px;
            height:300px;
            /* float: left; */
        }
        .d1{
            background-color: red;
            float: left;
        }
        .d2{
            background-color: green;
            float: right;
        }
        .d3{
            background-color: blue;
            float: left;
        }
        /* 浮动后行内元素可以设置宽高 */
        span{
            width:200px;
            height: 300px;
            background-color: yellow;
            float:left
        }
        ul,li{
            list-style: none;
        }
        /* 子元素全部设置浮动,导致父元素高度为0 */
        li{
            /* background-color: aquamarine; */
            border:5px solid #000;
            /* 方案1 固定高度 除导航条外不常用*/
            /* height: 300px; */

            /* 方案3 重新计算父元素高度，必须加在父元素上*/
            /* overflow:hidden;             */
        }
        p{
            /* 方案2.1常用： 清除浮动的影响，不是浮动效果 */
            margin: 0;
            /* 实际使用时单独建立.clear类 */
            clear:both;
        }
        /* 方案2.2 */
        .clear{
            clear: both;
        }

    </style>
</head>
<body>
    <li>
        <div class='d1'></div>
        <div class='d2'></div>
        <div class='d3'></div>
        <span></span>
        
        <!-- 方案2.1  -->
        <!-- <p></p> -->
        <!-- 方案2.2 -->
        <p class="clear"></p>
    </li>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>文字环绕</title>
    <style>
        .red{
            width: 200px;
            height: 200px;
            background-color: red;
            float: left;
        }
        .content{
            width: 600px;
        }
    </style>
</head>
<body>
    <div class="red"></div>
    <div class="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore omnis iure excepturi tempora doloribus enim? Maiores, modi. Sit sapiente itaque quod laborum ipsam, hic debitis! Corporis veniam officia minima.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus perspiciatis inventore delectus sequi doloremque aliquid? Incidunt nisi, quaerat dolor delectus quod porro repellendus atque corrupti minus quidem, debitis quas dolore!
    </div>
</body>
</html>
```

## 3. 定位布局

结合偏移属性调整元素的显示位置
#### 1）属性
position
#### 2） 取值
可取relative（相对定位）/absolute（绝对定位）/fixed（固定定位）
```css
postion:relative/absolute/fixed/static
```
#### 3）偏移属性
设置定位的元素可以使用偏移属性调整距离参照物的位置
```text
top   	距参照物的顶部
right	  距参照物的右侧
bottom	距参照物的底部
left	  距参照物的左侧
```
#### 4）分类 
+ relative 相对定位  <!--对元素位置微调,相对于元素自身的位置-->

  <!--与外边距对比,比margin更方便灵活,如margin left -100可以,但margin right 100无效果-->
```text
元素设置相对定位,可参照元素在文档中的原始位置进行偏移,不会脱离文档流
```
+ absolute 绝对定位   <!--使用频率高-->
```text
1. 绝对定位的元素参照离他最近的已经定位的祖先元素进行偏移,如果没有,则参照窗口进行偏移
2. 绝对定位的元素会脱流,在文档中不占位,可以手动设置宽高
```
使用绝对定位 :
	"父相子绝" : 父元素设置相对定位,子元素绝对定位，参照已定位的父元素偏移.

+ fixed	固定定位
```text
  1. 参照窗口进行定位,不跟随网页滚动而滚动
  2. 脱离文档流
```
#### 5）堆叠次序 
元素发生堆叠时可以使用 z-index 属性调整已定位元素的显示位置，值越大元素越靠上：
+ 属性 : z-index
+ 取值 : 无单位的数值,数值越大,越靠上
+ 堆叠：
 1. 定位元素与文档中正常元素发生堆叠，永远是已定位元素在上
 2. 同为已定位元素发生堆叠，按照 HTML 代码的书写顺序，后来者居上

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>相对定位</title>
    <style>
        div{
            width: 200px;
            height: 200px;
            background-color: red;
            /* 相对定位 相对于 元素自身的位置移动 */
            position: relative;
            left:200px;
            top: 200px;
        }
        p{
            width: 300px;
            height: 200px;
            background-color: blue;
        }
    </style>
</head>
<body>
    <div></div>
    <p></p>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>固定定位</title>
    <style>
        div{
            width: 100%;
            height: 120px;
            background-color: red;
            position: fixed;
            top: 0;
        }
        p{
            height: 2000px;
        }
        .p1{
            background-color: bisque
        }
        .p2{
            background-color: rgb(181, 190, 42)
        }
        .p3{
            background-color: cornflowerblue
        }
    </style>
</head>
<body>
    <div></div>
    <p class="p1"></p>
    <p class="p2"></p>
    <p class="p3"></p>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>绝对定位</title>
    <style>
        .d1{
            width: 300px;
            height: 300px;
            background-color: aquamarine;
            margin: 0 auto;
            position: relative;
        }
        .d1>div{
            width: 100px;
            height: 100px;
            background-color: red;
            position: absolute;
            right: 0;
            bottom: 0;
        }
    </style>
</head>
<body>
    <div class="d1">
        <div></div>
    </div>
</body>
</html>
```

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>定位元素的堆叠次序</title>
    <style>
        .d1{
            width: 200px;
            height: 200px;
            background-color: red;
            position: relative;
            top: 100px;
            z-index: 10;
        }
        .d2{
            width: 300px;
            height: 200px;
            background-color: blue;
            position: relative;
            z-index: 999;
        }
    </style>
</head>
<body>
    <div class="d1"></div>
    <div class="d2"></div>
</body>
</html>
```



```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        /* 
        书写方式
        三大特性  层叠 继承 优先级
        选择器    id 类 伪类  标签  群组  后代 子代 
        背景图片偏移
        文本水平垂直居中

        盒模型   内容 内边距 边框 外边距
        内容溢出 overflow
        圆角边框
        子元素上外边距溢出
        元素在页面中实际的宽度 = width+左右边框+左右内边距+左右外边距
        元素在页面中实际的高度 = height+上下边框+上下内边距+上下外边距


        浮动  解决块元素水平排列
        脱离文档流(浏览器的默认布局方式) 在页面不占位置
        子元素浮动影响父元素高度

        定位  static默认
        相对定位  参照物自己  不会脱离文档流   对元素位置微调
        绝对定位  参照物最近的已定位的祖先元素  
                 脱离文档流
                 在祖先元素中确定自己的位置
        固定定位  参照物窗口
                 脱离文档流
                 导航条 侧边栏 小广告......
        z-index  调整定位元素的堆叠次序
         */
    </style>
</head>
<body>
    
</body>
</html>
```



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        ul,li{
            padding: 0;
            margin: 0;
            /* 父元素和子元素一同浮动时 父元素的边框可以直接包住子元素 */
            float: left;
        }
        ul{
            list-style: none;
        }
        .first{
            color: #666;
            margin: 5px 0;
        }
        ul{
            border: 1px solid red;
        }
        .items{
            margin: 5px 15px;
            padding: 0 5px;
            transition: all 0.3s;
        }
        .items:hover{
            background-color: #f00;
            color: #fff;
            cursor: pointer;
        }
        .active{
            background-color: #f00;
            color: #fff;
        }
    </style>
</head>
<body>
    <ul>
        <li class="first">难度：</li>
        <li class="items">全部</li>
        <li class="items">初级</li>
        <li class="items active">中级</li>
        <li class="items">高级</li>
    </ul>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        /* 方案一 用浮动 */
        span{
            float: left;
        }
        i{
            width :0px;
            height: 0px;
            border:10px solid transparent;
            float: left;
            border-top-color: black;
            margin-top:5px; 

        }
        
        /* 方案二 用定位 */
        div{
            position: relative;
        }
        span{
            color: #666;
        }
        i{
            width: 0;
            height: 0;
            border: 8px solid transparent;
            border-top-color:#000;
            position: absolute;
            top:9px;
            /* float: left;
            margin-top: 5px; */
        }
    </style>
</head>
<body>
    <div>
        <span>上海</span>
        <i></i>
    </div>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .parent{
            width: 179px;
            border:1px solid #000;
        }
        .c1{
            background-color: #e4393c;
            color: #fff;
            font-size: 14px;
            width: 30px;
            text-align: center;
            margin-left:3px;
            border-radius: 0 3px 3px 0; 
        }
        .c2{
            font-size: 18px;
            margin-left:41px;
            margin-top:-5px;
        }
        .c3{
            color: #aaa;
            text-align: center;
        }
        .c4{
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="parent">
        <div class="c1">低价</div>
        <div class="c2">母婴馆</div>
        <div class="c3">秒杀低值亿元</div>
        <div class="c4">
            <img src="imgs/img01.png" alt="">
        </div>
    </div>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div{
            width: 180px;
            height: 62px;
            background-color: #000;
            color: gold;
            font-size:30px;
            text-align: center;
            line-height: 62px;
            border-radius: 31px;
        }
        div:hover{
            background-color: #e4393c;
            color: #fff;
            /* 设置鼠标指针样式 */
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div>PLUS会员</div>
</body>
</html>
```



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        #cart{
            width: 180px;
            height: 40px;
            border: 1px solid #666;
            background-color: #ccc;
            position: relative;
        }
        #cart>div{
            text-align: center;
            line-height: 40px;
        }
        #cart>i{
            width: 16px;
            height: 16px;
            font-size: 14px;
            font-style: normal;
            background-color: #f00;
            color: #fff;
            position: absolute;
            top: -6px;
            right: 25px;
            text-align: center;
            line-height: 16px;
            border-radius: 50% 50% 50% 0;
        }
        #cart>span{
            position: absolute;
            right: 10px;
            top: 10px;
        }
    </style>
</head>
<body>
    <div id="cart">
        <div>我的购物车</div>
        <i>1</i>
        <span>></span>
    </div>
</body>
</html>
```

