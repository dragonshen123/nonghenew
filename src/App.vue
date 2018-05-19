<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footers></Footers>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Footers: require('@/components/pages/footers').default,
    Header: require('@/components/pages/header').default
  }
}
</script>

<style>
#app {
  font-family: '微软雅黑';
}
</style>
