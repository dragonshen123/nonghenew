<template>
   <div class="container-fluid" style="margin-left:5%;margin-right:5% " id="detail">
     <div class="row">
       <div class="col col-md-9">
         <div id="myCarousel" class="carousel slide" style="height: 480px;overflow: hidden">
           <!-- 轮播（Carousel）指标 -->
           <ol class="carousel-indicators">
             <li data-target="#myCarousel" v-bind:data-slide-to="key"  v-for="(item, key) in images" ></li>
           </ol>
           <!-- 轮播（Carousel）项目 -->
           <div class="carousel-inner">
             <div  v-bind:class="item.imageClass" v-for="(item, key) in images">
              <img :src="pathUrl+item.imageUrl" v-bind:alt="item.flagStr">

               <div class="carousel-caption"></div>
             </div>
           </div>
           <!-- 轮播（Carousel）导航 -->
           <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
             <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
             <span class="sr-only">Previous</span>
           </a>
           <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
             <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
             <span class="sr-only">Next</span>
           </a>
         </div>
         <div style="margin-top: 20px;line-height: 35px">
           <span v-html="Infromation.informationCentent"></span>
         </div>

         <div style="height: 10px;border-top: 1px ridge silver;border-bottom: 1px ridge silver"></div>
       <div style="height: 50px;border: 1px ridge silver;"><h4 style="padding-top: 9px;padding-left: 13px">发表评论</h4></div>
       <div>
         <h4 style="width: 20%" class="pull-left">我想说两句</h4> <p class="pull-right" style="margin-top: 5px">已有 <a href="#">0</a>条评论</p>
         <textarea type="text" class="form-control" style="height: 200px">  </textarea>
         <p class="btn btn-default pull-right" style="margin-top: 2px">发表评论</p>
       </div>
         <div style="border-top: 1px ridge silver;border-bottom: 1px ridge silver;margin-top: 40px">
         <h4 style="width: 20%" class="pull-left">近期评论</h4><h4 style="width: 7%" class="pull-right"><i class="glyphicon glyphicon-refresh" style="color: silver"></i>&nbsp;刷新</h4>
         <div style="height: auto"></div>
         </div>
       </div>
       <div class="col col-md-3">
         <div style="border: 1px ridge silver">
         <a href="" class="btn btn-default btn-lg" style="border-top: none;border-left: none;border-bottom: none;">补贴政策推荐</a>
         </div>
         <div>
           <ul style="list-style: none;line-height: 45px;font-size: 16px">
           <li><a href="#" v-on:click="create()">农机购置补贴政策  &nbsp;&nbsp;&nbsp;>></a>          </li>
           <li><a href="#">新增农业经营主体倾斜政策  &nbsp;&nbsp;&nbsp;>></a>  </li>
           <li><a href="#">农产品目标价格政策  &nbsp;&nbsp;&nbsp;>></a>        </li>
           <li><a href="#">菜果茶标准化创建支持政策  &nbsp;&nbsp;&nbsp;>></a>  </li>
           <li><a href="#">菜果茶标准化创建支持政策  &nbsp;&nbsp;&nbsp;>></a>  </li>
           <li><a href="#">农业支持保护补贴政策  &nbsp;&nbsp;&nbsp;>></a>      </li>
           <li><a href="#">农资综合补贴政策  &nbsp;&nbsp;&nbsp;>></a>          </li>
           <li><a href="#">小麦、水稻最低收购价政策  &nbsp;&nbsp;&nbsp;>></a>  </li>
           <li><a href="#">产粮(油)大县奖励政策  &nbsp;&nbsp;&nbsp;>></a>      </li>
           <li><a href="#">耕地保护与质量提升补助政策  &nbsp;&nbsp;&nbsp;>></a> </li>
           <li><a href="#">耕地保护与质量提升补助政策  &nbsp;&nbsp;&nbsp;>></a> </li>
           <li><a href="#">设施农用地支持政策 &nbsp;&nbsp;&nbsp;>></a>          </li>
           <li><a href="#">推进现代种业发展支持政策  &nbsp;&nbsp;&nbsp;>></a>   </li>
           <li><a href="#">农产品追溯体系建设支持政策  &nbsp;&nbsp;&nbsp;>></a> </li>
           </ul>
         </div>
         <div style="border: 1px ridge silver">
           <a href="" class="btn btn-default btn-lg" style="border-top: none;border-left: none;border-bottom: none;">近期热点推荐</a>
         </div>
         <div>
           <img src="../../../static/images/detail/redian.png" alt="" class="img-responsive" style="margin-top: 10px">
           <h4 style="line-height: 35px"> <strong>李克强:瞄准人民群众的新需要和不断升级的市场需求着力增品种提品质创品牌</strong></h4>
           <ul style="list-style: none;line-height: 35px;font-size: 16px;padding-left: 10px;margin-top: 10px">
             <li><a href="#">李克强就加强品牌建设作出重要批示强调</a></li>
             <li><a href="#">瞄准人民群众的新需要和不断升级的市场需求</a></li>
             <li><a href="#">着力增品种提品质创品牌</a></li>
             <li><a href="#">胡春华出席2018年中国品牌日有关活动并致辞</a></li>
           </ul>
         </div>
         <div>
           <img src="../../../static/images/detail/redian1.png" alt="" class="img-responsive">
           <h4 style="line-height: 35px"> <strong> 农业农村部调研组赴云南深度贫困地区开展特色农业扶贫调研
           </strong></h4>
           <p style="line-height: 25px">按照农业农村部关于《”三区三州”等深度贫困地区特色农业
             扶贫行动工作方案》的安排，2018年4月11日至17日，农业
             农村部农产品加工局副局长潘利兵率队，深入怒江州泸水市
             和迪庆州维西县开展农业扶贫调研、指导和帮扶工作。</p>
         </div>
       </div>
     </div>
     <div class="row">
       <ul class="list">
         <a href="#"><li class="list-group-item">
           <div class="media">
             <a href="#" class="media-left">
               <img src="../../../static/images/detail/quequan.jpg" alt="媒体对象" class="media-object">
             </a>
             <div class="media-body" style="padding-top: 1%;line-height: 30px;padding-left: 2%">
               <h3 class="media-heading"> 农村土地确权收官在即，这些问题究竟如何解决?</h3>
               <p style="padding-top: 2%">本次农村土地确权是全国统一的，各地都在按照进度进行，如果这次你错过了但是时间又比较久了，最糟糕的办法，就是你可以再单独去县国土部门申请补登。因为本次确权为统一登记，统一登记完了，当然可以零星登记。但是，难度非常之大。</p>
             </div>
           </div>
         </li>
         </a>
         <a href="#"><li class="list-group-item">
           <div class="media">
             <a href="#" class="media-left">
               <img src="../../../static/images/detail/cesuo.jpg" alt="媒体对象" class="media-object">
             </a>
             <div class="media-body" style="padding-top: 1%;line-height: 30px;padding-left: 2%">
               <h3 class="media-heading">   农村厕所改造，补贴这么拿</h3>
               <p style="padding-top: 2%">“厕所革命”看是小事，却是老百姓生活中的大事。最近国家已经将厕所改造纳入乡村振兴战略，让农民能用的上干净卫生的厕所也是新农村建设的目标之一。很多农村地区的厕所改造政府都会给予一定的补贴，各地也有所不同，那么你家能补贴多少呢?</p>
             </div>
           </div>
         </li>
         </a>
         <a href="#"><li class="list-group-item">
           <div class="media">
             <a href="#" class="media-left">
               <img src="../../../static/images/detail/种地补贴.png" alt="媒体对象" class="media-object">
             </a>
             <div class="media-body" style="padding-top: 1%;line-height: 30px;padding-left: 2%">
               <h3 class="media-heading">   2018年农村土地法修改这几点实惠你一定会拿到</h3>
               <p style="padding-top: 2%">  目前许多宅基地制度改革试点的主要措施是在确保”一户一宅”上，鼓励"一户多宅”的农民腾退多占的宅基地。一方面,这能解决许多”农二代”农三代”没有宅基地可以申请的情况，另一方面，将许多无用的附属房、简易卫生间等拆除，能改善乡村环境。</p>
             </div>
           </div>
         </li>
         </a>
       </ul>
     </div>
   </div>
</template>

<script>
  import Vue from 'vue'
  import service from '@/components/service/serviceDetils.vue'
  Vue.use(service)
  import VueResource from '@/components/resource/index.js'
  Vue.use(VueResource)
    export default {
        name: "detail",
      data:function(){
          return {
            //获取数据内容
            Infromation:service.methods.queryDetils(this,this.$route.query.informationId),
            images:service.methods.queryImages(this,this.$route.query.informationId),
            pathUrl:VueResource.data.url
          }
      },
      methods:{
          create(){
        // console.log(this.Infromation)
            console.log(this.pathUrl)
          }
      }
       }
</script>

<style scoped>
 a{
   text-decoration: none;
   color: black;
 }
 .media img{
   height: 250x;
   width: 350px;
 }
</style>
