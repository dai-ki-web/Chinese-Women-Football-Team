<template>
  <div class="history" id="history">
    <div class="title">
      <img src="../../assets/images/title2.png" class="titleimg" />
    </div>
    <div>
      <div class="hisNav">
        <el-button type="text"><a href="#1">蹴鞠渊源</a> </el-button>
        <el-button type="text"><a href="#2">历届赛事</a></el-button>
        <el-button type="text"><a href="#3">队员分布</a></el-button>
        <el-button type="text"><a href="#4">服役年限</a></el-button>
        <el-button type="text"><a href="#5">历任主帅</a></el-button>
      </div>
    </div>

    <section class="section" id="1">
      <div class="his-image">
      <marquee direction="up">
        <p>在历史上，足球在中国以“蹴鞠”之名出现。中国古代女子不仅爱好琴棋书画，也同样喜欢蹴鞠、捶丸、马球。</p>
        <p><span class="white">早在汉代，中国女子蹴鞠运动就有记载。</span>河南南阳汉画像石系列中有三块“女子蹴鞠”画像石，画面中梳着高髻，长袖舒展，英姿飒爽的女子正在进行蹴鞠运动。</p>
        <p><span
            class="white">宋代是女子蹴鞠运动鼎盛之时</span>，从皇宫贵族到平民百姓无不热爱这项体育运动。据宋末元初时期马端临的《文献通考》记载：当时女子蹴鞠队中“女弟子队153人，衣四色，绣罗宽衫，系锦带，踢绣球，球不离足，足不离球，华庭观赏，万人瞻仰。”
        </p>
        <p>南京博物院收藏着一堂十二扇明代巨型木胎屏风——《黑漆彩螺钿仕女游艺图屏风》，上面的园林仕女图中描绘着一群贵家妇女正在园内进行蹴鞠等游乐活动，是当时上层妇女悠游行乐的真实图景。</p>
      </marquee>
      </div>
    </section>
    <div class="img-tip" style="color: #c6ae5a;">
      <p>《仕女蹴鞠图》来源|上海博物馆官网</p>
      <el-divider></el-divider>
    </div>

    <!-- <div class="image">
      <el-image :src="img20" fit="contain" lazy></el-image>
    </div> -->

    <section class="section" id="2">
      <div style="height: 50px;"></div>
      <p><span class="red">上世纪20年代</span>，穿过历史风云，千年后的上海出现了<span class="red">中国第一支现代女子足球队</span>。</p>
      <p>1978年改革开放后，女足星星之火首先在云南、陕西、辽宁等地燃起；1981年，在云南楚雄举办了<span class="red">第一次全国女子足球比赛</span>。</p>
      <p>1982年，中国开始举办女足业余队比赛，一年后开始进行国际交流。</p>
      <p><span class="red">1984年，中国女足国家队正式成立。</span>一代铿锵玫瑰，正式拉开了时代的帷幕。</p>
      <p>仅两年之后的<span class="red">1986年</span>，中国女足就以全部比赛零封对手的战绩拿到了<span class="red">第一个女足亚洲杯冠军</span>。</p>
      <p><span class="red">2022年</span>，“铿锵玫瑰”们再一次登上亚洲之巅。这已经是女足建队近40年以来第9次在女足亚洲杯赛场上荣膺桂冠。</p>
    </section>
    <iframe src='https://flo.uri.sh/visualisation/10708753/embed' title='Interactive or visual content'
      class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;'
      sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
    <div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit'
        href='https://public.flourish.studio/visualisation/10708753/?utm_source=embed&utm_campaign=visualisation/10708753'
        target='_top' style='text-decoration:none!important'><img alt='Made with Flourish'
          src='https://public.flourish.studio/resources/made_with_flourish.svg'
          style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>
    <section class="section" id="3">
      <p>回首40年峥嵘岁月，中国女足曾荣登亚洲之巅，也曾距离奥运会冠军仅一步之遥。</p>
      <p>建队之初，中国女足势如破竹，连续拿下数个亚洲杯和亚运会的冠军，这支铁血之师也被国人冠以了“铿锵玫瑰”的称号。</p>
      <p>2006年，中国女足世界排名上升到了第4名，这是史上最好成绩。</p>
      <p>2008年取得亚洲杯冠军之后，中国女足进入了长达10多年的低谷期。不仅无缘冠军，甚至频频在半决赛、四分之一决赛折戟。2019年世界杯仅仅拿到了第16名的成绩。</p>
      <p>从巅峰落到低谷，再重整士气厚积薄发，2022年的亚洲杯冠军，中国女足等了14年。</p>
    </section>
    <div class="dy-chart">
      <iframe src="https://dycharts.com/xshow/index.html?id=c_804811485c5ab015d5f69ee7c969c93a" width="100%"
       height=900 scrolling="no" frameborder="0" align=""></iframe>
    </div>
    <section class="section" id="4">
      <p>
        中国女足国家队历届球员的来源地以辽宁、上海、北京、江苏、广州、山东、河北、吉林、湖南、四川等省份为主，<span
          class="red">主要集中在东部地区</span>。其中，辽宁以历史球员共计28人的数量“一骑绝尘”，<span
          class="red">成为中国女足最大的人才输送来源地</span>。2022年亚洲杯中，辽宁培养的高晨、朱钰及王妍雯等优秀的女足运动员表现出色，本届亚洲杯MVP王珊珊此前也在大连女足效力多个赛季。
      </p>
      <p>
        辽宁足球曾经成绩出色，为国家队输送了大量的球员，是因为这里有全国最好的青训。如今，尽管辽宁青训已经不能算得上是国内一流的水平，但辽宁足球的底蕴为中国女足留下了扎实的根基。当前，辽宁打出<span
          class="red">“足球振兴，女足先行”</span>的口号，以打造省属女足职业队为龙头，完善构建各级女足梯队，全新组建了2007/08和20/10两个年龄段的精英队伍，精耕女足培养，打造女足名片。
      </p>
    </section>
    <iframe src="https://dycharts.com/xshow/index.html?id=c_cc30adb051ed1c6dd2eb4f809be24140" width="100%" height="700"
      scrolling="no" frameborder="0" align=""></iframe>

    <section class="section" id="5">
      <p>1986年至今，各大国际赛事公布的大名单中，<span class="red">共计155名中国女足运动员</span>。除去26位现役运动员外，中国女足国家队运动员在国家队的<span
          class="red">平均服役年限为6.395年</span>。其中，服役3年及以下的有38人，服役3-10年的有68人，服役10年以上的有23人。</p>
      <p><span class="red">运动员的年龄状况</span>可以反映一支球队的竞技水平、人才储备和发展状况，是决定一个运动项目持续稳定发展的重要因素。</p>
      <p>世界高水平女足国家队的平均年龄一般保持在<span class="red">23-25岁之间</span>，如2003年女足世界杯参赛队员的平均年龄为24.89岁，2007年女足世界杯参赛队员的平均年龄为24.91岁，2011年女足世界杯参赛队员的平均年龄为24.52岁。2011年女足世界杯冠军日本队的运动员平均年龄为25.24岁，说明日本队的运动员在相对高龄的状况下保持着良好的竞技状态，同时兼具大赛经验。</p>
      <p>我国女足国家队运动员的平均年龄近年来保持在<span class="red">23岁左右</span>，相对较小的平均年龄说明我国女足国家队运动员中“老将”稀缺，整体<span class="red">大赛经验和能力欠缺</span>。为国家队运动员提供更好的联赛环境和保护机制，以<span class="red">延长优秀运动员的服役年限</span>，<span class="red">优化国家队年龄结构</span>，是提升中国女足大赛成绩的关键之一。</p>
    </section>
    <iframe src='https://flo.uri.sh/visualisation/10711261/embed' title='Interactive or visual content'
      class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:900px;'
      sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
    <div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit'
        href='https://public.flourish.studio/visualisation/10711261/?utm_source=embed&utm_campaign=visualisation/10711261'
        target='_top' style='text-decoration:none!important'><img alt='Made with Flourish'
          src='https://public.flourish.studio/resources/made_with_flourish.svg'
          style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>
    <section class="section">
      <p>1984年初建中国女足时的主教练丛者余，是中国女足的“奠基人“。在他的带领下，年轻的中国女足国家队涌现出钟红莲、水庆霞、牛丽杰等一大批有特点的出色球员。
        1986年，丛者余带领中国女足夺得第六届亚洲杯冠军，那不仅是中国女足第一次在洲际比赛中获得冠军，也是中国足球获得的第一座洲际冠军奖杯，是一个标志性的起点。他是中国女足不折不扣的“缔造者”。</p>
      <p>
        女足最辉煌时期的主帅是马元安，“铿锵玫瑰”从那个时代开始真正成为了中国女足的代称。马元安从1992年到2001年带队，在九年间将男子足球的技战术元素注入女子足球，拿到了奥运会和世界杯的双亚军成绩，使女足逐渐走入了国人的视野中。他堪称中国女足的“教父”。
      </p>
      <p>从2002年开始，中国女足主帅频繁更迭。</p>
      <p>2007年，瑞典人多曼斯基上任，这是<span class="red">中国女足首位外籍主帅</span>，但仅仅7个月后就离任。之后，女足还有过两任外籍教练，执教时间均不长。</p>
      <p>2021年，<span
          class="red">中国女足首位本土女性主教练</span>水庆霞上任，她是90年代丛者余教练的得意门生，是当时中国女足的主力队员之一。在她之前，女足主教练以男性为主，只有多曼斯基和伊丽莎白两位外籍主帅是女性。
      </p>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        img20: require("@/assets/images/20.png"),
        football: require("@/assets/images/football.svg")
      }
    }
  }
</script>
