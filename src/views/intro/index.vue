<template>
  <div class="intro" id="intro">
    <div >
      <div style="height: 140px; background-color: #3a672c;"></div>
      <div class="title liner">
        <img src="../../assets/images/title1.png" class="titleimg" />
      </div>
      <div class="image">
        <el-image :src="img6" fit="contain" lazy></el-image>
      </div>

    </div>
    <section class="section">
      <p>2022年2月6日，时隔十四年重返亚洲杯决赛的中国女足，在印度新孟买的DY Patil体育场与韩国女足展开较量。中国队在落后两球的不利情况下连扳三球，最终3∶2逆转击败韩国队获得冠军。
        十六载蛰伏，一举问鼎亚洲之巅，中国女足收获了<span class="red">历史上第九个亚洲杯冠军</span>。
        女足姑娘们一点一滴的汗水化作露珠，浇灌着铿锵玫瑰再一次绽放。</p>
      <p>在本场比赛中，中国队<span class="red">多项数据占优</span>：全场近60%的控球率，14次射门比对手韩国队多出3次， 6次射正也同样领先对手。</p>
    </section>
    <div class="image">
      <el-image :src="img7" fit="contain" lazy></el-image>
    </div>
    <section class="section">
      <p>这场女足亚洲杯决赛的<span class="red">收视率数据同样亮眼</span>：中韩大战的收视率创历史新高地达到了2.44%。肖裕仪完成绝杀的巅峰时刻，共3745万人同时观看，收视率高达2.2%，排名全国第一。中国女足在本次大赛中得到了前所未有的关注。</p>
    </section>
    <!-- 电视 -->
    <div class="image">
      <el-image :src="img8" fit="contain" lazy></el-image>
    </div>
    <section class="section">
      <p>1986年，中国女足首次参加女足亚洲杯就在决赛中2:0击败日本队，一举拿下冠军。自此便开创了中国女足在该项赛事上的辉煌历史：从1986年到1999年共七届亚洲杯，中国女足连夺七次冠军，成为上世纪八九十年代绝对的亚洲女足霸主。
      </p>
      <p>如今，第九个亚洲杯冠军再次振奋人心！九座沉甸甸的奖杯，姑娘们一次次的奋勇拼搏，都将永远镌刻在中国足球的历史上。</p>
    </section>
    <div class="image">
      <el-image :src="img10" fit="contain" lazy></el-image>
    </div>
    <marquee behavior="scroll" direction="left" align="center" scrollamount="50">
      <img src="../../assets/images/11.jpeg" >
      <img src="../../assets/images/12.jpeg" >
      <img src="../../assets/images/13.jpeg" >
      <img src="../../assets/images/14.jpeg" >
      <img src="../../assets/images/15.jpeg" >
      <img src="../../assets/images/16.jpeg" >
      <img src="../../assets/images/17.jpeg" >
      <img src="../../assets/images/18.jpeg" >
      <img src="../../assets/images/19.jpeg" >
    </marquee>
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
        img10: require('@/assets/images/10.png')
      }
    }
  }
</script>
