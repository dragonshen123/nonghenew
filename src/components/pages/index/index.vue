<template>
  <div id="mid" class="container" style="padding: 0">
    <div class="row">
      <div id="myCarousel" class="carousel slide" style="height: 380px;overflow: hidden">
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
            <div class="carousel-caption">
              <h1>标题1</h1>
            </div>
          </div>
          <div class="item">
            <img src="../../../static/images/m2.jpg" alt="Second slide">
            <div class="carousel-caption"><h1>标题1</h1></div>
          </div>
          <div class="item">
            <img src="../../../static/images/m3.jpg" alt="Third slide">
            <div class="carousel-caption"><h1>标题1</h1></div>
          </div>
          <div class="item">
            <img src="../../../static/images/m1.jpg" alt="Fourth slide">
            <div class="carousel-caption"><h1>标题1</h1></div>
          </div>
        </div>
      </div>
    </div>

    <div class="container" style="margin-top: 10px">
      <div class="row col-md-12 zcbt">
        <div class="col col-md-7">
          <h4 class="bander-title">
            <strong style="padding-left: 48px">户籍档案</strong><a
            href="#" class="pull-right" style="font-size: 10px">
            <router-link :to="{path:'/moreDetils',query: {informationType: 2,menuName:'户籍档案'}}">更多>></router-link>
          </a></h4>
          <ul class="butie" style="line-height: 25px">
            <li v-for="(cencu,index) in cencus" >

              <router-link
                :to="{path:'/Detail',query: {censusId: cencu.censusId}}">
              <span style="display: inline-block;width: 64%"> {{cencu.censusName}}
              </span><span class="pull-right " style="display: inline-block;width: 32%">{{cencu.censusDate}}</span>
              </router-link>
            </li>
          </ul>
        </div>

        <div class="col col-md-5">
          <h4 class="bander-title1">
            <strong style="padding-left: 47px">  种植档案</strong> <a class="pull-right" style="font-size: 10px">更多>></a></h4>
          <ul class="redian">
            <li v-for="(palanting,index) in palantings" v-if="index<8">
              <router-link
                :to="{path:'/detail',query:{plantingId:palanting.plantingId}}">
                {{palanting.plantingName}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="row picture">
        <h2 style="color: white;font-weight: 800;text-align: center">农村社会化公共服务平台</h2>
      </div>
      <div class="row col-md-12 nonghe">
      <div class="col col-md-6">
        <h4 class="bander-title2">
          <strong style="padding-left: 48px">地块管理</strong><a
          href="#" class="pull-right" style="font-size: 10px">
          <router-link :to="{path:'/moreDetils',query: {informationType: 2,menuName:'政策补贴'}}">更多>></router-link>
        </a></h4>
        <ul class="butie" style="line-height: 25px">
          <li v-for="(lot,index) in lots" v-if="index<7">
            <!--<router-link  v- to="/Butie" v-bind="">{{site.informationTtile}}<span class="pull-right " style="color: black">{{site.informationDate}}</span></router-link>-->
            <router-link
              :to="{path:'/Detail',query: {lotId: lot.lotId}}">
              <span style="display: inline-block;width: 64%"> {{lot.lotName}}
              </span><span class="pull-right " style="display: inline-block;width: 32%">{{lot.lotDate}}</span>
            </router-link>
          </li>

        </ul>
      </div>

      <div class="col col-md-6">
        <h4 class="bander-title3">
          <strong style="padding-left: 47px">党建合作社</strong> <a class="pull-right" style="font-size: 10px">更多>></a>
        </h4>
        <ul class="redian">
          <li v-for="(cooperation,index) in cooperations" >
            <router-link
              :to="{path:'/detail',query:{cooperationId:cooperation.cooperationId}}">
              {{item.cooperationName}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
      <div class="row col-md-12 nonghe">
        <div class="col col-md-6">
          <h4 class="bander-title2">
            <strong style="padding-left: 48px">生产管理</strong><a
            href="#" class="pull-right" style="font-size: 10px">
            <router-link :to="{path:'/moreDetils',query: {informationType: 2,menuName:'政策补贴'}}">更多>></router-link>
          </a></h4>
          <ul class="butie" style="line-height: 25px">
            <li v-for="(product,index) in products" v-if="index<7">
              <!--<router-link  v- to="/Butie" v-bind="">{{site.informationTtile}}<span class="pull-right " style="color: black">{{site.informationDate}}</span></router-link>-->
              <router-link
                :to="{path:'/Detail',query: {informationId: product.informationId}}">
              <span style="display: inline-block;width: 64%"> {{product.informationTtile}}
              </span><span class="pull-right " style="display: inline-block;width: 32%">{{product.informationDate}}</span>
              </router-link>
            </li>

          </ul>
        </div>

        <div class="col col-md-6">
          <h4 class="bander-title3">
            <strong style="padding-left: 47px">产品预售</strong> <a class="pull-right" style="font-size: 10px">更多>></a>
          </h4>
          <ul class="redian">
            <li v-for="(sale,index) in sales" v-if="index<8">
              <router-link
                :to="{path:'/detail',query:{informationId:sale.informationId}}">
                {{sale.informationTtile}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueResource from '@/components/resource/index.js'
  Vue.use(VueResource)
  export default {
    name: "index",
    data: function () {
      return {
        cencus:null,
        palantings:null,
        lots:null,
        products:null,
        sales:null
      }
    },
    methods: {
      getgroups:function(){
        var location = this.$resource(VueResource.data.url+'/webIndexController/queryPageCensus?pagenum=1&pageSize=10')
        location.query().then(function (response) {
          console.log(response.bodyText)
          this.cencus= JSON.parse(response.bodyText)
        })
      },
    }
  };

  $(function () {
    $('#myCarousel').carousel({
      interval: 2000
    })

  })
</script>

<style scoped>
  .carousel-indicators li {
    width: 50px;
    height: 8px;
    border-radius: 0;
  }

  #ul li {
    cursor: pointer;
  }

  .carousel-inner .item img {
    width: 100%;
    height: 100%;
  }
  .redian{
    min-height: 200px;
  }

  * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .fenge {
    padding-left: 0;
    padding-right: 0;
    margin-top: 5px
  }

  .box-bottom {
    margin-top: 20px;
    padding-left: 0;
    padding-right: 0
  }

  .carousel-control:hover {
    color: white;
  }

  .box-bottom-left {
    padding-left: 0;
    padding-right: 20px;
    border: 1px ridge #337ab7;
    min-height: 489px
  }

  .box-bottom-left h4 {
    color: white;
    padding: 10px 10px;
    height: 50px;
    border-bottom: 3px solid #337ab7;
  }

  .box-bottom-left h4 .hr-left {
    width: 15%;
    border-top: 3px solid #eee;
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 10px
  }

  .box-bottom-left h4 .hr-right {
    width: 25%;
    border-top: 3px solid #eee;
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 10px
  }

  #butie-nav {
    background-color: #074b12;
    height: 50px
  }

  #box {
    position: relative;
    overflow: hidden;
    height: 150px;
    padding-left: 0;
    padding-right: 0;
  }

  .carousel-caption h1 {
    color: #449d44;
    font-weight: 800;
  }

  #box ul {
    width: 1200px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
  }

  a:hover {
    color: blue;
  }

  .btn-success--1 {
    background-color: white;
    border-top: 1px inset #449d44;
    border-left: 2px inset silver;
    border-right: 2px inset silver;
  }

  .bander-title {
    color: white;
    font: 700 18px/37px 'Microsoft Yahei';
    display: block;
    background: url('../../../static/images/bander.png');
    background-size: 30%;
    background-repeat: no-repeat;
    border-bottom: 2px solid #2aabd2
  }

  #ul li {
    width: 300px;
    height: 150px;
    float: left;
    list-style: none;
  }

  .pull-right {
    list-style: none;
    margin-right: 2px;
  }

  .list-group-item {
    border: none;
    border-bottom: 2px dashed silver;
  }

  .zcbt {
    /*border: 1px ridge #337ab7;*/
    margin: 0 0;
    padding-left: 0;
    padding-right: 0;
  }

  .zcbt-1 {
    padding-left: 0;
  }

  .zcbt-1 img {
    height: 100%
  }

  #play {
    cursor: pointer;
    transition: all 0.6s;
  }

  #img img {
    width: 500px;
    height: 100px;
  }

  #play:hover {
    transform: scale(1.4);
  }

  .list-group-item:hover {
    -webkit-animation: myItem 2s;
  }

  @-webkit-keyframes myItem {
    from {
    }
    to {
      background-color: #449d44;
      background-size: 100%;
      border-radius: 5px;
    }
  }

  #play1 {
    cursor: pointer;
    transition: all 0.6s;
  }

  #play1:hover {
    transform: scale(1.4);
  }

  #play2 {
    cursor: pointer;
    transition: all 0.6s;
  }

  #play2:hover {
    transform: scale(1.4);
  }

  #play3 {
    cursor: pointer;
    transition: all 0.6s;
  }

  #play3:hover {
    transform: scale(1.4);
  }

  #tixishow {
    border: 1px solid #337ab7;
    position: absolute;
    background: #449d44;
    color: #f8f8f8;
    border-radius: 10px;
  }

  .bander-title2 {
    color: white;
    font: 700 18px/37px 'Microsoft Yahei';
    display: block;
    background: url('../../../static/images/bander.png');
    background-size: 34%;
    background-repeat: no-repeat;
    border-bottom: 2px solid #2aabd2
  }

  .row {
    margin-left: 0;
    margin-right: 0;
  }

  #kuaixunshow {
    border: 1px solid #337ab7;
    position: absolute;
    background: #449d44;
    color: #f8f8f8;
    border-radius: 10px;
  }

  #shehuihua p a {
    margin-top: 20px;
    margin-bottom: 20px;
    color: black;
  }
  .picture{
    height: 60px;background: url('../../../static/images/m2.jpg');background-size: 100%;background-repeat: no-repeat;width: 100%
  }

  .pull-right li {
    float: left;
    color: #f8f8f8;
    margin-right: 20px;
    padding-top: 10px;
  }

  h3 {
    color: #f8f8f8;
    margin-top: 10px;
  }

  a {
    /*text-decoration: none;*/
  }

  .pull-right li a {
    color: #f8f8f8;
  }

  ul {
    list-style: none;
  }

  .butie {
    padding-left: 10px;
    line-height: 30px;
  }
  .bander-title3{
    color:white;font: 700 18px/37px 'Microsoft Yahei';display: block;background: url('../../../static/images/bander.png');background-size: 34%;background-repeat: no-repeat;border-bottom: 2px solid #2aabd2
  }

  /*.butie li{*/
  /*margin-top: 6px;*/
  /*margin-bottom: 6px;*/
  /*}*/
  .butie li a {
    color: black;
  }

  .bander-title1 {
    color: white;
    font: 700 18px/37px 'Microsoft Yahei';
    display: block;
    background: url('../../../static/images/bander.png');
    background-size: 40%;
    background-repeat: no-repeat;
    border-bottom: 2px solid #2aabd2
  }

  .redian li {
    margin-top: 6px;
    margin-bottom: 6px;
  }

  .redian li a {
    color: black;
  }

  .redian {
    padding-left: 10px;
  }

  .nongji li a {
    color: black;
  }

  .nongji li {
    line-height: 25px;
  }

  .fuwu li {
    float: left;
    margin-right: 60px;
    margin-top: 10px;
    width: 30%;
  }

  .fuwu li a {
    color: black;
    font-size: 14px;
    font-weight: bold;
  }

  /*.fuwu li a:hover{*/
  /*background-color: #4cae4c;*/
  /*border-radius: 5px;*/
  /*padding: 10px 10px;*/
  /*color: #f8f8f8;*/
  /*}*/
  #guandian a {
    line-height: 30px;
    /*font-size: 18px;*/
    margin-top: 20px;
    color: black;
  }

  #xueyuan a {
    /*line-height: 35px;*/
    /*font-size: 16px; */
    margin-top: 20px;
    color: black;
  }

  .butie li .pull-right {
    color: black;
  }

  .box-bottom-left-left {
    padding-left: 0;
    padding-right: 0;
  }

  .box-bottom-left-left h5 {
    color: #f8f8f8;
    background-color: #72e0e0;
    padding-top: 5px;
    padding-bottom: 5px
  }

  .box-bottom-left-left img {
    z-index: 0;
    padding-right: 0
  }

  .box-bottom-right {
    padding-right: 0;
    border: 1px ridge #337ab7;
    min-height: 450px
  }

  .box-bottom-right h4 {
    background-color: white;
    color: white;
    padding: 8px 10px;
    height: 50px;
    border-bottom: 3px solid #337ab7;
  }

  .box-bottom-right h4 .hr-left {
    width: 20%;
    border-top: 3px solid #eee;
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 10px
  }

  .box-bottom-right h4 span {
    float: left;
  }

  .box-bottom-right h4 {
    padding-top: 15px;
  }

  .box-bottom-left h4 {
    padding-top: 15px;
  }

  .box-bottom-right h4 .hr-right {
    width: 40%;
    border-top: 3px solid #eee;
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 10px
  }

  .box-bottom-right-right {
    padding-left: 0;
    padding-right: 0;
  }

  .butie li {
    width: 100%;
  }

  .nonghe {
    padding-bottom: 20px;
    margin-top: 20px;
    margin-left: 0;
    padding-left: 0;
    margin-right: 0;
    padding-right: 0
  }

  .nonghe-left {
    padding-left: 0;
    min-height: 405px;
    /*border: 1px solid #a9a9a9*/
  }

  .nonghe-left .button-group-lg {
    padding-bottom: 0;
    background-color: #449d44;
  }

  .nonghe-left-box {
    border: 1px outset #337ab7;
    border-top: none;
    min-height: 344px;
  }

  .nonghe-left-box ul {
    line-height: 20px;
    padding-left: 20px;
    padding-right: 20px;
    min-height: 316px
  }

  .nonghe-left-box ul li {
    margin-left: 20px
  }

  .nonghe-right {
    margin-right: 0;
    padding-right: 0;
    border: 1px outset #337ab7;
    padding-left: 0;
    min-height: 370px
  }

  .nonghe-right div .btn-lg {
    border: none;
    border-radius: 0;
    background-color: #449d44;
    width: 100%
  }

  .nonghe-right div img {
    margin-top: 10px
  }

  .midbox {
    border: 1px ridge #337ab7;
    margin-left: 0
  }

  .midbox-left {
    padding-left: 0
  }

  .midbox-mid .btn-lg {
    border: none;
    border-radius: 0;
    background-color: #449d44;
    width: 100%;
    text-align: left
  }

  .midbox-right {
    padding-right: 0
  }

  .midbox-right .btn-lg {
    border: none;
    border-radius: 0;
    background-color: #449d44;
    width: 100%;
    text-align: left;
    margin-right: -30px
  }
  .butie,.redian{
    min-height: 200px;
  }
</style>
