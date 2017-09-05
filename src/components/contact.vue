<template lang="html">
  <div class="contact__container">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Contact'
    }
  }
}
</script>

<style lang="css" scoped>
.contact__container {
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
}

.contact__container h1 {
  font-size: 4rem;
  font-weight: 800;
  padding-top: 4rem;
  line-height: 1.2;
}

.contact__container p {
  line-height: 1.5;
  font-weight: 100;
}
</style>
