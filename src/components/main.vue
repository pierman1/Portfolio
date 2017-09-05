<template lang="html">
  <div class="main">
    <h1>{{title}}</h1>

    <ul class="info">
      <li v-text="me.info.firstName"></li>
      <li v-text="me.info.lastName"></li>
      <li v-text="me.info.email"></li>
    </ul>

    <ul>
      <li v-for="link in me.links">
        <a :href="link.link">{{link.name}}</a>
      </li>
    </ul>

    <projects></projects>

  </div>
</template>

<script>
import Projects from './projects';

export default {
  data() {
    return {
      title: 'Home',
      me: {
        info: {
          firstName: 'Pierre',
          lastName: 'Bleeker',
          email: 'pierreb.webdesign@gmail.com'
        },
        links: [
          {name: 'Github', link: 'http://github.com'},
          {name: 'LinkedIn', link: 'http://LinkedIn.com'}
        ]
      }
    }
  },
  components: {
    Projects
  }
}
</script>

<style lang="css" scoped>
  .main {
    max-width: 800px;
    width: 90%;
    margin: 0 auto;
    padding: 2em 1em 2em 1.2em;
  }
  .info {
    margin-top: 2rem;
  }
</style>
