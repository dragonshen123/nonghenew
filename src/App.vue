<template>
  <div id="app">
    <Headers></Headers>
    <div id="bodys">
    <router-view/>
    </div>
    <Footers></Footers>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Footers: require('@/components/pages/footers').default,
    Headers: require('@/components/pages/headers').default
  }
}
</script>

<style>
#app {
  font-family: '微软雅黑';
  min-width: 800px;

}
#bodys{
  min-height: 900px;
}
 *{
   padding: 0;
   margin: 0;
 }
 .row {
   padding: 0;
   margin: 0;
 }
[v-cloak] {
  display: none;
}
p,h2,h1,h3,h4,h5{
  white-space: pre-wrap
}
</style>
