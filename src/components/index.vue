<!--  -->
<template>
  <el-row :gutter="20">
    <el-col class="no-print" :span="toggle.editView">
      <el-button type="success">
        <i class="el-icon-user-solid">个人信息</i>
      </el-button>
      <el-input v-model="name" type="text" />
      <br />
      <el-input v-model="work" type="text" />
      <div v-for="info in infos">
        <el-input v-model="info.content" type="text" />
      </div>
      <el-button type="success">
        <i class="el-icon-collection">教育经历</i>
      </el-button>
      <el-input v-model="education.school" type="text" />
      <br />
      <el-input v-model="education.year" type="text" />
      <br />
      <el-input v-model="education.speciality" type="text" />
      <el-button type="success">
        <i class="el-icon-s-marketing">语言水平</i>
      </el-button>
      <br />
      <el-button type="primary" @click="cet4 = !cet4">CET4</el-button>
      <el-button type="primary" @click="cet6 = !cet6">CET6</el-button>

      <el-input v-model="language" type="textarea" :rows="3" />
      <el-button type="success">
        <i class="el-icon-s-cooperation">项目经历</i>
      </el-button>
      <div v-for="experience in experiences">
        <el-input v-model="experience.company" type="text" />
        <el-input v-model="experience.year" type="text" />
        <div class="content" v-for="item in experience.items">
          <el-input v-model="item.item" type="text" />
          <el-input
            type="textarea"
            :rows="2"
            v-model="task.task"
            v-for="task in item.tasks"
            cols="40"
          />
          <el-button type="primary" @click="addTask(item.tasks)">加任务</el-button>
        </div>
        <el-button type="primary" @click="addItem(experience.items)">加项目</el-button>
      </div>
      <el-button type="primary" @click="addExperience">加公司经历</el-button>
      <hr />
      <el-button type="success">
        <i class="el-icon-s-cooperation">技能</i>
      </el-button>

      <div v-for="skill in skills">
        <el-input v-model="skill.name" type="text" />
        <div class="content" v-for="content in skill.content">
          <el-input v-model="content.title" type="text" />
          <el-input
            type="textarea"
            :rows="2"
            v-model="skill.skill"
            v-for="skill in content.skills"
            cols="40"
          />
          <el-button type="primary" @click="addSkill(content.skills)">加知识点</el-button>
        </div>
        <el-button type="primary" @click="addContent(skill.content)">加技能内容</el-button>
      </div>
      <el-button type="primary" @click="addSkills()">加技能</el-button>
    </el-col>
    <el-col class="print" :span="toggle.resumeView">
      <aside>
        <ul>
          <li>
            <span @click="toggleView()">{{toggle.name}}</span>
          </li>
          <li>
            <span @click="toggleRusume(1)">默认简历</span>
          </li>
          <li>
            <span @click="toggleRusume(2)">红白简历</span>
          </li>
          <li>
            <a href="https://github.com/Moking1997/online-resume" target="_blank">源代码</a>
          </li>
          <li>
            <span @click="getPdf('#pdfDom')">下载PDF</span>
            <!-- <a @click="getPdf('#pdfDom')" href="#" target="_blank">PDF下载</a> -->
          </li>
        </ul>
      </aside>
      <Right
        v-if="resume === 1"
        id="pdfDom"
        :language="language"
        :infos="infos"
        :education="education"
        :name="name"
        :work="work"
        :experiences="experiences"
        :cet4="cet4"
        :cet6="cet6"
        :skills="skills"
      />
      <White
        v-if="resume === 2"
        id="pdfDom"
        :language="language"
        :infos="infos"
        :education="education"
        :name="name"
        :work="work"
        :experiences="experiences"
        :cet4="cet4"
        :cet6="cet6"
        :skills="skills"
      />
    </el-col>
  </el-row>
</template>

<script>
import Right from "@/components/right";
import White from "@/components/white";

