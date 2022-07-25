<template>
  <div class="problem" id="problem">
    <div class="liner-title">
      <div class="title" style="color: #fff;">
        <el-image :src="football"></el-image>
        <h2><span>女足困境</span>——现状与未来，振兴之路何方</h2>
      </div>
      <div>
        <div>
          <p>中国女足夺冠的消息传来后</p>
          <p>女足收获了多年未有的热度</p>
        </div>
        <div>
          <p>然而就像水庆霞在赛后接受采访时所说</p>
          <p>“夺冠并不是一个多么了不起的记录。”</p>
        </div>
        <div>
          <p>跌跌撞撞之中，中国女足已经走过快40年</p>
          <p>获得无数奖项，留下不少遗憾</p>
          <p>靠一场胜利、一个冠军头衔重回巅峰的想法</p>
          <p>并不现实</p>
        </div>
        <div>
          <p>2022年女足亚洲杯夺冠的光鲜背后</p>
          <p>中国女足仍面临诸多问题与困境</p>
          <p>制约着国家队的持续健康发展</p>
        </div>
        <p>......</p>
      </div>
      <div>导航</div>

    </div>
    <!-- a -->
    <div>
      <div class="sub-title">
        <h3>选才困境：国家队征召球员局限，俱乐部输送人才无力</h3>
      </div>
      <section class="section">
        <p>中国女足国家队现役球员（共23人）中，来自武汉车谷江大女足和上海农商银行女足2支队伍的球员占比约70%（共15人）。相比之下，其他省市俱乐部被征召的球员凤毛麟角。</p>
      </section>
      <div>图片</div>
      <section class="section">
        <p>中国女足国家队选才范围小且难度大，国内联赛俱乐部难以长期、稳定地为国家队输送优秀球员。在未来，该困境所导致的人才断层问题，将影响周期性大赛成绩和国家队持续发展。</p>
      </section>
      <el-divider></el-divider>
    </div>
    <!-- b -->
    <div>
      <div class="sub-title">
        <h3>成长困境：俱乐部状态不稳定，联赛球员流动频繁</h3>
      </div>
      <section class="section">
        <p>中国女足国家队现役球员（共23人）中，有11人（均在2022年女足亚洲杯淘汰赛中首发上场，为国家队主力球员）在近3年内进行过俱乐部转会。</p>
        <p>目前国内女足顶级联赛（中国女足超级联赛）中，60%的俱乐部建队时间不超过5年，70%的俱乐部在5年内更换过主赞助商。</p>
      </section>
      <div>图片</div>
      <section class="section">
        <p>中国女足国家队球员在国内联赛中流动频繁，其所在俱乐部状态不稳定且环境欠佳。这将直接影响国家队球员在日常比赛和训练中的出场时间和竞技状态，很难实现快速成长以提升国家队整体实力。</p>
      </section>
      <el-divider></el-divider>
    </div>
    <!-- c -->
    <div>
      <div class="sub-title">
        <h3>关注困境：球迷观赛动机较弱，忠诚度和持续性差</h3>
      </div>
      <section class="section">
        <p>近5年，中国女足关注度整体小于中国男足，女足赛事热度骤升骤降的情况较为普遍。女足球迷的性别分布差异大（男多女少）且地域分布不均衡（主要来自北京、上海等一线城市，其他省市球迷较少）。</p>
      </section>
      <div>图片</div>
      <section class="section">
        <p>
          观赛动机弱和关注度不稳定不均衡的状态，是我国女足球迷忠诚度和持续性差的体现。在女足赛事本身观赏度不高，女足俱乐部品牌文化欠缺的背景下，女足国家队和国内联赛难以建立忠实的球迷群体和稳固的群众基础。这将导致女足发展地位和资源配置长期处于男足从属地位，影响中国女足长足发展。
        </p>
      </section>
      <el-divider></el-divider>
    </div>
    <div class="liner-end">
      <div>
        <div>
          <p>费心寻找金凤凰</p>
          <p>不如栽好梧桐树</p>
        </div>
        <div>
          <p>中国女足面临的困境，根植于我国足球体制与文化土壤</p>
          <p>唯有在球员成长、联赛环境和群众基础等底层问题上下功夫</p>
        </div>
        <div>
          <p>才能孕育一代又一代的铿锵玫瑰</p>
          <p>遇见不远未来的风雨彩虹</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        football: require("@/assets/images/football.svg")
      }
    }
  }
</script>
