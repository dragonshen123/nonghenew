
<script>
  import Vue from 'vue'
  import VueResource from '@/components/resource/index.js'
   Vue.use(VueResource)
    export default {
        name: "detils",
      methods:{
         queryDetils(e,informationId){
          var resouce = e.$resource(VueResource.data.url+'/informationController/getDetils?informationId='+informationId);
          resouce.query().then(function ( response ) {
            e.infromation=response.data
          });
        },
        queryImages(e,informationId){
          var resouce = e.$resource(VueResource.data.url+'/informationController/getDetilsImages?informationId='+informationId);
          resouce.query().then(function ( response ) {
            e.images=response.data
            console.log(e.images)
          });
        },
        correlationQuery(e,informationType){
          var resouce = e.$resource(VueResource.data.url+'/informationController/getJsonDate?informationType='+informationType);
          resouce.query().then(function ( response ) {
          e.correlation=response.data
           }
          )
         },
        comment(e,informationId){
          var resouce = e.$resource(VueResource.data.url+'/informationController/getReply?informationId='+informationId);
          resouce.query().then(function ( response ) {
              e.comments=response.data
            }
          )
        },
        checkUserLoin(e){
          var resouce = e.$resource(VueResource.data.url+'/informationController/checkUserLoin');
           resouce.query().then(function ( response ) {
           e.message=response.data
             console.log( response.data)
             console.log( e.message)
            }
          )
        },
        //回复内容
        reply(e,informationId,replyContentTmp){
          var resouce = e.$resource(VueResource.data.url+'/informationController/reply?informationId='+informationId+'&replyContent='+replyContentTmp);
          resouce.query().then(function ( response ) {
             e.comments=response.data

            }
          )
        },
        //登录
        login(e,userPassword,userName){
          var resouce = e.$resource(VueResource.data.url+'/sysUserControler/login?userName='+userName+'&userPassword='+userPassword);
          resouce.query().then(function ( response ) {
            alert( response.data.message)
            }
          )
        }
      }
    }
</script>
