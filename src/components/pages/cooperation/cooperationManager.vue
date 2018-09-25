<template>
  <div>
  <div class="container" style="margin-top: 50px;padding: 0">
    <!--福导航横幅图片内容开始-->
    <div class="row picture">
      <h2 style="color: white;font-weight: 800;text-align: center">农村社会化公共服务平台</h2>
    </div>
    <!--横幅部分内容结束-->
    <div class="row" style="margin-top: 1rem">
      <div class="col col-md-3" id="d_menu">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">合作社信息</h3>
          </div>
          <div class="panel-body">
            <ul id="myTab" class="nav nav-tabs">
              <li class="active">
                <a href="#home" data-toggle="tab" >
                  合作社信息<i class="pull-right icon iconfont icon-youjiantou"></i>
                </a>
              </li>
               <li><a href="#map" data-toggle="tab">地图显示<i class="pull-right icon iconfont icon-youjiantou"></i></a></li>
              <li><a href="#details" data-toggle="tab" id="detailsOnclick" style="display: none">详情</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col col-md-9" id="detail">
        <div class="panel panel-default">
          <div class="panel-heading" style="display: inline-block">

            <form class="form-horizontal pull-right" style="width: 100%">
              <div class="form-group" style="margin-bottom: 0px">
                <div class="col col-md-12">
                <label class="col-sm-1 control-label" >省</label>
                <div class="col-sm-2">
                  <select  class="form-control"  v-model="proviceValue" @change="getstate()" >
                    <option  v-for="item in provices"  v-bind:value="item.locationId">{{item.locationName}}</option>

                  </select>
                </div>

                <label  class="col-sm-1 control-label">州</label>
                <div class="col-sm-2">
                  <select type="text" class="form-control" v-model="statesValue" @change="getcounty()" >
                    <option v-for="state in states" v-bind:value="state.locationId">{{state.locationName}}</option>
                    <option ></option>
                  </select>
                </div>

                <label  class="col-sm-1 control-label" >县</label>
                <div class="col-sm-2">
                  <select type="text" class="form-control"  v-model="countyValue" @change="gettowns()">
                    <option v-for="county in countys" v-bind:value="county.locationId">{{county.locationName}}</option>

                  </select>
                </div>

                <label  class="col-sm-1 control-label" >镇</label>
                <div class="col-sm-2" style="padding-right: 0">
                  <select type="text" class="form-control" v-model="townValue" @change="getvillages()" >
                    <option v-for="town in towns" v-bind:value="town.locationId">{{town.locationName}}</option>

                  </select>
                </div>

                </div>
                <div class="col col-md-12"  style="margin-top: 1rem">
                <label  class="col-sm-2 control-label"style="width: 10%" >村委会</label>
                <div class="col-sm-2">
                  <select type="text" class="form-control" v-model="villageValue" @change="getgroups()">
                    <option v-for="village in villages" v-bind:value="village.locationId">{{village.locationName}}</option>

                  </select>
                </div>

                <label  class="col-sm-2 control-label" style="width: 10%">村小组</label>
                <div class="col-sm-2">
                  <select type="text" class="form-control" v-model="groupValue"  @change="getcencus()">
                    <option v-for="group in groups" v-bind:value="group.groupId">{{group.groupName}}</option>
                  </select>
                </div>
                <label  class="col-sm-2 control-label" style="width: 14%">合作社名称</label>
                <div class="col-sm-2">
                 <input name=" cooperationName" class="form-control" v-model=" cooperationName"/>
                </div>

                <label  class="btn btn-default pull-right"  v-on:click="queryPage(pageSize,1)"><i class="glyphicon glyphicon-search" style="color: #337ab7"></i></label>
                </div>
              </div>
            </form>
          </div>


        </div>

        <div class="panel-body tab-content"  id="myTabContent">
          <div class="tab-pane fade in active" id="home">
            <table class="table table-striped" id="dataList">
              <thead>
              <tr>
                <th>合作社名称</th>
                <th>党员数量</th>
                <th>社员数</th>
                <th>创建日期</th>
                <th>详情</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for=" item in page">
                <td>{{item.cooperationName}}</td>
                <td>{{item.cooperationPartyNumber}}</td>
                <td>{{item.cooperationPersionNumber}}</td>
                <td>{{item.cooperationDate}}</td>
                <td>
                  <a v-on:click="getDetils(item.cooperationId)">详情</a>
                  </td>
              </tr>
              </tbody>
            </table>
            <ul class="pagination pull-right">
              <li><a   v-on:click="getImformation(pageSize,curPage-1,informationType)">&laquo;</a></li>
              <li class="active"><a href="#">{{curPage}}</a></li>
              <li  ><a  v-for="itemCount in showPage" v-if="itemCount+curPage <= totalPage" v-on:click="getImformation(pageSize,itemCount+curPage,informationType)">{{itemCount+curPage}}</a></li>
              <li><a  v-on:click="getImformation(pageSize,curPage+1,informationType)">&raquo;</a></li>
            </ul>
          </div>
          <div class="tab-pane fade" id="map">
            {{markerGroups}}
          <!--  地图开始-->
            <div class="amap-page-container">
             <!-- // 切换图标 分别调用lastMap()与nextMap() 未避免被简书转化未设置img的src属性-->
              <img class="toggle-img" v-on:click="lastMap()" style="top: 50%;"/>
              <img class="toggle-img" v-on:click="nextMap()" style="top: 70%;"/>
              <!--// 显示当前国家-->
             <!-- <span class="demo-affix" style="top: 15px;">当前位于{{contry}}&#45;&#45;点击图标进入城市</span>-->
             <!-- // 切换提示-->
             <!-- <span class="demo-affix" style="top: 70px;">点击左侧切换按钮选择国家</span>-->
              <!--// 地图主体-->
              <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
              <!--  // 遍历当前点坐标组markers 开始标点-->
                <el-amap-marker v-for="marker in markerGroups"  :position="marker.position"  visible="true" draggable="false"></el-amap-marker>

              </el-amap>
            </div>

           <!-- 地图结束-->
          </div>
          <div class="tab-pane fade" id="details"  style="">
            <!--  详情-->
           <!--{{cooperationDetils}}-->
            <!-- 详情-->
          </div>
         <!-- -->
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
  import Vue from 'vue'
  import service from '@/components/service/servicemenu.vue'

  Vue.use(service)
  import VueResource from '@/components/resource/index.js'
  Vue.use(VueResource)
  export default {
    name: "cooperationManager",
    data: function () {
      return {
        showPage: [1, 2, 3, 4, 5],
        provices: this.getLocation(0, 0),
        proviceValue: null,//省
        states: null,//州
        statesValue: null,
        countys: null,//县
        countyValue: null,
        towns: null,//镇
        townValue: null,
        villages: null,//村委会
        villageValue: null,
        groups: null,//村小组
        groupValue: null,
        totalCount: null,
        totalPage: null,
        pageSize: 15,
        curPage: 1,
        page: null,
        cooperationDetils: null,
        cooperationName: null,
        zoom: 7,
        // 当前点坐标组数组下标
        i: 0,
        markerGroups: [ {
          position: [102.73,31.04],
          content: this.getContentHtml('昆明'),
          contry: '中国'
        }],
        tmp:{
          position: null,
          content: null,
          contry: null
        } ,
        test: null
      }
    },
    created() {
    //  this.getImformation(10,1,null)
      this.queryPage(10,1)
    },
    methods: {
      getLocation:function(id,flag){
        var location = this.$resource(VueResource.data.url+'/webIndexController/asyncGetNodes?id='+id)
        location.query().then(function (response) {

          if(flag==0){
            this.provices=JSON.parse(response.bodyText)
          }
          if(flag==1){
            this.states=JSON.parse(response.bodyText)
          }
          if(flag==2){
            this.countys=JSON.parse(response.bodyText)
          }
          if(flag==3){
            this.towns=JSON.parse(response.bodyText)
          }
          if(flag==4){
            this.villages=JSON.parse(response.bodyText)
          }
          if(flag==5){
            this.groups=JSON.parse(response.bodyText)
          }
        })
      },
      getstate:function(){
        this.getLocation(this.proviceValue,1)
      },
      getcounty:function(){
        this.getLocation(this.statesValue,2)
      },
      gettowns:function(){
        this.getLocation(this.countyValue,3)
      },
      getvillages:function(){
        this.getLocation(this.townValue,4)
      },
      getgroups:function(){
        var location = this.$resource(VueResource.data.url+'/webIndexController/asyncGetgroup?locationCode='+this.villageValue)
        location.query().then(function (response) {
          console.log(response.bodyText)
          this.groups= JSON.parse(response.bodyText)
        })
      },
      getLocationCode:function(){
        if(this.villageValue!=null){
          return this.villageValue
        }else if(this.townValue!=null){
          return this.townValue
        }else if(this.countyValue!=null){
          return this.countyValue
        }else if(this.statesValue!=null){
          return this.statesValue
        }else if(this.proviceValue!=null){
          return this.proviceValue
        }
      },
      queryPage:function(pageSize,curPage){
        var queryPage = this.$resource(VueResource.data.url+'/webIndexController/asyncQueryPageCooperation?' +
          'code='+ this.getLocationCode()+
          '&pageSize='+ pageSize+
          '&curPage='+ curPage+
          '&groupValue='+ this.groupValue+
          '&cooperationName='+ this.cooperationName
        )
        queryPage.query().then(function (response) {
          this.page= JSON.parse(response.bodyText).result
          this.curPage=JSON.parse(response.bodyText).curPage
          this.totalCount=JSON.parse(response.bodyText).totalCount
          this.totalPage=JSON.parse(response.bodyText).totalPage

          for(var i=0;i<JSON.parse(response.bodyText).otherDate.length;i++){
           this.tmp.content=  this.getContentHtml(JSON.parse(response.bodyText).otherDate[i].content)
            this.tmp.position=JSON.parse(response.bodyText).otherDate[i].position
            this.tmp.contry=JSON.parse(response.bodyText).otherDate[i].contry
            this.markerGroups.push(this.tmp)
          }
         this.add();
        })
      },
      add(){
        this.test = this.markerGroups
      },

      nextMap() {
        if (this.markerGroups.length > this.i + 1) {
          this.i += 1;
        }else {
          this.i = 0;
        }
      },
      lastMap(){
        if (this.i <1){
          this.i = this.markerGroups.length - 1;
        }else {
          this.i -= 1;
        }
      },

    getContentHtml(content) {
      // 未避免被简书转化未设置img的src属性
      return '<p><img width="20px" height="20px" style="margin: -25px 0 0 -25px;"></p><p style="font-size: 10px;margin-left:  -25px;color: yellow;background-color: red;text-align: center;">'+ content + '</p>';
    },
      getDetils(cooperationId){
        var location = this.$resource(VueResource.data.url+'/webIndexController/getCooperationDetils?cooperationId='+cooperationId)
        location.query().then(function (response) {
          console.log(response.bodyText)
          document.getElementById("details").innerHTML = response.bodyText;
          console.log(document.getElementsByTagName("textarea")[0])
          //document.getElementsByTagName("textarea")[0].setAttribute("display",'none')
          document.getElementsByTagName("textarea")[0].style.display="none"
          // this.cooperationDetils= response.bodyText
          document.getElementById("detailsOnclick").click()
        })
      },
  },
  computed: {

    //点坐标组getter方法 通过i从点坐标组数组中获取点坐标组
    markers: function () {
      alert("dsfdsf")
      // `this` points to the vm instance
      return this.markerGroups;
    },
   // 当前地图中心getter方法
    center: function () {
      console.log("长度："+this.markerGroups.length)
     return this.markerGroups[0].position;

    },
    // 当前国家getter方法
    contry: function () {
       return this.markerGroups[this.markerGroups.length-1].contry;

    }
  },

      //得到详情




  }

