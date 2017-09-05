<template lang="html">
  <div>
    <div class="news__container">


    <h1>{{title}}</h1>
    <ul>
      <li><button type="button" name="al-jazeera-english" v-on:click="switchNews('al-jazeera-english')">Al Jazeera English</button></li>
      <li><button type="button" name="ars-technica" v-on:click="switchNews('ars-technica')">Ars Technica</button></li>

      <li><button type="button" name="mtv-news" v-on:click="switchNews('mtv-news')">MTV News</button></li>

    </ul>
    </div>
    <div class="articles__container">
      <article class="" v-for="article in articles">

        <img :src="article.urlToImage" alt="">
        <h2>{{article.title}}</h2>
        <span>{{article.author}}</span>
        <span class="date">{{article.publishedAt}}</span></br>
        <!-- <p>{{article.description}}</p> -->

        <router-link class="btn" :to="{ path: '/news/' + article.title, params: { name: article.title }}">Read more</router-link>

      </article>
    </div>
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
  methods: {
    switchNews: function(platform) {
      console.log(platform);
      this.$http.get('https://newsapi.org/v1/articles?source=' + platform + '&sortBy=latest&apiKey=3a62e3766d4d4e248f10da0f7eb29e0c').then(response => {

        this.articles = response.body.articles;
        console.log(this.articles);

      }, response => {
        // error callback
      });
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

  .articles__container h2 {
    font-weight: 700;
    margin-top: .5rem;
  }

  .articles__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem;

    width: 90%;
    max-width: 900px;
    margin: 0 auto;
  }

  .articles__container > article {
    color: #000;
    background-color: #fff;
    padding: .5rem;
    margin: 1rem 0rem 1rem 0;
    width: calc(35% - 3rem);
  }

  .articles__container > article:nth-child(even) {
    /*margin: 1rem 1rem 2rem 0;*/
  }

  .articles__container > article img {
    width: 100%;
  }

  article > .btn {
    margin-top: 1rem;
    background-color: #ccc;
    font-size: 1rem;
  }

  article > span {
    font-weight: 600;
    line-height: 1.5;
  }

  .date {
    font-weight: 100;
    font-size: .875rem;
    margin-left: rem;
  }

  .date:before {
    content: '- '
  }

  button, .btn {
    background-color: yellow;
    border: none;
    font-size: 1.5rem;
    font-weight: 800;
    transition: 500ms;
  }

  button:hover, .btn:hover {
    color: yellow;
    background-color: #000;
  }

  li:nth-child(even) {
    margin-left: 1rem;
  }

  a {
    text-decoration: none;
    color: #000;
  }



</style>
