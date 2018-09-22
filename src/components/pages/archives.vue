<template>
  <div class="container" style="margin-top: 50px">
    <!--福导航横幅图片内容开始-->
    <div class="row picture">
      <h2 style="color: white;font-weight: 800;text-align: center">农村社会化公共服务平台</h2>
    </div>
    <!--横幅部分内容结束-->
    <div class="row" style="margin-top: 5rem;border-bottom: 1px dashed #337ab7">
      <div class="col col-md-3" id="d_menu">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">档案管理</h3>
          </div>
          <div class="panel-body">
            <ul id="d_menu-list">
              <li class="active">户籍档案<i
                class="pull-right icon iconfont icon-youjiantou"></i></li>
              <li>种植档案<i
                class="pull-right icon iconfont icon-youjiantou"></i></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col col-md-9" id="detail">
        <div class="panel panel-default">
          <div class="panel-heading" style="display: inline-block">
            <h3 class="panel-title pull-left" style="width: 30%;line-height: 34px;line-height: 55px">数据列表</h3>
            <form class="form-horizontal pull-right" style="width: 100%">
              <div class="form-group" style="margin-bottom: 0px">
                <div class="col col-md-12">
                <label class="col-sm-1 control-label">省</label>
                <div class="col-sm-2">
                  <select class="form-control" v-model="proviceSelect" v-on:change="getState(proviceSelect)">
                    <option v-for="item in provice" :value="item.locationId">{{item.locationName}}</option>
                    <option v-if="provice.length==0">没有更多数据！</option>
                  </select>
                </div>

                <label class="col-sm-1 control-label" >州</label>
                <div class="col-sm-2">
                  <select type="text" class="form-control" v-model="stateSelect" v-on:change="getCounty(stateSelect)">
                    <option v-for="item in state" :value="item.locationId">{{item.locationName}}</option>
                    <option v-if="state.length==0">没有更多数据！</option>

                  </select>
                </div>

                <label class="col-sm-1 control-label" >县</label>
                <div class="col-sm-2">
                  <select type="text" class="form-control" v-model="countySelect"
                          v-on:change="getCountyVillageCommittee(countySelect)">
                    <option v-for="item in county" :value="item.locationId">{{item.locationName}}</option>
                    <option v-if="county.length==0">没有更多数据！</option>
                  </select>
                </div>

                <label class="col-sm-1 control-label" >镇</label>
                <div class="col-sm-2">
                  <select type="text" class="form-control" v-model="countyVillageCommitteeSelect"
                          v-on:change="getTown(countyVillageCommitteeSelect)">
                    <option v-for="item in countyVillageCommittee" :value="item.locationId">{{item.locationName}}
                    </option>
                    <option v-if="countyVillageCommittee.length==0">没有更多数据！</option>
                  </select>
                </div>
                </div>
                <div class="col col-md-12" style="margin-top: 1rem">
                <label class="col-sm-1 control-label" style="width: 9%">村委会</label>
                <div class="col-sm-4">
                  <select type="text" class="form-control" v-model="townSelect"
                          v-on:change="getVillageGroup(townSelect)">
                    <option v-for="item in town" :value="item.locationId">{{item.locationName}}</option>
                    <option v-if="town.length==0">没有更多数据！</option>
                  </select>
                </div>

                <label class="col-sm-1 control-label" style="width: 9%">村小组</label>
                <div class="col-sm-4">
                  <select type="text" class="form-control" v-model="villageGroupSelect">
                    <option v-for="item in villageGroup" :value="item.locationId">{{item.locationName}}</option>
                    <option v-if="villageGroup.length==0">没有更多数据！</option>
                  </select>
                </div>
                  <a  class="btn btn-primary pull-right" style="margin-right: 10px">查询</a>
                </div>
              </div>
            </form>
          </div>


        </div>


      </div>
    </div>
      <div class="row">
        <div class="panel-body">
          <!--<ul id="detail-list">-->
          <!--<li class="active">-->
          <!--<span class="title">全国农药质量追溯系统生产追溯信息数据对接标准</span>-->
          <!--<p><span class="pull-left item-left">全国农药质量追溯系统生产迫溯信息数据对接标准已发布，农药生产企业上报生产数据可参照附件《全</span> <span class="pull-right item-right"> 2018-05-06</span></p>-->
          <!--</li>-->

          <!--</ul>-->
          <table class="table table-bordered" id="census">
            <thead>
            <tr>
              <th>户主名称</th>
              <th>户号</th>
              <th>是否建档立卡户</th>
              <th>户籍人数</th>
              <th>主要经济来源</th>
              <th>预计年收入</th>
              <th>备注</th>
              <th>注册日期</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in census.result">
              <td>{{item.censusName}}</td>
              <td>{{item.censusNumber}}</td>
              <td>{{item.censusBookbuilding}}</td>
              <td>{{item.censusPersions}}</td>
              <td>{{item.censusPocketbook}}</td>
              <td>{{item.censusYearInput}}</td>
              <td>{{item.censusNotes}}</td>
              <td>{{item.censusDate}}</td>
            </tr>
            </tbody>
          </table>
          <ul class="pagination pull-right">
            <li><a href="#">上一页</a></li>
            <li class="active"><a href="#">{{census.curPage}}</a></li>
            <li><select name="" id="">
              <option value="">10</option>
              <option value="">20</option>
              <option value="">50</option>
              <option value="">100</option>
            </select></li>
            <li><a href="#">下一页</a></li>
            <li><a href="#">第{{census.curPage}}/{{census.totalPage}}页</a></li>
            <li><a href="#">共{{census.totalCount}}条数据</a></li>
          </ul>
        </div>
      </div>
  </div>
  <!--主体内容部分结束-->

