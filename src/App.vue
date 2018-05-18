<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Footer: require('@/components/pages/footer').default,
    Header: require('@/components/pages/header').default
  }
}
</script>

<style>
#app {
  font-family: 'Microsoft YaHei';
}
</style>
