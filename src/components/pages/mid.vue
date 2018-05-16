<template>
    <div id="mid" class="container-fluid" style="margin-left:5%;margin-right:5% ">
      <div class="row">
        <div id="myCarousel" class="carousel slide" style="height: 480px;overflow: hidden">
          <!-- 轮播（Carousel）指标 -->
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
          </ol>
          <!-- 轮播（Carousel）项目 -->
          <div class="carousel-inner">
            <div class="item active">
              <img src="../../../static/images/m1.jpg" alt="First slide">
              <div class="carousel-caption">标题 1</div>
            </div>
            <div class="item">
              <img src="../../../static/images/m2.jpg" alt="Second slide">
              <div class="carousel-caption">标题 2</div>
            </div>
            <div class="item">
              <img src="../../../static/images/m3.jpg" alt="Third slide">
              <div class="carousel-caption">标题 3</div>
            </div>
            <div class="item">
              <img src="../../../static/images/m1.jpg" alt="Fourth slide">
              <div class="carousel-caption">标题 4</div>
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
      </div>
      <div class="row"  style="background-color:#169f14;height: 50px;margin-top: 10px;">
        <h3 class="col col-md-2" v-on:click="makeActive()" >政策补贴</h3>
        <ul class="pull-right">
          <li ><a href="#">农机购置补贴政策 </a>|</li>
          <li><a href="#">设施农用地支持政策</a> |</li>
          <li><a href="#">种植业结构调整政策</a> |</li>
          <li><a href="#">畜牧良种补贴政策</a> |</li>
          <li><a href="#"><span class="glyphicon glyphicon-chevron-left"></span><span class="glyphicon glyphicon-chevron-left"></span></a></li>
        </ul>
      </div>
      <div class="row" >
        <div class="col col-md-9" >
           <div class="col-md-3 pull-left">
           <img src="/static/img/nongji .945e536.jpg" class="img-responsive" style="height: 100%">
           </div>
          <div class="pull-left col-md-6">
          <h4 class="pull-left"><strong>政策指南：</strong></h4>
          <ul class="butie pull-right " >
            <li v-for="site in policies" style="width: 150%">
              <a href="">{{site.informationTtile}}<span class="pull-right " style="color: black">{{site.informationDate}}</span></a>
            </li>
            <li><a href="">更多>></a></li>
          </ul>
          </div>
        </div>

        <div class="col col-md-3" >
          <h4><strong>搜索热点：</strong></h4>
          <ul class="redian" >
            <li  v-for="item in topics">
              <a href="#">{{item.informationTtile}}
              </a>
            </li>
            <li style="padding-bottom: 0"><a href="">更多>></a></li>
          </ul>
        </div>
      </div>
      <!--<hr class="hr" style=" height:3px;border:none;border-top:5px ridge   #1c7430;margin-left: 0" />-->
      <div class="row" style="padding-bottom:20px;margin-top: 10px;border-top:1px solid #a9a9a9;border-bottom:1px solid #a9a9a9; ">
        <div class="col col-md-8" style="padding-left:0">
          <div class="button-group-lg" style="padding-bottom: 0;border: 2px #1c7430;/*border:1px solid #a9a9a9;*//*background-color: #449d44*/">
            <a  id="3" v-bind:class="[errorClass ,isActive1 ? activeClass :errorClass]" v-on:click="changeDate($event.target)">实用农技</a>
            <a  id="6" v-bind:class="[errorClass ,isActive2 ? activeClass : errorClass]" v-on:click="changeDate($event.target)">合作社运营</a>
          </div>
          <!--<div class="col col-md-4" style="padding-left: 0">-->
            <!--<img src="../../../static/images/nongji.png" alt="" class="img-responsive">-->
          <!--</div>-->
          <div class="col">
            <ul class="nongji" style="line-height: 35px;font-size: 16px;padding-left: 20px">
              <li  v-for="item2 in cooperation" style="margin-left: 20px">
              <a href="">{{item2.informationTtile}}<span class="pull-right">{{item2.informationDate}}</span></a>
              </li>
              <li><a href="">更多>></a></li>
            </ul>
          </div>
        </div>

        <div class="col col-md-4" style="margin-right: 0">
          <span class="btn btn-success btn-lg" style="/*width: 100%;background-color:#449d44*/ ">三农服务</span>
          <img src="../../../static/images/nongji .jpg" alt="" class="img-responsive">
          <ul class="fuwu">
            <li class="pull-left"><a href="#">农事指导&nbsp;<span class="glyphicon glyphicon-chevron-left"></span></a></li>
            <li><a href="#">农业保险&nbsp;<span class="glyphicon glyphicon-chevron-left"></span></a></li>
            <li><a href="#">实用技术&nbsp;<span class="glyphicon glyphicon-chevron-left"></span></a></li>
            <li><a href="#">科技服务&nbsp;<span class="glyphicon glyphicon-chevron-left"></span></a></li>
            <li><a href="#">培训就业&nbsp;<span class="glyphicon glyphicon-chevron-left"></span></a></li>
          </ul>
        </div>
      </div>
      <div class="containrt-fluid">
        <div class="row" style="height: 100px;background-image: url('../../../static/images/nongyec.png');background-size:100%"></div>
        <div style="height: 2px;width: 100%"></div>
        <div class="row">
        <div class="col col-md-2" style="padding-left: 0">
          <img src="../../../static/images/nonghe.jpg" alt="" class="img-responsive">
        </div>
        <div class="col col-md-5">
          <span class="btn btn-success btn-lg" style="/*width: 100%;*/background-color: #449d44">农合观点</span>
          <ul id="guandian">
          <li  v-for="item in viewpoint"><span class="glyphicon glyphicon-chevron-right"></span>
            &nbsp;<a href="">{{item.informationTtile}} </a></li>
          <li><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;<a href="">更多>> </a></li>
          </ul>
        </div>
        <div class="col col-md-5" style="padding-right: 0">
          <span class="btn btn-success btn-lg" style="/*width: 100%*/;background-color: #449d44">农合学院</span>
          <ul id="xueyuan">
            <li  v-for="item in collage"><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;<a href="">
              {{item.informationTtile}} </a>
              <i class="pull-right">{{item.informationDate}}</i>
            </li>
            <li><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;<a href="">更多>> </a></li>
          </ul>
        </div>
      </div>
        <div style="height: 10px;background-color: #449d44" class="row"></div>
        <div class="row" style="margin-top: 20px;height: 100px" id="img">
          <div class="col col-md-3" >
            <img src="../../../static/images/nongc.jpg" class="img-responsive" alt="">
          </div>
          <div class="col col-md-3">
            <img src="../../../static/images/nongji.png" class="img-responsive" alt="">
          </div>
          <div class="col col-md-3">
            <img src="../../../static/images/t1.jpg" class="img-responsive" alt="">
          </div>
          <div class="col col-md-3">
            <img src="../../../static/images/640.jpg" class="img-responsive" alt="">
          </div>
          <!--<Show></Show>-->
        </div>
        <div class="row" style="margin-top: 20px">
          <div class="col col-md-5" style="padding-left: 0">
            <h3 style="background-color: #449d44;color: white;padding: 10px 10px"><hr class="hr pull-left" style="width: 15%;border-top:3px solid #eee;margin-left: 2%;margin-right: 2%;margin-top: 10px"><span style="float: left">社会化服务</span><hr class="hr pull-left" style="width: 25%;border-top:3px solid #eee;margin-left: 2%;margin-right: 2%;margin-top: 10px">更多&nbsp;></h3>
            <div  class="col col-md-5" id="shehuihua">
              <p  v-for="item in service"><a href="#">{{item.informationTtile}}</a></p>
              <p><a href="#">更多>> </a></p>

            </div>
            <div class="col col-md-7" style="padding-left: 0;padding-right: 0;">
             <h4 style="color: #f8f8f8;background-color: #72e0e0;padding-top: 5px;padding-bottom: 5px">中农新型农业社会化服务社服务体系</h4>
              <img src="../../../static/images/shehui.jpg" class="img-responsive" id="tixi" alt="" style="z-index: 0">
              <ul  style="z-index: 100" hidden="hidden" id="tixishow">
                <li>农资直供: 为社员提供肥料、种子、农药、农机、农膜等农用物资的直接供应，减少中间环节，节本增效。

                </li>
                <li>土地托管: 为社员提供机耕、机播、打药、机收等全托管或半托管服务。
                </li>
                <li>农技指导: 为社员提供从种到收全程保姆式农业技术指导服务。
                </li>
                <li>农业金融: 为社员提供农资贷、种植贷、农机贷等涉农金融服务。
                </li>
                <li>农机配套: 为社员提供农业机械的购买、租赁等配套服务。
                </li>
                <li>粮食收购: 为社员提供粮食烘干、仓储、收购、深加工等产业延伸服务。
                </li>
              </ul>
            </div>
          </div>
          <div class="col col-md-7" style="padding-right: 0">
            <h3 style="background-color: #449d44;color: white;padding: 10px 10px"><hr class="hr pull-left" style="width: 20%;border-top:3px solid #eee;margin-left: 2%;margin-right: 2%;margin-top: 10px"><span style="float: left">农业快讯</span><hr class="hr pull-left" style="width: 40%;border-top:3px solid #eee;margin-left: 2%;margin-right: 2%;margin-top: 10px">更多&nbsp;></h3>
            <div class="col col-md-6" id="shehuihua">
              <p  v-for="item in news"><a href="#">{{item.informationTtile}}</a></p>

              <p><a href="#">更多>> </a></p>

            </div>
            <div class="col col-md-6" style="padding-left: 0;padding-right: 0;">
              <h4 style="color: #f8f8f8;background-color: #72e0e0;padding-top: 5px;padding-bottom: 5px">中农新型农业社会化服务社服务体系</h4>
              <img id="kuaixun" src="../../../static/images/shehui.jpg" class="img-responsive" alt="">
              <ul style="z-index: 100" hidden="hidden" id="kuaixunshow">
                <li>农资直供: 为社员提供肥料、种子、农药、农机、农膜等农用物资的直接供应，减少中间环节，节本增效。

                </li>
                <li>土地托管: 为社员提供机耕、机播、打药、机收等全托管或半托管服务。
                </li>
                <li>农技指导: 为社员提供从种到收全程保姆式农业技术指导服务。
                </li>
                <li>农业金融: 为社员提供农资贷、种植贷、农机贷等涉农金融服务。
                </li>
                <li>农机配套: 为社员提供农业机械的购买、租赁等配套服务。
                </li>
                <li>粮食收购: 为社员提供粮食烘干、仓储、收购、深加工等产业延伸服务。
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row" style="margin: 0 0;padding: 0 0;height: 10px;background-color: #449d44"></div>
        <div class="row">
          <div class="col col-md-3">
            <img src="../../../static/images/nongc.jpg" class="img-responsive" alt="" style="z-index: 0">
            <img id="play" src="../../../static/images/play.png" class="img-responsive" alt="" style="z-index: 1;position: absolute; top: 50%; left: 50%; margin-left: -50px; margin-top: -50px; ">
          </div>
          <div class="col col-md-3">
            <img src="../../../static/images/nongc.jpg" class="img-responsive" alt="" style="z-index: 0">
            <img id="play1" src="../../../static/images/play.png" class="img-responsive" alt="" style="z-index: 1;position: absolute; top: 50%; left: 50%; margin-left: -50px; margin-top: -50px; ">
          </div>
          <div class="col col-md-3">
            <img src="../../../static/images/nongc.jpg" class="img-responsive" alt="" style="z-index: 0">
            <img id="play2" src="../../../static/images/play.png" class="img-responsive" alt="" style="z-index: 1;position: absolute; top: 50%; left: 50%; margin-left: -50px; margin-top: -50px; ">
          </div>
          <div class="col col-md-3">
            <img src="../../../static/images/nongc.jpg" class="img-responsive" alt="" style="z-index: 0">
            <img id="play3" src="../../../static/images/play.png" class="img-responsive" alt="" style="z-index: 1;position: absolute; top: 50%; left: 50%; margin-left: -50px; margin-top: -50px; ">
          </div>
        </div>
      </div>
      <div class="row" style="margin: 0 0;padding: 0 0;height: 10px;background-color: #449d44"></div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import serviceTest from '@/components/service/serviceTest.vue'
  Vue.use(serviceTest)
    export default {
      name: "mid" ,
        data:function(){
        return{
          //初始化政策补贴
          policies: serviceTest.methods.defaultData(this,2),
          //搜索热点
          topics: serviceTest.methods.defaultData(this,-1),
          //合奏设运营和农技
           cooperation: serviceTest.methods.defaultData(this,3),
          //样式设置
          isActive1: true,
          isActive2: false,
          activeClass: 'btn btn-success btn-lg',
          errorClass: 'btn  btn-lg',
          //农合观点
          viewpoint: serviceTest.methods.defaultData(this,7),
          //红河学院
          collage:serviceTest.methods.defaultData(this,5),
          //社会化服务
          service:serviceTest.methods.defaultData(this,1),
          //农业跨讯
          news: serviceTest.methods.defaultData(this,4),
          //获取图片
          images:serviceTest.methods.getImages(this),
        }
        },
      methods:{
       /* 政策补贴*/
        makeActive:function(){
          //console.log(serviceTest.methods.detectCats(this,1) )
          console.log(this.policies )
          console.log(this.topics )
        },
        changeDate(e){
          this.cooperation=serviceTest.methods.defaultData(this,e.id)
          if(e.id==3){
            this. isActive1= true
              this.isActive2=false
          }else{
            this. isActive1= false
            this.isActive2=true
          }
          //设值样式
       }
      }
    };

