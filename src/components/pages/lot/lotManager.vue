<template>
  <div class="container" style="margin-top: 50px;padding: 0">
    <!--福导航横幅图片内容开始-->
    <div class="row" id="picture">
      <h2 style="color: #337ab7;font-weight: 800;text-align: center">对土地便捷化的管理</h2>
    </div>
    <!--横幅部分内容结束-->
    <div class="row" style="margin-top: 1rem">

      <div class="col " id="detail">
        <div class="panel panel-default" style="margin-bottom: 0">
          <div class="panel-heading" style="display: inline-block;width: 100%;padding-left: 0;padding-right: 0;margin-bottom:0 ">
            <form class="form-horizontal pull-right" style="width: 100%;margin-left: 0;margin-right: 0">
              <div class="form-group" style="margin-bottom: 0px;margin-right: 0;margin-left: 0">
                  <label class="col-sm-1 control-label" style="width: 1%">省</label>
                  <div class="col-sm-2" style="width: 9%">
                    <select class="form-control" v-model="proviceValue" @change="getstate()">
                      <option v-for="item in provices" v-bind:value="item.locationId">{{item.locationName}}</option>

                    </select>
                  </div>

                  <label class="col-sm-1 control-label" style="width: 1%">州</label>
                  <div class="col-sm-2" style="width: 9%">
                    <select type="text" class="form-control" v-model="statesValue" @change="getcounty()">
                      <option v-for="state in states" v-bind:value="state.locationId">{{state.locationName}}</option>
                      <option></option>
                    </select>
                  </div>

                  <label class="col-sm-1 control-label" style="width: 1%">县</label>
                  <div class="col-sm-2" style="width: 9%">
                    <select type="text" class="form-control" v-model="countyValue" @change="gettowns()">
                      <option v-for="county in countys" v-bind:value="county.locationId">{{county.locationName}}
                      </option>

                    </select>
                  </div>

                  <label class="col-sm-1 control-label" style="width: 1%">镇</label>
                  <div class="col-sm-2" style="width: 9%">
                    <select type="text" class="form-control" v-model="townValue" @change="getvillages()">
                      <option v-for="town in towns" v-bind:value="town.locationId">{{town.locationName}}</option>

                    </select>
                  </div>


                  <label class="col-sm-1 control-label" style="width: 5%">村委会</label>
                  <div class="col-sm-2" style="width: 9%">
                    <select type="text" class="form-control" v-model="villageValue" @change="getgroups()">
                      <option v-for="village in villages" v-bind:value="village.locationId">{{village.locationName}}
                      </option>

                    </select>
                  </div>

                  <label class="col-sm-1 control-label" style="width: 5%">村小组</label>
                  <div class="col-sm-2" style="width: 9%">
                    <select type="text" class="form-control" v-model="groupValue" @change="getcencus()">
                      <option v-for="group in groups" v-bind:value="group.groupId">{{group.groupName}}</option>

                    </select>
                  </div>

                  <label class="col-sm-1 control-label" style="width: 4%">户主</label>
                  <div class="col-sm-2" style="width: 9%">
                    <select type="text" class="form-control" v-model="cencuValue" @change="getlots()">
                      <option v-for="cencu in cencus" v-bind:value="cencu.censusId">{{cencu.censusName}}</option>

                    </select>
                  </div>

                  <label class="col-sm-1 control-label" style="width: 4%">地块</label>
                  <div class="col-sm-2"style="width: 9%">
                    <select type="text" class="form-control" v-model="lotValue" @change="getlots()">
                      <option v-for="lot in lots" v-bind:value="lot.lotId">{{lot.lotName}}</option>
                    </select>
                  </div>

                  <label class="btn btn-default pull-right" v-on:click="queryPage(pageSize,1)"><i
                    class="glyphicon glyphicon-search" style="color: #337ab7"></i></label>
              </div>
            </form>
          </div>


        </div>

        <div class="panel-body">
          <table class="table table-bordered col col-md-15" id="dataList">
            <thead>
            <tr>
              <th>地块名称</th>
              <th>地块面积</th>
              <th>单位</th>
              <th>地块属性</th>
              <th>日期</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="pageitem in page">
              <td>{{pageitem.lotName}}</td>
              <td>{{pageitem.lotArea}}</td>
              <td>{{pageitem.lotUnit}}</td>
              <td>{{pageitem.lotAttribute}}</td>
              <td>{{pageitem.lotDate}}</td>
            </tr>
            </tbody>
          </table>
          <ul class="pagination pull-right">
            <li><a v-on:click="queryPage(pageSize,curPage-1)">&laquo;</a></li>
            <li class="active"><a href="#">{{curPage}}</a></li>
            <li><a v-for="itemCount in showPage" v-if="itemCount+curPage <= totalPage"
                   v-on:click="queryPage(pageSize,itemCount+curPage)">{{itemCount+curPage}}</a></li>
            <li><a v-on:click="queryPage(pageSize,curPage+1)">&raquo;</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!--主体内容部分结束-->

