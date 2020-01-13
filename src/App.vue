<template>
  <div>
    <AppHeader/>
    <!-- This is where VueRouter is gonna render the components -->
    <router-view/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
</style>