</script>

<style scoped>
  .pull-right{
   list-style: none;
   margin-right: 2px;
 }
  #play{
    cursor: pointer;
    transition: all 0.6s;
  }
  #img img{
    width: 500px;
    height: 100px;
  }
  #play:hover{
    transform: scale(1.4);
  }
  #play1{
    cursor: pointer;
    transition: all 0.6s;
  }
  #play1:hover{
    transform: scale(1.4);
  }
  #play2{
    cursor: pointer;
    transition: all 0.6s;
  }
  #play2:hover{
    transform: scale(1.4);
  }
  #play3{
    cursor: pointer;
    transition: all 0.6s;
  }
  #play3:hover{
    transform: scale(1.4);
  }
  #tixishow{
    border: 1px solid silver;
    position: absolute;
    background: #449d44;
    color: #f8f8f8;
    border-radius: 10px;
  }
  #kuaixunshow{
    border: 1px solid silver;
    position: absolute;
    background: #449d44;
    color: #f8f8f8;
    border-radius: 10px;
  }
  #shehuihua p a{
      margin-top: 20px;
    margin-bottom: 20px;
    color: black;
    font-size: 16px;
  }
 .pull-right li{
    float: left;
    color: #f8f8f8;
    font-size: 18px;
    margin-right: 20px;
    padding-top: 10px;
  }
 h3{
   color: #f8f8f8;
   margin-top: 10px;
 }
 a{
   /*text-decoration: none;*/
 }
 .pull-right li  a{
    color: #f8f8f8;
  }
 ul{
   list-style: none;
 }
  .butie{
   padding-left: 10px;
  }
  .butie li{
    margin-top: 6px;
    margin-bottom: 6px;
  }
  .butie li a{
    color: black;
  }
  .redian li{
    margin-top: 6px;
    margin-bottom: 6px;
  }
  .redian li a{
    color: black;
  }
  .redian{
    padding-left: 10px;
  }
  .nongji li{
    margin-top: 6px;
    margin-bottom: 6px;
  }
  .nongji li a{
    color: black;
  }
  .fuwu li{
    float: left;
    margin-right: 60px;
    margin-top: 10px;
  }
  .fuwu li a{
    color: black;
    font-size: 14px;
    font-weight:bold;
  }
  /*.fuwu li a:hover{*/
    /*background-color: #4cae4c;*/
    /*border-radius: 5px;*/
    /*padding: 10px 10px;*/
    /*color: #f8f8f8;*/
  /*}*/
  #zhishi{
    line-height: 35px;
    font-size: 18px;
  }
  #guandian a{
    line-height: 35px;
    font-size: 18px;
    margin-top: 20px;
    color: black;
  }
  #xueyuan a{
    line-height: 35px;
    font-size: 16px;
    margin-top: 20px;
    color: black;
  }
</style>
