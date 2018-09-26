<template>

  <div>

  <div class="container" style="margin-top: 50px;padding: 0">
    <!--福导航横幅图片内容开始-->
    <div class="row picture">
      <h2 style="color: white;font-weight: 800;text-align: center">以党建引领“助力”合作社又快又好发展</h2>
    </div>
    <!--横幅部分内容结束-->
    <div class="row">
      <div class="panel panel-default" style="margin-bottom: 0">
        <div class="panel-heading" style="display: inline-block">

          <form class="form-horizontal pull-right" style="width: 100%">
            <div class="form-group" style="margin-bottom: 0px">
              <label class="col-sm-1 control-label" style="width: 1%">省</label>
              <div class="col-sm-2" style="width: 9%">
                <select  class="form-control"  v-model="proviceValue" @change="getstate()" >
                  <option  v-for="item in provices"  v-bind:value="item.locationId">{{item.locationName}}</option>

                </select>
              </div>

              <label  class="col-sm-1 control-label" style="width: 1%">州</label>
              <div class="col-sm-2" style="width: 9%">
                <select type="text" class="form-control" v-model="statesValue" @change="getcounty()" >
                  <option v-for="state in states" v-bind:value="state.locationId">{{state.locationName}}</option>
                  <option ></option>
                </select>
              </div>

              <label  class="col-sm-1 control-label" style="width: 1%">县</label>
              <div class="col-sm-2" style="width: 9%">
                <select type="text" class="form-control"  v-model="countyValue" @change="gettowns()">
                  <option v-for="county in countys" v-bind:value="county.locationId">{{county.locationName}}</option>

                </select>
              </div>

              <label  class="col-sm-1 control-label" style="width: 1%">镇</label>
              <div class="col-sm-2" style="width: 9%">
                <select type="text" class="form-control" v-model="townValue" @change="getvillages()" >
                  <option v-for="town in towns" v-bind:value="town.locationId">{{town.locationName}}</option>

                </select>
              </div>


              <label  class="col-sm-2 control-label" style="width: 7%">村委会</label>
              <div class="col-sm-2" style="width: 9%">
                <select type="text" class="form-control" v-model="villageValue" @change="getgroups()">
                  <option v-for="village in villages" v-bind:value="village.locationId">{{village.locationName}}</option>

                </select>
              </div>

              <label  class="col-sm-2 control-label" style="width: 7%">村小组</label>
              <div class="col-sm-2" style="width: 9%">
                <select type="text" class="form-control" v-model="groupValue"  @change="getcencus()">
                  <option v-for="group in groups" v-bind:value="group.groupId">{{group.groupName}}</option>
                </select>
              </div>
              <label  class="col-sm-2 control-label" style="width: 9%">合作社名称</label>
              <div class="col-sm-2" style="width: 9%">
                <input name=" cooperationName" class="form-control" v-model=" cooperationName"/>
              </div>

              <label  class="btn btn-default pull-right"  v-on:click="queryPage(pageSize,1)"><i class="glyphicon glyphicon-search" style="color: #337ab7"></i></label>
            </div>
          </form>
        </div>


      </div>
    </div>
    <div class="row" style="margin-top: 1rem">
      <div class="col col-md-3" id="d_menu">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">党建合作社</h3>
          </div>
          <div class="panel-body">
            <ul id="myTab" class="nav nav-tabs">
              <li class="active">
                <a href="#home" data-toggle="tab" >
                  合作社信息 <i class="pull-right icon iconfont icon-youjiantou"></i>
                </a>
              </li>
               <li><a href="#map" data-toggle="tab">合作社地图<i class="pull-right icon iconfont icon-youjiantou"></i></a></li>
              <li><a href="#details" data-toggle="tab" id="detailsOnclick" style="display: none">详情</a></li>
            </ul>
          </div>
        </div>
        <div class="message" >
        </div>
      </div>
      <div class="col col-md-9" id="detail">


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
          <!--  地图开始-->
            <div class="amap-page-container" style="height:600px">
              <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
                <el-amap-marker vid="component-marker" :position="componentMarker.position" :content-render="componentMarker.contentRender" ></el-amap-marker>
                <el-amap-marker v-for="(marker, index) in markers" :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable" :vid="index"></el-amap-marker>
              </el-amap>
              <div class="toolbar">
                <!--<button type="button" name="button" v-on:click="toggleVisible">toggle first marker</button>
                <button type="button" name="button" v-on:click="changePosition">change position</button>-->
                <!--<button type="button" name="button" v-on:click="chnageDraggle">change draggle</button>-->
               <!-- <button type="button" name="button" v-on:click="addMarker">合作社</button>
                <button type="button" name="button" v-on:click="removeMarker">村小组</button>-->
              </div>
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
  var map
  import VueResource from '@/components/resource/index.js'
  Vue.use(VueResource)
  const exampleComponents = {
    props: ['text'],
    template: `<div>text from  parent: {{text}}</div>`
  }
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
        cooperationName:null,
        cooperationNameMap:null,
        totalCount: null,
        totalPage: null,
        pageSize: 15,
        curPage: 1,
        page: this.queryPage(10,1),
        count: 1,

        slotStyle: {
          padding: '2px 8px',
          background: '#eee',
          color: '#333',
          border: '1px solid #aaa'
        },
        zoom: 8,
        center: [102.778862, 24.982261],
        markers: [
          {
            position: [121.5273285, 31.21515044],
            events: {
              click: () => {
                alert('click marker');
              },
              dragend: (e) => {
                // console.log('---event---: dragend')
                this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
              }
            },
            visible: true,
            draggable: false,
            template: '<span>1</span>',
          }
        ],
        renderMarker: {
          position: [121.5273285, 31.21715058],
          contentRender: (h, instance) => {
            // if use jsx you can write in this
            // return <div style={{background: '#80cbc4', whiteSpace: 'nowrap', border: 'solid #ddd 1px', color: '#f00'}} onClick={() => ...}>marker inner text</div>
            return h(
              'div',
              {
                style: {background: '#80cbc4', whiteSpace: 'nowrap', border: 'solid #ddd 1px', color: '#f00'},
                on: {
                  click: () => {
                    const position = this.renderMarker.position;
                    this.renderMarker.position = [position[0] + 0.002, position[1] - 0.002];
                  }
                }
              },
              ['marker inner text']
            )
          }
        },
        componentMarker: {
          position: [121.5273285, 31.21315058],
          contentRender: (h, instance) => h(exampleComponents,{style: {backgroundColor: '#fff'}, props: {text: 'father is here'}}, ['xxxxxxx'])
        },
        slotMarker: {
          position: [121.5073285, 31.21715058]
        }
    }
    },
    beforeCreate(){

    },
    watch:{
      "display":function(e) {
          alert(e)
      }

    },
    created(){
     this.cooperationName=this.$route.query.cooperationName
    },
      mounted(){
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
          // console.log(response.bodyText)
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
        if(this.$route.query.cooperationName){
          var queryPage = this.$resource(VueResource.data.url+'/webIndexController/asyncQueryPageCooperation?' +
            '&pageSize='+ pageSize+
            '&curPage='+ curPage+
            '&cooperationName='+ this.$route.query.cooperationName
          )
        }
        else{
        var queryPage = this.$resource(VueResource.data.url+'/webIndexController/asyncQueryPageCooperation?' +
          'code='+ this.getLocationCode()+
          '&pageSize='+ pageSize+
          '&curPage='+ curPage+
          '&groupValue='+ this.groupValue+
          '&cooperationName='+ this.cooperationName
        )
        }
        queryPage.query().then(function (response) {
          this.page= JSON.parse(response.bodyText).result
          this.curPage=JSON.parse(response.bodyText).curPage
          this.totalCount=JSON.parse(response.bodyText).totalCount
          this.totalPage=JSON.parse(response.bodyText).totalPage
          // console.log( JSON.parse(response.bodyText).result)
          this.markers=[]
          let lon
          let lat

          for(var i=0;i<JSON.parse(response.bodyText).result.length;i++){
           lon= JSON.parse(response.bodyText).result[i].cooperationLongitude
            lat= JSON.parse(response.bodyText).result[i].cooperationLatitude
            this.cooperationNameMap=JSON.parse(response.bodyText).result[i].cooperationName
            // console.log(name)
              let marker ={
              position:[lon,lat],
                text: this.cooperationNameMap,
                events: {
                  click: function(cooperationNameMap) {
                    //点击合作社发生事件
                   // console.log(marker.text)
                   //  console.log(marker)
                    // alert(marker.text);
                    $(".message").empty()
                    $(".message").append('<h4 style="color: #337ab7">当前选择：</h4><p class="list-group-item"><strong>合作社名称：</strong>'+marker.text+'</p><p class="list-group-item"><strong>合作社精度维度：</strong>['+marker.position[0]+','+marker.position[1]+']</p>')
                  }
                },
                visible: true,
                draggable: true
              };
            this.markers.push(marker);
          }
        })
      },
      getDetils(cooperationId){
        var location = this.$resource(VueResource.data.url+'/webIndexController/getCooperationDetils?cooperationId='+cooperationId)
        location.query().then(function (response) {
          // console.log(response.bodyText)
          document.getElementById("details").innerHTML = response.bodyText;
          // console.log(document.getElementsByTagName("textarea")[0])
          for(var i=0;i<document.getElementsByTagName("textarea").length;i++){
            document.getElementsByTagName("textarea")[i].style.display="none"
          }
          //document.getElementsByTagName("textarea")[0].setAttribute("display",'none')

          // this.cooperationDetils= response.bodyText
          document.getElementById("detailsOnclick").click()
        })
      },

      onClick() {
        this.count += 1;
      },
      changePosition() {
        let position = this.markers[0].position;
        this.markers[0].position = [position[0] + 0.002, position[1] - 0.002];
      },
      chnageDraggle() {
        let draggable = this.markers[0].draggable;
        this.markers[0].draggable = !draggable;
      },
      toggleVisible() {
        let visableVar = this.markers[0].visible;
        this.markers[0].visible = !visableVar;
      },
      addMarker() {
        let marker = {
          position: [121.5273285 + (Math.random() - 0.5) * 0.02, 31.21515044 + (Math.random() - 0.5) * 0.02]
        };
        this.markers.push(marker);
      },
      removeMarker() {
        if (!this.markers.length) return;
        this.markers.splice(this.markers.length - 1, 1);
      }
      },
      //得到详情

  }
  $(function () {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      // 获取已激活的标签页的名称
      var activeTab = $(e.target).text();
      // 获取前一个激活的标签页的名称
      if(activeTab!='合作社地图'){
         $('.message').css('display','none')
      } else{
        $('.message').css('display','block')
      }
    });
  })
</script>

<style scoped>
  .info-tip {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 12px;
    background-color: #fff;
    height: 35px;
    text-align: left;
  }
  .demo-affix{
    background-color: #f1c40f;
    padding: 10px 20px;
    color: white;
    position: absolute;
    z-index: 999;
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
  .panel-default > .panel-heading{
    border-bottom: 2px solid #337ab7;
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
  .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus,.nav-tabs > li > a:hover{
    border-color: transparent;
  }
  #myTab li a{
    cursor: pointer;
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

  /*列表项标题部分样式*/
  #detail-list li .title {
    font-size: 18px;
    font-weight: 300;
  }
   .control-label{
     color: #337ab7;
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
    height: 300px;
    background: url('../../../../static/images/m33.png');
    background-size: 100%;
    background-repeat: no-repeat;
    width: 100% ;
    background-position: bottom;
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
