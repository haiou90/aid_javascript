[TOC]
# 一、流程控制
## 1. 作用
控制代码的执行顺序
## 2. 分类
#### 1）顺序结构
从上到下依次执行代码语句
#### 2）分支/选择结构
##### 1. if语句
+ 简单if结构
  ``` text
  if(条件表达式){
  	表达式成立时执行的代码段
  }
  ```
  注意 : 除零值以外，其他值都为真，以下条件为假值false
  ```javascript
  if(0){}
  if(0.0){}
  if(""){} //空字符串
  if(undefined){}
  if(NaN){}
  if(null){}
  ```
  特殊写法 :
  	{ }可以省略,一旦省略，if语句只控制其后的第一行代码
+ if - else结构
	```text
	if(条件表达式){
  	//条件成立时执行
  }else{
  	//条件不成立时选择执行
  }
  ```
+ 多重分支结构
    ```javascript
      if(条件1){
      	//条件1成立时执行
      }else if(条件2){
      	//条件2成立时执行
      }else if(条件3){
      	//条件3成立时执行
      }...else{
      	//条件不成立时执行
      }
    ```

![条件语句0](assets\条件语句0.png)
##### 2. switch语句

+ 语法 :
```javascript
switch(value){
	 case 值1 :
	 //value与值1匹配全等时,执行的代码段
	 break; //结束匹配
	 case 值2 :
	 //value与值2匹配全等时,执行的代码段
	 break;
	 case 值3 :
     //value与值3匹配全等时,执行的代码段
	 break;
	 default:
 	 //所有case匹配失败后默认执行的语句
 	 break;
}
```
+ 使用 :
```javascript
1. switch语句用于值的匹配，case用于列出所有可能的值；只有switch()表达式的值与case的值匹配全等时，才会执行case对应的代码段
2. break用于结束匹配，不再向后执行；可以省略，break一旦省略，会从当前匹配到的case开始，向后执行所有的代码语句，直至结束或碰到break跳出
3. default用来表示所有case都匹配失败的情况，一般写在末尾，做默认操作
4. 多个case共用代码段
  		case 值1:
  		case 值2:
  		case 值3:
  		//以上任意一个值匹配全等都会执行的代码段
```

![条件语句1](assets\条件语句1.png)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>if语句</title>
</head>
<body>
    <script>
        // 接收用户输入的年龄  prompt()
        // 如果年龄超过18  弹框 可以访问
        // var age = prompt('请输入年龄');
        // if (age>=50){
        //     document.write('<h1>访问老年人模式</h1>');
        //     // alert('可以访问');
        // }else if(age>=18){
        //     document.write('<h1>访问普通模式</h1>')
        // }else{
        //     document.write('<h1>访问青少年模式</h1>');
        //     // alert('访问青少年模式');
        // };
        // if(age>=18)
        // alert('可以访问');


        // 休息+练习09:48~10:05
        // 根据用户 输入的成绩输出不同的结果
        // 小于60  不及格
        // 60~70  及格
        // 70~90  良好
        // 90+    优秀
        // var score = prompt('请输入成绩');
        // if(score>=90){
        //     alert('优秀')
        // }else if(score>=70){
        //     alert('良好')
        // }else if(score>=60){
        //     alert('及格')
        // }else{
        //     alert('不及格')
        // }


        var month = prompt('请输入月份');
        // if(month==1){
        //     alert('31天')
        // }
        switch(month){
            case '1':
                // alert('31天')
                // break;//防止程序继续向下执行
            case '3':
                // alert('31天')
            case '5':
            case '7':
            case '8':
            case '10':
            case '12':
                alert('31天');
                break;
            case '4':
            case '6':
            case '9':
            case '11':
                alert('30天');
                break;
            case '2':
                alert('28天');
                break;
            default:
                alert('输入月份有误');
                break;
        }
    </script>
