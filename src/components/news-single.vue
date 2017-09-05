<template lang="html">
  <div class="news-single__container">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'news-single'
    }
  },
  created: function() {
    console.log(window.location);
    console.log(this);
  }
}
</script>

<style lang="css">

.news-single__container {
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
}

.news-single__container h1 {
  font-size: 4rem;
  font-weight: 800;
  padding-top: 4rem;
  line-height: 1.2;
}

.news-single__container p {
  line-height: 1.5;
  font-weight: 100;
  color: #ccd;
}
</style>
