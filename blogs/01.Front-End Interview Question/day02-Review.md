---
title: day02 - 面试题复习
date: 2022-4-19 11:50:00
categories:
  - 前端面试题
tags:
  - 前端面试题
---

## day02 - 面试题复习（HTML+CSS）

### 21. 什么是Css Hack？ie6,7,8的hack分别是什么？

CSS Hack 是由于浏览器的不同，其对 Css 解析认识不一样，因此导致生成的页面效果不一样；其在解决兼容问题时事半功倍，但滥用则会影响页面性能，也导致后期的维护困难。

例如：

~~~css
#test{   
  width:300px;   
  height:300px;   
  background-color:blue;      /*firefox*/
  background-color:red\9;      /*all ie*/
  background-color:yellow;    /*ie8*/
  +background-color:pink;        /*ie7*/
  _background-color:orange;       /*ie6*/    
}  
        
:root #test { 
  background-color:purple\9; 
}  /*ie9*/

@media all and (min-width:0px){ 
  #test {
    background-color:black;
  } 
}  /*opera*/

@media screen and (-webkit-min-device-pixel-ratio:0)
{ 
  #test {
    background-color:gray;
  } 
}       /*chrome and safari*/
~~~

### 22. 行内元素和块级元素的具体区别是什么？行内元素的padding和margin可设置吗？

块级元素特性：

- 独占一行，其余元素必须另起一行
- 宽高、padding、margin可控制

内联元素特性：

- 相邻的内联元素在同一行
- 宽高、内边距、外边距的padding、margin的（top、bottom）都是不可变的，只有（left、right）边距可以设置

有部分的行内元素可以设置宽高但是不会换行：

~~~html
<input type="text" />
<img src="" />
<button>button</button>
<textarea>文本域</textarea>
<label>label</label>
~~~

### 23. 什么是外边距重叠？重叠的结果是什么？

指的是当两个垂直的外边距相遇后，会形成一个外边距，并且合并的外边距为两者中最大的那一个，如果一个边距为负边距则最大值减去负数边距的绝对值。

当一个元素出现在另一个元素上面时，第一个元素的底边界与第二个元素的顶边界发生合并：

