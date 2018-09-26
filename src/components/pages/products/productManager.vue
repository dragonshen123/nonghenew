<template>
  <div class="container" style="margin-top: 50px;padding: 0">
    <!--福导航横幅图片内容开始-->
    <div class="row picture">
      <h2 style="color: white;font-weight: 800;text-align: center">信息化生产  智能化服务</h2>
    </div>
    <!--横幅部分内容结束-->
    <div class="row" style="margin-top: 1rem">
      <div class="col col-md-3" id="d_menu">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">生产管理</h3>
          </div>
          <div class="panel-body">
            <ul id="d_menu-list">
              <a href="#data" data-toggle="tab"> <li class="active" v-on:click="getImformation(10,1,null)">全部分类<i
                class="pull-right icon iconfont icon-youjiantou"></i></li> </a>
              <a href="#data" data-toggle="tab"><li  v-on:click="getImformation(10,1,'种苗')">种苗<i
                class="pull-right icon iconfont icon-youjiantou"></i></li>  </a>
                <a href="#data" data-toggle="tab"><li v-on:click="getImformation(10,1,'标准规范')">标准规范<i
                class="pull-right icon iconfont icon-youjiantou"></i></li>  </a>
                  <a href="#data" data-toggle="tab"><li v-on:click="getImformation(10,1,'生产计划')">生产计划<i
                class="pull-right icon iconfont icon-youjiantou"></i></li>  </a>
                    <a href="#data" data-toggle="tab"><li v-on:click="getImformation(10,1,'农事管理')">农事管理<i
                class="pull-right icon iconfont icon-youjiantou"></i></li> </a>
                      <a href="#data" data-toggle="tab"><li v-on:click="getImformation(10,1,'预报预警')">预报预警<i
                class="pull-right icon iconfont icon-youjiantou"></i></li>    </a>

              <a href="#details" id="detailsOnclick" data-toggle="tab" style="display: none">详情</a>

            </ul>
          </div>
        </div>
      </div>
      <div class="col col-md-9" id="detail">
        <div class="panel panel-default">
          <div class="panel-heading" style="display: inline-block;width: 100%">

            <form class="form-horizontal pull-right" style="width: 100%">
              <div class="form-group" style="margin-bottom: 0px">
                <label class="col-sm-2 control-label" >生产管理名称</label>
                <div class="col-sm-3">
                  <input class="form-control" v-model="informationName" />

                </div>


                <label class="btn btn-default pull-right" v-on:click="getImformation(pageSize,1,null)" ><i class="glyphicon glyphicon-search" style="color: #337ab7"></i></label>
              </div>
            </form>
          </div>
          <div class="panel-body">
            <div id="myTabContent" class="tab-content">
            <div id="data" class="tab-pane fade in active">

            <table class="table table-striped" id="dataList">
              <thead>
              <tr>
                <th>生产管理标题</th>
                <th>生产管理类型</th>
                <th>生产管理时间</th>
                <th>详情</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for=" item in page">
                <td>{{item.informationTtile}}</td>
                <td>{{item.informationType}}</td>
                <td>{{item.informationDate}}</td>
                <td><a  v-on:click="getImformationDetils(item.informationId)" >详情</a></td>
              </tr>
              </tbody>
            </table>
            <ul class="pagination pull-right">
              <li><a   v-on:click="getImformation(pageSize,curPage-1,informationType)">&laquo;</a></li>
              <li class="active"><a href="#target">{{curPage}}</a></li>
              <li  ><a  v-for="itemCount in showPage" v-if="itemCount+curPage <= totalPage" v-on:click="getImformation(pageSize,itemCount+curPage,informationType)">{{itemCount+curPage}}</a></li>
              <li><a  v-on:click="getImformation(pageSize,curPage+1,informationType)">&raquo;</a></li>
            </ul>
          </div>
            <div id="details" class="tab-pane fade in" >
                dfsdf
            </div>
          </div>
          </div>
        </div>


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
    name: "productManager",
    data: function () {
      return {
        showPage:[1,2,3,4,5],
        informationName:null,
        informationType:null,
        lotValue:null,
        totalCount:null,
        totalPage:null,
        pageSize:15,
        curPage:1,
        page:null
      }
    },
    mounted(){
      $("#d_menu-list a").click(function () {
        $("#d_menu-list li").removeClass('active'),
          $(this).children('li').addClass("active")
      });
      $("#d_menu-list a li").click(function () {
        $("#d_menu-list a").find('li').removeClass('active'),
          $(this).addClass("active")
      })
    },
    created() {
      this.informationName=this.$route.query.informationTtile
      this.getImformation(10,1,null)
    },
    methods: {
   getImformation(pageSize,curPage,informationType){
     this.curPage=curPage
     this.informationType=informationType
     var location = this.$resource(VueResource.data.url+'/webIndexController/asyncQueryPageproducts?pagenum='+this.curPage+'&pageSize='+pageSize+'&flag=1&informationType='+informationType+'&informationName='+this.informationName)
     location.query().then(function (response) {
       // console.log(response.bodyText)
       this.page= JSON.parse(response.bodyText).result
       this.curPage=JSON.parse(response.bodyText).curPage
       this.totalCount=JSON.parse(response.bodyText).totalCount
       //this.pageSize=this.page.pageSize
       this.totalPage=JSON.parse(response.bodyText).totalPage
       // console.log("当前页"+this.curPage)
     })
   },
      getImformationDetils(informationId){
        var location = this.$resource(VueResource.data.url+'/webIndexController/getImformationDetils?informationId='+informationId)
        location.query().then(function (response) {
          document.getElementById("details").innerHTML = response.bodyText;
          // console.log(document.getElementsByTagName("textarea")[0])
          for(var i=0;i<document.getElementsByTagName("textarea").length;i++){
            document.getElementsByTagName("textarea")[i].style.display="none"
          }
          //this.cooperationDetils= response.bodyText
          document.getElementById("detailsOnclick").click()
        })
      }
    }
  }
  // $(function () {
  //
  // })
</script>

<style scoped>
  /****************左侧菜单标题部分样式************/
  #d_menu .panel-title {
    font-size: 30px;
    text-align: center;
    padding-left: 0;
  }
  #d_menu-list a {
    text-decoration: none;
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
    height: 300px;
    background: url('../../../../static/images/m11.png');
    background-size: 100%;
    background-repeat: no-repeat;
    width: 100%;
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
