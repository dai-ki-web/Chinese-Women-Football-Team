<template>
  <div style="position: relative;overflow: hidden;" class="clearfix">
    <div id="index" class="index ">
      <div class="content">
        <div class="deep">
          <p> 灵巧盘带，她们翩翩闪耀绿茵舞台；</p>
          <p>
            精准传球，她们撕破对手重重防线；
          </p>
        </div>
        <div class="light">
          <p>大力射门，她们硬朗诠释暴力美学；</p>
          <p>
            逆转绝杀，她们一如既往奔跑向前。
          </p>
        </div>
        <div class="deep">
          <p>被冠以「铿锵玫瑰」称谓的20年，</p>
          <p>
            中国女足饱经风雨，尝尽沉浮
          </p>
        </div>
        <div class="light" style="line-height: 40px">
          <p>从亚洲之巅、世界第二到跌落谷底，</p>
          <p>
            再到2022涅槃夺冠
          </p>
        </div>
        <div class="deep">
          <p> 隐藏在成绩背后的</p>
          <p>
            是人才选拔、联赛模式、青训机制</p>
          <p>等一系列发展中面临的问题</p>
        </div>
        <div class="light">
          <p>与男足相比，</p>
          <p>
            女足职业球员少、发展路径窄、
          </p>
          <p>受关注度低，困境更多，压力更大</p>
        </div>
        <div class="deep">
          <p>四十年峥嵘岁月，</p>
          <p>
            如今再一次登顶亚洲的女足希望与挑战兼备，</p>
          <p>危机与机遇并存</p>
        </div>
        <div class="light" style="line-height: 40px">
          <p>风雨彩虹，铿锵玫瑰。</p>
          <p>
            忆往昔岁月，峥嵘巾帼盖须眉；
          </p>
        </div>
        <div class="deep" style="line-height: 40px">
          <p>望漫漫前路，光明灿烂犹可盼。</p>
          <p>
            2022，四十年中国女足再出发。
          </p>
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
