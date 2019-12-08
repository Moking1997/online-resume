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
              <li class="timeline-item el-icon-s-help" v-for="skill in skills">
                <h3 class="timeline-title">
                  <span class="skill">{{skill.name}}</span>
                </h3>
                <dl class="skill-content" v-for="content in skill.content">
                  <dt class="skill-name" v-html="content.title"></dt>
                  <dd
                    class="skill-description el-icon-star-on"
                    v-for="s in content.skills"
                    v-html="s.skill"
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
import "@/assets/resume.css";

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
    return {};
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */

.el-icon-collection:before {
  font-style: normal;
  padding-right: 3px;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  font-size: 24px;
  line-height: 32px;
  display: inline-block;
  float: left;
  width: 32px;
  height: 32px;
  padding: 6px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  background: #333;
}
.el-icon-s-management:before {
  padding-right: 3px;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
  line-height: 26px;
  position: absolute;
  width: 26px;
  height: 26px;
  margin-top: -7px;
  margin-left: 3px;
  margin-left: -22px;
  padding: 6px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  background: teal;
}

.el-icon-s-marketing:before {
  font-size: 26px;
  font-style: normal;
  padding-right: 3px;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  font-size: 24px;
  line-height: 32px;
  display: inline-block;
  float: left;
  width: 32px;
  height: 32px;
  padding: 6px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  background: #333;
}
.el-icon-s-check:before {
  font-size: 26px;
  font-style: normal;
  padding-right: 3px;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  font-size: 24px;
  line-height: 32px;
  display: inline-block;
  float: left;
  width: 32px;
  height: 32px;
  padding: 6px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  background: #333;
}

.el-icon-s-cooperation:before {
  font-size: 26px !important;
  font-style: normal;
  padding-right: 3px;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
  line-height: 26px;
  position: absolute;
  width: 26px;
  height: 26px;
  margin-top: -7px;
  margin-left: 3px;
  margin-left: -22px;
  padding: 6px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  background: teal;
}
.el-icon-s-opportunity:before {
  font-size: 28px !important;
  font-style: normal;
  padding-right: 3px;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  font-size: 24px;
  line-height: 32px;
  display: inline-block;
  float: left;
  width: 32px;
  height: 32px;
  padding: 6px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  background: #333;
}

.el-icon-s-help:before {
  font-style: normal;
  padding-right: 3px;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
  line-height: 26px;
  position: absolute;
  width: 26px;
  height: 26px;
  margin-top: -7px;
  margin-left: 3px;
  margin-left: -22px;
  padding: 6px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  background: teal;
}
</style>