<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <table>
            <tr id="tr1">
              <td>版权所有：</td>
              <td>网站管理:</td>
              <td>备案序号：</td>
            </tr>
          </table>
          <table style="margin-top: 1rem">
            <tr id="tr2">
              <td>地址：云南省</td>
              <td>邮编：</td>
              <td>Email:</td>
              <td>电话：</td>
            </tr>
          </table>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "footers"
    }
</script>

<style scoped>
  .container-fluid {
    min-height: 100px;
    background: #212121;
    color: white;
    padding: 2rem;
    font-size: 16px;
    margin-top: 2rem;
  }
  table{
    width: 100%;
  }

  /*脚部下所有span样式*/
 #tr1 td{
   width: 33%;
 }
 #tr2 td{
   width: 25%;
 }
  .row {
    padding-left: 25%;
    padding-right: 25%;
  }
</style>
