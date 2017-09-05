<template lang="html">
  <div class="nav">
    <nav>
      <ul>
        <li v-for="item in navItems">
          <router-link :to="{ path: item.path }">
            {{item.title}}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data() {
    return {
      navItems: [
        {title: 'Home', path: '/'},
        {title: 'About', path: 'about'},
        {title: 'Contact', path: 'contact'}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
  ul {
    display: flex;
    justify-content: space-between;
  }
</style>