</body>
</html>
```



#### 3）循环结构

+ 作用
根据条件，重复执行某段代码
+ 分类
1. while循环
```text
定义循环变量;
   while(循环条件){
   条件满足时执行的代码段
   更新循环变量;
}
```
2. do-while循环
```text
do{
	循环体;
	更新循环变量
}while(循环条件);
```
![while语句3](assets\while语句3.png)

与 while 循环的区别 :

+ while 循环先判断循环条件，条件成立才执行循环体
+ do-while 循环不管条件是否成立，先执行一次循环体

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>while循环</title>
</head>
<body>
    <script>
        //0~9的整数
        // i = 0
        // while i<10:
        //     print(i)
        //     i+=1

        // var i = 0;
        // while(i<10){
        //     console.log(i);
        //     i++;
        // }

        // 输出0~20之间的偶数
        // var i = 0;
        // while(i<21){
        //     if(i % 2 == 0){
        //         console.log(i)
        //     }
        //     i++;
        // }
        
        // 接收用户输入的用户名  
        // 如果用户名不是laowang就继续输入用户名 直到是laowang为止
        // var uname = prompt('请输入用户名');
        // while (true){
        //     if (uname != 'laowang'){
        //         uname = prompt('请输入用户名');
        //     }
        // }

        // while (true){
        //     var uname = prompt('请输入用户名');
        //     if (uname == 'laowang'){
        //         break
        //     }
        // }
        
  
        // do{
        //     var uname = prompt('请输入用户名');
        // }while(uname != 'laowang')

        // 声明提前
        // 使用var声明的变量名在程序执行时会将变量的名字提前到所有代码上方 可以在任意位置找到变量名
        // 但是声明提前不会携带值  默认变量的值undefined
        // var uname
        console.log(uname);//undefined
        while (uname!='laowang'){
            var uname = prompt('请输入用户名')
        }
    </script>
</body>
</html>
```



3. for 循环
```text
for(定义循环变量;循环条件;更新循环变量){
	循环体;
}
```
![for循环语句2](assets\for循环语句2.png)

循环控制 :

1. break 强制结束循环
2. continue 结束当次循环，开始下一次循环
   循环嵌套 :
   在循环中嵌套添加其他循环