export default {
  data() {
    return {
      resume: 1,
      toggle: {
        name: "预览",
        view: false,
        resumeView: 14,
        editView: 6
      },
      htmlTitle: "我的个人简历",
      name: "叶小小",
      work: "前端工程师",
      cet4: false,
      cet6: false,
      language:
        "能较为流畅的阅读开发文档及其他资料<br>能正常使用Google与Stack Overflow解决开发问题",
      infos: [
        {
          name: "phone",
          text: "手机",
          content: "15057466xxx",
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
          content: "请输入自己所需",
          icon: "el-icon-user"
        },
        {
          name: "blog",
          text: "博客",
          content: "请输入自己所需",
          icon: "el-icon-location"
        },
        {
          name: "resume",
          text: "简历",
          content: "请输入自己所需",
          icon: "el-icon-trophy"
        }
      ],
      education: {
        year: "2016-2020",
        school: "xx大学",
        speciality: "计算机科学与技术"
      },
      experiences: [
        {
          company: "杏树林信息技术有限公司",
          year: "2016-2017",
          items: [
            {
              item: "商业前台服务（2017 — 2018）",
              tasks: [
                {
                  task:
                    "<strong>&nbsp;前后端分离</strong>项目的前端, node主要用于返回页面"
                },
                {
                  task:
                    " 将项目拆分为多页面应用, 使用<strong>webpack4</strong>打包"
                }
              ]
            }
          ]
        }
      ],
      skills: [
        {
          name: "Web后端",
          content: [
            {
              title: "Node.js",
              skills: [
                {
                  skill:
                    "  能使用<strong>Koa2/Express/egg</strong> 等框架独立搭建后端服务,"
                },
                {
                  skill:
                    " 能开发项目组日常使用中间件/工具包等, 并发布至私有npm仓库"
                },
                {
                  skill: "  能配合<strong>MySql + knex</strong> 完成 CRUD"
                }
              ]
            }
          ]
        },
        {
          name: "Web前端",
          content: [
            {
              title: "HTML/CSS",
              skills: [
                {
                  skill:
                    " 能够编写语义化的<strong>HTML</strong> ，熟悉<strong>CSS</strong>的使用，实现常用的布局与动画"
                },
                {
                  skill:
                    " 了解<strong>HTML5/CSS3</strong> ，能熟练使用部分新特性"
                },
                {
                  skill:
                    "  熟悉<strong>异步编程, 跨源资源共享</strong>, 掌握常见的解决方案及原理"
                }
              ]
            }
          ]
        },
        {
          name: "其它",
          content: [
            {
              title: "个人项目",
              skills: [
                {
                  skill: " 在线简历编辑"
                }
              ]
            },
            {
              title: "工具使用",
              skills: [
                {
                  skill:
                    "   日常使用 <strong>Webstorm / VSCode</strong> 进行开发"
                },
                {
                  skill:
                    "   熟练使用<strong>Git</strong> 代码管理与团队协作工具"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  components: {
    Right,
    White
  },
  methods: {
    toggleRusume: function(num) {
      this.resume = num;
    },
    addExperience: function() {
      let experience = {
        company: "xx公司",
        name: "xxx",
        year: "2016-2017",
        items: [{ item: "xx项目", tasks: [{ task: "xx任务" }] }]
      };
      this.experiences.push(experience);
    },
    addItem: function(items) {
      let item = {
        item: "xx项目",
        tasks: [{ task: "xx任务" }]
      };
      items.push(item);
    },
    addTask: function(tasks) {
      let task = {
        task: "xx任务"
      };
      tasks.push(task);
    },
    addSkills: function() {
      let skill = {
        name: "xx方面",
        content: [{ title: "xx技能", skills: [{ skill: "xx任务" }] }]
      };
      this.skills.push(skill);
    },
    addContent: function(content) {
      let item = { title: "xx技能", skills: [{ skill: "xx知识点" }] };
      content.push(item);
    },
    addSkill: function(skills) {
      let skill = {
        skill: "xx知识点"
      };
      skills.push(skill);
    },
    toggleView: function() {
      if (this.toggle.view) {
        this.toggle.resumeView = 14;
        this.toggle.editView = 6;
        this.toggle.name = "预览";
      } else {
        this.toggle.resumeView = 24;
        this.toggle.editView = 0;
        this.toggle.name = "编辑";
      }
      this.toggle.view = !this.toggle.view;
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
    width: 972px;
  }
  html * {
    color: #111 !important ;
  }
}
</style>