</template>

<script>
  import Vue from 'vue'
  import service from '@/components/service/servicemenu.vue'

  Vue.use(service)
  import VueResource from '@/components/resource/index.js'

  Vue.use(VueResource)
  export default {
    name: "archives",
    data: function () {
      return {
        proviceSelect: '',
        stateSelect: '',
        countySelect: '',
        townSelect: '',
        countyVillageCommitteeSelect: '',
        villageGroupSelect: '',
        proviceValue: '',
        provice: '',      //省
        state: '',
        county: '',               //县
        town: '',
        countyVillageCommittee: '',   //村委会
        villageGroup: '', //村小组
        id: 0 ,
        census: '', //户籍,
         isActive: true,
        curPage:'',
        totalCount:'',
        totalPage:'',
        pageSize:''
      }
    },
    watch: {
      "$route": function (e) {
        this.title = this.$route.query.menuName,
          this.menuList = this.$route.query.menuItem
      }
    },
    created() {
      this.getprovice(0);
      this.getCensus();
    },
    methods: {
      getprovice(id) {
        //flag=0
        service.methods.getAddress(this, id, 0);
      },
      getState(id) {
        //flag=1
        service.methods.getAddress(this, id, 1);
      },
      getCounty(id) {
        service.methods.getAddress(this, id, 2);
      }
      ,
      getTown(id) {
        service.methods.getAddress(this, id, 3);
      }
      ,
      getCountyVillageCommittee(id) {
        service.methods.getAddress(this, id, 4);
      },
      getVillageGroup(id) {
        service.methods.getAddress(this, id, 5);
      },
      getCensus(){
        service.methods.getCensus(this);
      }
    }
  }
  $(function () {
    $("#d_menu-list li").click(function () {
      $("#d_menu-list li").removeClass('active'),
        $(this).addClass("active")
    })
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
    /*border-bottom: 2px solid #009bc7;*/
    border-bottom: none;
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
    background: url('../../../static/images/m2.jpg');
    background-size: 100%;
    background-repeat: no-repeat;
    width: 100%
  }

</style>
