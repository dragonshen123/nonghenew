<template>
  <div>
  <div class="container" style="margin-top: 50px">
    <!--福导航横幅图片内容开始-->
    <div class="row picture">
      <h2 style="color: white;font-weight: 800;text-align: center">农村社会化公共服务平台</h2>
    </div>
    <!--横幅部分内容结束-->
    <div class="row" style="margin-top: 5rem">
      <div class="col col-md-3" id="d_menu">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">合作社信息</h3>
          </div>
          <div class="panel-body">
            <ul id="myTab" class="nav nav-tabs">
              <li class="active">
                <a href="#home" data-toggle="tab" >
                  合作社信息
                </a>
              </li>
               <li><a href="#map" data-toggle="tab">地图显示</a></li>
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
                <label class="col-sm-1 control-label" >省</label>
                <div class="col-sm-2">
                  <select  class="form-control"  v-model="proviceValue" @change="getstate()" >
                    <option  v-for="item in provices"  v-bind:value="item.locationId">{{item.locationName}}</option>

                  </select>
                </div>

                <label  class="col-sm-1 control-label" style="width: 5%">州</label>
                <div class="col-sm-2">
                  <select type="text" class="form-control" v-model="statesValue" @change="getcounty()" >
                    <option v-for="state in states" v-bind:value="state.locationId">{{state.locationName}}</option>
                    <option ></option>
                  </select>
                </div>

                <label  class="col-sm-1 control-label" style="width: 5%">县</label>
                <div class="col-sm-2">
                  <select type="text" class="form-control"  v-model="countyValue" @change="gettowns()">
                    <option v-for="county in countys" v-bind:value="county.locationId">{{county.locationName}}</option>

                  </select>
                </div>

                <label  class="col-sm-1 control-label" style="width: 5%">镇</label>
                <div class="col-sm-2">
                  <select type="text" class="form-control" v-model="townValue" @change="getvillages()" >
                    <option v-for="town in towns" v-bind:value="town.locationId">{{town.locationName}}</option>

                  </select>
                </div>


                <label  class="col-sm-2 control-label" style="width: 9%">村委会</label>
                <div class="col-sm-2">
                  <select type="text" class="form-control" v-model="villageValue" @change="getgroups()">
                    <option v-for="village in villages" v-bind:value="village.locationId">{{village.locationName}}</option>

                  </select>
                </div>

                <label  class="col-sm-2 control-label" style="width: 9%">村小组</label>
                <div class="col-sm-2">
                  <select type="text" class="form-control" v-model="groupValue"  @change="getcencus()">
                    <option v-for="group in groups" v-bind:value="group.groupId">{{group.groupName}}</option>
                  </select>
                </div>
                <label  class="col-sm-2 control-label" style="width: 9%">合作社名称</label>
                <div class="col-sm-2">
                 <input name=" cooperationName" class="form-control" v-model=" cooperationName"/>
                </div>

                <label  class="col-sm-2 control-label"  v-on:click="queryPage(pageSize,1)">查询</label>
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
          <!--  地图开始-->
            <div class="amap-page-container">
              <el-amap
                vid="amapDemo"
                :center="center"
                :zoom="zoom"
                class="amap-demo">
                <el-amap-marker v-for="marker in markers" :position="marker.position" :events="marker.events"></el-amap-marker>
                <el-amap-info-window v-if="window" :position="window.position" :visible="window.visible" :content="window.content"></el-amap-info-window>
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
        zoom: 16,
        center: [121.59996, 31.197646],
        markers: [],
        windows: [],
        mymarkers:[],
        window: '',
        tmp: {
          content:null,
          position:null,
          contry:null
      },

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
            console.log(JSON.parse(response.bodyText).otherDate[i])
           this.tmp.content=JSON.parse(response.bodyText).otherDate[i].content
            this.tmp.position=JSON.parse(response.bodyText).otherDate[i].position
            this.tmp.contry=JSON.parse(response.bodyText).otherDate[i].contry
            this.mymarkers.push(this.tmp)
          }
          console.log(this.mymarkers)
        })
      },

      //得到详情
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
      }
  },

    mounted() {
      let markers = [];
      let windows = [];
      let num = 10;
      let self = this;
      console.log("执行1")
      for(let j=0;j<this.mymarkers.length;j++){
        console.log("执行2")
        markers.push({
          position: [this.mymarkers[j].position[0], this.mymarkers[j].position[1] ],
          events: {
            click() {
              self.windows.forEach(window => {
                window.visible = false;
              });

              self.window = self.windows[i];
              self.$nextTick(() => {
                self.window.visible = true;
              });
            }
          }
        });

        windows.push({
          position: [this.mymarkers[j].position[0], this.mymarkers[j].position[1] ],
          content: `<div class="prompt">fasfas</div>`,
          visible: false
        });
      }


      this.markers = markers;
      this.windows = windows;
    },





  }

</script>

<style scoped>
  .amap-demo {
    height: 300px;
  }

  .prompt {
    background: white;
    width: 100px;
    height: 30px;
    text-align: center;
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
