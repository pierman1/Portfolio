<template>
  <div id="app">
    <navigation>
    </navigation>
    <router-view></router-view>
  </div>

</template>

<script>
import Navigation from './components/nav';
import ShowCase from './components/showcase';

export default {
  name: 'app',
  components: {
    Navigation,
    ShowCase
  }
}
</script>

<style>

</style>
