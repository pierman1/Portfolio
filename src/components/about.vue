<template lang="html">

  <div class="about__container">
    <div class="">
      <h1>{{title}}</h1>
      <p>{{content}}</p>
    </div>
    <div class="">

    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      title: 'About',
      content: 'Found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. '
    }
  }
}
</script>

<style lang="css">

.about__container {
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
}

.about__container h1 {
  font-size: 2rem;
}

.about__container p {
  line-height: 1.5;
  font-weight: 100;
}

</style>
