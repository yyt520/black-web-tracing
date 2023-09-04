<div align="center">
  <img src="https://cdn.staticaly.com/gh/M-cheng-web/image-provider@main/web-tracing/icon_5e9950ae4507f.33lqpfzrwzc0.svg" width="128" alt="logo" />
  <h1>web-tracing 监控插件</h1>
  <p>
    基于 JS 跨平台插件，为前端项目提供【 埋点、行为、性能、异常、请求、资源、路由、曝光、录屏 】监控手段
  </p>
</div>


## 演示
### 事件监听
<img src="https://cdn.staticaly.com/gh/M-cheng-web/image-provider@main/web-tracing/image.78d02ro0pyo0.webp" width="1200" alt="logo" />

### 错误监听
<img src="https://cdn.staticaly.com/gh/M-cheng-web/image-provider@main/web-tracing/Jul-31-2023-20-41-51.4dr4i0vaypw0.gif" width="1200" alt="logo" />

### 资源监听
<img src="https://cdn.staticaly.com/gh/M-cheng-web/image-provider@main/web-tracing/image.6he8u6xbh000.webp" width="1200" alt="logo" />

## 项目初衷
为了帮助开发们在公司平台上搭建一套前端监控平台

## 亮点
提供了多种定制化api最大限度帮助你应付各个场景的业务，例如:
+ 提供钩子函数让你对数据精确把握
+ 提供本地化选项api，让开发手动控制去发送监控数据 - 节省带宽
+ 提供批量错误api，在遇到无限错误时融合批量错误信息 - 节省带宽
+ 提供抽样发送api - 节省带宽
+ 提供 错误/请求 事件的过滤api
+ 等等....

站在技术角度，因为明确此项目可能更多的是应用在公司平台上，大概率会二开，所以作者对项目结构以及代码都严格要求
+ 架构 - demo、核心sdk代码、文档都在同一个项目中，调试、部署都很方便
+ 封装 - sdk存在大量的重写或者监听，对此有统一流程
+ 响应式 - 项目内部实现了vue响应式，也应用在 options 对象中，相信你接触会后受益良多
+ 多版本 - 针对不同平台提供多个版本(目前只有js、vue2、vue3)，受益于monorepo架构可一键发布
+ 内聚 - 目前核心功能的所有代码都没有分包，虽然monorepo架构支持，但作者认为目前分包不利于代码阅读以及二开方便
+ 文档/注释 - 完善的文档以及非常全的注释，力求帮助你快速了解这一切

## 功能列表
具体参见[CHANGELOG.md](https://github.com/M-cheng-web/web-tracing/blob/main/CHANGELOG.md)

## 未来方向
会写一套服务端(nest) + 后台查看监控数据平台(vue)，有以下几点考量
+ 提供服务端能力（目前只是在采集端发力）
+ 可以在线体验此项目
+ 提供更多示例代码给开发们，再次降低这一套代码在公司的推广难度
+ 作者也想站在业务的角度多思考还能从哪些方面此项目还缺失哪些功能

针对首屏加载的监控做出更多精细化的东西，例如考虑sdk的绝对轻量化

