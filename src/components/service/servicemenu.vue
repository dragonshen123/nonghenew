
<script>
  import Vue from 'vue'
  import VueResource from '@/components/resource/index.js'
  Vue.use(VueResource)
  export default {
    name: "detils",
    methods:{
      //登录
      login(e,userPassword,userName,status,name,headPic){
        var resouce = e.$resource(VueResource.data.url+'/sysUserControler/login?userName='+userName+'&userPassword='+userPassword);
        resouce.query().then(function ( response ) {
            alert(response.data["message"])
            console.log(response.data)
            e.status = response.data['code']
            console.log("12122213"+e.status)
            localStorage.setItem("statu",e.status)
            if(response.data["code"]=='202'){
              $("#myModal").modal('hide')
              this.getUserName(e,name,headPic)
            }
          }
        )

      },
      getUserName(e,userName,headPic){
        var user = e.$resource(VueResource.data.url+'/informationController/getUser')
        user.query().then(function (response) {
          console.log('uesr:'+response.data["userName"])
          console.log('uesr:'+response.data)
          // console.log("用户信息"+response.data.t)
          e.userName = response.data["userName"]
          e.headPic =VueResource.data.url+ response.data["userPictureUri"]
          localStorage.setItem("userName",response.data["userName"])
          localStorage.setItem("headPic",VueResource.data.url+ response.data["userPictureUri"])
        })
      } ,
      /*getAddress(e,id){
        var user = e.$resource(VueResource.data.url+'/web/webIndexController/asyncGetNodes?id='+id)
        user.query().then(function (response) {
          alert(response.data)
          console.log(response.data)
        })
      }*/
      getAddress(e,id, flag){
        var _data = e.$resource(VueResource.data.url+'/webIndexController/asyncGetNodes?id='+id)
        _data.query().then(res=>{
            if(flag==0){
              e.provice = JSON.parse(res.bodyText)
            }
          if(flag==1){
            e.state=JSON.parse(res.bodyText)
          }
          if(flag==2){
              e.county=JSON.parse(res.bodyText)
            console.log(  e.county)
          }
          if(flag==3){
            e.town=JSON.parse(res.bodyText)
            console.log(e.town)
          }
          if(flag==4){
            e.countyVillageCommittee=JSON.parse(res.bodyText)
            console.log( e.countyVillageCommittee)
          }
          if(flag==5){
            e.villageGroup=JSON.parse(res.bodyText)
            console.log( e.villageGroup)
          }

        })
    } ,
      getCensus(e){
        var _data = e.$resource(VueResource.data.url+'/webIndexController/queryPageCensus')
        _data.query().then(res=>{
         console.log(res.bodyText)
            e.census = JSON.parse(res.bodyText)
        })
      }


    }
  }
</script>
