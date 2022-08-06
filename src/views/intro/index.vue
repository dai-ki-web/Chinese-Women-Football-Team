<template>
  <div class="intro" id="intro">
    <div >
      <div style="height: 140px; background-color: #396836;"></div>
      <div class="title liner">
        <img src="../../assets/images/title1.png" class="titleimg" />
      </div>
      <div style="height: 140px; background-color: #507b40;"></div>
      <div class="image">
        <el-image :src="img6" fit="contain" lazy></el-image>
      </div>

    </div>
    <section class="section">
      <p>2022年2月6日，时隔十四年重返亚洲杯决赛的中国女足，在印度新孟买的DY Patil体育场与韩国女足展开较量。中国队在落后两球的不利情况下连扳三球，最终3∶2逆转击败韩国队获得冠军。
        十六载蛰伏，一举问鼎亚洲之巅，中国女足收获了<span class="red">历史上第九个亚洲杯冠军</span>。
        女足姑娘们一点一滴的汗水化作露珠，浇灌着铿锵玫瑰再一次绽放。</p>
    </section>
    <div class="image">
      <el-image :src="img7" fit="contain" lazy></el-image>
    </div>
    <section class="section">
      <p>在本场比赛中，中国队<span class="red">多项数据占优</span>：全场近60%的控球率，14次射门比对手韩国队多出3次， 6次射正也同样领先对手。</p>
      <p>这场女足亚洲杯决赛的<span class="red">收视率数据同样亮眼</span>：中韩大战的收视率创历史新高地达到了2.44%。肖裕仪完成绝杀的巅峰时刻，共3745万人同时观看，收视率高达2.2%，<span class="red">排名全国第一</span>。中国女足在本次大赛中得到了前所未有的关注。</p>
    </section>
    <!-- 电视 -->
    <div class="image">
      <el-image :src="img8" fit="contain" lazy></el-image>
    </div>
    <section class="section">
      <p>
        1986年，中国女足首次参加女足亚洲杯就在决赛中2:0击败日本队，一举拿下冠军。自此便开创了中国女足在该项赛事上的辉煌历史：从1986年到1999年共七届亚洲杯，<span class="red">中国女足连夺七次冠军</span>，成为上世纪八九十年代绝对的亚洲女足霸主。如今，第9个亚洲杯冠军振奋人心，标志着中国女足在21世纪初的沉寂过后<span class="red">重返冠军之路</span>。
      </p>
      <p>本届亚洲杯中国队共由7名球员打进19粒进球，分别是3名前锋：王霜、王珊珊和张琳艳和4名中场唐佳丽、张馨、肖裕仪和吴舒澄。</p>
      <p>
        其中，前锋进球数占总进球数的57.9%。球员王姗姗的5个进球中有3个是在小组赛阶段打进的。与此同时，她还当选2022亚洲杯MVP。王霜打入的5个进球，4个进球来自小组赛对面中的中国台北和伊朗队的比赛，还有1个进球则是1/4决赛对阵越南的进球，起到了关键作用。王霜和王珊珊充分展现了中国队的进攻优势，承担了中国队的得分责任，充分完成了“前锋”的得分任务。
      </p>
      <p>中国女足<span class="red">前锋队员的优异表现</span>和<span class="red">整支队伍的集体组织与有序合作</span>，为中国队在本届女足亚洲杯上一举夺冠奠定了良好的基础。</p>
    </section>
    <div class="image">
      <el-image :src="img10" fit="contain" lazy></el-image>
    </div>
    <marquee behavior="scroll" direction="left" align="center" scrollamount="50">
      <img src="../../assets/images/11.jpeg" class="img_marquee">
      <img src="../../assets/images/12.jpeg" class="img_marquee">
      <img src="../../assets/images/13.jpeg" class="img_marquee">
      <img src="../../assets/images/14.jpeg" class="img_marquee">
      <img src="../../assets/images/15.jpeg" class="img_marquee">
      <img src="../../assets/images/16.jpeg" class="img_marquee">
      <img src="../../assets/images/17.jpeg" class="img_marquee">
      <img src="../../assets/images/18.jpeg" class="img_marquee">
      <img src="../../assets/images/19.jpeg" class="img_marquee">
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
