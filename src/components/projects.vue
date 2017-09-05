<template lang="html">
  <div class="projects container">
    <ul>
      <li v-for="project in projects">

        <router-link :to="{ path: '/projects/' + project.name, params: { name: project.name }}">

          <img :src="project.screenshot">
          <span class="project__title">{{project.name}}</span>
          <span>{{project.content}}</span>

        </router-link>

      </li>
    </ul>
  </div>
</template>

<script>
import imageAntiek from "../assets/img/antiekuitleen.png"
import imageObachine from "../assets/img/obachine.png"
import imageRobat from "../assets/img/robat.png"

export default {
  data() {
    return {
      projects: [
        {
          name: 'Antiekuitleen.nl',
          link: 'http://antiekuitleen.nl',
          screenshot: imageAntiek,
          content: 'Custom Wordpress website'
        },
        {
          name: 'Obachine.nl',
          link: 'http://rijks.obachine.nl',
          screenshot: imageObachine,
          content: 'Custom Wordpress website'
        },
        {
          name: 'Robat.nl',
          link: 'http://rijks.robat.nl',
          screenshot: imageRobat,
          content: 'Custom Wordpress website'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>

  .projects {
    max-width: 700px;
  }

  .project__title {
    font-weight: 700;
  }

  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  ul li {
    background: #FFF;
    position: relative;
    text-shadow: none;
    padding: 0;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 0px rgba(39,49,65,0.1);
    display: flex;
    flex-direction: column;
    /*width: calc(50% - 2rem);*/
    margin-bottom: 2rem;
  }

  ul a li:nth-child(odd) {
    margin-right: 1rem;
  }

  ul li a span:nth-child(0) {
    font-weight: 700;
  }

  ul li a > span {
    padding-left: 1rem;
    margin-bottom: .5em;
    display: block;
  }

  a {
    width: 100%;
    text-decoration: none;
    color: #ccd;
  }

  img {
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 4px 4px 0 0;
  }

</style>
