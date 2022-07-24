<template>
  <div>
    <el-menu :default-active="activeIndex" mode="horizontal">
      <el-menu-item v-for="item in menu" :key="item.index" :index="item.index" @click="clickItem(item.index)">
        <a :href="`#${item.index}`" :ref="item.index">{{item.label}}</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: 'index',
        menu: [{
          index: 'index',
          label: "首页"
        },
        {
          index: 'intro',
          label: "新闻引入"
        },
        {
          index: 'history',
          label: "回溯历史"
        },
        {
          index: 'memory',
          label: "玫瑰记忆"
        },
        {
          index: 'problem',
          label: "女足困境"
        }]
      }
    },
    methods: {
      clickItem(index) {
        this.$refs[index][0].click()
      }
    }
  }
</script>
