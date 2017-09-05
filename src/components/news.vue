<template lang="html">
  <div class="news__container">
    <h1>{{title}}</h1>
    <article class="" v-for="article in articles">
      <img :src="article.urlToImage" alt="">

      <h2>{{article.title}}</h2>
      <span>{{article.author}}</span><br/>
      <span>{{article.publishedAt}}</span></br>
      <p>{{article.description}}</p>

    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'News',
      articles: []
    }
  },
  created: function() {

    this.$http.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=3a62e3766d4d4e248f10da0f7eb29e0c').then(response => {

      this.articles = response.body.articles;
      console.log(this.articles);

    }, response => {
      // error callback
    });
  }
}
</script>

<style lang="css" scoped>
  .news__container {
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
  }

  .news__container h1 {
    font-size: 4rem;
    font-weight: 800;
    padding-top: 4rem;
    line-height: 1.2;
  }

  .news__container p {
    line-height: 1.5;
    font-weight: 100;
    color: #ccd;
  }

  article {
    color: #000;
    background-color: #fff;
    padding: 1rem;
    margin: 1rem 0 2rem;
  }

  article img {
    width: 100%;
  }
</style>
