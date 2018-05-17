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
          <!-- 详情文字-->
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
         <div style="height: 400px;background-color: red">

         </div>
         </div>
       </div>
       <div class="col col-md-3">
         <div style="border: 1px ridge silver">
         <a href="" class="btn btn-default btn-lg" style="border-top: none;border-left: none;border-bottom: none;">相关列表</a>
         </div>
         <div>
           <ul style="list-style: none;line-height: 45px;font-size: 16px">
           <li v-for="item in correlation"><a href="#" >
             {{item.informationTtile}} >></a>
           </li>
          <!-- <li><a href="#">新增农业经营主体倾斜政策  &nbsp;&nbsp;&nbsp;>></a>  </li>
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
           <li><a href="#">农产品追溯体系建设支持政策  &nbsp;&nbsp;&nbsp;>></a> </li>-->
           </ul>
         </div>
       </div>
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
            Infromation:service.methods.queryDetils(this,this.$route.query.informationId),//获取文字详情
            images:service.methods.queryImages(this,this.$route.query.informationId),//获取图片列表
            pathUrl:VueResource.data.url,//获取路劲informationType
            correlation :service.methods.correlationQuery(this,this.$route.query.informationType)//相关l兰
          }
      },
      methods:{
          create(){
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
