# 常用编码集
::: details 目录
[[toc]]
:::

> 常见编码 Unicode、ASCII、GBK、GB2312、UTF-8 看见能认识就行

| Unicode编码 | HTML 实体名称 | UTF8编码 | URL编码 | native 编码 |
|-----------|-----------|--------|-------|-----------|
| `&#8593;` | `&quot;` | `&#x7F16;` | `%E7%BC%96` | `\u8f6c` |
| `&#`开头`;` | `&`开头`;` | `&#x`开头`;` | `%`开头+两位 | `\u`+四位 |

## Part. 1: Unicode 编码
> 当你看到`&#`开头的编码，能意识到是 Unicode编码。

例如：
&#62; `&#62;`
&#8593; `&#8593;`
* [Unicode编码转换](http://www.ab173.com/convert/Unicode.php)

## Part. 2: ASCII 编码
> 这种编码就是可见代码，没有所谓“乱码”的东西在里面。

例如：
&#62; &#8593; 

## Part. 3: HTML 实体名称
> 出现在页面的 编码， ASCII 可打印字符 (字符代码 32-127) 可显示字符编号范围是32-126（0x20-0x7E），共95个字符。

例如： &raquo; `&raquo;` 	&quot; `&quot;` &amp; `&amp;`

* [ASCII 表 | 菜鸟工具](https://c.runoob.com/front-end/6318/)

## Part. 4: UTF8 编码
> 以 `&#x`开头的就是 utf-8 编码

例如：
&#x7F16;&#x7801;&#x8F6C;&#x6362; `&#x7F16;&#x7801;&#x8F6C;&#x6362;`
* [UTF-8编码转换工具](http://www.ab173.com/convert/utf-8.php)

## Part. 5: URL 编码解码
> * encodeURI编码,不会对特殊符号编码
> * encodeURIComponent编码方式,会对特殊符号编码

例如：编码解码 `%E7%BC%96%E7%A0%81%E8%A7%A3%E7%A0%81`

* [在线url网址编码、解码](http://www.ab173.com/enc/urlencode.php)
## Part. 6: native 编码
> 原理：逐个转换为unicode编码（这个返回值是 0 – 65535 之间的整数），unicode转化为16进制,再添加上”\\u”前缀

例如：转换编码 `\u8f6c\u6362\u7f16\u7801`
* [native/ascii在线转换工具](http://www.ab173.com/convert/native_ascii.php)

## Part. 7: 在线转换工具

* [在线懒人工具-编码转换](http://www.ab173.com/convert/Unicode.php)

* [菜鸟工具-编码转换](https://c.runoob.com/front-end/3602/)