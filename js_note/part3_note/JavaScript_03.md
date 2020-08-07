[TOC]
# 一、 内置对象
  ## 1） 对象
  对象是由属性和方法组成的,使用点语法访问

```html 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>对象</title>
</head>
<body>
    <script>
        var obj = {uname:"QTX",age:18};
        console.log(obj)
        console.log(obj.uname,obj.age);
        console.log(obj['uname']);

        //i属性名 obj[i]属性值
        for(var i in obj){
            console.log(i,obj[i]);
        }
        
        // [{"name":"maria","age":18},{},{}...]
        
        //json--js文本标记方式 属性名严格加双引号， 一种格式，用于前后端传输数据
        var json = {"uname":"QTX","age":18};
        console.log(obj)
        console.log(json)
    </script>
</body>
</html>
```



  ## 2） Array 数组
  #### 1. 创建 
  #### 2. 特点 
+ 数组用于存储若干数据,自动为每位数据分配下标,从0开始
+ 数组中的元素不限数据类型,长度可以动态调整
+ 动态操作数组元素 ：根据元素下标读取或修改数组元素，arr[index]
#### 3. 属性和方法
1. 属性 : length 表示数组长度,可读可写
2. 方法 :
    + push(data)
    在数组的末尾添加一个或多个元素,多个元素之间使用逗号隔开
    返回添加之后的数组长度

    + pop()
    移除末尾元素
    返回被移除的元素

    + unshift(data)
    在数组的头部添加一个或多个元素
    返回添加之后的数组长度

    + shift()
    移除数组的第一个元素
    返回被移除的元素

    + splice(index,num)
    
      从数组中添加/删除项目

      返回被删除的项目
    
    + toString()
将数组转换成字符串类型
    返回字符串结果
    
    + join(param)
将数组转换成字符串,可以指定元素之间的连接符,如果参数省略,默认按照逗号连接
    返回字符串
    
    + reverse()
    反转数组,倒序重排
    返回重排的数组,注意该方法直接修改原数组的结构
    
    + sort()
    对数组中元素排序,默认按照Unicode编码升序排列
    返回重排后的数组,直接修改原有数组
    参数 : 可选,自定义排序算法
    	例：
        ```javascript
        //自定义升序
        function sortASC(a,b){
          return a-b;
        }
        ```
       作用：作为参数传递到sort()中,会自动传入两个元素进行比较,如果a-b>0,交换元素的值,自定义升序排列
        ```javascript
        //自定义降序
        function sortDESC(a,b){
        	return b-a;
        }
        //如果返回值>0,交换元素的值,b-a表示降序排列
        ```
#### 4. 二维数组 
数组中的每个元素又是数组
```javascript
 var arr1 = [1,2,3];
 var arr2 = [[1,2],[3,4],[5,6,7]];
 //操作数组元素
 var r1 = arr2[0] //内层数组
 var num = r1[0]; //值 1
 //简写
 var num2 = arr2[1][0];
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>array数组</title>
</head>
<body>
    <script>
        // Array() 构造函数 保存一些和数组有关的属性和方法
        // new 创建一个空对象 让空对象继承数组的属性和方法 返回这个对象
        //var arr = Array(5,4,3,2,1)   //Array函数
        // var arr = new Array(5,4,3,2,1); //对象  创建方式一
        // console.log(arr);
        
        // var arr = [1,2,3,4,5];  //创建方式二
        // //         0 1 2 3 4
        //js的索引本质是通过字符串查找，数字在底层操作变成字符串
        // console.log(arr[-1]);//没有反向索引undefined
        // console.log(arr[arr.length-1]);//数组最后一位
        // console.log(arr[5]);//undefined
        // arr[0:3]不能切片  '0:3'该字符串找不到，所以不能切片（内置函数）
        // arr[2] = 3.14;
        // console.log(arr);
        // arr[10] = 11;
        // console.log(arr);//JS数组可以是不连续的
        
        //两种遍历数组方式对比
        // 遍历数组
        // 遍历数组的全部内容 如果对应索引的值为空 显示undefined 
        // for(var i=0;i<arr.length;i++){
        //     console.log(arr[i]);
        // }
        // // 遍历数组中全部的值 获取到对应的索引，空的不找
        // for(var i in arr){
        //     console.log(i,arr[i])//i 索引值（灰色--字符串）
        // }


        // 数组方法
        // var arr = [0,1]
        // // 末尾添加
        // arr.push(2,3,4)
        // console.log(arr)
        // // 末尾移除 返回被删除的数值
        // var last = arr.pop()
        // console.log(arr)

        // 开始位置添加（一个或多个）
        // arr.unshift(-1)
        // console.log(arr) //显示有点问题 显示移除后的结果
        // // 开始位置移除 
        // var first = arr.shift()
        // console.log(arr,first)


        // var arr = [1,2,3,4,5];
        //         0 1 2
        // 从arr索引值为2的位置开始 截取两个值 放在新数组中返回
        // var res = arr.splice(2,2);
        // 还可以按照位置替换原本的内容
        // var res = arr.splice(2,2,'?','?');
        // console.log(res);
        // console.log(arr);

        // var arr = [1,2,5];//[1,2,3,4,5]
        // arr.splice(2,0,3,4);
        // // 从arr索引值为2的位置开始 截取0个值  添加3,4
        // console.log(arr);


        // 数组转字符串
        // var arr = [1,2,3]
        // console.log(arr.toString());//'1,2,3'无中括号，Python语法有中括号
        // console.log(arr.join('-'));
        // var arr = [2019,1,1];
        // // console.log(arr[0]+'/'+arr[1]+'/'+arr[2])
        // console.log(arr.join('/'))


        // 数组排序
        var arr = [10,2,5,77,300];
        // sort接收一个自定义函数做参数（sortASC sortDESC）
        // sort每次会取两个数值传入自定义函数 
        // sort会判断函数的返回值 如果函数返回值大于0 则交换两个数的位置
        // arr.sort(); //默认按照编码排序，数值排序时不适用，要自定义方法
        // console.log(arr)
        arr.sort(sortASC);
        console.log(arr);
         //自定义升序
        function sortASC(a,b){
            return a-b;
        }
        // 自定义降序
        function sortDESC(a,b){
            return b-a;
        }
    </script>
</body>
</html>
```



