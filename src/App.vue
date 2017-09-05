<template>
  <div id="app">
    <navigation>
    </navigation>
    <router-view></router-view>
  </div>

</template>

<script>
import Navigation from './components/nav';

console.log(Navigation);
export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>

</style>
