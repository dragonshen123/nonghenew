<template>
    <div class="container" id="moreDetils">
      <div class="row">
        <ul class="breadcrumb" style="margin-left: 50px">
          <li>
            <a href="/">首页</a> <span class="divider">></span>
          </li>
          <li>
            <a href="/#">{{menuName}}</a> <span class="divider">></span>
          </li>
        </ul>
      </div>
      <ul class="list">
          <router-link :to="{path:'/Detail',query: {informationId: item.informationId,informationType:item.informationType}}" v-for="(item,key) in lists">
            <li class="list-group-item" >
          <div class="media">
            <a  class="media-left">
              <img  alt="媒体对象" class="media-object " v-bind:src="pathUrl+item.informationImage">
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
          menuName:''
        }
      },
      watch:{
        "$route": function (e) {
           this.informationType = e.query.informationType
          console.log(e.query.informationType)
          this.lists = service.methods.queryPage(this, this.commentsPageSize, this.commentsCurrentPage, this.informationType)
          this.menuName = this.$route.query.menuName
        }
      },
      created() {
        this.menuName = this.$route.query.menuName
        this.lists = service.methods.queryPage(this, this.commentsPageSize, this.commentsCurrentPage, this.informationType)
      },
      methods: {
        pageQuery(e){
        this.lists= service.methods.queryPage(this,this.commentsPageSize,e.id,this.informationType)
          console.log(this.informationType)
    },
       fetchData(){
        // informationType:this.$route.query.informationType
        // this.lists= service.methods.queryPage(this,this.commentsPageSize,e.id,this.informationType)
       }
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
