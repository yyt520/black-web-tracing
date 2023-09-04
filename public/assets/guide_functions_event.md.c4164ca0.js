import{_ as l,o,c as p,Q as n,k as s,a}from"./chunks/framework.925f8485.js";const m=JSON.parse('{"title":"Event","description":"","frontmatter":{},"headers":[],"relativePath":"guide/functions/event.md","filePath":"guide/functions/event.md","lastUpdated":1693816186000}'),t={name:"guide/functions/event.md"},e=n(`<h1 id="event" tabindex="-1">Event <a class="header-anchor" href="#event" aria-label="Permalink to &quot;Event&quot;">​</a></h1><p>捕获页面上所有的点击事件,主要原理是监听页面 <code>click</code> 事件，触发后根据规则判断是否采集事件以及获取该事件所需要的参数</p><p>触发事件时生成的对象</p><table><thead><tr><th>属性名称</th><th>值</th><th>说明</th></tr></thead><tbody><tr><td>eventId</td><td>详见下面的采集规则</td><td>事件ID</td></tr><tr><td>eventType</td><td>click</td><td>事件类型</td></tr><tr><td>title</td><td>详见下面的采集规则</td><td>事件名</td></tr><tr><td>triggerPageUrl</td><td></td><td>当前页面URL</td></tr><tr><td>params</td><td>详见下面的采集规则</td><td>事件参数</td></tr><tr><td>elementPath</td><td>例如: div&gt;div&gt;button</td><td>被点击元素的层级</td></tr><tr><td>triggerTime</td><td></td><td>事件发生时间</td></tr><tr><td>sendTime</td><td></td><td>发送时间</td></tr><tr><td>x</td><td>见下方</td><td>被点击元素与屏幕左边距离</td></tr><tr><td>y</td><td>见下方</td><td>被点击元素与屏幕上边距离</td></tr></tbody></table><ul><li>x值: e.target.getBoundingClientRect().left + document.documentElement.scrollLeft</li><li>y值: e.target.getBoundingClientRect().top + document.documentElement.scrollTop</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 真实场景产生的事件对象</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">eventId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">eventType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">triggerPageUrl</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://localhost:6656/#/event</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">x</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">280</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">y</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">params</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">bigtitle</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bigTitle</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">elementPath</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div&gt;div&gt;div&gt;div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">triggerTime</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1689726300399</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">sendTime</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1689726301406</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="dom-元素标记" tabindex="-1">DOM 元素标记 <a class="header-anchor" href="#dom-元素标记" aria-label="Permalink to &quot;DOM 元素标记&quot;">​</a></h2><p>插件会根据<code>DOM元素</code>上一些属性来获取需要采集该元素的事件,以及采集该元素事件时应该传递哪些参数</p>`,8),c=s("table",{"name:":"",a:""},[s("thead",null,[s("tr",null,[s("th",null,"属性名称"),s("th",null,"说明")])]),s("tbody",null,[s("tr",null,[s("td",null,"data-warden-container"),s("td",null,"该元素作为采集容器,内部的需要采集的元素上如果没有这些属性会使用容器上的属性作为填充")]),s("tr",null,[s("td",null,"data-warden-event-id"),s("td",null,"元素上标记事件的eventId,会作为传给后台的eventId")]),s("tr",null,[s("td",null,"data-warden-title"),s("td",null,[a("元素上标记事件的title,"),s("strong",null,"也可以使用原生的title属性"),a(",都会作为传给后台的title")])]),s("tr",null,[s("td",null,"data-warden-*"),s("td",null,'其他的属性都会被当作参数,例如 data-warden-name="a" 会被收集为')])])],-1),r=n(`<h3 id="data-warden-container" tabindex="-1">data-warden-container <a class="header-anchor" href="#data-warden-container" aria-label="Permalink to &quot;data-warden-container&quot;">​</a></h3><p>元素拥有data-warden-container则视作是容器元素,内部元素触发点击事件时,<strong>如果触发事件的元素上没有埋点属性修饰那就认为这个事件是由容器节点触发的,容器节点取代触发事件的子元素节点作为target</strong>,标题从容器上获取,内容依旧从真实触发事件的子元素上获取</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 容器元素,内部的元素如果本身没有标记,父级有data-warden-container属性,则视作是由容器元素触发的事件 --&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 点击超链接或是图片时,按触发元素是父级div元素来处理 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-warden-container</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-warden-event-id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">点击课程</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">alt</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">() =&gt; location.href = url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">{url}</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">课程1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="eventid-采集规则" tabindex="-1">eventId 采集规则 <a class="header-anchor" href="#eventid-采集规则" aria-label="Permalink to &quot;eventId 采集规则&quot;">​</a></h2><p>取值优先级:</p><ol><li>从触发的元素向上找其父级元素(直到body之下)的属性,用最先找到的<code>data-warden-event-id</code>属性的值</li><li>与上同理,用最先找到的<code>title</code>属性的值</li><li>与上同理,找到带有<code>data-warden-container</code>属性的元素 <ol><li>找到的话</li><li>用这个元素属性的<code>data-warden-event-id</code>值</li><li>用这个元素属性的<code>title</code>值</li><li>都没有的话就用这个元素属性的<code>data-warden-container</code>值</li><li>还是没有的话就用触发元素的<code>tagName</code></li></ol></li><li>用触发元素的<code>tagName</code></li></ol><h2 id="title-采集规则" tabindex="-1">title 采集规则 <a class="header-anchor" href="#title-采集规则" aria-label="Permalink to &quot;title 采集规则&quot;">​</a></h2><p><img src="https://cdn.staticaly.com/gh/M-cheng-web/image-provider@main/web-tracing/%E5%9F%8B%E7%82%B9%E4%BA%8B%E4%BB%B6%E9%87%87%E9%9B%86%E8%8E%B7%E5%8F%96title%E5%AD%97%E6%AE%B5%E6%B5%81%E7%A8%8B%E5%9B%BE.35dg4pej3d40.png" alt="埋点事件采集获取title字段流程图"></p><h2 id="params-采集规则" tabindex="-1">params 采集规则 <a class="header-anchor" href="#params-采集规则" aria-label="Permalink to &quot;params 采集规则&quot;">​</a></h2>`,9),F=s("ol",null,[s("li",null,[a("遍历被点击元素是否带有名称为"),s("code",null,"data-warden-"),a("开头的属性 "),s("ol",null,[s("li",{"name:":"",a:""},[a("如果有,那么取本身属性除"),s("code",null,"data-warden-container data-warden-title data-warden-event-id"),a("之外的以"),s("code",null,"data-warden-"),a('开头的属性,例如 data-warden-name="a" 会被收集为 params:')])])]),s("li",null,[a("被点击元素没有名称为"),s("code",null,"data-warden-"),a("开头的属性则向上遍历其父级有没有符合这样的规则,直至body标签以下")]),s("li",null,[a("如果其中一个父级符合名称为"),s("code",null,"data-warden-"),a("开头的属性,则以这个父级元素为标准,取其属性除"),s("code",null,"data-warden-container data-warden-title data-warden-event-id"),a("之外的以"),s("code",null,"data-warden-"),a("开头的属性,没有的话会返回 {}")]),s("li",null,"如果都没有则会返回 {}")],-1),D=n(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 例如这样的结构在点击button会得到 params: { num: &#39;我是NUM&#39; } --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-warden-num</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">我是NUM</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxxxxx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bun</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">1111</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 这里点击button会得到 params: { par: &#39;我是参数&#39; } --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-warden-num</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">我是NUM</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-warden-par</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">我是参数</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxxxxx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bun</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">1111</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="场景示例" tabindex="-1">场景示例 <a class="header-anchor" href="#场景示例" aria-label="Permalink to &quot;场景示例&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="https://github.com/yyt520/black-web-tracing/blob/main/examples/vue2/src/views/event/index.vue" target="_blank" rel="noreferrer">vue2版本完整示例代码</a></p><p><a href="https://github.com/yyt520/black-web-tracing/blob/main/examples/vue3/src/views/event/index.vue" target="_blank" rel="noreferrer">vue3版本完整示例代码</a></p></div><h3 id="示例一" tabindex="-1">示例一 <a class="header-anchor" href="#示例一" aria-label="Permalink to &quot;示例一&quot;">​</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">box-div</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">data-warden-title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">data-warden-bigTitle</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bigTitle</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100%</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  示例div</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>点击示例div会产生如下对象</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">eventId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">eventType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">triggerPageUrl</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://localhost:6656/#/event</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">x</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">280</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">y</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">params</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">bigtitle</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bigTitle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">elementPath</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">triggerTime</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1689726300399</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">sendTime</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1689726301406</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="示例二" tabindex="-1">示例二 <a class="header-anchor" href="#示例二" aria-label="Permalink to &quot;示例二&quot;">​</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">border: 1px solid red</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">data-warden-test</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">data-warden-title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">titletitle</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">data-warden-bing</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bing</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">data-warden-event-id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ddd</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">asd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">示例div</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>点击示例div会产生如下对象</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">eventId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ddd</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">eventType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">titletitle</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">triggerPageUrl</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://localhost:6656/#/event</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">x</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">280</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">y</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">params</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">test</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">bing</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bing</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">elementPath</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div&gt;div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">triggerTime</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1689726300399</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">sendTime</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1689726301406</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,11),y=[e,c,r,F,D];function i(d,u,C,g,h,B){return o(),p("div",null,y)}const v=l(t,[["render",i]]);export{m as __pageData,v as default};
