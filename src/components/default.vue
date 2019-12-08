<!--  -->
<template>
  <div class="container">
    <header>
      <figure class="qrcode">
        <img src="../assets/wechat.jpg" />
      </figure>
      <section class="title">
        <h1>{{name}}</h1>
        <h2>{{work}}</h2>
      </section>
      <address>
        <ul class="contacts">
          <li :class="info.icon" v-for="info in infos">
            <a>&nbsp;{{info.content}}</a>
          </li>
        </ul>
      </address>
    </header>
    <article class="content">
      <article class="column-6">
        <section class="education">
          <div class="sec-title-wrapper el-icon-collection">
            <h3 class="sec-title">
              <span class="sec-zh">教育经历</span>
              <span class="sec-en">Education</span>
            </h3>
          </div>
          <div class="timeline-wrapper">
            <ul class="sec-content timeline">
              <li class="timeline-item el-icon-s-management">
                <h3 class="timeline-title">
                  <time class="education-time">{{education.year}}</time>
                </h3>
                <dl class="education-content">
                  <dt class="education-name">{{education.school}}</dt>
                  <dd class="education-major el-icon-reading">{{education.speciality}}</dd>
                  <!--each val in education.honor-->
                  <!--  dd.education-honor.icon-trophy!= val-->
                </dl>
              </li>
            </ul>
          </div>
        </section>
        <section class="language">
          <div class="sec-title-wrapper el-icon-s-marketing">
            <h3 class="sec-title">
              <span class="sec-zh">语言水平</span>
              <span class="sec-en">Language</span>
            </h3>
          </div>
          <div class="sec-content">
            <dl class="language-certificates">
              <div v-if="cet4" class="language-cert-wrapper">
                <dt class="language-cert-type">CET-4</dt>
                <dd class="progress">
                  <div style="width:NaN%" class="progress-bar">
                    <span class="progress-label"></span>
                  </div>
                </dd>
              </div>
              <div v-if="cet6" class="language-cert-wrapper">
                <dt class="language-cert-type">CET-6</dt>
                <dd class="progress" style="width:52%">
                  <div style="width:NaN%" class="progress-bar">
                    <span class="progress-label"></span>
                  </div>
                </dd>
              </div>
            </dl>
            <ul class="language-skills">
              <li class="el-el-icon-star-oon-on" v-html="language">{{language}}</li>
            </ul>
          </div>
        </section>
        <section class="experience">
          <div class="sec-title-wrapper el-icon-s-check">
            <h3 class="sec-title">
              <span class="sec-zh">项目与工作经验</span>
              <span class="sec-en">Experience</span>
            </h3>
          </div>
          <div class="timeline-wrapper">
            <ul class="sec-content timeline">
              <li class="timeline-item el-icon-s-cooperation">
                <h3 class="timeline-title">
                  <span class="experience-place">杏树林信息技术有限公司</span>
                  <time class="experience-time">2016.07-至今</time>
                </h3>
                <dl class="experience-content">
                  <dt class="experience-position">商业前台服务（2017 — 2018）</dt>
                  <dd class="experience-task el-icon-setting">
                    <strong>&nbsp;前后端分离</strong>项目的前端, node主要用于返回页面
                  </dd>
                  <dd class="experience-task el-icon-setting">
                    将项目拆分为多页面应用, 使用
                    <strong>webpack4</strong>打包
                  </dd>
                  <dd class="experience-task el-icon-setting">
                    接口使用代理, 引入
                    <strong>http-proxy-middleware</strong>,
                    解决
                    <strong>跨域问题</strong>
                  </dd>
                  <dd class="experience-task el-icon-setting">
                    部分页面涉及微信内使用, 接触了
                    <strong>微信js-sdk</strong>
                  </dd>
                </dl>
                <dl class="experience-content">
                  <dt class="experience-position">商业后台服务（2017 — 2018）</dt>
                  <dd class="experience-task el-icon-setting">
                    后端使用
                    <strong>express</strong>, 开发完整的后台系统, 包括用户管理、菜单管理等
                  </dd>
                  <dd class="experience-task el-icon-setting">
                    前端使用
                    <strong>vue + ElementUI</strong> 实现
                    <strong>SPA</strong>应用,
                    并进行了部分组件的
                    <strong>二次封装</strong>
                  </dd>
                  <dd class="experience-task el-icon-setting">
                    使用
                    <strong>express-session + redis</strong> 管理 session 并包含权限验证
                  </dd>
                  <dd class="experience-task el-icon-setting">
                    开发
                    <strong>视频上传</strong>模块, 视频上传到网易云
                  </dd>
                  <dd class="experience-task el-icon-setting">
                    开发
                    <strong>网页应用发版</strong>模块, 使使用旧版的用户即时退出登录重新拉取菜单
                  </dd>
                  <dd class="experience-task el-icon-setting">开发入组二维码功能</dd>
                </dl>
                <dl class="experience-content">
                  <dt class="experience-position">更多</dt>
                  <dd class="experience-task el-icon-setting">
                    独立开发
                    <strong>Monitor</strong> 服务进行
                    <strong>组内服务监控和报警</strong>
                  </dd>
                  <dd class="experience-task el-icon-setting">
                    独立开发
                    <strong>定时任务</strong> 服务进行 数据导出、图片导出 等操作
                  </dd>
                  <dd class="experience-task el-icon-setting">
                    独立开发
                    <strong>sms</strong> 负责全公司与短信运营商的交互
                  </dd>
                  <dd class="experience-task el-icon-setting">
                    独立完成了整个项目组的
                    <strong>容器化</strong>: 重构构建脚本, 重要服务
                    <strong>双机部署</strong>
                  </dd>
                  <dd class="experience-task el-icon-setting">
                    参与开发
                    <strong>商业后台接口</strong> 项目, 负责商业项目接口的对外交互
                  </dd>
                  <dd class="experience-task el-icon-setting">
                    参与开发
                    <strong>商业前台通用</strong> 项目,
                    负责商业项目的入组和参会，入组使用到了
                    <strong>消息队列</strong>
                  </dd>
                  <dd class="experience-task el-icon-setting">
                    参与开发
                    <strong>诊疗圈</strong> 项目, 负责商业私密课的开发
                  </dd>
                  <dd class="experience-task el-icon-setting">
                    参与开发
                    <strong>表单服务</strong> 负责表单数据的展示页面
                  </dd>
                </dl>
              </li>
              <li class="timeline-item el-icon-s-cooperation" v-for="experience in experiences">
                <h3 class="timeline-title">
                  <span class="experience-place">{{experience.company}}</span>
                  <time class="experience-time">{{experience.year}}</time>
                </h3>
                <dl class="experience-content" v-for="item in experience.items">
                  <dt class="experience-position" v-html="item.item">{{item.item}}</dt>
                  <dd
                    class="experience-task el-icon-setting"
                    v-for="task in item.tasks"
                    v-html="task.task"
                  >
                    &nbsp;
                    {{task.task}}
                  </dd>
                </dl>
              </li>
            </ul>
          </div>
        </section>
      </article>
      <article class="column-6 column">
        <section class="skills">
          <div class="sec-title-wrapper el-icon-s-opportunity">
            <h3 class="sec-title">
              <span class="sec-zh">技能</span>
              <span class="sec-en">Skills</span>
            </h3>
          </div>
          <div class="timeline-wrapper">
            <ul class="sec-content timeline">
              <li class="timeline-item el-icon-s-help">
                <h3 class="timeline-title">
                  <span class="skill">Web前端</span>
                </h3>
                <dl class="skill-content">
                  <dt class="skill-name">
                    <strong>HTML/CSS</strong>
                  </dt>
                  <dd class="skill-description el-icon-star-on">
                    能够编写语义化的
                    <strong>HTML</strong> ，熟悉
                    <strong>CSS</strong>
                    的使用，实现常用的布局与动画
                  </dd>
                  <dd class="skill-description el-icon-star-on">
                    了解
                    <strong>HTML5/CSS3</strong> ，能熟练使用部分新特性
                  </dd>
                  <dd class="skill-description el-icon-star-on">
                    能够编写
                    <strong>响应式/移动端网页</strong>
                  </dd>
                </dl>
                <dl class="skill-content">
                  <dt class="skill-name">ECMAScript（JavaScript）</dt>
                  <dd class="skill-description el-icon-star-on">
                    熟悉 JavaScript,
                    <strong>代码编写遵守规范</strong>, 组内有EsLint规范
                  </dd>
                  <dd class="skill-description el-icon-star-on">
                    了解
                    <strong>JavaScript 面向对象知识</strong> 与
                    <strong>MV*</strong>
                    模式
                  </dd>
                  <dd class="skill-description el-icon-star-on">
                    理解 ECMAScript 规范及制定过程，
                    <strong>熟练使用 ES6/7 开发项目</strong>
                  </dd>
                  <dd class="skill-description el-icon-star-on">
                    熟悉
                    <strong>异步编程, 跨源资源共享</strong>, 掌握常见的解决方案及原理
                  </dd>
                </dl>
                <dl class="skill-content">
                  <dt class="skill-name">主流开发框架和工程化</dt>
                  <dd class="skill-description el-icon-star-on">熟悉 jQuery/Bootstrap 等常见框架类库的使用</dd>
                  <dd class="skill-description el-icon-star-on">
                    熟练使用
                    <strong>React/Vue</strong>, 完成单页和常见应用的编写
                  </dd>
                  <dd class="skill-description el-icon-star-on">
                    熟练使用
                    <strong>webview-bridge</strong> 技术与客户端联调App
                  </dd>
                  <dd class="skill-description el-icon-star-on">
                    熟练使用
                    <strong>Babel, Webpack, Gulp</strong> 等代码构建工具
                  </dd>
                </dl>
              </li>
              <li class="timeline-item el-icon-s-help">
                <h3 class="timeline-title">
                  <span class="skill">Web后端</span>
                </h3>
                <dl class="skill-content">
                  <dt class="skill-name">
                    <strong>Node.js</strong>
                  </dt>
                  <dd class="skill-description el-icon-star-on">
                    能使用
                    <strong>Koa2/Express/egg</strong> 等框架独立搭建后端服务,
                  </dd>
                  <dd class="skill-description el-icon-star-on">
                    能配合
                    <strong>MySql + knex</strong> 完成 CRUD
                  </dd>
                  <dd class="skill-description el-icon-star-on">
                    能配合
                    <strong>MongoDB + Mongoose</strong> 完成 CRUD
                  </dd>
                  <dd class="skill-description el-icon-star-on">能开发项目组日常使用中间件/工具包等, 并发布至私有npm仓库</dd>
                  <dd class="skill-description el-icon-star-on">
                    使用
                    <strong>Mocha</strong> 编写单元, 并通过
                    <strong>Jenkins</strong>
                    实现持续集成
                  </dd>
                  <dd class="skill-description el-icon-star-on">
                    使用
                    <strong>Winston</strong> 日志框架, 简单的日志分类收集, 日期切割
                  </dd>
                </dl>
                <dl class="skill-content">
                  <dt class="skill-name">其它知识</dt>
                  <dd class="skill-description el-icon-star-on">
                    熟悉
                    <strong>HTTP 常见知识</strong>, 对 WebSocket 等新知识有所了解
                  </dd>
                  <dd class="skill-description el-icon-star-on">
                    日常使用
                    <strong>Docker</strong> 完成项目的构建与部署
                  </dd>
                  <dd class="skill-description el-icon-star-on">
                    开发镜像并使用
                    <strong>docker hub</strong> 管理
                  </dd>
                  <dd class="skill-description el-icon-star-on">
                    完成
                    <strong>Nginx</strong> 的配置, 实现反向代理等功能
                  </dd>
                </dl>
              </li>
              <li class="timeline-item el-icon-s-help">
                <h3 class="timeline-title">
                  <span class="skill">其它</span>
                </h3>
                <dl class="skill-content">
                  <dt class="skill-name">
                    <strong>个人项目</strong>
                  </dt>
                  <a
                    href="https://github.com/leotian/node-wxbizmsgcrypt"
                    target="_blank"
                    class="skill-name-link"
                  >node-wxbizmsgcrypt</a>
                  <dd class="skill-description el-icon-star-on">node版微信加解密库</dd>
                </dl>
                <dl class="skill-content">
                  <dt class="skill-name">工具使用</dt>
                  <dd class="skill-description el-icon-star-on">使用 macOS 作为日常系统</dd>
                  <dd class="skill-description el-icon-star-on">
                    <strong>多年 Linux 使用经验</strong>, 组内服务器日常维护
                  </dd>
                  <dd class="skill-description el-icon-star-on">
                    日常使用
                    <strong>Webstorm / VSCode</strong> 进行开发
                  </dd>
                  <dd class="skill-description el-icon-star-on">
                    熟练使用
                    <strong>Git</strong> 代码管理与团队协作工具
                  </dd>
                </dl>
              </li>
              <li class="timeline-item el-icon-s-help" v-for="skill in skills">
                <h3 class="timeline-title">
                  <span class="skill">{{skill.name}}</span>
                </h3>
                <dl class="skill-content" v-for="content in skill.content">
                  <dt class="skill-name">
                    <strong>{{content.title}}</strong>
                  </dt>
                  <dd
                    class="skill-description el-icon-star-on"
                    v-for="s in content.skills"
                  >{{s.skill}}</dd>
                </dl>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </article>
  </div>
</template>

<script>
export default {
  name: "right",
  props: [
    "fields",
    "infos",
    "education",
    "name",
    "work",
    "experiences",
    "language",
    "cet4",
    "cet6",
    "skills"
  ],
  data() {
    return {
      htmlTitle: "页面导出PDF文件名"
    };
  }
};
</script>
<style scoped>