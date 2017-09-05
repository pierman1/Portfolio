<template>
  <div id="app">
    <navigation>
    </navigation>
    <router-view></router-view>
    <loader></loader>
  </div>
</template>

<script>
import Navigation from './components/nav';
import ShowCase from './components/showcase';
import Loader from './components/loader';

export default {
  name: 'app',
  components: {
    Navigation,
    ShowCase,
    Loader
  },
  created: function() {
    setTimeout(function() {
      const loader = document.querySelector('.loader__container');
      loader.classList.add('hidden');
    }, 2000)
  }
}
</script>

<style scoped>

  .hidden {
    display: none;
  }

</style>
