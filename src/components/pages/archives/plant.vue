<template>

  <div class="panel panel-default">
    <div class="panel-heading" style="display: inline-block">
      <form class="form-horizontal pull-right" style="width: 100%">
        <div class="form-group" style="margin-bottom: 0px">
          <div class="col col-md-12">
            <label class="col-sm-1 control-label">省</label>
            <div class="col-sm-2">
              <select class="form-control" v-model="proviceSelect" v-on:change="getState(proviceSelect)">
                <option v-for="item in provice" :value="item.locationId">{{item.locationName}}</option>
                <option v-if="provice.length==0" disabled>没有更多数据！</option>
              </select>
            </div>

            <label class="col-sm-1 control-label" >州</label>
            <div class="col-sm-2">
              <select type="text" class="form-control" v-model="stateSelect" v-on:change="getCounty(stateSelect)">
                <option v-for="item in state" :value="item.locationId">{{item.locationName}}</option>
                <option v-if="state.length==0" disabled>没有更多数据！</option>

              </select>
            </div>

            <label class="col-sm-1 control-label" >县</label>
            <div class="col-sm-2">
              <select type="text" class="form-control" v-model="countySelect"
                      v-on:change="getCountyVillageCommittee(countySelect)">
                <option v-for="item in county" :value="item.locationId">{{item.locationName}}</option>
                <option v-if="county.length==0" disabled>没有更多数据！</option>
              </select>
            </div>

            <label class="col-sm-1 control-label" >镇</label>
            <div class="col-sm-2" style="padding-right: 0">
              <select type="text" class="form-control" v-model="countyVillageCommitteeSelect"
                      v-on:change="getTown(countyVillageCommitteeSelect)">
                <option v-for="item in countyVillageCommittee" :value="item.locationId">{{item.locationName}}
                </option>
                <option v-if="countyVillageCommittee.length==0" disabled>没有更多数据！</option>
              </select>
            </div>
          </div>
          <div class="col col-md-12" style="margin-top: 1rem">
            <label class="col-sm-1 control-label" style="width: 10%">村委会</label>
            <div class="col-sm-2">
              <select type="text" class="form-control" v-model="townSelect"
                      v-on:change="getVillageGroup(townSelect)">
                <option v-for="item in town" :value="item.locationId">{{item.locationName}}</option>
                <option v-if="town.length==0" disabled>没有更多数据！</option>
              </select>
            </div>

            <label class="col-sm-1 control-label" style="width: 10%">村小组</label>
            <div class="col-sm-2">
              <select type="text" class="form-control" v-model="villageGroupSelect"   v-on:change="getPersonal(villageGroupSelect)">
                <option v-for="item in villageGroup" :value="item.groupId">{{item.groupName}}</option>
                <option v-if="villageGroup.length==0" disabled>没有更多数据！</option>
              </select>
            </div>
            <label class="col-sm-1 control-label" style="width: 10%">户</label>
            <div class="col-sm-2">
              <select type="text" class="form-control" v-model="personalSelect">
                <option v-for="item in personal.result" :value="item.censusId">{{item.censusName}}</option>
                <option v-if="personal.length==0" disabled>没有更多数据！</option>
              </select>
            </div>
            <label  class="btn btn-default pull-right" style="color: #337ab7"  v-on:click="queryPage(pageSize,1)"><i class="glyphicon glyphicon-search"></i></label>
          </div>
        </div>
      </form>
    </div>

    <div class="panel-body">
      <!--<ul id="detail-list">-->
      <!--<li class="active">-->
      <!--<span class="title">全国农药质量追溯系统生产追溯信息数据对接标准</span>-->
      <!--<p><span class="pull-left item-left">全国农药质量追溯系统生产迫溯信息数据对接标准已发布，农药生产企业上报生产数据可参照附件《全</span> <span class="pull-right item-right"> 2018-05-06</span></p>-->
      <!--</li>-->

      <!--</ul>-->
      <table class="table table-bordered" id="plant">
        <thead>
        <tr>
          <th>记录名称</th>
          <th>种植地块</th>
          <th>种植作物</th>
          <th>开始时间</th>
          <th>种植备注</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in plant.result">
          <td>{{item.plantingName}}</td>
          <td>{{item.lotName}}</td>
          <td>{{item.cropsName}}</td>
          <td>{{item.plantingStartDate}}</td>
          <td>{{item.plantingEndDate}}</td>

        </tr>
        </tbody>
      </table>
      <ul class="pagination pull-right">
        <li><a   v-on:click="queryPage(pageSize,curPage-1)">&laquo;</a></li>
        <li class="active"><a href="#">{{curPage}}</a></li>
        <li  ><a  v-for="itemCount in showPage" v-if="itemCount+curPage <= totalPage" v-on:click="queryPage(pageSize,itemCount+curPage)">{{itemCount+curPage}}</a></li>
        <li><a  v-on:click="queryPage(pageSize,curPage+1)">&raquo;</a></li>
      </ul>
    </div>
  </div>



