import{_ as i,o as l,c as e,Q as r}from"./chunks/framework.672efdee.js";const b=JSON.parse('{"title":"迭代计划","description":"","frontmatter":{},"headers":[],"relativePath":"guide/plan.md","filePath":"guide/plan.md","lastUpdated":1693812054000}'),a={name:"guide/plan.md"},o=r('<h1 id="迭代计划" tabindex="-1">迭代计划 <a class="header-anchor" href="#迭代计划" aria-label="Permalink to &quot;迭代计划&quot;">​</a></h1><h2 id="分支说明" tabindex="-1">分支说明 <a class="header-anchor" href="#分支说明" aria-label="Permalink to &quot;分支说明&quot;">​</a></h2><ul><li>main: 当前开发主分支</li><li>0.0: 最初始的demo代码</li><li>1.0: 一期代码</li></ul><blockquote><p>在二期结束后且三期开始时会对2期代码封版</p></blockquote><h2 id="一期-已结束" tabindex="-1">一期(已结束) <a class="header-anchor" href="#一期-已结束" aria-label="Permalink to &quot;一期(已结束)&quot;">​</a></h2><ul><li>简单支持 vue2 + vue3</li><li>自动采集 + 暴露api给用户手动采集上报</li><li>采集功能：【用户事件采集、页面跳转采集、请求采集、错误采集、资源加载采集】</li><li>采集上传方法：只提供 sendBeacon(内部自动降级为image)</li></ul><blockquote><p>一期代码已封版移入“1.0”分支</p></blockquote><h2 id="二期-beta" tabindex="-1">二期(beta) <a class="header-anchor" href="#二期-beta" aria-label="Permalink to &quot;二期(beta)&quot;">​</a></h2><ul><li>整体代码结构更改</li><li>文档系统与sdk核心代码融合 (vuepress -&gt; vitepress) 但还未编写文档</li><li>所有模块已ts化，下一步添加新功能</li><li>解决目前 issues</li><li>支持暴露更多变量（例如最大缓存数、延迟上传时间）（dom埋点名称 先不计划自定义，个人认为没多少业务需要）</li><li>sdk内部的img发送请求不会记录</li><li>sdk内部的console.error不会记录</li><li>支持hook以及自定义hook -【1.放入消息队列的钩子 2.发送时的钩子 3.发送之后的钩子】(1,2返回false会取消放入以及取消发送) (这些钩子目前没有做成动态的，只支持在初始化时挂上去，等做了 exportMethods 后再做)</li><li>ignoreErrors</li><li>ignoreErrors 入参格式进行校验，只能是 (string|number|reg)[]</li><li>ignoreRequest</li><li>ignoreRequest 入参格式进行校验，只能是 (string|number|reg)[]</li><li>支持更多上传方式(此功能放入 beforeSendData 钩子，当返回false则sdk内部不发送请求)</li><li>支持抽样发送(tracesSampleRate全局抽样，具体到模块的抽样可以用beforePushEventList来阻止)</li><li>支持延迟加载sdk(可后期再init初始化)</li><li>防止重复init sdk</li><li>设置断网情况下不采集任何元素(个人认为断网了不需要再去采集用户的操作了，除非是特别需要，所以加入此限制)</li><li>错误过多自动转区间事件，也就是去重(完成，后续再测一下关闭网页是否会及时发送就ok，如果是批量错误会延长20s再发送，如果是普通单个错误会延长2s发送，如果是无限错误每隔50个会发送一次)</li><li>支持暴露更多sdk内部方法（例如使用者想要拿到此时的硬件数据,用户更改入参的方法,一些钩子也要加到这里，例如上传之前的的钩子，然后组成一个数组，为什么这里需要是因为用户想要在每个页面细致化控制是否上传，例如只想在用户打开某个页面才开始采集，不是这个页面则结束采集）- 钩子内不能有异步拦截</li><li>关于用户信息的重构 - 【1.分为未登录与已登录的场景，登录后进行绑定，机器与用户id进行多对多绑定(更多方案还在确定中) 2.支持动态修改用户信息】- 使用 fingerprintjs 去实现设备id</li><li>获取公网ip - 放在了base信息中</li><li>支持区域曝光度采集 - 采用 IntersectionObserver 来实现的，当不兼容时此功能无效（后面会平替为 scroll 来实现，看有木有需求） - 考虑到需要曝光的元素可能在任意页面，所以sdk索性只提供暴露方法供使用者在运行中再去手动调用，目前内部在切换页面时会自动销毁当前页面监听 - 目前需要手动清除监听，后面有需要再根据路由跳转自动清除 - 目前收集契机是必须进入+出去才收集，暂不考虑停留页面直接退出的场景</li><li>支持数据临时存储本地的形式减少服务端压力(会设定存储的阈值大小，最大5M，先不支持跨域存储，否则内容太大上传慢或者不兼容导致此功能不稳定) - 需要用户手动发送 - navigator.sendBeacon 发送大小在 2M-4M，如果觉得不稳妥可以 beforeSendData 拦截自己发送</li><li>错误录屏 - 完成数据采集，但结果需要配合demo案例看</li><li>对入参和出参的ts再次统一化 - eventInfo列表中取消 type 字段</li><li>针对资源的异步加载监控，sdk不做是否加载成功判断，但会暴露 responseEnd 和 responseStart，一般失败的资源加载通过这俩个字段能发现端倪 - 只针对支持 PerformanceObserver 的场景下，不支持 PerformanceObserver 会用 MutationObserver 兼容，不同的是 MutationObserver 能判断请求资源是否报错，如果报错则提供 responseStatus: &#39;error&#39; 字段 (注意：通过标签加载资源如果报错除了资源本身会有错误，错误模块也会暴露一个错误信息，但如果是通过XMR请求则不会额外暴露错误信息)</li><li>批量错误时应该隔一段时间就发一次，不能一直在b栈等用户关闭网页才发 - 统一完善了下</li><li>将所有 options 变为响应式 - 也就是所有用到了 options 参数时，当动态去改它能实时更新(可能要将所有的变量都变为响应式了) - 也就是支持用户全局动态去改 options - 采用 proxy，如果不兼容则此功能无效</li><li>performance模块的src url应该改名 (requestUrl triggerPageUrl) - 改文档的时候注意</li><li>http模块 src 改名为 requestUrl - 改文档的时候注意</li><li>err模块 url 改名为 triggerPageUrl - 改文档的时候注意</li><li>event模块 url 改名为 triggerPageUrl - 改文档的时候注意</li><li>event-dwell模块 url 改名为 triggerPageUrl - 改文档的时候注意</li><li>pv模块 url 改名为 triggerPageUrl - 改文档的时候注意</li><li>sdk内部所有主动方法都改为只传 options 一个参数，但所有的属性优先级是低于内部定义的</li><li>sdk内部发送方式增加至三种，sendbeacon、xml、img，优先 sendBeacon，其次img，最后为xml（因为增加了错误录屏导致数据量较大，xml不限制请求大小）但xml可能会有跨域问题，使用者应该注意这一问题，且sdk内部会将配置的dsn地址加入请求拦截名单(sendBeacon 有64kb限制 img 有2kb限制)</li><li>beforePushEventList 中的data参数设置为数组</li><li>兼容 vue2、vue3（错误处理机制已兼容去重）（react以及小程序优先级靠后一些）（vue3的demo项目的err模块会报警告，分别是：rrweb-player初始加载警告、执行 codeError 方法会报警告；均不影响正常调试）</li><li>实现参数动态更改，目前所有的都可更改，没加限制，所以得提醒注意改的场景不要啥都改</li><li>error 检测那边，应该再加一个属性标识错误类型，例如 console.error 还是 Error 或者 reject - 完成</li></ul><h3 id="二期重构-技术层面关键点" tabindex="-1">二期重构 - 技术层面关键点 <a class="header-anchor" href="#二期重构-技术层面关键点" aria-label="Permalink to &quot;二期重构 - 技术层面关键点&quot;">​</a></h3><ol><li>options参数集中管理 - 完成</li><li>事件注册以及事件改写集中管理，其他模块需要的则会去模块存放/获取 - 完成</li><li>后面可以用 proxy 来自动化一些东西 - 完成</li><li>数据结构不够直观，再优化下 - 完成</li></ol><h3 id="二期未完成功能" tabindex="-1">二期未完成功能 <a class="header-anchor" href="#二期未完成功能" aria-label="Permalink to &quot;二期未完成功能&quot;">​</a></h3><ul><li>首次首屏数据更精确化 - 这个放在最后研究插件化的时候再搞上去</li><li>后面可以考虑把错误录屏单独拎出来，毕竟数据量太大，使得数据传输方式不可控(目前是 img -&gt; sendBeason -&gt; xhr)</li><li>demo官网示例更简单化且提供在线编写能力</li><li>可以用浏览器插件的方式去快速加载demo，无需down项目下来本地运行</li><li>sourcemap 错误跟踪 - 做好服务端再来做这个</li><li>管理端查看功能：能不能做到用户在管理平台上能看到除表格分析外，在页面截图上能标出点击量这些信息，比如在a页面点了b按钮多少次</li></ul><h3 id="二期暂不考虑功能" tabindex="-1">二期暂不考虑功能 <a class="header-anchor" href="#二期暂不考虑功能" aria-label="Permalink to &quot;二期暂不考虑功能&quot;">​</a></h3><ul><li>支持对特定dom监控事件（例如监控页面button按钮的点击事件，这在大批量埋点场景中比较需要，另提供一些属性来标识特定按钮无需采集）(这个先不做，可以自己过滤)</li><li>支持加密传输（加密方式待确定）（这个给用户来做，毕竟钩子已经暴露了）</li><li>支持断网续联后发送（这个涉及到数据本地存储，得考虑容量大小，且断网状态下的用户操作是无意义的，暂不考虑做）</li><li>支持静默,思考除了错误的场景下什么情况需要静默(如果是想在规定时间内上传，完全可以通过钩子来实现)</li><li>sendTime err事件 第一个挂载不上(没有复现了，最后再看看是否正常)</li><li>支持区间打点，区间采集(记录开始和结束，筛选统计开始和结束之间的事件行为，统计到一个分组中) - 个人认为可以通过钩子来解决，所以暂不处理</li><li>探索：一些关键性的api能让使用者去替代更改、比如监听网络状态的内部实现支持使用者去重写 - 不需要</li><li>探索：插件化（核心功能+其他插件的形式）- 有利弊，后面需要再去实现</li><li>白屏检测 - 需要传入临界点时间，例如在进入页面加载完成后超过这个临界点时间还是白屏则计入白屏事件 - 能不能在load后采集一组数据的色值，随后轮训去看看是否一致（这个得有一定的松紧值来限定，得考虑骨架屏gif的情况），毕竟白屏没准也是黑屏 - 蛮复杂，后面多调研一下</li><li>不做全埋点，会被滥用</li><li>页面埋点的前缀不可配置</li><li>例如只想在用户打开某个页面才开始采集,不是这个页面则结束采集 - 这个通过目前的api能达成</li><li>为 vue3 提供一系列个性化hooks - 目前已有api不太需要</li><li>此场景怎么做：用户一直点一个带了埋点的按钮，怎么去重呢，简单的节流去重？- 通过目前已有的拦截去做</li><li>考虑一些枚举也给用户可以改 - 复杂且效益不高</li><li>用户行为应该给个id，要不然后台不好快速找特定事件，点击按钮可以自己给id，但是切换事件或者曝光就拿不到id了，得找个办法去定义 - 不做，这个可以额外自己给id</li></ul><h2 id="三期-未开始" tabindex="-1">三期(未开始) <a class="header-anchor" href="#三期-未开始" aria-label="Permalink to &quot;三期(未开始)&quot;">​</a></h2><ul><li>nest完成服务端</li><li>做一个后台统计端，对所有的数据进行统筹，更方便运营人员查看</li><li>将demo项目放入到服务器中，方便使用人员快速体验</li><li>对采集端进行更多数据层面的优化（例如首屏信息）</li><li>兼容更多端（ps：小程序、uniapp、react....）</li></ul>',17),t=[o];function s(n,d,u,c,h,p){return l(),e("div",null,t)}const g=i(a,[["render",s]]);export{b as __pageData,g as default};
