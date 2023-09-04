import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.925f8485.js";const B=JSON.parse('{"title":"导出项","description":"","frontmatter":{},"headers":[],"relativePath":"guide/functions/exports.md","filePath":"guide/functions/exports.md","lastUpdated":1693816186000}'),e={name:"guide/functions/exports.md"},o=l(`<h1 id="导出项" tabindex="-1">导出项 <a class="header-anchor" href="#导出项" aria-label="Permalink to &quot;导出项&quot;">​</a></h1><p>为了使用的便捷，sdk提供了多个导出项，下面针对这些导出项进行逐个说明</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这些导出项都在demo项目中使用了，想要了解更多可以查看demo项目</p><p><a href="https://github.com/yyt520/black-web-tracing-examples-vue2" target="_blank" rel="noreferrer">vue2-demo地址</a></p><p><a href="https://github.com/yyt520/black-web-tracing-examples-vue3" target="_blank" rel="noreferrer">vue3-demo地址</a></p></div><h2 id="options" tabindex="-1">options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;options&quot;">​</a></h2><p>内部所有的配置已经全部适配下面这种使用方式，如有获取与更改的需求直接如下操作，sdk内部已经动态兼容</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">options</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@web-tracing/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 对内部参数进行修改</span></span>
<span class="line"><span style="color:#BABED8;">options</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">value</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">dsn </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">www.baidu.com</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 获取内部某个参数</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(options</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">value</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">dsn)</span></span></code></pre></div><h2 id="曝光相关" tabindex="-1">曝光相关 <a class="header-anchor" href="#曝光相关" aria-label="Permalink to &quot;曝光相关&quot;">​</a></h2><p>具体demo可查看 <a href="./../functions/intersection">曝光事件</a></p><h3 id="intersectionobserver" tabindex="-1">intersectionObserver <a class="header-anchor" href="#intersectionobserver" aria-label="Permalink to &quot;intersectionObserver&quot;">​</a></h3><ul><li>作用: 对目标元素进行监听</li></ul><p>入参 <code>options</code> 对象属性说明</p><table><thead><tr><th>参数名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>target</td><td>Element / Element[]</td><td>-</td><td>需要被监听的元素</td></tr><tr><td>threshold</td><td>number</td><td>-</td><td>监听阈值</td></tr><tr><td>params</td><td>object</td><td>{}</td><td>额外参数</td></tr></tbody></table><blockquote><p>监听阈值(threshold)解释：阀值默认为0.5，当为0.5时代表滚动超过图片达到一半时即为曝光结束；同理当为0.5时，代表滚动视图能看到图片一半时即为曝光开始</p></blockquote><h3 id="intersectionunobserve" tabindex="-1">intersectionUnobserve <a class="header-anchor" href="#intersectionunobserve" aria-label="Permalink to &quot;intersectionUnobserve&quot;">​</a></h3><ul><li>作用: 对目标元素进行取消监听</li><li>入参: target - 已经被监听的元素</li></ul><h3 id="intersectiondisconnect" tabindex="-1">intersectionDisconnect <a class="header-anchor" href="#intersectiondisconnect" aria-label="Permalink to &quot;intersectionDisconnect&quot;">​</a></h3><ul><li>作用: 取消所有监听</li></ul><h2 id="钩子" tabindex="-1">钩子 <a class="header-anchor" href="#钩子" aria-label="Permalink to &quot;钩子&quot;">​</a></h2><p>目前所有的钩子都支持全局递加。例如在a页面声明了 <code>beforePushEventList</code> 方法，在b页面再次声明 <code>beforePushEventList</code> 也可以；这样导致在事件放入队列之前会按照放入顺序依次触发这些回调</p><h3 id="beforepusheventlist" tabindex="-1">beforePushEventList <a class="header-anchor" href="#beforepusheventlist" aria-label="Permalink to &quot;beforePushEventList&quot;">​</a></h3><ul><li>作用: 放入事件队列之前的回调方法</li><li>入参: data - 事件列表(数组类型)</li><li>出参: 数组 / 对象 / false</li><li>备注: sdk内部会将返回值作为新的事件放入事件队列，如果返回false则代表不放入事件队列</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">beforePushEventList</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@web-tracing/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">beforePushEventList</span><span style="color:#BABED8;">(data) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#BABED8;font-style:italic;">item</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">发送了数据: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">item</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// return false</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">data</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="beforesenddata" tabindex="-1">beforeSendData <a class="header-anchor" href="#beforesenddata" aria-label="Permalink to &quot;beforeSendData&quot;">​</a></h3><ul><li>作用: 事件发送之前的回调方法</li><li>入参: data - {baseInfo: xxx, eventInfo: []} 类型</li><li>出参: 数组 / 对象 / false</li><li>备注: sdk内部会将返回值作为新的事件发送到服务端，如果返回false则代表不发送</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">beforeSendData</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@web-tracing/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">beforeSendData</span><span style="color:#BABED8;">(data) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// return false</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">data</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="aftersenddata" tabindex="-1">afterSendData <a class="header-anchor" href="#aftersenddata" aria-label="Permalink to &quot;afterSendData&quot;">​</a></h3><ul><li>作用: 事件发送之后的回调方法</li><li>入参: data - {params: {baseInfo: xxx, eventInfo: []}, sendType: xx, success: true} 类型</li><li>出参: 无</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">afterSendData</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@web-tracing/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">afterSendData</span><span style="color:#BABED8;">(data) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$notify</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">发送一批数据到服务端</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">data</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    position</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">top-right</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    dangerouslyUseHTMLString</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    duration</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1500</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="主动上报方法" tabindex="-1">主动上报方法 <a class="header-anchor" href="#主动上报方法" aria-label="Permalink to &quot;主动上报方法&quot;">​</a></h2><p>当遇到特殊场景需要手动触发采集时可以通过插件内置的方法来达到目的</p><h3 id="traceerror" tabindex="-1">traceError <a class="header-anchor" href="#traceerror" aria-label="Permalink to &quot;traceError&quot;">​</a></h3><ul><li>作用: 主动触发错误信息</li><li>入参: options - 对象内任意属性</li><li>备注: 调用此方法，有以下参数会固定附加 <ul><li>eventType: error</li><li>recordscreen: 错误录屏信息</li><li>triggerPageUrl: 发生错误的页面</li><li>triggerTime: 发生错误的时间</li></ul></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">traceError</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@web-tracing/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">traceError</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">params</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">aa</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span></code></pre></div><h3 id="traceperformance" tabindex="-1">tracePerformance <a class="header-anchor" href="#traceperformance" aria-label="Permalink to &quot;tracePerformance&quot;">​</a></h3><ul><li>作用: 主动触发性能信息</li><li>入参: options - 对象内任意属性</li><li>备注: 调用此方法，有以下参数会固定附加 <ul><li>eventType: performance</li><li>triggerPageUrl: 发生错误的页面</li><li>triggerTime: 发生错误的时间</li></ul></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">tracePerformance</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@web-tracing/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">tracePerformance</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">params</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">aa</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span></code></pre></div><h3 id="tracecustomevent" tabindex="-1">traceCustomEvent <a class="header-anchor" href="#tracecustomevent" aria-label="Permalink to &quot;traceCustomEvent&quot;">​</a></h3><ul><li>作用: 自定义上报事件</li><li>入参: options - 对象内任意属性</li><li>备注: 调用此方法，有以下参数会固定附加 <ul><li>eventType: custom</li><li>triggerPageUrl: 发生错误的页面</li><li>triggerTime: 发生错误的时间</li></ul></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">traceCustomEvent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@web-tracing/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">traceCustomEvent</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">params</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">aa</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span></code></pre></div><h3 id="tracepageview" tabindex="-1">tracePageView <a class="header-anchor" href="#tracepageview" aria-label="Permalink to &quot;tracePageView&quot;">​</a></h3><ul><li>作用: 触发一次页面路由采集</li><li>入参: options - 对象内任意属性</li><li>备注: 调用此方法，有以下参数会固定附加 <ul><li>referer: 上一张页面地址</li><li>title: 页面标题</li><li>eventId: baseInfo.pageId</li><li>eventType: pv</li><li>triggerPageUrl: 发生错误的页面</li><li>triggerTime: 发生错误的时间</li></ul></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">tracePageView</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@web-tracing/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">tracePageView</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">params</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">aa</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span></code></pre></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><h3 id="unziprecordscreen" tabindex="-1">unzipRecordscreen <a class="header-anchor" href="#unziprecordscreen" aria-label="Permalink to &quot;unzipRecordscreen&quot;">​</a></h3><ul><li>作用: 解压错误录屏数据</li><li>解释: 错误事件对象中会含有 <code>recordscreen</code> 字段是错误录屏数据，但这个数据是压缩过的，需要用此方法解压</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">unzipRecordscreen</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@web-tracing/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">unzipRecordscreen</span><span style="color:#BABED8;">(recordscreen)</span></span></code></pre></div><h3 id="getbaseinfo" tabindex="-1">getBaseInfo <a class="header-anchor" href="#getbaseinfo" aria-label="Permalink to &quot;getBaseInfo&quot;">​</a></h3><ul><li>作用: 获取在sdk中记录的所有基础的信息（包括硬件，地理位置等等）</li></ul><h3 id="getfirstscreen" tabindex="-1">getFirstScreen <a class="header-anchor" href="#getfirstscreen" aria-label="Permalink to &quot;getFirstScreen&quot;">​</a></h3><ul><li>作用: 获取首屏数据</li></ul><h3 id="getips" tabindex="-1">getIPs <a class="header-anchor" href="#getips" aria-label="Permalink to &quot;getIPs&quot;">​</a></h3><ul><li>作用: 获取公网ip</li><li>备注: 不保证获取到，用的是第三方方法</li></ul><h3 id="sendlocal" tabindex="-1">sendLocal <a class="header-anchor" href="#sendlocal" aria-label="Permalink to &quot;sendLocal&quot;">​</a></h3><ul><li>作用: 手动发送本地数据</li><li>解释: 当开启配置 <code>localization = true</code> 时，所有的事件信息都会存储在 <code>localstorage</code>，需要开发手动调用此方法触发发送事件条件</li></ul><h3 id="setlocalizationoverflow" tabindex="-1">setLocalizationOverFlow <a class="header-anchor" href="#setlocalizationoverflow" aria-label="Permalink to &quot;setLocalizationOverFlow&quot;">​</a></h3><ul><li>作用: 本地化存储溢出后的回调</li><li>解释: 当开启配置 <code>localization = true</code> 时，所有的事件信息都会存储在 <code>localstorage</code>，但考虑到本地存储空间有限，当存储失败时会触发此方法</li><li>入参: data - {params: {baseInfo: xxx, eventInfo: []}, sendType: xx, success: true} 类型</li></ul>`,56),p=[o];function t(r,c,i,D,y,F){return a(),n("div",null,p)}const h=s(e,[["render",t]]);export{B as __pageData,h as default};
