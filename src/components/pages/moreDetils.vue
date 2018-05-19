<template>
    <div class="container-fluid" style="margin-left:5%;margin-right:5% " id="moreDetils">
      <div class="row">
        <ul class="breadcrumb" style="margin-left: 50px">
          <li>
            <a href="/">首页</a> <span class="divider">></span>
          </li>
          <li>
            <a href="/#">政策补贴</a> <span class="divider">></span>
          </li>
        </ul>
      </div>
      <ul class="list">
          <router-link :to="{path:'/Detail',query: {informationId: item.informationId,informationType:item.informationType}}" v-for="(item,key) in lists">
            <li class="list-group-item" >
          <div class="media">
            <a  class="media-left">
              <img  alt="媒体对象" class="media-object" v-bind:src="pathUrl+item.informationImage">
            </a>
            <div class="media-body" style="padding-top: 1%;line-height: 30px;padding-left: 2%">
              <h3 class="media-heading">{{item.informationTtile}}</h3>
              <p style="padding-top: 2%" v-html="item.informationIntroduce"></p>
            </div>
          </div>
        </li>
        </router-link>
      </ul>
      <div class="button-group" style="text-align: center;margin-bottom: 10px">
        <ul class="pager">
          <li class="previous">
            <a>

              分页大小： {{commentsPageSize}}/1页</a></li>
          <li class=" next"><a v-on:click="pageQuery($event.target)"
                               v-bind:id="commentsPageTotal">尾页</a>
          </li>
          <li class=" next"><a  v-on:click="pageQuery($event.target)"
                                v-bind:id="commentsCurrentPage+1">下一页</a>
          </li>

          <li class=" next"><a
          >{{commentsCurrentPage}}/{{commentsPageTotal}}</a>
          </li>
          <li  class="next"><a  v-on:click="pageQuery($event.target)"
                                v-bind:id="commentsCurrentPage-1">上一页</a>
          </li>
          <li class="next">
            <a   v-on:click="pageQuery($event.target)"
                 v-bind:id="1">首页</a>
          </li>

        </ul>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import service from '@/components/service/serviceMoreDetils.vue'
  Vue.use(service)
  import VueResource from '@/components/resource/index.js'
  Vue.use(VueResource)
    export default {
      name: "moreDetils",
      data:function() {
        return {
          lists: '',
          pathUrl:VueResource.data.url,
          commentsPageSize:10,
          commentsCurrentPage:1,
          commentsPageTotal:0,
          informationType:this.$route.query.informationType,
          commentsCountTotal:0,
          selectValue:this.$route.query.selectValue
        }
      },
      created() {
        if(this.informationType==undefined){
          this.informationType=-1
        }
        this.lists = service.methods.queryPage(this, this.commentsPageSize, this.commentsCurrentPage, this.informationType,this.selectValue)
      },
      methods: {
        pageQuery(e){
          if(this.informationType==undefined){
            this.informationType=-1
          }
        this.lists= service.methods.queryPage(this,this.commentsPageSize,e.id,this.informationType,this.selectValue)
    },
       /* watch:{
          'informationType':{
            handler:'created',//调用方法
            immediate:true,//进入立即执行一次
          }
        },*/
  }

    }
</script>

<style scoped>
 img{
   height: 250px;
   width: 350px;
 }
  a{
    text-decoration: none;
    color: black;
  }
  p{
    text-indent: 2em;
  }
</style>
