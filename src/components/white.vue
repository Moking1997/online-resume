<!--  -->
<template>
  <div class="wrap">
    <div class="header">
      <div class="name">
        <div class="bname">{{name}}</div>
        <div class="sname">{{work}}</div>
      </div>
      <div class="info">
        <span>{{education.school}}&nbsp&nbsp&nbsp&nbsp</span>
        <span>{{education.speciality}}&nbsp&nbsp&nbsp&nbsp</span>
        <span>{{education.year}}</span>
      </div>
      <div class="relation">
        <div v-for="info in infos">{{info.content}}</div>
      </div>
    </div>
    <div class="content">
      <div class="projects clearfix">
        <div class="title">
          <span class="title-red">工作</span>项目
          <div class="title-l"></div>
        </div>
        <div class="project" v-for="experience in experiences">
          <span>{{experience.company}}</span>
          <div class="time">{{experience.year}}</div>
          <li v-for="item in experience.items">{{item.item}}</li>
        </div>
      </div>
      <div class="skills">
        <div class="title">
          <span class="title-red">专业</span>技能
          <div class="title-l"></div>
        </div>
        <div class="skill" v-for="skill in skills">
          <span>{{skill.name}}</span>
          <li v-for="content in skill.content" v-html="content.title">{{content.title}}</li>
        </div>
      
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/white.css";

export default {
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
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.title {
  float: left;
  width: 100%;
  text-align: left;
}
.phone {
  display: block;
}
</style>