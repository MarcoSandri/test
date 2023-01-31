<template>
  <main class="about">
    <CommonHero v-if="heroText" :heroText="heroText" :heroCover="heroCover" :sideText="title"/>

    <section class="posts">
      <article v-for="(post,index) in posts" :key="index" class="t-80 font-1">
        {{ post.attributes.Title }}
        <NuxtLink :to="'/articles/' + post.attributes.slug"> Vai </NuxtLink>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      heroText: null,
      heroCover: null,
      title: null,
      template: 'posts',
      posts: null,
    }
  },
  async mounted() {
    const pageEndpoint = useRuntimeConfig().public.cmsUrl;
    const currentLanguage = useRuntimeConfig().public.currentLang;

    fetch(`${pageEndpoint}/api/pages?filters[Template][$eq]=${this.template}&populate=*&populate=hero.HeroCover&locale=${currentLanguage}`)
    .then((response) => response.json())
    .then((data) => {
      this.heroText = data.data[0].attributes.hero.HeroText;
      this.heroCover = pageEndpoint + data.data[0].attributes.hero.HeroCover.data.attributes.url;
      this.title = data.data[0].attributes.Title
    })
    .catch((error) => {});

    fetch(`${pageEndpoint}/api/posts?sort=Featured%3ADesc`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      this.posts = data.data
    })
    .catch((error) => {});
  }
}
</script>

<style lang="scss" scoped>
.posts {
  border-top: rvw(2) solid $secondary;
  background-color: $black;
  color: $white;
}
</style>