</script>

<style scoped>
  .demo-affix{
    background-color: #f1c40f;
    padding: 10px 20px;
    color: white;
    position: absolute;
    z-index: 999;
  }
  .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus{
    border: none;
  }
  #myTab li.active{
    background: #48b5d5;
  }
  #myTab li.active a{
    color: white;
    background: transparent!important;
  }
    .amap-page-container{
      height: 100vh;
    }
  .toggle-img{
    width: 80px; height:80px; position: absolute;left: 5px;color: red; z-index: 999;font-size: 40px;
  }
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

  /*面板内容列表项样式*/
  #d_menu-list li {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    font-size: 14px;
    cursor: pointer;
  }

  /*面板列表前菱形图标样式*/
  #d_menu-list li:before {
    content: "\e609"; /* 图标编码 */
    font-family: iconfont;
    display: inline-block;
    font-size: 10px;
    margin-left: 1.3em;
    width: 1.3em;
  }

  .nav-tabs > li {
   float: none;
  }
  .nav-tabs > li > a{
    border: none;
  }
  .nav-tabs > li > a:before{
    content: "\e609";
    font-family: iconfont;
    display: inline-block;
    font-size: 10px;
    margin-left: 0rem;
    width: 1.3em;
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
    border-bottom: 1px dashed silver;
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
    height: 60px;
    background: url('../../../../static/images/m2.jpg');
    background-size: 100%;
    background-repeat: no-repeat;
    width: 100%
  }
</style>