## 3）String 对象

#### 1. 创建 
```javascript
    var str = "100";
    var str2 = new String("hello");
```
#### 2. 特点 
字符串采用数组结构存储每位字符,自动为字符分配下标,从0开始
#### 3. 属性 
length ：获取字符串长度
#### 4. 方法 
+ 转换字母大小写
    toUpperCase() 转大写字母
    toLowerCase() 转小写字母
    返回转换后的字符串,不影响原始字符串

+ 获取字符或字符编码
    charAt(index)	   获取指定下标的字符
    charCodeAt(index)  获取指定下标的字符编码
    参数为指定的下标,可以省略,默认为0

+ 获取指定字符的下标

    + indexOf(str,fromIndex)
    作用 : 获取指定字符的下标,从前向后查询,找到即返回
    参数 :
    	str 表示要查找的字符串,必填
    	fromIndex 表示起始下标,默认为0
    返回 :
    	返回指定字符的下标,查找失败返回-1

+ 截取字符串
    substring(startIndex,endIndex)
    作用 : 根据指定的下标范围截取字符串,startIndex ~ endIndex-1
    参数 :
     startIndex	表示起始下标
     endIndex	表示结束下标,可以省略,省略表示截止末尾

+ substr(startIndex,len)

    作用：根据下标截取指定的字符串

+ 分割字符串
    split(param)
    作用 : 将字符串按照指定的字符进行分割,以数组形式返回分割结果
    参数 : 指定分隔符,必须是字符串中存在的字符,如果字符串中不存在,分割失败,仍然返回数组

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>string对象</title>
</head>
<body>
    <script>
        //创建
        // var str1 = 'hello';              //string 只有此方法，不用下面两种方法
        // var str2 = new String('hello');  //新的字符串对象，与str地址相同
        // var str3 = new String('hello');  //再创建新的字符串对象
        // console.log(str1)
        // console.log(str2)
        // console.log(str1 == str2) //true  使用地址相同
        // console.log(str2 == str3) //false 开辟新的空间存储，存储地址不同
        
        //索引查找
        // var str1 = 'hello';              //string 只有此方法，不用下面两种方法
        //             01234
        // console.log(str1[5]='1');  //返回值为1，没有改变字符串
        // console.log(str1);   //hello 通过索引给字符串赋值 不改变原字符串
                
        //遍历，每次遍历结果都是索引
        // var str1 = 'hello';    //string 
        // for(var i in str1){
        //     console.log(i,str1[i])
        // }
        
        // var str1 = 'hello';    
        //方法1：大小写
        // // console.log(str1.toUpperCase()); HELLO
        // // console.log(str1);  hello

        //方法2 指定下标字符编码
        // console.log(str1.charAt(3));  l
        // console.log(str1.charCodeAt(1));  101 

        //方法3:指定字符的下标（@）
        // console.log(str1.indexOf('ll'));//2
        // console.log(str1.indexOf('a'));//-1
        // // 要查找的字符串  起始位置索引为3
        // console.log(str1.indexOf('ll',3));//-1 未找到

        //方法4：截取字符串
        // var str1 = 'This is a test string';
        // console.log(str1.substring(4,10)) //10代表索引终值
        // console.log(str1.substr(4,10))  //10代表长度

        //方法5：分割字符串 or 字符串转数组
        var email = 'shibw@tedu.cn';
        console.log(email.split('@'));
        var today = '2020-01-01'; 
        console.log(today.split('-'));       
    
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
    <title>字符串练习 </title>
