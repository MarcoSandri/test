<template>
  <main class="about">
    <CommonHero v-show="data.data" :heroText="data.data[0].attributes.hero.HeroText" :heroCover="useStrapiMedia(data.data[0].attributes.hero.HeroCover.data.attributes.url)" :sideText="data.data[0].attributes.Title"/>

    <section class="posts">
      <article v-for="(post,index) in posts" :key="index" class="t-80 font-1">
        {{ post.attributes.Title }}
        <NuxtLink :to="'/articles/' + post.attributes.slug"> Vai </NuxtLink>
      </article>
    </section>
  </main>
</template>

<script setup>

  const { locale, locales } = useI18n()
  const { find } = useStrapi()
  const { data, pending, refresh, error } = await useAsyncData(
    'pages',
    () => find('pages', {
      locale: locale.value,
      populate: ['hero', 'hero.HeroCover', 'seo'],
      filters: {
        'Template' : 'posts',
      }
    })
  )

  //Seo
  const seo = data.value.data[0].attributes.seo
  useHead({
    title: seo.metaTitle,
    meta: [
      { name: 'description', content: seo.metaDescription }
    ],
  })

</script>

<script>
export default {
  data() {
    return {
      posts: null,
    }
  },
  async mounted() {
    const pageEndpoint = useRuntimeConfig().public.cmsUrl;
    const currentLanguage = useRuntimeConfig().public.currentLang;

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
