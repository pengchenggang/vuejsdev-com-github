import{_ as e,o as a,c as t,V as o}from"./chunks/framework.89791141.js";const b=JSON.parse('{"title":"常用编码集","description":"","frontmatter":{},"headers":[],"relativePath":"01FE/common-code-set.md","filePath":"01FE/common-code-set.md","lastUpdated":1683856978000}'),r={name:"01FE/common-code-set.md"},c=o('<h1 id="常用编码集" tabindex="-1">常用编码集 <a class="header-anchor" href="#常用编码集" aria-label="Permalink to &quot;常用编码集&quot;">​</a></h1><details class="details custom-block"><summary>目录</summary><nav class="table-of-contents"><ul><li><a href="#part-1-unicode-编码">Part. 1: Unicode 编码</a></li><li><a href="#part-2-ascii-编码">Part. 2: ASCII 编码</a></li><li><a href="#part-3-html-实体名称">Part. 3: HTML 实体名称</a></li><li><a href="#part-4-utf8-编码">Part. 4: UTF8 编码</a></li><li><a href="#part-5-url-编码解码">Part. 5: URL 编码解码</a></li><li><a href="#part-6-native-编码">Part. 6: native 编码</a></li><li><a href="#part-7-在线转换工具">Part. 7: 在线转换工具</a></li></ul></nav></details><blockquote><p>常见编码 Unicode、ASCII、GBK、GB2312、UTF-8 看见能认识就行</p></blockquote><table><thead><tr><th>Unicode编码</th><th>HTML 实体名称</th><th>UTF8编码</th><th>URL编码</th><th>native 编码</th></tr></thead><tbody><tr><td><code>&amp;#8593;</code></td><td><code>&amp;quot;</code></td><td><code>&amp;#x7F16;</code></td><td><code>%E7%BC%96</code></td><td><code>\\u8f6c</code></td></tr><tr><td><code>&amp;#</code>开头<code>;</code></td><td><code>&amp;</code>开头<code>;</code></td><td><code>&amp;#x</code>开头<code>;</code></td><td><code>%</code>开头+两位</td><td><code>\\u</code>+四位</td></tr></tbody></table><h2 id="part-1-unicode-编码" tabindex="-1">Part. 1: Unicode 编码 <a class="header-anchor" href="#part-1-unicode-编码" aria-label="Permalink to &quot;Part. 1: Unicode 编码&quot;">​</a></h2><blockquote><p>当你看到<code>&amp;#</code>开头的编码，能意识到是 Unicode编码。</p></blockquote><p>例如： &gt; <code>&amp;#62;</code> ↑ <code>&amp;#8593;</code></p><ul><li><a href="http://www.ab173.com/convert/Unicode.php" target="_blank" rel="noreferrer">Unicode编码转换</a></li></ul><h2 id="part-2-ascii-编码" tabindex="-1">Part. 2: ASCII 编码 <a class="header-anchor" href="#part-2-ascii-编码" aria-label="Permalink to &quot;Part. 2: ASCII 编码&quot;">​</a></h2><blockquote><p>这种编码就是可见代码，没有所谓“乱码”的东西在里面。</p></blockquote><p>例如： &gt; ↑</p><h2 id="part-3-html-实体名称" tabindex="-1">Part. 3: HTML 实体名称 <a class="header-anchor" href="#part-3-html-实体名称" aria-label="Permalink to &quot;Part. 3: HTML 实体名称&quot;">​</a></h2><blockquote><p>出现在页面的 编码， ASCII 可打印字符 (字符代码 32-127) 可显示字符编号范围是32-126（0x20-0x7E），共95个字符。</p></blockquote><p>例如： » <code>&amp;raquo;</code> &quot; <code>&amp;quot;</code> &amp; <code>&amp;amp;</code></p><ul><li><a href="https://c.runoob.com/front-end/6318/" target="_blank" rel="noreferrer">ASCII 表 | 菜鸟工具</a></li></ul><h2 id="part-4-utf8-编码" tabindex="-1">Part. 4: UTF8 编码 <a class="header-anchor" href="#part-4-utf8-编码" aria-label="Permalink to &quot;Part. 4: UTF8 编码&quot;">​</a></h2><blockquote><p>以 <code>&amp;#x</code>开头的就是 utf-8 编码</p></blockquote><p>例如： 编码转换 <code>&amp;#x7F16;&amp;#x7801;&amp;#x8F6C;&amp;#x6362;</code></p><ul><li><a href="http://www.ab173.com/convert/utf-8.php" target="_blank" rel="noreferrer">UTF-8编码转换工具</a></li></ul><h2 id="part-5-url-编码解码" tabindex="-1">Part. 5: URL 编码解码 <a class="header-anchor" href="#part-5-url-编码解码" aria-label="Permalink to &quot;Part. 5: URL 编码解码&quot;">​</a></h2><blockquote><ul><li>encodeURI编码,不会对特殊符号编码</li><li>encodeURIComponent编码方式,会对特殊符号编码</li></ul></blockquote><p>例如：编码解码 <code>%E7%BC%96%E7%A0%81%E8%A7%A3%E7%A0%81</code></p><ul><li><a href="http://www.ab173.com/enc/urlencode.php" target="_blank" rel="noreferrer">在线url网址编码、解码</a></li></ul><h2 id="part-6-native-编码" tabindex="-1">Part. 6: native 编码 <a class="header-anchor" href="#part-6-native-编码" aria-label="Permalink to &quot;Part. 6: native 编码&quot;">​</a></h2><blockquote><p>原理：逐个转换为unicode编码（这个返回值是 0 – 65535 之间的整数），unicode转化为16进制,再添加上”\\u”前缀</p></blockquote><p>例如：转换编码 <code>\\u8f6c\\u6362\\u7f16\\u7801</code></p><ul><li><a href="http://www.ab173.com/convert/native_ascii.php" target="_blank" rel="noreferrer">native/ascii在线转换工具</a></li></ul><h2 id="part-7-在线转换工具" tabindex="-1">Part. 7: 在线转换工具 <a class="header-anchor" href="#part-7-在线转换工具" aria-label="Permalink to &quot;Part. 7: 在线转换工具&quot;">​</a></h2><ul><li><p><a href="http://www.ab173.com/convert/Unicode.php" target="_blank" rel="noreferrer">在线懒人工具-编码转换</a></p></li><li><p><a href="https://c.runoob.com/front-end/3602/" target="_blank" rel="noreferrer">菜鸟工具-编码转换</a></p></li></ul>',29),d=[c];function l(i,n,p,h,u,m){return a(),t("div",null,d)}const f=e(r,[["render",l]]);export{b as __pageData,f as default};