</head>

<body>
    <input id="email" type="text" placeholder="请输入邮箱地址">
    <button id="btn">获取用户名和服务商</button>
    <table>
        <thead>
            <tr>
                <th>用户名</th>
                <th>服务商</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
    <script>
        // 文本框
        var email = document.getElementById('email');
        var btn = document.getElementById('btn');
        var tbody = document.getElementsByTagName('tbody')[0];
        // 16:00~16:15
        btn.onclick = function(){
            var str = email.value;//获取用户输入的内容
            // var index = str.indexOf('@');
            // var u = str.substring(0,index);//用户名
            // var f = str.substring(index+1);//服务商
            var res = str.split('@');//['shibw','tedu.cn']
            var html = '';
            html += '<tr>';
            html += '<td>'+res[0]+'</td>';
            html += '<td>'+res[1]+'</td>';    
            html += '</tr>';
            console.log(html);//将数据拼接到页面元素的字符串中
            tbody.innerHTML = html;//将字符串放入页面元素
        }


        // shibw@tedu.cn  用户名shibw  服务商tedu.cn
        // var str = 'shibw@tedu.cn';
        // // 提取字符串中的用户名和服务商
        // var index = str.indexOf('@');
        // var u = str.substring(0,index);
        // var f = str.substring(index+1);
        // console.log('用户名'+u,'服务商'+f)

    </script>
</body>

</html>
```



+ 模式匹配
  
+ 正则表达式对象 RegExp
  
    RegExp : Regualr Expression
    
    1. 语法 ：
       var reg1 = /微软/ig;
       var reg2 = new RegExp('匹配模式','修饰符');
       正则表达式对象可以接收一个变量。
    
	2. 属性 ：
    
       lastIndex : 可读可写，表示下一次匹配的起始索引
       注意 ：
    
       1. 默认情况下，正则表达式对象不能重复调用方法，
          如果重复调用，结果会出错：
          由于 lastIndex 保存再一次匹配的起始下标，
          重复调用时，不能保证每次都从下标0开始
          验证，可以手动调整 lastIndex 为 0。
       2. 只有正则对象设置全局匹配 g ，该属性才起作用。
    
    3. 方法 ：
    
       test(str) :验证字符串中是否存在满足正则匹配模式的内容，存在则返回true，
    
       不存在返回false参数为要验证的字符串。
    
+ 作用 : 借助正则表达式实现字符串中固定格式内容的查找和替换
    正则表达式 :
     var reg1 = /字符模式/修饰符;
     修饰符 : 
      i :  ignorecase 忽略大小写
      g : global 全局范围
    字符串方法 :
    
    + match(regExp/subStr)
	作用 : 查找字符串中满足正则格式或满足指定字符串的内容
    	返回 : 数组,存放查找结果
    + replace(regExp/subStr,newStr)
      作用 : 根据正则表达式或字符串查找相关内容并进行替换
      返回 : 替换后的字符串,不影响原始字符串。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>正则表达式</title>
</head>
<body>
    <script>    
        // /this/ 正则表达式的匹配模式   i忽略大小写 g查找全部
        var reg1 = /this/gi;
        var reg2 = new RegExp('is','ig');

        //检测是否存在 由于全局查找，在上一次检测位置后继续查找 第三次没有false 
        var str = 'This is a test string';
        console.log(reg2.test(str),reg2.lastIndex)
        reg2.lastIndex = 0; //重新指向0
        console.log(reg2.test(str),reg2.lastIndex)
        console.log(reg2.test(str),reg2.lastIndex)
        console.log(reg2.test(str),reg2.lastIndex)

        // var str = 'This is a test string';
        //查找
        // console.log(reg1.test(str));
        // console.log(str.match('this'));//null this-->This
        // console.log(str.match(reg1)); // i忽略大小写 1个
        // console.log(str.match(reg2)); // g查找全部  2个
        //替换
        var res = str.replace(reg1,'that'); //返回新字符串
        console.log(res);
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
    <title>练习</title>
    <style>
        p>span{
            color: #f00;
        }
    </style>
</head>
<body>
    <!-- 16:57~17:15 -->
    <input id="key" type="text">
    <button id="btn">查找</button>
    <p id="content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis veniam, quod iusto modi odio, error cum similique excepturi porro assumenda magni! Voluptas at aperiam corporis, aspernatur odio debitis consequuntur quae.
    </p>
    <script>
        // 1.用户在文本框中 输入内容 点击按钮时 alert显示
        // 有可匹配或没有可匹配的内容 reg.test()
        var key = document.getElementById('key');
        var btn = document.getElementById('btn');
        var p = document.getElementById('content');
        btn.onclick = function(){
            // alert(key.value);
            // 将用户的输入变成正则表达式
            var reg = new RegExp(key.value,'ig');
            var str = p.innerText;
            // 检测页面文本中是否有符合正则表达式匹配模式的内容
            reg.test(str)?alert('有可匹配的内容'):alert('没有可匹配的内容')

            // 2.将找到的所有内容变成红色显示
            // 将用户输入的内容找到以后替换成带有span标签的字符串
            // 'sit' ==> '<span>sit</span>'
            // str.replace()
            var res = str.replace(reg,'<span>'+key.value+'</span>');
            // 将替换好的字符串放入p中显示
            p.innerHTML = res;
        }

    </script>
</body>
</html>
```



