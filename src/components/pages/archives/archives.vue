<template>
  <div class="container" style="margin-top: 50px;padding: 0">
    <!--福导航横幅图片内容开始-->
    <div class="row picture">
      <h2 style="color: white;font-weight: 800;text-align: center">充分实现信息在活动中应有的支持作用</h2>
    </div>
    <!--横幅部分内容结束-->
    <div class="row" style="margin-top: 1rem;">
      <div class="col col-md-3" id="d_menu">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">档案管理</h3>
          </div>
          <div class="panel-body">
            <!--<ul id="d_menu-list">-->
              <!--<router-link to="/Archives/">-->
              <!--<li class="active">户籍档案<i-->
                <!--class="pull-right icon iconfont icon-youjiantou"></i></li> </router-link>-->
             <!--<router-link to="/Plant"> <li>种植档案<i-->
                <!--class="pull-right icon iconfont icon-youjiantou"></i></li> </router-link>-->

              <ul id="myTab" class="nav nav-tabs">
                <li class="active" id="household">
                  <a href="#home" data-toggle="tab">
                    户籍档案 <i class="pull-right icon iconfont icon-youjiantou"></i>
                  </a>
                </li>
                <li id="plant"><a href="#ios" data-toggle="tab">种植档案<i class="pull-right icon iconfont icon-youjiantou"></i></a></li>
              </ul>

            <!--</ul>-->
          </div>
        </div>
      </div>
      <div class="col col-md-9" id="detail">
        <div id="myTabContent" class="tab-content">
          <div class="tab-pane fade in active" id="home">
            <Household :censusName="censusName"></Household>
          </div>
          <div class="tab-pane fade " id="ios">
            <Plant :plantingName="plantingName"></Plant>
          </div>

        </div>
      </div>
    </div>

  </div>
  <!--主体内容部分结束-->

</template>

<script>

  export default {
    name: "archives" ,
    components:{
      Household: require('@/components/pages/archives/household').default ,
      Plant: require('@/components/pages/archives/plant').default
    },
    data(){
      return{
        isAActive:true,
        plantingName:this.$route.query.plantingName,
        censusName: this.$route.query.censusName,
      }
    },
    mounted() {
        this.getParamas()
    },
    methods:{
      getParamas () {
      if(this.$route.query.plantingName){
      $("#household").removeClass('active');
      $("#plant a").tab('show')
      }           else {
      }
      }
    }



  }
  $(function () {
    $("#d_menu-list li").click(function () {
      $("#d_menu-list li").removeClass('active'),

        $(this).addClass("active") ;

    });
    // $(".menu a li").removeClass('active');
    // $("#archives").addClass('active')
    // $(".router-link-exact-active a").addClass('active')
  })

</script>

<style scoped>
  /****************左侧菜单标题部分样式************/
  #d_menu .panel-title {
    font-size: 30px;
    text-align: center;
    padding-left: 0;
  }

  /*面板主体样式*/
  #d_menu .panel-body {
    padding: 0;
  }

  /*面板内容列表样式*/
  #d_menu-list {
    list-style: none;
    padding: 0;
  }
  .nav-tabs > li{
    float: none;
  }
  #myTab li.active{
    background: #48b5d5;
    color: white;
  }
  #myTab li.active a{
    background: transparent!important;
    color: white;
  }
  /*面板内容列表项样式*/
  #myTab li {
    /*padding-top: 0.8rem;*/
    /*padding-bottom: 0.8rem;*/
    font-size: 14px;
    cursor: pointer;
  }

  .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus,.nav-tabs > li > a:hover{
    border-color: transparent;
  }
  #myTab li a{
    cursor: pointer;
  }
    /*面板列表前菱形图标样式*/
  #myTab li a:before {
    content: "\e609"; /* 图标编码 */
    font-family: iconfont;
    display: inline-block;
    font-size: 10px;
    margin-left: 1.3em;
    width: 1.3em;
  }
  .nav > li > a{
    padding: 0.8rem;
  }

  /*鼠标滑过列表项样式*/
  #d_menu-list li.active, #d_menu-list li:hover {
    background: #48b5d5;
    color: white;
  }

  /*列表面板主体样式*/
  #d_menu .panel-body {
    padding-top: 10px;
  }

  /****************************详情页右侧内容************************/
  /*面板头部样式*/
  #detail .panel-heading {
    border-bottom: 2px solid #009bc7;
    color: #0497ca;

  }

  /*面板标题样式*/
  #detail .panel-heading .panel-title {
    font-size: 18px;
    font-weight: 800;
  }

  /*面板列表样式*/
  #detail-list {
    list-style: none;
  }

  /*列表项图标样式*/
  #detail-list li:before {
    content: "\e609";
    font-family: iconfont;
    display: inline-block;
    font-size: 10px;
    margin-left: 0rem;
    width: 1.3em;
  }

  /*列表项标题部分样式*/
  #detail-list li .title {
    font-size: 18px;
    font-weight: 300;
  }
  /*列表项样式*/
  #detail-list li {
    font-size: 16px;
    line-height: 30px;
    /*border-bottom: 1px dashed silver;*/
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
  }

  /*列表项左侧内容部分样式*/
  #detail-list li p .item-left {
    width: 80%;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    overflow: hidden;
  }

  /*列表项右侧内容样式*/
  #detail-list li p .item-right {
    width: 14%;
    display: block;
  }

  /*列表项内容描述样式*/
  #detail-list li p {
    font-size: 14px;
    color: #969696;
    text-indent: 1rem;
  }

  /*列表项内容鼠标滑过样式*/
  #detail-list li:hover, #detail-list li:hover p {
    color: #0497ca;
    border-color: #0497ca;
  }

  .col-md-3 {
    padding-left: 0;
  }

  .panel-default {
    border: none;
  }

  .picture {
    height: 300px;
    background: url('../../../../static/images/m2.jpg');
    background-size: 100%;
    background-repeat: no-repeat;
    width: 100%
  }
  .picture h2{
    font-family: "微软雅黑", "Dosis", sans-serif;
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    line-height: 200px;
    text-transform: uppercase;
    position: relative;
    line-height: 200px;
  }
</style>
