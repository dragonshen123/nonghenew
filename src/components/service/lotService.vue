
<script>
  import Vue from 'vue'
  import VueResource from '@/components/resource/index.js'
  Vue.use(VueResource)
  export default {
    name: "lotService",
    methods:{
      //登录
      getLocation(e,id,flag){
        var location = e.$resource(VueResource.data.url+'/web/webIndexController/asyncGetNodes?id='+0)
        location.query().then(function (response) {
          // console.log(response)
         e.provices=JSON.parse(response)
        })
      }

    }
  }
</script>