![循环中的语句4](assets\循环中的语句4.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>for循环</title>
</head>
<body>
    <script>
        // 0~9的数字
        // while (){
        // }
        // for(var i = 0;i<10;i++){
        //     console.log(i);
        // }


        // 求水仙花数
        // 1000以内的数字  每一位上的数字的3次幂的和相加等于原数字
        // 153 = 1**3+5**3+3**3
        // 求个位的数字  求十位的数字 求百位的数字
        // 判断条件 
        for(var i=100;i<1000;i++){
            var ge = i%10;
            var shi = parseInt(i/10 % 10);
            var bai = parseInt(i/100);
            if(ge**3+shi**3+bai**3 == i){
                console.log(i)
            }
        }

        for (var ge = 0;ge<10;ge++){
            for(var shi = 0;shi<10;shi++){
                for(var bai = 1;bai<10;bai++){
                    if(ge**3+shi**3+bai**3 == (bai*100+shi*10+ge)){
                        console.log((bai*100+shi*10+ge))
                    }
                }
            }
        }

    </script>
</body>
</html>
```



# 二、函数

![函数定义0](assets/函数定义0.png)

## 1. 作用 
  封装一段待执行的代码

## 2. 语法 

```javascript
  //函数声明
  function 函数名(参数列表){
  	函数体
  	return 返回值;
  }
  //函数调用
  函数名(参数列表);
```

![函数定义带参数2](assets/函数定义带参数2.png)

## 3. 使用 

  	函数名自定义，见名知意，命名规范参照变量的命名规范。普通函数以小写字母开头，用于区分构造函数(构造函数使用大写字母开头，定义类)

![函数定义带返回值3](assets/函数定义带返回值3.png)

## 4. 匿名函数

匿名函数：省略函数名的函数。语法为：

- 匿名函数自执行

```javascript
 (function (形参){
  
 })(实参);
```

- 定义变量接收匿名函数

```javascript
 var fn = function (){};
 fn(); //函数调用
```

![匿名函数1](assets/匿名函数1.png)

## 5. 作用域

JavaScript 中作用域分为全局作用域和函数作用域，以函数的{ }作为划分作用域的依据

1. 全局变量和全局函数
   - 只要在函数外部使用 var 关键字定义的变量，或函数都是全局变量和全局函数，在任何地方都可以访问
   - 所有省略 var 关键字定义的变量，一律是全局变量
2. 局部变量/局部函数
   - 在函数内部使用 var 关键字定义的变量为局部变量，函数内部定义的函数也为局部函数，只能在当前作用域中使用，外界无法访问
3. 作用域链
   局部作用域中访问变量或函数，首先从当前作用域中查找，当前作用域中没有的话，向上级作用域中查找，直至全局作用域

![变量的作用域](assets/变量的作用域.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>函数</title>
</head>
<body>
    <button id="btn">
        click me
    </button>
    <script>
        // 14:52~15:07
        // 通过document查找页面元素
        var btn = document.getElementById('btn');
        // console.log(btn.id);
        // 通过btn的onclick属性绑定一个匿名函数
        // function fun(){
        //     alert('hello world');
        // }
        // btn.onclick = fun
        
      	btn.onclick = function(){
            alert('hello world');
        }
    </script>

    <script>
        // 作用域
        // var a = 1;
        // function fun(){
        //     a = 10;
        //     b = 20;
        // }
        // fun();
        // console.log(b);  //20
        // console.log(a);  //10
        
        var a = 1;
        function fun(){
            var a = 10;
            return function(){
                a++;
                return a;
                // console.log(a);  //11
            }
        }
        console.log(fun()()); //11
        console.log(a); //1
    </script>

    <script>
        // function fun(name){
        //     document.write('hello ' + name);
        // }
        // fun('QTX');

        // function myMax(a,b){
        //     // if (a>b){
        //     //     return a
        //     // }else{
        //     //     return b
        //     // }
        //     return a>b?a:b
        // }
        // console.log(myMax(10,20));

        // (function (){
        //     document.write('hello world');
        // })()

        // console.log(fun);//function
        // console.log(fun1);//undefined

        // fun()

        // function fun(name){
        //     document.write('hello ' + name);
        // }
        // fun('QTX');

      	// fun1只能在下部执行调用
        // var fun1 = function(name){
        //     document.write('hello ' + name);
        // }
        // fun1('QTX');
    </script>
</body>
</html>
```



## 6. 获取多个DOM元素和控制属性

1. 根据标签名获取元素节点列表

```javascript
var elems = document.getElementsByTagName("");
/*
参数 : 标签名
返回值 : 节点列表,需要从节点列表中获取具体的元素节点对象,添加相应下标。
*/
```

2. 根据 class 属性值获取元素节点列表

```JavaScript
var elems = document.getElementsByClassName("");
/*
参数 : 类名(class属性值)
返回值 : 节点列表
*/
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>操作页面元素</title>
</head>
<body>
    <div id="d1" class="title">
        hello world
    </div>
    <script>
        var div = document.getElementsByTagName('div');
        console.log(div[0]);

        
        // var div = document.getElementsByClassName('title');
        // console.log(div);//HTML元素的集合 可能会有多个元素
        // console.log(div[0]);//通过索引的方式获取集合中的元素

        // var div = document.getElementById('d1');
        // console.log(div);
        // console.log(d1);
    </script>
</body>
</html>
```



3. 元素节点对象提供了以下属性来操作元素内容

```text
innerHTML : 读取或设置元素文本内容,可识别标签语法
innerText : 设置元素文本内容,不能识别标签语法
value : 读取或设置表单控件的值
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>操作页面元素内容</title>
</head>
<body>
    <input id="text" type="text">
    <button id="btn">click me</button>
    <h1 id="show">hello</h1>
    <script>
        // 查找页面元素
        // 找文本框
        var text = document.getElementById('text')
        // 找按钮
        var btn = document.getElementById('btn')
        // 找h1
        var h1 = document.getElementById('show')
        // console.log(h1.innerText)//获取文本内容
        // h1.innerText = 'hello world';//修改文本内容
        // h1.innerHTML = '<a href="">hello world</a>'

        // 休息17:00~17:15
        // 当按钮被点击时 执行一个函数
        btn.onclick = function(){
            // console.log(text.value);
            h1.innerText = text.value;
        }
        // 找到文本框的内容  将内容放在h1中显示
    </script>
</body>
</html>
```



4. 获取 DOM 树中的属性值

![获取元素的属性值1](assets/获取元素的属性值1.png)

5. 设置 DOM 树中的属性值：

![设置元素的属性值0](assets/设置元素的属性值0.png)

```javascript
elem.getAttribute("attrname");//根据指定的属性名返回对应属性值
elem.setAttribute("attrname","value");//为元素添加属性,参数为属性名和属性值
elem.removeAttribute("attrname");//移除指定属性
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
        .red{
            color: #f00;
        }
    </style>
</head>
<body>
    <div id="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit unde, cupiditate quisquam rem quas repudiandae ea maxime velit explicabo laborum eos ducimus exercitationem ut, quod sunt odit doloribus, maiores officia?
    </div>
    <button id="btn">变红</button>
    <button id="clear">还原</button>
    <script>
        var div = document.getElementById('content')
        var btn = document.getElementById('btn')
        var clear = document.getElementById('clear')
        btn.onclick = function(){
            // 为div添加class red
            div.setAttribute('class','red');
        }
        clear.onclick = function(){
            // 删除div的class
            // div.setAttribute('class','');  //多个值时只能用此方法
            div.removeAttribute('class');
        }
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
    <title>Document</title>
    <style>
        /* 休息10:00~10:15 */
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
    <script>
        // 休息9:55~10:10
        // 通过items找到全部的带有items类名的标签
        var items = document.getElementsByClassName('items')
        for(var i = 0;i<items.length;i++){
            items[i].onclick = function(){
                // 清除所有的class active
                for(var i = 0;i<items.length;i++){
                    // items[i].removeAttribute('class')
                    items[i].setAttribute('class','items')
                }
                // 为当前按钮添加class active
                this.setAttribute('class','items active')
            }
        }





        // for(let i = 0;i<items.length;i++){
        //     // 使用let声明变量
        //     // let声明的循环变量 只能在循环中使用 表示当前的变量
        //     items[i].onclick = function(){
        //         // this 表示调用函数的当前HTML(dom)对象
        //         console.log(this.innerHTML)
        //     }
        // }
        

        // for(let i = 0;i<items.length;i++){
        //     // 使用let声明变量
        //     // let声明的循环变量 只能在循环中使用 表示当前的变量
        //     items[i].onclick = function(){
        //         console.log(items[i].innerHTML)
        //     }
        // }
        
        // for(var i = 0;i<items.length;i++){
        //     items[i].onclick = (function(i_inner){
        //         // 外部函数中想要找到当前的i  i的值永远是4
        //         // 思路一  通过闭包的方式 保留当前的i
        //         // console.log(i_inner)
        //         return function(){
        //             console.log(items[i_inner].innerHTML);
        //         }
        //     })(i)
        // }
        
        
        
        // console.log(items);
        // 遍历 为每一个标签绑定单击事件   //当前 i 是全局变量为4 现在的方法无法完成绑定
        // for(var i = 0;i<items.length;i++){
        //     items[i].onclick = function(){
        //         // alert('hello world');
        //         console.log(i)
        //         console.log(items[i]);//undefined
        //         // alert(items[i].innerHTML)
        //     }
        // }
        // console.log(i)

        // 为中级按钮添加鼠标单击事件  弹框提示hello world
        // var active = document.getElementsByClassName('active')[0];
        // // console.log(active);
        // active.onclick = function(){
        //     alert('hello world')
        // }
    </script>

</body>
</html>
```



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=s, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>回顾</title>
</head> 
<body>
    <script>
        a=10
        if (a<18){ 
            manzu
        }else if (a>60){
            manzu2
        }else{
            bumanzuzhixing
        }
        switch(a){
            case 10:
            case 18:
                break
            default:
                //所有case匹配失败后的结果
        }

        var i=0;
        while(i<10){
            console.log(i);
            i++;
        }

        do{
            console.log(i)
            i++;
        }while(i<10)

        for (var i=0;i<10;i++){
            console.log(i)
        }

    </script>
    <button id ='btn' class="b1"></button>
    <script>
        //闭包
        function fun(){
            var a=10;
            return function(){
                console.log(a)
            }
        }
        console.log(fun()())
        //作用域
        var a=1
        function fun(){
            var a=10;
            function inner(){
                console.log(a)
            }
            inner()
        }
        fun()
        console.log(i);//1
        //匿名函数用法
        var btn=document.getElementById('btn')
        btn.onclick = function(){
            fun('qtx') 
        }

        //自调：常用 不浪费内存空间 --元素点击
        (function(name){
            console.log('hello' +name)
        })('qtx')

        //function作为全局变量 可以在任意位置调用
        function fun(name){
            console.log('hello' +name)
        }

        //很少用 声明提前 变量提前时只提前变量名，不提前值，所以只能在函数下方调用
        var fun= function(name){
            console.log('hello' +name)
        }
        fun()
    </script>

    <script>
        //查找页面元素
        var b1=document.getElementsByClassName('b1')
        for(var i=0;i<b1.length;i++){
            console.log(b1[i])
        }

        var button=document.getElementsByTagName('button')
        //修改内容
        b1[i].innerHTML = 'click'
        b1[i].innerText = 'click'

        //修改表单控件
        input.value='xxx'
        //修改属性
        btn.getAttribute('class')
        btn.setAttribute('class','btn1 red')
        btn.removeAttribute('class')
    </script>
    
</body>
</html>
```

