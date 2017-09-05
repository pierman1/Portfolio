<template lang="html">
  <ul>
    <li v-for="project in projects">

      <span>{{project.name}}</span>
      <span>{{project.content}}</span>

      <router-link :to="{ path: '/projects/' + project.name, params: { name: project.name }}">View Details</router-link></button>

    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'Antiekuitleen.nl',
          link: 'http://antiekuitleen.nl',
          screenshot: '',
          content: 'Custom Wordpress website'
        },
        {
          name: 'Obachine.nl',
          link: 'http://rijks.obachine.nl',
          screenshot: '',
          content: 'Custom Wordpress website'
        },
        {
          name: 'Robat.nl',
          link: 'http://rijks.robat.nl',
          screenshot: '',
          content: 'Custom Wordpress website'
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
