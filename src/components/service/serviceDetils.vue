
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
            // console.log(e.images)
          });
        },
        correlationQuery(e,informationType){
          var resouce = e.$resource(VueResource.data.url+'/informationController/getJsonDate?informationType='+informationType);
          resouce.query().then(function ( response ) {
          e.correlation=response.data
           }
          )
         },
        comment(e,informationId, pageSzie, currentPage){
          var resouce = e.$resource(VueResource.data.url+'/informationController/getReply?informationId='+informationId+'&pageSzie='+pageSzie+'&currentPage='+currentPage);
          resouce.query().then(function ( response ) {
            e.comments=response.data.result
            e.commentsPageSize=response.data.pageSize
            e. commentsCurrentPage=response.data.curPage
            e.commentsPageTotal=response.data.totalPage
            e.commentsCountTotal=response.data.totalCount
            }
          )
        },
        checkUserLoin(e){
          var resouce = e.$resource(VueResource.data.url+'/informationController/checkUserLoin');
           resouce.query().then(function ( response ) {
           e.message=response.data
             // console.log( response.data)
             // console.log( e.message)
             if (response.data==0){
             $('#myModal').modal('show')
             }
            }
          )
        },
        //回复内容
        reply(e,informationId,replyContentTmp, pageSzie, currentPage,selectvalue){
          var resouce = e.$resource(VueResource.data.url+'/informationController/reply?informationId='+informationId+'&replyContent='+replyContentTmp+'&pageSzie='+pageSzie+'&currentPage='+currentPage+"&selectvalue="+selectvalue);
          resouce.query().then(function ( response ) {
             e.comments=response.data.result
            e.commentsPageSize=response.data.pageSize
              e. commentsCurrentPage=response.data.curPage
              e.commentsPageTotal=response.data.totalPage
              e.commentsCountTotal=response.data.totalCount
            }
          )
        },
        //登录
        login(e,userPassword,userName,status,name,headPic){
          var resouce = e.$resource(VueResource.data.url+'/sysUserControler/login?userName='+userName+'&userPassword='+userPassword);
          resouce.query().then(function ( response ) {
           alert(response.data["message"])
            // console.log(response.data)
            e.status = response.data['code']
            // console.log("12122213"+e.status)
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
             // console.log('uesr:'+response.data["userName"])
           // console.log('uesr:'+response.data)
           // console.log("用户信息"+response.data.t)
         e.userName = response.data["userName"]
          e.headPic =VueResource.data.url+ response.data["userPictureUri"]
           localStorage.setItem("userName",response.data["userName"])
          localStorage.setItem("headPic",VueResource.data.url+ response.data["userPictureUri"])
         })
         },
        getAddress(e,id){
          var user = e.$resource(VueResource.data.url+'/webIndexController/asyncGetNodes?id='+0)
          user.query().then(function (response) {

            // console.log('uesr:'+response.bodyText)

          })
        }
      }
    }
</script>