</template>

<script>
  import Vue from 'vue'
  import lotService from '@/components/service/lotService.vue'

  Vue.use(lotService)
  import VueResource from '@/components/resource/index.js'

  Vue.use(VueResource)
  export default {
    name: "lotManager",
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
        cencus: null,//户籍
        cencuValue: null,
        lots: null,//地块
        lotValue: null,
        totalCount: null,
        totalPage: null,
        pageSize: 15,
        curPage: 1,
        page: null
      }

    },
    watch: {},
    created() {
      this.queryPage(15, 1)
    },
    methods: {
      getLocation: function (id, flag) {
        var location = this.$resource(VueResource.data.url + '/webIndexController/asyncGetNodes?id=' + id)
        location.query().then(function (response) {
          // console.log(response.bodyText)
          if (flag == 0) {
            this.provices = JSON.parse(response.bodyText)
          }
          if (flag == 1) {
            this.states = JSON.parse(response.bodyText)
          }
          if (flag == 2) {
            this.countys = JSON.parse(response.bodyText)
          }
          if (flag == 3) {
            this.towns = JSON.parse(response.bodyText)
          }
          if (flag == 4) {
            this.villages = JSON.parse(response.bodyText)
          }
          if (flag == 5) {
            this.groups = JSON.parse(response.bodyText)
          }
        })
      },
      getstate: function () {
        this.getLocation(this.proviceValue, 1)
      },
      getcounty: function () {
        this.getLocation(this.statesValue, 2)
      },
      gettowns: function () {
        this.getLocation(this.countyValue, 3)
      },
      getvillages: function () {
        this.getLocation(this.townValue, 4)
      },
      getgroups: function () {
        var location = this.$resource(VueResource.data.url + '/webIndexController/asyncGetgroup?locationCode=' + this.villageValue)
        location.query().then(function (response) {
          // console.log(response.bodyText)
          this.groups = JSON.parse(response.bodyText)
        })
      },
      //获取户籍asyncGetCenes
      getcencus: function () {
        var location = this.$resource(VueResource.data.url + '/webIndexController/asyncGetCenes?id=' + this.groupValue)
        location.query().then(function (response) {
          // console.log(response.bodyText)
          this.cencus = JSON.parse(response.bodyText)
        })
      },
      //
      getlots: function () {
        var location = this.$resource(VueResource.data.url + '/webIndexController/asyncGetlots?id=' + this.cencuValue)
        location.query().then(function (response) {
          // console.log(response.bodyText)
          this.lots = JSON.parse(response.bodyText)
        })
      },

      getLocationCode: function () {
        if (this.villageValue != null) {
          return this.villageValue
        } else if (this.townValue != null) {
          return this.townValue
        } else if (this.countyValue != null) {
          return this.countyValue
        } else if (this.statesValue != null) {
          return this.statesValue
        } else if (this.proviceValue != null) {
          return this.proviceValue
        }
      },
      queryPage: function (pageSize, curPage) {
        if(this.$route.query.lotId){
          var queryPage = this.$resource(VueResource.data.url + '/webIndexController/queryPagelot?' +
            '&pageSize=' + pageSize +
            '&curPage=' + curPage +
            '&lotValue=' + this.$route.query.lotId
          )
        }
        else{
        var queryPage = this.$resource(VueResource.data.url + '/webIndexController/queryPagelot?' +
          'locationCode=' + this.getLocationCode() +
          '&pageSize=' + pageSize +
          '&curPage=' + curPage +
          '&groupValue=' + this.groupValue +
          '&cencuValue=' + this.cencuValue +
          '&lotValue=' + this.lotValue
        )}
        queryPage.query().then(function (response) {
          // console.log(response.bodyText)
          this.page = JSON.parse(response.bodyText).result
          this.curPage = JSON.parse(response.bodyText).curPage
          this.totalCount = JSON.parse(response.bodyText).totalCount
          //this.pageSize=this.page.pageSize
          this.totalPage = JSON.parse(response.bodyText).totalPage
          // console.log("当前页" + this.curPage)
        })
      }
    }
  }
</script>

<style scoped>
  #picture {
    height: 300px;
    background: url('../../../../static/images/m22.png');
    background-size: 100%;
    background-repeat: no-repeat;
    width: 100%;
    background-position: center;
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

  .control-label{
    padding-left: 0;
    padding-right: 0;
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
  #picture h2{
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