## 4)  Math 对象

#### 1. 定义

Math对象主要提供一些列数学运算的方法

#### 2. 属性

1. 圆周率 :  Math.PI
2. 自然对数 : Math.E

#### 3. 方法

1. Math.random();   生成0-1之间的随机数
2. Math.ceil(x);	     对x向上取整,忽略小数位,整数位+1
3. Math.floor(x);      对x向下取整,舍弃小数位,保留整数位
4. Math.round(x);    对x四舍五入取整数

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>随机数</title>
</head>
<body>
    <script>
        // 0~1之间的小数
        console.log(Math.random())
        // 0～3之间的随机数
        console.log(Math.random()*3)
        // 0～3之间的随机整数
        // console.log(Math.ceil(Math.random()*3))//向上取整 1-3
        console.log(Math.floor(Math.random()*4))//向下取整 0-3
        // console.log(Math.round(Math.random()*3))//四舍五入不用
        // 1~3之间的随机整数 
        console.log(Math.floor(Math.random()*3+1)) //向下取整 1-3
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
    <title>从数组获取不重复的值</title>
</head>
<body>
    <script>
        function getRandElements(arr,len){
            var res = [];
            // 打乱数组的顺序
            // sort会根据传入的函数的返回值交换两个值的位置
            // Math.random()和0.5运算获取随机的正数或负数
            // 如果是正数 sort会交换两个值的位置
            arr.sort(function(){
                return 0.5-Math.random()
            })
            // console.log(arr)
            // 获取数组前面len个值
            for(var i=0;i<len;i++){
                res.push(arr[i])
            }
            return res;
        }
        getRandElements([0,1,2,3,4,5,6],5)
    </script>
</body>
</html>
```



## 5）日期对象

#### 1. 创建日期对象

      1. var date2 = new Date("2011/11/11");
      2. var date3 = new Date("2011/11/11 11:11:11");

#### 2. 日期对象方法

1. 读取或设置当前时间的毫秒数：getTime()
2. 获取时间分量
   - getFullYear()
   - getMonth()
   - getDate()

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>日期时间对象</title>
</head>
<body>
    <script>
        var now = new Date();
        console.log(now);

        // 获取时间日期 getXXX
        var y = now.getFullYear()//获取年
        var m = now.getMonth()//获取月份 0~11
        var d = now.getDate()//获取日期
        console.log(`${y}/${m+1}/${d}`);
        now.getDay()//获取星期
        now.getHours()//获取小时 
        now.getMinutes()//获取分钟
        now.getSeconds()//获取秒钟

        // 设置时间日期 setXXX
        // 获取指定的时间日期对象
        var f = new Date('2020-10-01 12:00:00')
        console.log(f)

        console.log(now.getTime());
        console.log(f.getTime());
        
        // 获取当前时间和指定日期对象的时间差(毫秒)  1000ms = 1s
        // var leftTime = f.getTime() - now.getTime();
        var leftTime = f-now;
        console.log(leftTime);
        
    </script>
</body>
</html>
```

