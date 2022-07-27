<template>
  <div style="position: relative;overflow: hidden;">
    <div id="index" class="index clearfix">

      <div class="content">
        <div class="deep">
          <p> 灵巧盘带，她们翩翩闪耀绿茵舞台</p>
          <p>
            精准传球，她们撕破对手重重防线
          </p>
        </div>
        <div class="light">
          <p>大力射门，她们硬朗诠释暴力美学</p>
          <p>
            逆转绝杀，她们一如既往奔跑向前
          </p>
        </div>
        <div class="deep">
          <p>女足姑娘们用足球书写誓言：</p>
          <p>
            铿锵玫瑰沐风雨，谁说巾帼不如男？
          </p>
        </div>
        <div class="light big">
          <p>浮沉过后，
            汗水和泪水比花瓣更沉，
            胜利的笑容似露珠般甜</p>
        </div>
      </div>

    </div>
    <div class="headImg">
      <el-image :src="img" fit="contain"></el-image>
      <el-image :src="img" fit="contain"></el-image>
      <el-image :src="img" fit="contain"></el-image>
      <el-image :src="img" fit="contain"></el-image>
      <el-image :src="img" fit="contain"></el-image>
      <el-image :src="img" fit="contain"></el-image>
      <!--<el-image :src="gif5" fit="contain"></el-image>
      <el-image :src="gif4" fit="contain"></el-image>
      <el-image :src="gif3" fit="contain"></el-image>
      <el-image :src="gif2" fit="contain"></el-image>
      <el-image :src="gif1" fit="contain"></el-image> -->
    </div>
  </div>
</template>
<script>
  export default {
    name: "indexPage",
    data() {
      return {
        img: require("@/assets/images/part1.webp")
        // gif5: require("@/assets/images/5.GIF"),
        // gif4: require("@/assets/images/4.GIF"),
        // gif3: require("@/assets/images/3.GIF"),
        // gif2: require("@/assets/images/2.GIF"),
        // gif1: require("@/assets/images/1.GIF")
      }
    }
  }
</script>