![img](https://raw.githubusercontent.com/Sue-52/PicGo/main/images/5122957-d05334d7408c00ba.gif)

当一个元素包含在另一个元素中时（假设没有内边距或边框把外边距分隔开），它们的顶和底边界也发生合并：

![img](https://raw.githubusercontent.com/Sue-52/PicGo/main/images/5122957-3618d6539fccf3a5.gif)

### 24. rgba()和opacity的透明效果有什么不同？

相同处则是都可以设置元素的透明效果。

不同处为：

- opacity作用在于元素，以及元素内的所有内容的透明度
- rgba()作用于元素的颜色及其背景颜色

### 25.css中可以让文字在垂直和水平方向上重叠的两个属性是什么？

垂直方向为：line-height
水平方向为：letter-spacing（可以消除inline-block元素间的换行符空格间隙问题）

### 26. 如何垂直居中一个浮动元素？

方法一：绝对定位(已知元素的高宽)

~~~css
.box {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
~~~

方法二：绝对定位(未知元素的高宽)

~~~css
.box{
  width: 200px;
  height: 200px;
  margin:auto;
  position: absolute;  
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
~~~

方法三：图片垂直居中

~~~css
img {
  display:table-cell;
  text-align:center;
  vertical-align:middle;
}
~~~

### 27. px和em的区别

px(绝对长度单位)：值为固定的
em(相对长度单位)：值不固定并会继承父元素的字体大小

默认字体大小为：16px，所以em的值为：1em = 16px

### 28. 描述一个”reset”的CSS文件并如何使用它。知道normalize.css吗？你了解他们的不同之处？

Reset 样式的目的就是清除浏览器的默认样式。而 normalize.css 的理念和其不同，它并没清楚浏览器的默认样式，而是保留了浏览器的默认样式并将其统一。

### 29. Sass、LESS是什么？大家为什么要使用他们？

它们都是 Css 预处理器语言，在 Css 上的一种抽象层，用特殊的语法编译成了 Css。

特点：

- 动态样式语言，可以使用：变量、继承、函数、运算等。
- 结构清晰，易扩展
- 方便实现多重继承
- 完全兼容 Css 代码

### 30. display:none与visibility:hidden的区别是什么？

display：隐藏对应元素但不占用原有空间
visibility：隐藏对应元素并占用原有空间

### 31. CSS中link和@import的区别是

1. link 是 HTML 标签，出了加载 CSS 外，还可以定义其他的RSS等其他任务；而 @import 输入 CSS 范围，只能加载 CSS
2. link 引入 CSS 时，在页面加载时同时加载；而 @import 需要页面完全加载完成后加载
3. link 无兼容问题；而 @import 是在 CSS2.1 提出，点版本无法兼容
4. link 支持JS控制DOM对象；@import 不行
5. @import 可以在 CSS 文件中再次引入其他样式表；link 不支持

### 32. 简介盒子模型

CSS的盒子模型有两种：IE盒子模型、标准的W3C盒子模型模型
盒模型：内容、内边距、外边距（一般不计入盒子实际宽度）、边框

![image-20220419103806077](https://raw.githubusercontent.com/Sue-52/PicGo/main/images/image-20220419103806077.png)

### 33. 为什么要初始化样式？

1. 解决了不同浏览器的默认样式的不同情况
2. 会有微小的影响对于搜索引擎

### 34. BFC是什么?

BFC（Block Formatting Context）块级格式化上下文：它决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用，当涉及到可视化布局时 BFC 提供了一个环境， HTML 在该环境中按照一定的规则进行布局。

这里简单列举几个触发BFC使用的CSS属性：

~~~css
overflow: hidden
display: inline-block
position: absolute
position: fixed
display: table-cell
display: flex
~~~

### 35. html语义化是什么？

1. 即是页面加载失败也可以是呈现出清晰的结构
2. 利于 SEO 搜索引擎优化
3. 方便了开发者的后续开发和维护
4. 提高了代码的可读性和维护
5. 便于其他设备的解析

### 36. Doctype的作用？严格模式与混杂模式的区别？

~~~html
<!DOCTYPE>
~~~

告诉了浏览器用何种模式解析并渲染文档

严格模式：页面排版及JS解析是以该浏览器支持的最高标准来执行
混杂模式：不严格按照标准执行，主要用来兼容旧的浏览器，向后兼容

### 37. IE的双边距BUG：块级元素float后设置横向margin，ie6显示的margin比设置的较大

使用 _display: inline

### 38. HTML与XHTML——二者有什么区别？

1. XHTML中所有的标记都必须有一个相应的结束标签；
2. XHTML所有标签的元素和属性的名字都必须使用小写；
3. 所有的XML标记都必须合理嵌套；
4. 所有的属性都必须用引号“”括起来；
5. 把所有<和&特殊符号用编码表示；
6. 给所有属性附一个值；
7. 不要在注释内容中使用“--”；
8. 图片必须使用说明文字

### 39. html常见兼容性问题？

1. 双边距BUG float引起的  使用display
2. 3像素问题 使用float引起的 使用dislpay:inline -3px  
3. 超链接hover 点击后失效  使用正确的书写顺序 link visited hover active
4. Ie z-index问题 给父级添加position:relative
5. Png 透明 使用js代码改
6. Min-height 最小高度 `!Important` 解决
7. select 在ie6下遮盖 使用iframe嵌套
8. 为什么没有办法定义1px左右的宽度容器（IE6默认的行高造成的，使用over:hidden,zoom:0.08 line-height:1px）
9. IE5-8不支持opacity，解决办法：

  ~~~css
  .opacity {
    opacity: 0.4
    filter: alpha(opacity=60); /* for IE5-7 */
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)"; /* for IE 8*/
  }
  ~~~

10. IE6不支持PNG透明背景，解决办法: IE6下使用gif图片

### 40. 对WEB标准以及W3C的理解与认识

1. 标签闭合
2. 标签小写
3. 不乱嵌套
4. 提高搜索机器人搜索几率
5. 使用外链css和js脚本
6. 结构行为表现的分离
7. 文件下载与页面速度更快
8. 内容能被更多的用户所访问
9. 内容能被更广泛的设备所访问
10. 更少的代码和组件
11. 容易维护、改版方便，不需要变动页面内容
12. 提供打印版本而不需要复制内容、提高网站易用性
