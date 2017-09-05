<template lang="html">
  <slider class="slider" animation="fade" :control-btn="false" :interval="8000" :indicators="'right'" :speed="100" height="350px">
  <slider-item class="slide" v-for="(i, index) in list" :key="index" >
    <div :style="i">
      <p>{{i.content}}</p>
    </div>
  </slider-item>
</slider>
</template>

<script>

import { Slider, SliderItem } from 'vue-easy-slider'

export default {
  data () {
    return {
      list: [
        { content: 'Recognizing the need is the primary condition for design.', backgroundColor: '', width: '100%', height: '100%' },
        { content: 'Good design is obvious. Great design is transparent.', backgroundColor: '', width: '100%', height: '100%' },
        { content: 'Styles come and go. Good design is a language, not a style.', backgroundColor: '', width: '100%', height: '100%' },
      ],
    }
  },
  created: function() {

  },
  components: {
    Slider,
    SliderItem
  }
}

</script>

<style lang="css">
  .slider {
    max-width: 800px;
    width: 90%;
    margin: 2rem auto 2rem auto;

  }
  .slider p {
    font-size: 4rem;
    font-weight: 800;
    padding-top: 1rem;
    line-height: 1.2;
  }
  .slider span.slider-indicator-icon {
    border-radius: 0px !important;
  }

  .slider span.slider-indicator-icon-active {
    background-color: #FF9800 !important;
  }

  .slider .indi-right {
    right: 0;
  }
</style>