</template>

<script>
  import Vue from 'vue'
  import service from '@/components/service/servicearchives.vue'

  Vue.use(service)
  import VueResource from '@/components/resource/index.js'

  Vue.use(VueResource)
  export default {
    name: "plant",
    data: function () {
      return {
        personal:'',
        personalSelect: null,
        showPage:[1,2,3,4,5],
        proviceSelect: null,
        stateSelect: null,
        countySelect: null,
        townSelect: null,
        countyVillageCommitteeSelect: null,
        villageGroupSelect: null,
        stateSelect: null,
        provice: '',      //省
        state: '',
        county: '',               //县
        town: '',
        countyVillageCommittee: '',   //村委会
        villageGroup: '', //村小组
        id: 0 ,
        plant: '', //户籍,
        isActive: true,
        totalCount:null,
        totalPage:null,
        pageSize:15,
        curPage:1,
        page:null
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
      this.getplant();
    },
    methods: {
      //联动查询
      getprovice(id) {
        //flag=0
        service.methods.getAddress(this, id, 0,'id','asyncGetNodes');
      },
      getState(id) {
        //flag=1
        service.methods.getAddress(this, id, 1,'id','asyncGetNodes');
      },
      getCounty(id) {
        service.methods.getAddress(this, id, 2,'id','asyncGetNodes');
      }
      ,
      getTown(id) {
        service.methods.getAddress(this, id, 3,'id','asyncGetNodes');
      }
      ,
      getCountyVillageCommittee(id) {
        service.methods.getAddress(this, id, 4,'id','asyncGetNodes');
      },
      getVillageGroup(id) {
        service.methods.getAddress(this, id, 5,'locationCode','asyncGetgroup');
      },
      getPersonal(id) {
        service.methods.getAddress(this, id, 6,'id','queryPageCensus');
      },
      getplant(){
        service.methods.getPlantingRecords(this);
      },
      getLocationCode:function(){
        if(this.personalSelect!=null){
          return this.personalSelect
          alert(this.personalSelect)
        } else if(this.villageGroupSelect!=null){
          return this.villageGroupSelect
          alert(this.villageGroupSelect)
        }else if(this.countyVillageCommitteeSelect!=null){
          return this.countyVillageCommitteeSelect
          alert(this.countyVillageCommitteeSelect)
        }else if(this.townSelect!=null){
          return this.townSelect
          alert(this.townSelect)
        }else if(this.countySelect!=null){
          return this.countySelect
          alert(this.countySelect)
        }else if(this.stateSelect!=null){
          return this.stateSelect
          alert(this.stateSelect)
        }else if(this.proviceSelect!=null){
          return this.proviceSelect
          alert(this.proviceSelect)
        }
      },
      queryPage:function(pageSize,curPage){
        var queryPage = this.$resource(VueResource.data.url+'/webIndexController/queryPageplantingrecord?' +
          'locationCode='+ this.getLocationCode()+
          '&pageSize='+ pageSize+
          '&curPage='+ curPage
        )
        queryPage.query().then(function (response) {
          console.log(response.bodyText)
          this.plant= JSON.parse(response.bodyText)
          console.log("查询结果"+response.bodyText)
          this.curPage=JSON.parse(response.bodyText).curPage
          this.totalCount=JSON.parse(response.bodyText).totalCount
          //this.pageSize=this.page.pageSize
          this.totalPage=JSON.parse(response.bodyText).totalPage
          console.log("当前页"+this.curPage)
          console.log("地区ID值："+this.getLocationCode())
        })
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
