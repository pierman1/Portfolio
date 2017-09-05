<template lang="html">
  <div class="menu__container">
    <!-- <div class="toggle" v-on:click="toggleMenu">menu</div> -->
    <nav class="menu" v-bind:class="{ active: isActive }">
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
      isActive: false,
      navItems: [
        {title: 'Home', path: '/'},
        {title: 'About', path: 'about'},
        {title: 'Contact', path: 'contact'}
      ]
    }
  },
  methods: {
    toggleMenu: function() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="css" scoped>

  .menu__container {
    background-color: #4C2DA2;
  }

  .menu__container  nav {

    display: flex;
    flex-direction: row;
    max-width: 800px;
    margin: 0 auto;
  }

  .menu__container  nav ul {
    background-color: #4C2DA2;
    display: flex;
    flex-direction: row;
  }

  .menu__container  nav ul {
    background-color: #4C2DA2;
    display: flex;
    flex-direction: row;
  }

  .menu__container  nav ul li:last-child {
    background-color: #F14B59;
    align-self: flex-end;
  }

  .menu__container  nav ul a {
    display: block;
    padding: 2em 1em 2em 1.2em;
    color: #f3efe0;
    font-weight: 800;
    font-size: .85rem;
    text-transform: uppercase;
    text-decoration: none;
    -webkit-transition: background 0.3s, box-shadow 0.3s;
    transition: background 0.3s, box-shadow 0.3s;
  }



  /*.menu__container ul li:first-child a {
    box-shadow: inset 0 -1px rgba(0,0,0,0.2), inset 0 1px rgba(0,0,0,0.2);
  }*/

</style>
