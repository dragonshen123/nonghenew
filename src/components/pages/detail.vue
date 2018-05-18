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
           <span v-html="infromation.informationCentent"></span>
         </div>

         <div style="height: 10px;border-top: 1px ridge silver;"></div>

       <div>
         <h4 style="width: 20%" class="pull-left">我想说两句</h4> <p class="pull-right" style="margin-top: 5px">已有 <a href="#">0</a>条评论</p>
         <textarea type="text" v-model="replyContentTmp" class="form-control" style="height: 200px" v-on:click="replyContent()">

         </textarea>
         <p class="btn btn-default pull-right" style="margin-top: 2px" v-on:click="submitReply()">发表评论</p>
       </div>
         <div style="margin-top: 40px">


         <div style="height: 400px;">
           <div  style="padding: 10px 10px;border-top: 1px ridge silver;border-bottom: 1px ridge silver;margin-top: 50px">
             <h4>近期评论</h4>
           </div>
           <div class="pinglun">
             <ul class="list-group">
               <li class="list-group-item">

                 <div class="media" v-for="item in comments">
                   <a  class="media-left" style="width: 10%;height: 20%">
                     <img v-bind:src="pathUrl+item.userPictureUri" alt="媒体对象" style="width: 70px;height: 70px;border-radius: 30px" >
                   </a>
                   <div class="media-body" style="/*padding-top: 1%;line-height: 30px;*/padding-left: 2%">
                     <p class="media-heading"><h4><strong>{{item.userName}}</strong></h4><span>{{item.replyDate}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span></span></p>
                     <p style="text-indent:2em">{{item.replyContent}}</p>
                   </div>
                 </div>


               </li>
             </ul>
           </div>
         </div>
         </div>
       </div>
       <div class="col col-md-3">
         <div style="border: 1px ridge silver">
         <a href="" class="btn btn-default btn-lg" style="border-top: none;border-left: none;border-bottom: none;">相关列表</a>
         </div>
         <div>
           <ul style="list-style: none;line-height: 45px;font-size: 16px">
           <li v-for="item in correlation">
            <!-- <router-link :to="{path:'/Detail',query: {informationId: item.informationId,informationType:item.informationType}}">
               {{item.informationTtile}}</router-link>-->
            <a v-bind:id="item.informationId" href="#" v-on:click="changeDateTmp($event.target)" >{{item.informationTtile}} >></a>
           </li>

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
            testVaue:"fasfas",
            informationId:this.$route.query.informationId,
            infromation:service.methods.queryDetils(this,this.$route.query.informationId),//获取文字详情
            images:service.methods.queryImages(this,this.$route.query.informationId),//获取图片列表
            pathUrl:VueResource.data.url,//获取路劲informationType
            correlation :service.methods.correlationQuery(this,this.$route.query.informationType),//相关l兰
            comments:service.methods.comment(this,this.$route.query.informationId),//回复
            message:service.methods.checkUserLoin(this),
            replyContentTmp:""
          }
      },
      methods:{
          changeDateTmp(e){
          this.comments=service.methods.comment(this,e.id)
          this.infromation=service.methods.queryDetils(this,e.id)
          this.images=service.methods.queryImages(this,e.id)
            this.informationId=e.id
          },
          //回复内容
        replyContent(){
          this.message=service.methods.checkUserLoin(this)
            //查询是否登录过
          if(this.message==0){

            document.getElementById("submitData").click()
          }
        },
        //回复内容
        submitReply(){
            if(this.replyContentTmp==null||this.replyContentTmp==undefined||this.replyContentTmp.ength<5){
              alert("内容长度大于5")
              return
            }
          this.comments=service.methods.reply( this, this.informationId, this.replyContentTmp)

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
 }
</style>
