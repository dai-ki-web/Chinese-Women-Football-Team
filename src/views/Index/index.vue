<template>
  <div style="position: relative;overflow: hidden;" class="clearfix">
    <div id="index" class="index ">
      <div class="content">
        <div class="deep">
          <p>被冠以「铿锵玫瑰」称谓的20年</p>
          <p>
            中国女足饱经风雨，尝尽沉浮
          </p>
        </div>
        <div class="light">
          <p>从世界第二跌落谷底</p>
          <p>
            如今涅槃重回亚洲之巅
          </p>
        </div>
        <div class="deep">
          <p>隐藏在成绩背后的</p>
          <p>
            是比赛训练、人才选拔、球迷关注等一系列问题
          </p>
        </div>
        <div class="light">
          <p>希望与困境兼具，机遇和挑战并存</p>
          <p>
            忆往昔岁月，峥嵘巾帼盖须眉
          </p>
        </div>
        <div class="deep">
          <p>望漫漫前路，光明灿烂犹可盼</p>
          <p>
           2022，四十年中国女足再出发</p>
        </div>
      </div>
    </div>
    <div class="headImg">
      <el-image :src="gif5" fit="content"></el-image>
      <el-image :src="gif4" fit="content"></el-image>
      <el-image :src="gif3" fit="content"></el-image>
      <el-image :src="gif2" fit="content"></el-image>
      <el-image :src="gif1" fit="content"></el-image>
    </div>
    <!-- <div class="light"></div> -->
    <!-- <div>
      <div style=" height: 700px; background-color: #396836;">
        <p></p>
      </div>
    </div> -->
  </div>
</template>
<script>
  export default {
    name: "indexPage",
    data() {
      return {
        gif5: require("@/assets/images/5.gif"),
        gif4: require("@/assets/images/4.gif"),
        gif3: require("@/assets/images/3.gif"),
        gif2: require("@/assets/images/2.gif"),
        gif1: require("@/assets/images/1.gif")
      }
    }
  }
</script>
