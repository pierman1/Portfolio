<template lang="html">
  <div class="showcase__container" v-on:mouseover="mouseOver">
    <ul class="showcase__container__list">
      <li v-for="project in projects">
        <router-link :to="{ path: '/projects/' + project.name, params: { name: project.name }}">
          <img :src="project.screenshot">
          <span class>{{project.name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import imageAntiek from "../assets/img/alex-blajan.jpg"
import imageObachine from "../assets/img/jakub-gorajek.jpg"
import imageRobat from "../assets/img/simon-matzinger.jpg"

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
  },
  methods: {
    mouseOver: function() {
      console.log('hover');
      const slider = document.querySelector('.showcase__container__list');
      const slides = [slider.children];
      console.log(slides);

      var i = 1;
      function myLoop () {

         setTimeout(function () {
            console.log(slides[0][i]);

            slides[0][i - 1].classList.toggle('active');

            i++;
            if (i < 4) {
               myLoop();
            }
         }, 3000)
      }

      myLoop();                      //  start the loop
    }
  }
}
</script>

<style lang="css" scoped>
  .showcase__container {
    display: flex;

  }

  .showcase__container__list li {
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    height: 300px;
    width: 60%;
    float: left;
  }

  .showcase__container__list li:first-of-type {
    height: 600px;
    width: 40%;
  }

  .showcase__container__list li:nth {
    height: 600px;
    width: 40%;
  }

  img {
    width: 140%;
  }

  .showcase__container__list li span {
    position: absolute;
    bottom: 0px;
    padding: 3rem 0 2rem 2rem;
    font-weight: 800;
  }

  a {
    color: #fff;
    transition: all 300ms;
    opacity: .5;
  }

  a:hover {
    opacity: 1;
  }

  .showcase__container .active > a {
    opacity: .8;
  }
</style>
