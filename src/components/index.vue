<!--  -->
<template>
  <el-row>
    <el-col class="no-print" :span="4">
      姓名:
      <input v-model="name" type="text" />
      <br />工作:
      <input v-model="work" type="text" />
      <hr />
      <div v-for="info in infos">
        <span>{{info.text}}:</span>
        <input v-model="info.content" type="text" />
      </div>
      <hr />学校:
      <input v-model="education.school" type="text" />
      <br />时间:
      <input v-model="education.year" type="text" />
      <br />专业:
      <input v-model="education.speciality" type="text" />
      <div v-for="experience in experiences">
        公司：
        <input v-model="experience.company" type="text" />
        时间：
        <input v-model="experience.year" type="text" />
        项目：
        <input v-model="experience.item" type="text" />
        任务：
        <input v-model="task.task" v-for="task in experience.tasks" type="text" />
        <button @click="add_task(experience.tasks)" type="button">加任务</button>
      </div>
      <button @click="add_experience" type="button">加公司经历</button>
    </el-col>
    <el-col class="print" :span="20">
      <Right
        :fields="fields"
        :infos="infos"
        :education="education"
        :name="name"
        :work="work"
        :experiences="experiences"
      />
    </el-col>
  </el-row>
</template>

<script>
import Right from "@/components/right";
import "@/assets/resume.css";

export default {
  data() {
    return {
      name: "叶晓剑",
      work: "前端工程师",
      fields: [
        { name: "id", text: "id", content: "1" },
        { name: "name", text: "姓名", content: "zhangsan" },
        { name: "age", text: "年龄", content: "18" }
      ],
      infos: [
        {
          name: "phone",
          text: "手机",
          content: "15057466399",
          icon: "el-icon-mobile-phone"
        },
        {
          name: "mail",
          text: "邮箱",
          content: "moking1997@outlook.com",
          icon: "el-icon-message"
        },

        {
          name: "github",
          text: "github",
          content: "https://github.com/Moking1997/",
          icon: "el-icon-user"
        },
        {
          name: "blog",
          text: "博客",
          content: "https://moking1997.github.io/",
          icon: "el-icon-location"
        },
        {
          name: "resume",
          text: "简历",
          content: "https://moking1997.github.io/",
          icon: "el-icon-trophy"
        }
      ],
      education: {
        year: "2016-2020",
        school: "宁波大学科学技术学院",
        speciality: "计算机科学与技术"
      },
      experiences: [
        {
          company: "xx公司",
          name: "xxx",
          year: "2016-2017",
          item: "xx项目",
          tasks: [{ task: "xx任务" }, { task: "xx任务" }]
        },
        {
          company: "xx公司",
          name: "xxx",
          year: "2016-2017",
          item: "xx项目",
          tasks: [{ task: "xx任务" }, { task: "xx任务" }]
        }
      ]
    };
  },
  components: {
    Right
  },
  methods: {
    add_experience: function() {
      var experience = {
        company: "xx公司",
        name: "xxx",
        year: "2016-2017",
        item: "xx项目",
        tasks: [{ task: "xx任务" }, { task: "xx任务" }]
      };
      this.experiences.push(experience);
    },
    add_task: function(tasks) {
      var task = {
        task: "xx任务"
      };
      tasks.push(task);
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
@media print {
  .no-print {
    display: none;
  }
  .print {
    width: 970px;
  }
  html * {
    color: #111 !important ;
  }
}
</style>