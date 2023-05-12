import{_ as s,o as n,c as a,V as l}from"./chunks/framework.89791141.js";const u=JSON.parse('{"title":"nginxConfig 配置文件备份","description":"","frontmatter":{},"headers":[],"relativePath":"log/nginx-config.md","filePath":"log/nginx-config.md","lastUpdated":1683856978000}'),p={name:"log/nginx-config.md"},e=l(`<h1 id="nginxconfig-配置文件备份" tabindex="-1">nginxConfig 配置文件备份 <a class="header-anchor" href="#nginxconfig-配置文件备份" aria-label="Permalink to &quot;nginxConfig 配置文件备份&quot;">​</a></h1><details class="details custom-block"><summary>目录</summary><nav class="table-of-contents"><ul><li><a href="#step-1-服务器-nginx-config">Step. 1: 服务器 nginx config</a></li><li><a href="#step-2-宝塔-nginx-初始化配置">Step. 2: 宝塔 nginx 初始化配置</a></li></ul></nav></details><blockquote><p>备份下配置代码</p></blockquote><h2 id="step-1-服务器-nginx-config" tabindex="-1">Step. 1: 服务器 nginx config <a class="header-anchor" href="#step-1-服务器-nginx-config" aria-label="Permalink to &quot;Step. 1: 服务器 nginx config&quot;">​</a></h2><blockquote><p>代码备份</p></blockquote><details class="details custom-block"><summary>代码</summary><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#user  nobody;</span></span>
<span class="line"><span style="color:#A6ACCD;">worker_processes  1;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#error_log  logs/error.log;</span></span>
<span class="line"><span style="color:#A6ACCD;">#error_log  logs/error.log  notice;</span></span>
<span class="line"><span style="color:#A6ACCD;">#error_log  logs/error.log  info;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#pid        logs/nginx.pid;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">events {</span></span>
<span class="line"><span style="color:#A6ACCD;">    worker_connections  1024;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">    include       mime.types;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default_type  application/octet-stream;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    #log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    #                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    #                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    #access_log  logs/access.log  main;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    sendfile        on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    #tcp_nopush     on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    #keepalive_timeout  0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    keepalive_timeout  65;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    #gzip  on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    # 原来配置完https后，就走443的端口了，原先的配置 就都写到这里了</span></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        listen       443 ssl;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        server_name  www.vuejsdev.com #你们的域名，如www.abc.com;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        ssl                  on;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        ssl_certificate      /usr/local/nginx/public.pem; #根据实际的路径和文件名配置</span></span>
<span class="line"><span style="color:#A6ACCD;">                        ssl_certificate_key   /usr/local/nginx/private.key; #根据实际的路径和文件名配置</span></span>
<span class="line"><span style="color:#A6ACCD;">                        ssl_session_timeout  5m;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        ssl_protocols TLSv1 TLSv1.1 TLSv1.2; #按照这个协议配</span></span>
<span class="line"><span style="color:#A6ACCD;">                        ssl_ciphers  ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;#按照这个套件配</span></span>
<span class="line"><span style="color:#A6ACCD;">                        ssl_prefer_server_ciphers   on;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">                            proxy_pass http://127.0.0.1:8080/;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            #index  index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        }</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span></span>
<span class="line"><span style="color:#A6ACCD;">                        location /api/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">                            proxy_pass http://127.0.0.1:8081;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">                        #location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        #    root   html; #站点目录</span></span>
<span class="line"><span style="color:#A6ACCD;">                        #    index  index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        #}</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen       80;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name  vuejsdev.com,www.vuejsdev.com; # 绑定域名</span></span>
<span class="line"><span style="color:#A6ACCD;">        #将请求转成https</span></span>
<span class="line"><span style="color:#A6ACCD;">        rewrite ^(.*)$ https://$host$1 permanent;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        #charset koi8-r;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        #access_log  logs/host.access.log  main;</span></span>
<span class="line"><span style="color:#A6ACCD;">        #root /root/website/;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_pass http://127.0.0.1:8080/;</span></span>
<span class="line"><span style="color:#A6ACCD;">            #index  index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        location /api/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_pass http://127.0.0.1:8081;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        #location /8080 {</span></span>
<span class="line"><span style="color:#A6ACCD;">        #    proxy_pass http://127.0.0.1:8080/;</span></span>
<span class="line"><span style="color:#A6ACCD;">        #}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        #error_page  404              /404.html;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="color:#A6ACCD;">        #</span></span>
<span class="line"><span style="color:#A6ACCD;">        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        location = /50x.html {</span></span>
<span class="line"><span style="color:#A6ACCD;">            root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        # proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span style="color:#A6ACCD;">        #</span></span>
<span class="line"><span style="color:#A6ACCD;">        #location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">        #    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        #}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span style="color:#A6ACCD;">        #</span></span>
<span class="line"><span style="color:#A6ACCD;">        #location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">        #    root           html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        #    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#A6ACCD;">        #    fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#A6ACCD;">        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#A6ACCD;">        #    include        fastcgi_params;</span></span>
<span class="line"><span style="color:#A6ACCD;">        #}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        # deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span style="color:#A6ACCD;">        # concurs with nginx&#39;s one</span></span>
<span class="line"><span style="color:#A6ACCD;">        #</span></span>
<span class="line"><span style="color:#A6ACCD;">        #location ~ /\\.ht {</span></span>
<span class="line"><span style="color:#A6ACCD;">        #    deny  all;</span></span>
<span class="line"><span style="color:#A6ACCD;">        #}</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    # another virtual host using mix of IP-, name-, and port-based configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">    #</span></span>
<span class="line"><span style="color:#A6ACCD;">    #server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    #    listen       8000;</span></span>
<span class="line"><span style="color:#A6ACCD;">    #    listen       somename:8080;</span></span>
<span class="line"><span style="color:#A6ACCD;">    #    server_name  somename  alias  another.alias;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    #    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">    #        root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    #        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">    #    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    #}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    # HTTPS server</span></span>
<span class="line"><span style="color:#A6ACCD;">    #</span></span>
<span class="line"><span style="color:#A6ACCD;">    #server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    #    listen       443 ssl;</span></span>
<span class="line"><span style="color:#A6ACCD;">    #    server_name  localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    #    ssl_certificate      cert.pem;</span></span>
<span class="line"><span style="color:#A6ACCD;">    #    ssl_certificate_key  cert.key;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    #    ssl_session_cache    shared:SSL:1m;</span></span>
<span class="line"><span style="color:#A6ACCD;">    #    ssl_session_timeout  5m;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    #    ssl_ciphers  HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span style="color:#A6ACCD;">    #    ssl_prefer_server_ciphers  on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    #    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">    #        root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    #        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">    #    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    #}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br></div></div></details><h2 id="step-2-宝塔-nginx-初始化配置" tabindex="-1">Step. 2: 宝塔 nginx 初始化配置 <a class="header-anchor" href="#step-2-宝塔-nginx-初始化配置" aria-label="Permalink to &quot;Step. 2: 宝塔 nginx 初始化配置&quot;">​</a></h2><blockquote><p>代码备份</p></blockquote><details class="details custom-block"><summary>代码</summary><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">user  www www;</span></span>
<span class="line"><span style="color:#A6ACCD;">worker_processes auto;</span></span>
<span class="line"><span style="color:#A6ACCD;">error_log  /www/wwwlogs/nginx_error.log  crit;</span></span>
<span class="line"><span style="color:#A6ACCD;">pid        /www/server/nginx/logs/nginx.pid;</span></span>
<span class="line"><span style="color:#A6ACCD;">worker_rlimit_nofile 51200;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">events</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        use epoll;</span></span>
<span class="line"><span style="color:#A6ACCD;">        worker_connections 51200;</span></span>
<span class="line"><span style="color:#A6ACCD;">        multi_accept on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">http</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        include       mime.types;</span></span>
<span class="line"><span style="color:#A6ACCD;">		#include luawaf.conf;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">		include proxy.conf;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        default_type  application/octet-stream;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        server_names_hash_bucket_size 512;</span></span>
<span class="line"><span style="color:#A6ACCD;">        client_header_buffer_size 32k;</span></span>
<span class="line"><span style="color:#A6ACCD;">        large_client_header_buffers 4 32k;</span></span>
<span class="line"><span style="color:#A6ACCD;">        client_max_body_size 50m;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        sendfile   on;</span></span>
<span class="line"><span style="color:#A6ACCD;">        tcp_nopush on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        keepalive_timeout 60;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        tcp_nodelay on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_connect_timeout 300;</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_send_timeout 300;</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_read_timeout 300;</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_buffer_size 64k;</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_buffers 4 64k;</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_busy_buffers_size 128k;</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_temp_file_write_size 256k;</span></span>
<span class="line"><span style="color:#A6ACCD;">		fastcgi_intercept_errors on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        gzip on;</span></span>
<span class="line"><span style="color:#A6ACCD;">        gzip_min_length  1k;</span></span>
<span class="line"><span style="color:#A6ACCD;">        gzip_buffers     4 16k;</span></span>
<span class="line"><span style="color:#A6ACCD;">        gzip_http_version 1.1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        gzip_comp_level 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">        gzip_types     text/plain application/javascript application/x-javascript text/javascript text/css application/xml;</span></span>
<span class="line"><span style="color:#A6ACCD;">        gzip_vary on;</span></span>
<span class="line"><span style="color:#A6ACCD;">        gzip_proxied   expired no-cache no-store private auth;</span></span>
<span class="line"><span style="color:#A6ACCD;">        gzip_disable   &quot;MSIE [1-6]\\.&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        limit_conn_zone $binary_remote_addr zone=perip:10m;</span></span>
<span class="line"><span style="color:#A6ACCD;">		limit_conn_zone $server_name zone=perserver:10m;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        server_tokens off;</span></span>
<span class="line"><span style="color:#A6ACCD;">        access_log off;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">server</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen 888;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name phpmyadmin;</span></span>
<span class="line"><span style="color:#A6ACCD;">        index index.html index.htm index.php;</span></span>
<span class="line"><span style="color:#A6ACCD;">        root  /www/server/phpmyadmin;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        #error_page   404   /404.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        include enable-php.conf;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        location ~ .*\\.(gif|jpg|jpeg|png|bmp|swf)$</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            expires      30d;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        location ~ .*\\.(js|css)?$</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            expires      12h;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        location ~ /\\.</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            deny all;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        access_log  /www/wwwlogs/access.log;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">include /www/server/panel/vhost/nginx/*.conf;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br></div></div></details>`,9),r=[e];function c(o,i,t,b,C,A){return n(),a("div",null,r)}const y=s(p,[["render",c]]);export{u as __pageData,y as default};
