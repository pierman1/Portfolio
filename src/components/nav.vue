<template lang="html">
  <div class="nav">
    <nav>
      <ul>
        <li v-for="item in navItems">{{item.title}}</li>
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
        {title: 'Home'},
        {title: 'About'},
        {title: 'Contact'}
      ]
    }
  }
}
</script>

<style lang="css">
</style>
