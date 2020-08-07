[TOC]
# 一、BOM 对象
## 1. BOM 介绍 
​		BOM全称为“Browser Object Model”，浏览器对象模型。提供一系列操作浏览器的属性和方法。核心对象为window对象，不需要手动创建，跟随网页运行自动产生，直接使用，在使用时可以省略书写。
## 2. 对象方法
1. ##### 网页弹框

   ```javascript
   alert()		//警告框
   confirm()	//确认框
   ```

2. ##### 定时器方法

![setInterval函数2](assets\setInterval函数2.png)

**周期性定时器**
	作用：每隔一段时间就执行一次代码

```javascript
//开启定时器:
var timerID = setInterval(function,interval);
/*
参数 :
 function : 需要执行的代码,可以传入函数名;或匿名函数
 interval : 时间间隔,默认以毫秒为单位 1s = 1000ms
返回值 : 返回定时器的ID,用于关闭定时器
*/
```
   关闭定时器 :
```javascript
//关闭指定id对应的定时器
clearInterval(timerID);
```
![setTimeout函数3](assets\setTimeout函数3.png)

**一次性定时器**
	作用：等待多久之后执行一次代码

```javascript
//开启超时调用:
var timerId = setTimeout(function,timeout);
//关闭超时调用:
clearTimeout(timerId);
```
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>BOM</title>
</head>

<body>
    <button id="btn1">启动定时器</button>
    <button id="btn2">停止定时器</button>
    <script>
        var btn1 = document.getElementById('btn1')
        var btn2 = document.getElementById('btn2')
        // 11:55
        //周期性定时器 (事件优先级高于定时器优先级 事件由用户触发)
        var timerId = null;
        // 点击btn1 启动定时器
        btn1.onclick = function () {
            // timerId后续其他函数也可能要用到 变成全局变量
            timerId = setInterval(function () {
                console.log('hello');
            }, 1000)
        }
        //   点击btn2停止定时器
        btn2.onclick = function () {
            // 停止周期性定时器
            clearInterval(timerId)
        }

        //一次性定时器
          btn1.onclick = function(){
            var timer = setTimeout(function(){
            alert('hello')
        },1000)
        }


        //网页弹框
        // var arr = [1,2,3,4];
        // alert('hello');
        // prompt('请输入')
        // var res = confirm('确定要删除吗？');
        // console.log(res);


    </script>
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
    <title>右下角小广告</title>
    <style>
        div{
            width: 200px;
            height: 300px;
            background-color: red;
            position: fixed;
            right: 3px;
            bottom: -301px;
            /* display: none; */
            transition: all 1s;
        }
        .show{
            bottom: 0;
        }
    </style>
</head>
<body>
    <div id="$"></div>
    <script>
        var div = document.getElementById('$');
        // 3s之后为div添加class show
        var timer = setTimeout(function(){
            div.setAttribute('class','show');
        },3000)
    </script>
</body>
</html>
```

## 3. 对象属性

window的大部分属性又是对象类型

1. ##### history

   作用：保存当前窗口所访问过的URL
   属性 :  length 表示当前窗口访问过的URL数量
   方法 :

   ```javascript
   back() 对应浏览器窗口的后退按钮，访问前一个记录
   forward() 对应前进按钮，访问记录中的下一个URL
   ```

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>history1</title>
   </head>
   <body>
       <h1>历史记录1</h1>
       <a href="history2.html">history2</a>
       <button onclick="history.forward()">前进</button>
   
       <script>
           setTimeout(function(){
               location.href = 'http://www.tmooc.cn'
           },3000)
       </script>
   </body>
   </html>
   
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>history2</title>
   </head>
   <body>
           <h1>历史记录2</h1>
           <a href="http://www.tmooc.cn">tmooc</a>
           <button onclick="history.forward()">前进</button>
           <button onclick="history.back()">后退</button>
   </body>
   </html>
   ```

   

