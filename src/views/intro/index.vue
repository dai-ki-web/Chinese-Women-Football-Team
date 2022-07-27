<template>
  <div class="intro" id="intro">
    <div class="liner">
      <div style="height: 300px;"></div>
      <div class="title">
        <el-image :src="football"></el-image>
        <h2><span>新闻引入</span>——十四载等待，问鼎亚洲之巅</h2>
      </div>
      <div class="image">
        <el-image :src="img6" fit="contain" lazy></el-image>
      </div>

    </div>
    <section class="section">
      <p>2022年2月6日，时隔十六年重返亚洲杯决赛的中国女足，在印度新孟买的DY Patil体育场与韩国女足展开较量。中国队在落后两球的不利情况下连扳三球，最终3∶2逆转击败韩国队。
        十六载蛰伏，一举问鼎亚洲之巅，中国女足收获了历史上第九个亚洲杯冠军。
        女足姑娘们一点一滴的汗水化作露珠，浇灌着铿锵玫瑰再一次绽放。</p>
      <p>在本场比赛中，中国队多项数据占优：全场近60%的控球率，14次射门比对手韩国队多出3次， 6次射正也同样领先对手。</p>
    </section>
    <div class="image">
      <el-image :src="img7" fit="contain" lazy></el-image>
    </div>
    <section class="section">
      <p>这场女足亚洲杯决赛的收视率数据同样亮眼：中韩大战的收视率创历史新高地达到了2.44%。肖裕仪完成绝杀的巅峰时刻，共3745万人同时观看，收视率高达2.2%，排名全国第一。中国女足在本次大赛中得到了前所未有的关注。</p>
    </section>
    <!-- 电视 -->
    <div class="image">
      <el-image :src="img8" fit="contain" lazy></el-image>
    </div>
    <section class="section">
      <p>1986年，中国女足首次参加女足亚洲杯就在决赛中2:0击败日本队，一举拿下冠军。自此便开创了中国女足在该项赛事上的辉煌历史：从1986年到1999年共七届亚洲杯，中国女足连夺七次冠军。
      </p>
      <p>如今，第九个亚洲杯冠军再次振奋人心！九座沉甸甸的奖杯，姑娘们一次次的奋勇拼搏，都将永远镌刻在中国足球的历史上。</p>
    </section>
    <div class="image">
      <el-image :src="img10" fit="contain" lazy></el-image>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        football: require("@/assets/images/football.svg"),
        img6: require('@/assets/images/6.jpeg'),
        img7: require('@/assets/images/7.jpeg'),
        img8: require('@/assets/images/8.jpg'),
        img10: require('@/assets/images/10.jpeg')
      }
    }
  }
</script>
