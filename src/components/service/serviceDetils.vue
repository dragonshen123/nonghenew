
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
            e.Infromation=response.data
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
          )}
      }
    }
</script>