2. ##### location

   作用：保存当前窗口的地址栏信息(URL) 
   属性 :  href 设置或读取当前窗口的地址栏信息
   方法 :

   ```text
   reload(param) 重载页面(刷新)
   参数为布尔值，默认为 false，表示从缓存中加载，设置为true,强制从服务器根目录加载
   ```
   
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>通过location获取数据</title>
   </head>
   <body>
       <script>
           // 当前地址为file:///home/tarena/month03/day07/code/demo3.html?name=qtx&age=18
           //注意:需要先打开以上地址 再运行后续的程序
           // 获取name和age在页面上显示 
           var url = location.href;
           // 将url按？分割   ？前是地址  ？后是数据
           var data = url.split('?')[1];
           // console.log(data);
           // 将data按&分割  获取每一个键值对
           var datas = data.split('&');
           // console.log(datas);
           for (var i in datas){
               var res = datas[i].split('=');
               console.log(`${res[0]}的值是${res[1]}`)
           }
   
       </script>
   </body>
   </html>
   
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>向demo3传递数据</title>
   </head>
   <body>
       <a href="demo3.html?name=qtx&age=18&address=beijing">向demo3.html发送数据</a>
   </body>
   </html>
   ```
   
   

# 二、DOM节点操作
DOM全称为 “Document Object Model”，文档对象模型，提供操作HTML文档的方法。（注：每个html文件在浏览器中都视为一篇文档,操作文档实际就是操作页面元素。）
## 1. 节点对象

JavaScript 会对 html 文档中的元素、属性、文本甚至注释进行封装，称为节点对象，提供相关的属性和方法。

## 2. 访问节点

- 元素节点   ( 操作标签）
- 属性节点（操作标签属性）
- 文本节点（操作标签的文本内容）

标签属性都是元素节点对象的属性,可以使用点语法访问，例如：

```javascript
h1.id = "d1"; 		 //set 方法
console.log(h1.id);  //get 方法
h1.id = null;		//remove 方法
```

注意 :

- 属性值以字符串表示
- class属性需要更名为 className，避免与关键字冲突，例如：
  h1.className = "c1 c2 c3"；

## 3. 操作元素样式

1. 为元素添加 id、class属性，对应选择器样式
2. 操作元素的行内样式，访问元素节点的style属性，获取样式对象；样式对象中包含CSS属性，使用点语法操作。

```javascript
p.style.color = "white";
p.style.width = "300px";
p.style.fontSize = "20px";
```

注意 :

- 属性值以字符串形式给出，单位不能省略
- 如果css属性名包含连接符，使用JS访问时，一律去掉连接符,改为驼峰， font-size -> fontSize

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <img src="" alt="">
    <a href=""></a>
    <div class="" onclick="" id="d1">hello world</div>

    <script>
        // 15:59~16:15
        var div = document.getElementById('d1');
        // div.className = 'title';
        div.setAttribute('class','title');
        console.log(div);
        // div.removeAttribute('class');
        div.className = '';
        console.log(div)
    </script>

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
    <title>轮播图</title>
    <style>
        /* 父容器 */
        #sildeBar{
            width: 739px;
            height: 419px;
            position: relative;
        }
        /* 所有要轮播的图片 */
        #sildeBar>img{
            position: absolute;
            top: 0;
            z-index: 1;
            opacity: 0;
            transition: all 0.5s;
        }
        /* 要显示的图片 */
        #sildeBar>img.active{
            opacity: 1;
            z-index: 2;
        }
        /* 左右小箭头 */
        #ll,#rr{
            position: absolute;
            z-index: 6;
            top:50%;
            margin-top: -20px;
        }
        #rr{
            right: 0;
        }
    </style>
</head>
<body>
    <div id="sildeBar">
        <img class="item active" src="../imgs/gm1-6.jpg" alt="">
        <img class="item" src="../imgs/gm2-6.jpg" alt="">
        <img class="item" src="../imgs/gm3-6.jpg" alt="">
        <img class="item" src="../imgs/gm4-6.jpg" alt="">
        <img class="item" src="../imgs/gm5-6.jpg" alt="">
        <div>
            <img id="ll" src="../imgs/l1-6.png" alt="">
            <img id="rr" src="../imgs/r1-6.png" alt="">
        </div>
    </div>

    <script>
        // 16:59~17:15
        var ll = document.getElementById('ll');
        var rr = document.getElementById('rr');
        // 点击左侧箭头时 向左切换图片
        // 1-->5-->4  3  2  1  5
        var i = 0;//第几张图片
        // 找到当前的i所表示的图片对象  移除class active
        // 找到下一个i所表示的图片对象  添加class active
        var imgs = document.getElementsByClassName('item');
        ll.onclick = function(){
            imgs[i].className = 'item';
            // 求下一个图片的i
            i--;//向左移动索引值
            if(i==-1){
                // 如果是第一张图向左移动 切换到最后一张
                i = imgs.length-1;
            }
            imgs[i].className = 'item active';
        }
        rr.onclick = function(){
            imgs[i].className = 'item';
            i++;
            if(i == imgs.length){
                i = 0;
            }
            imgs[i].className = 'item active';
        }

        // 使用周期性定时器 每隔1.5s自动向右切换图片
        var timer = setInterval(rr.onclick,1500);
        // 鼠标移动到图片或左右小箭头时  停止定时器
        // 鼠标移出图片或左右小箭头时  启动定时器
        // onmouseover鼠标移入 onmouseout鼠标移出

        var sildeBar = document.getElementById('sildeBar');
        sildeBar.onmouseover = function(){
            clearInterval(timer)
        }
        sildeBar.onmouseout = function(){
            timer = setInterval(rr.onclick,1500);
        }
    </script>
</body>
</html>
```

