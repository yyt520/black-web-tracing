import{_ as t,o as e,c as d,Q as a}from"./chunks/framework.672efdee.js";const f=JSON.parse('{"title":"options","description":"","frontmatter":{},"headers":[],"relativePath":"guide/use/options.md","filePath":"guide/use/options.md","lastUpdated":1693812054000}'),r={name:"guide/use/options.md"},o=a('<h1 id="options" tabindex="-1">options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;options&quot;">​</a></h1><p>sdk初始化时的配置项</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>在后续业务中也可以对某个配置项进行更改，sdk内部会检测到更改并及时更新</p><p>配置项的动态更改，目前所有的都可更改，没加限制，所以开发需要自行判断哦</p></div><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>dsn</td><td>string</td><td><strong>是</strong></td><td>-</td><td>上报地址</td></tr><tr><td>appName</td><td>string</td><td><strong>是</strong></td><td>-</td><td>应用名称</td></tr><tr><td>appCode</td><td>string</td><td>否</td><td>-</td><td>应用code</td></tr><tr><td>appVersion</td><td>string</td><td>否</td><td>-</td><td>应用版本</td></tr><tr><td>userUuid</td><td>string</td><td>否</td><td>-</td><td>用户id</td></tr><tr><td>debug</td><td>boolean</td><td>否</td><td>false</td><td>是否开启触发事件时控制台输出</td></tr><tr><td>recordScreen</td><td>boolean</td><td>否</td><td>false</td><td>是否开启录屏功能</td></tr><tr><td>pv</td><td>object/boolean</td><td>否</td><td>false</td><td><em><strong>见下方 pv 解释</strong></em></td></tr><tr><td>performance</td><td>object/boolean</td><td>否</td><td>false</td><td><em><strong>见下方 performance 解释</strong></em></td></tr><tr><td>error</td><td>object/boolean</td><td>否</td><td>false</td><td><em><strong>见下方 error 解释</strong></em></td></tr><tr><td>event</td><td>object/boolean</td><td>否</td><td>false</td><td><em><strong>见下方 event 解释</strong></em></td></tr><tr><td>ext</td><td>object</td><td>否</td><td>undefined</td><td>自定义的全局附加参数</td></tr><tr><td>tracesSampleRate</td><td>number</td><td>否</td><td>1</td><td>抽样发送(0-1)</td></tr><tr><td>cacheMaxLength</td><td>number</td><td>否</td><td>5</td><td>上报数据最大缓存数</td></tr><tr><td>cacheWatingTime</td><td>number</td><td>否</td><td>5000</td><td>上报数据最大等待时间(ms)</td></tr><tr><td>ignoreErrors</td><td>Array&lt;string/RegExp&gt;</td><td>否</td><td>[]</td><td>错误类型事件过滤</td></tr><tr><td>ignoreRequest</td><td>Array&lt;string/RegExp&gt;</td><td>否</td><td>[]</td><td>请求类型事件过滤</td></tr><tr><td>scopeError</td><td>boolean</td><td>否</td><td>false</td><td>开启范围错误</td></tr><tr><td>localization</td><td>boolean</td><td>否</td><td>false</td><td>是否本地化</td></tr><tr><td>sendTypeByXmlBody</td><td>boolean</td><td>否</td><td>false</td><td>是否强制指定发送形式为xml，body请求方式</td></tr><tr><td>beforePushEventList</td><td>function</td><td>否</td><td>-</td><td>添加到行为列表前的 hook</td></tr><tr><td>beforeSendData</td><td>function</td><td>否</td><td>-</td><td>数据上报前的 hook</td></tr><tr><td>afterSendData</td><td>function</td><td>否</td><td>-</td><td>数据上报后的 hook</td></tr></tbody></table><h2 id="pv" tabindex="-1">pv <a class="header-anchor" href="#pv" aria-label="Permalink to &quot;pv&quot;">​</a></h2><p>当 pv 为布尔值时其内部所有属性都为此布尔值（例如：pv = true 代表 pv: {core: true}）</p><table><thead><tr><th>属性名</th><th>类型</th><th>是否必填</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>core</td><td>boolean</td><td>否</td><td>false</td><td>是否发送页面跳转相关数据</td></tr></tbody></table><h2 id="performance" tabindex="-1">performance <a class="header-anchor" href="#performance" aria-label="Permalink to &quot;performance&quot;">​</a></h2><p>当 performance 为布尔值时其内部所有属性都为此布尔值</p><table><thead><tr><th>属性名</th><th>类型</th><th>是否必填</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>core</td><td>boolean</td><td>否</td><td>false</td><td>是否采集静态资源、接口的相关数据</td></tr><tr><td>firstResource</td><td>boolean</td><td>否</td><td>false</td><td>是否采集首次进入页面的数据</td></tr><tr><td>server</td><td>boolean</td><td>否</td><td>false</td><td>是否采集接口请求</td></tr></tbody></table><h2 id="error" tabindex="-1">error <a class="header-anchor" href="#error" aria-label="Permalink to &quot;error&quot;">​</a></h2><p>当 error 为布尔值时其内部所有属性都为此布尔值</p><table><thead><tr><th>属性名</th><th>类型</th><th>是否必填</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>core</td><td>boolean</td><td>否</td><td>false</td><td>是否采集异常数据</td></tr><tr><td>server</td><td>boolean</td><td>否</td><td>false</td><td>是否采集报错接口数据</td></tr></tbody></table><h2 id="event" tabindex="-1">event <a class="header-anchor" href="#event" aria-label="Permalink to &quot;event&quot;">​</a></h2><p>当 event 为布尔值时其内部所有属性都为此布尔值</p><table><thead><tr><th>属性名</th><th>类型</th><th>是否必填</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>core</td><td>boolean</td><td>否</td><td>false</td><td>是否采集点击事件</td></tr></tbody></table><h2 id="具体参数解释" tabindex="-1">具体参数解释 <a class="header-anchor" href="#具体参数解释" aria-label="Permalink to &quot;具体参数解释&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>sdk 中所有的配置都可以在项目运行中更改</p><p>例如</p><p>import { options } from &#39;@web-tracing/vue2&#39;</p><p>options.value.dsn = &#39;www.baidu.com&#39; // 从此刻开始所有的事件都会发送到此服务器上</p></div><h3 id="dsn" tabindex="-1">dsn <a class="header-anchor" href="#dsn" aria-label="Permalink to &quot;dsn&quot;">​</a></h3><ul><li>解释: 上报地址</li><li>作用: 将收集到的数据根据dsn地址上报到服务端</li><li>备注: 必填</li></ul><h3 id="appname" tabindex="-1">appName <a class="header-anchor" href="#appname" aria-label="Permalink to &quot;appName&quot;">​</a></h3><ul><li>作用: 作为附带参数 - <code>项目名称</code> 给到服务端</li><li>解释: 被监控的项目名称</li><li>备注: 必填</li></ul><h3 id="appcode" tabindex="-1">appCode <a class="header-anchor" href="#appcode" aria-label="Permalink to &quot;appCode&quot;">​</a></h3><ul><li>作用: 作为附带参数 - <code>项目code</code> 给到服务端</li><li>解释: 被监控的项目code</li></ul><h3 id="appversion" tabindex="-1">appVersion <a class="header-anchor" href="#appversion" aria-label="Permalink to &quot;appVersion&quot;">​</a></h3><ul><li>作用: 作为附带参数 - <code>项目版本</code> 给到服务端</li><li>解释: 被监控项目的版本号</li></ul><h3 id="useruuid" tabindex="-1">userUuid <a class="header-anchor" href="#useruuid" aria-label="Permalink to &quot;userUuid&quot;">​</a></h3><ul><li>作用: 作为附带参数 - <code>用户id</code> 给到服务端</li><li>解释: 登录被监控的项目的用户id</li></ul><h3 id="debug" tabindex="-1">debug <a class="header-anchor" href="#debug" aria-label="Permalink to &quot;debug&quot;">​</a></h3><ul><li>作用: 查看sdk内部的console.log</li><li>解释: 需要在浏览器控制台查看发送的事件信息时可以打开此参数</li></ul><h3 id="ext" tabindex="-1">ext <a class="header-anchor" href="#ext" aria-label="Permalink to &quot;ext&quot;">​</a></h3><ul><li>作用: 作为附带对象参数给到服务端</li><li>解释: 在 <code>baseinfo</code> 对象中会带上 <code>ext</code> 对象，如果想要传递一些额外的公共数据可通过此参数附加</li><li>备注: 可在使用过程中对 <code>ext</code> 对象进行增删改查，sdk内部会带上最新值</li></ul><h3 id="tracessamplerate" tabindex="-1">tracesSampleRate <a class="header-anchor" href="#tracessamplerate" aria-label="Permalink to &quot;tracesSampleRate&quot;">​</a></h3><ul><li>作用: 针对已发生的事件进行抽样发送</li><li>解释: 抽样发送(0-1)</li><li>默认值: 1</li></ul><h3 id="cachemaxlength" tabindex="-1">cacheMaxLength <a class="header-anchor" href="#cachemaxlength" aria-label="Permalink to &quot;cacheMaxLength&quot;">​</a></h3><ul><li>作用: 设置上报数据最大缓存数</li><li>解释: sdk内部对所有已发生的事件会先存到事件列表中，在达到最大缓存数时会触发事件上报</li><li>默认值: 5</li></ul><h3 id="cachewatingtime" tabindex="-1">cacheWatingTime <a class="header-anchor" href="#cachewatingtime" aria-label="Permalink to &quot;cacheWatingTime&quot;">​</a></h3><ul><li>作用: 设置上报数据最大等待时间(ms)</li><li>解释: sdk内部对所有已发生的事件会先存到事件列表中，同时也会开始倒计时(也就是最大等待时间)，倒计时结束后无论事件列表中是否满足最大缓存数都会触发发送</li><li>默认值: 5000</li></ul><h3 id="recordscreen" tabindex="-1">recordScreen <a class="header-anchor" href="#recordscreen" aria-label="Permalink to &quot;recordScreen&quot;">​</a></h3><ul><li>作用: 是否启动录屏功能</li><li>解释: 错误采集时会保存页面录屏信息，该选项仅在启动错误采集时生效，为 false 时错误采集 recordscreen 属性为 null</li><li>默认值: true</li></ul><h3 id="ignoreerrors" tabindex="-1">ignoreErrors <a class="header-anchor" href="#ignoreerrors" aria-label="Permalink to &quot;ignoreErrors&quot;">​</a></h3><ul><li>作用: 错误类型事件过滤</li><li>解释: 在触发错误类型事件时，会依据此参数过滤一遍，最终决定哪些事件可以发生</li></ul><h3 id="ignorerequest" tabindex="-1">ignoreRequest <a class="header-anchor" href="#ignorerequest" aria-label="Permalink to &quot;ignoreRequest&quot;">​</a></h3><ul><li>作用: 请求类型事件过滤</li><li>解释: 在触发请求类型事件时，会依据此参数过滤一遍，最终决定哪些事件可以发生</li></ul><h3 id="scopeerror" tabindex="-1">scopeError <a class="header-anchor" href="#scopeerror" aria-label="Permalink to &quot;scopeError&quot;">​</a></h3><ul><li>作用: 开启范围错误</li><li>解释: 为了应对被监控的项目发生了批量错误时sdk会将这些重复的错误都一一发送到服务端，特别是当这些错误是循环无限错误时，对服务端的浪费是灾难性的，所以提出此参数；当开启了后sdk内部会判断是否为批量错误，然后归纳一起发送给服务端；当批量错误多了sdk会识别出无限错误，每隔20s才发送此错误；具体查看 <a href="./../functions/error">错误采集</a></li><li>默认值: false</li></ul><h3 id="localization" tabindex="-1">localization <a class="header-anchor" href="#localization" aria-label="Permalink to &quot;localization&quot;">​</a></h3><ul><li>作用: 是否本地化</li><li>解释: 开启本地化后，数据会存储在 localStorage 中，需要开发手动去发送与清除；具体查看 <a href="./../functions/exports">导出项</a></li><li>默认值: false</li></ul><h3 id="sendtypebyxmlbody" tabindex="-1">sendTypeByXmlBody <a class="header-anchor" href="#sendtypebyxmlbody" aria-label="Permalink to &quot;sendTypeByXmlBody&quot;">​</a></h3><ul><li>作用: 是否强制指定发送形式为xml，body请求方式</li><li>解释: sdk内部有三种发送方式（sendbeacon、img、xml），此参数可以强行指定发送数据方式为xml</li><li>默认值: false</li></ul><h3 id="beforepusheventlist" tabindex="-1">beforePushEventList <a class="header-anchor" href="#beforepusheventlist" aria-label="Permalink to &quot;beforePushEventList&quot;">​</a></h3><ul><li>作用: 事件添加到事件列表前的hook</li><li>解释: 为了让用户对采集到的数据进行自定义增删改查，提供此函数；例如捕获到了错误事件，在将此事件对象放入事件列表时会触发此函数，当此函数返回false时则不会将此错误事件放入事件列表，当函数返回其他对象时，sdk内部会将此对象放入事件列表；具体查看 <a href="./../functions/exports">导出项</a></li><li>备注: 初始化时可传入此函数，在项目运行中也可以继续使用此函数，sdk内部会将所有的 <code>beforePushEventList</code> 函数形成链路依次执行</li></ul><h3 id="beforesenddata" tabindex="-1">beforeSendData <a class="header-anchor" href="#beforesenddata" aria-label="Permalink to &quot;beforeSendData&quot;">​</a></h3><ul><li>作用: 事件列表上报前的hook</li><li>解释: 为了让用户对采集到的数据进行自定义增删改查，提供此函数；例如事件列表个数在超过最大缓存数时会发送事件列表，此时会触发此函数，当此函数返回false时则不会将此错误事件放入事件列表，当函数返回其他事件列表时，sdk内部会发送此事件列表；具体查看 <a href="./../functions/exports">导出项</a></li><li>备注: 初始化时可传入此函数，在项目运行中也可以继续使用此函数，sdk内部会将所有的 <code>beforeSendData</code> 函数形成链路依次执行</li></ul><h3 id="aftersenddata" tabindex="-1">afterSendData <a class="header-anchor" href="#aftersenddata" aria-label="Permalink to &quot;afterSendData&quot;">​</a></h3><ul><li>作用: 事件列表上报后的hook</li><li>解释: 在事件列表上报后项目内部想做一些收尾工作则可以利用此函数；具体查看 <a href="./../functions/exports">导出项</a></li><li>备注: 初始化时可传入此函数，在项目运行中也可以继续使用此函数，sdk内部会将所有的 <code>afterSendData</code> 函数形成链路依次执行</li></ul>',56),l=[o];function i(n,s,h,c,u,b){return e(),d("div",null,l)}const m=t(r,[["render",i]]);export{f as __pageData,m as default};
